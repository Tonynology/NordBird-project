const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

const { Post, Image, Comment, User, Hashtag } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

try{
    fs.accessSync('uploads');
}catch (error) {
    console.log('Since uploads folder is not exist, create new one.')
    fs.mkdirSync('uploads');
}

AWS.config.update({
   accessKeyId: process.env.S3_ACCESS_KEY_ID,
   secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
   region: 'us-west-2', 
});

//postForm에서 이미지는 encType="multipart/form-data" 형식으로 가는데 서버에서는 (app.js) 그냥form만 받고있으니 multer를 사용.
//app.js에다가 하면 모든 라우터에 공통 적용 되기 때문에, multer는 라우더마다 별도의 세팅을 한다. 
const upload = multer({
    storage: 
    multerS3({
        s3: new AWS.S3(),
        bucket: 'react-blueboard-s3',
        key(req, file, cb) {
            cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`)
        }
    }),
    
    // multer.diskStorage({
    //     destination(req, file, done) {
    //         done(null, 'uploads');
    //     },
    //     //파일명 뒤에 업로드 시간을 붙여줘서 같은 이미지를 올렸을때 발생하는 문제를 방지
    //     filename(req, file, done) { //tony.png            
    //         const ext = path.extname(file.originalname);    //확장자 추출(.png)
    //         const basename = path.basename(file.originalname, ext); //tony
    //         done(null, basename + '_' + new Data().getTime() + ext); //tony1451235.png
    //     }
    // }),
    limits: { fileSize: 20 * 1024 * 1024 }, //20MB
});

router.post('/', isLoggedIn, upload.none(), async (req, res, next) => {  //POST / post
    try {
        const hashtags = req.body.content.match(/#[^\s#]+/g);
        const post = await Post.create({
            content: req.body.content,
            UserId: req.user.id,
        });
        if (hashtags) {
            const result = await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({ 
                where: { name: tag.slice(1).toLowerCase() },
            })));   //result = [[노드, true], [리액트, true]]
            await post.addHashtags(result.map((v) => v[0]));
        }
        if (req.body.image) {
            if (Array.isArray(req.body.image)) {    //이미지를 여러개 올리면 image: [tony.png, moon.png] 배열로 올라옴
                const images = await Promise.all(req.body.image.map((image) => Image.create({ src: image })));
                await post.addImages(images);
            } else {    //이미지를 하나만 올리면 image: tony.png
                const image = await Image.create({ src: req.body.image });
                await post.addImages(image);
            }
        }
        const fullPost = await Post.findOne({
            where: { id: post.id },
            include: [{
                model: Image,
            }, {
                model: Comment,
                include: [{
                    model: User,    //댓글 작성자
                    attributes: ['id', 'nickname'],
                }],
            }, {
                model: User,    //게시글 작성자
                attributes: ['id', 'nickname'],
            }, {
                model: User,    // 좋아요 누른 사람
                as: 'Likers',
                attributes: ['id'],
            }]
        })
        res.status(201).json(fullPost);
    } catch (error) {
        console.error(error);
        next(error);
    }    
});


//upload.array는 여러장 올릴때. .single은 한장 올릴때, .none은 text만 있을때
router.post('/images', isLoggedIn, upload.array('image'), (req, res, next) => {  //POST /post/images
    console.log(req.files);
    res.json(req.files.map((v) => v.location.replace(/\/original\//, '/thumb/')));
});

router.get('/:postId', async (req, res, next) => {  //GET /post/1
    try {
        const post = await Post.findOne({
            where: { id: req.params.postId },
        });
        if (!post) {
            return res.status(404).send('post is not exist');
        }
        if (req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)) {
            return res.status(403).send("You can't retweet your post!");
        }
        const fullPost = await Post.findOne({
            where: { id: post.id },
            include: [{
                model: Post,
                as: 'Retweet',
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }, {
                    model: Image,
                }]
            }, {
                model: User,
                attributes: ['id', 'nickname'],
            }, {
                model: User,
                as: 'Likers',
                attributes: ['id', 'nickname'],
            }, {
                model: Image,
            }, {
                model: Comment,
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }]
            }, {
                model: User,
                as: 'Likers',
                attributes: ['id'],
            }]
        })
        res.status(200).json(fullPost);
    } catch (error) {
        console.error(error);
        next(error);
    }    
});

router.post('/:postId/retweet', isLoggedIn, async (req, res, next) => {  //POST /post/1/comment
    try {
        const post = await Post.findOne({
            where: { id: req.params.postId },
            include: [{
                model: Post,
                as: 'Retweet',
            }],
        });
        if (!post) {
            return res.status(403).send('post is not exist');
        }
        if (req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)) {
            return res.status(403).send("You can't retweet your post!");
        }
        const retweetTargetId = post.RetweetId || post.id;
        const exPost = await Post.findOne({
            where: {
                UserId: req.user.id,
                RetweetId: retweetTargetId,
            },
        });
        if (exPost) {
            return res.status(403).send('You already retweet');
        }
        const retweet = await Post.create({
            UserId: req.user.id,
            RetweetId: retweetTargetId,
            content: 'retweet',
        });
        const retweetWithPrevPost = await Post.findOne({
            where: { id: retweet.id },
            include: [{
                model: Post,
                as: 'Retweet',
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }, {
                    model: Image,
                }]
            }, {
                model: User,
                attributes: ['id', 'nickname'],
            }, {
                model: User, // 좋아요 누른 사람
                as: 'Likers',
                attributes: ['id'],
            }, {
                model: Image,
            }, {
                model: Comment,
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }]
            }, {
                model: User,
                as: 'Likers',
                attributes: ['id'],
            }]
        })
        res.status(201).json(retweetWithPrevPost);
    } catch (error) {
        console.error(error);
        next(error);
    }    
});


router.post('/:postId/comment', isLoggedIn, async (req, res, next) => {  //POST /post/1/comment
    try {
        const post = await Post.findOne({
            where: { id: req.params.postId },
        });
        if (!post) {
            return res.status(403).send('post is not exist');
        }
        const comment = await Comment.create({
            content: req.body.content,
            PostId: parseInt(req.params.postId, 10),
            UserId: req.user.id,
        })
        const fullComment = await Comment.findOne({
            where: { id: comment.id },
            include: [{
                model: User,
                attributes: ['id', 'nickname'],
            }],
        })
        // const post = await Post.created({
        //     content: req.body.content,
        // });
        res.status(201).json(fullComment);
    } catch (error) {
        console.error(error);
        next(error);
    }    
});

router.patch('/:postId/like', isLoggedIn, async (req, res, next) => { //PATCH /post/1/like
    try {
        const post = await Post.findOne({ where: { id: req.params.postId }});
        if (!post) {
            return res.status(403).send('post is not exist');
        }
        await post.addLikers(req.user.id);     //db조작할땐 항상 await 쓰기
        res.json({ PostId: post.id, UserId: req.user.id});
    } catch (error) {
        console.error(error);
        next(error);
    }    
});
    

router.delete('/:postId/like', isLoggedIn, async (req, res, next) => {    //DELETE /post/1/like
    try {
        const post = await Post.findOne({ where: { id: req.params.postId }});
        if (!post) {
            return res.status(403).send('post is not exist');
        }
        await post.removeLikers(req.user.id);     //db조작할땐 항상 await 쓰기
        res.json({ PostId: post.id, UserId: req.user.id });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.patch('/:postId', isLoggedIn, async (req, res, next) => {  //patch / post/10
    const hashtags = req.body.content.match(/#[^\s#]+/g);
     
    try {
        await Post.update({
            content: req.body.content
        }, {
            where: { 
                id: req.params.postId,
                UserId: req.user.id,
            },
        });
        const post = await Post.findOne({ where: { id: req.params.postId }});
        if (hashtags) {
            const result = await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({ 
                where: { name: tag.slice(1).toLowerCase() },
            })));   //result = [[노드, true], [리액트, true]]
            await post.setHashtags(result.map((v) => v[0]));
        }   
        res.status(200).json({ PostId: parseInt(req.params.postId, 10), content: req.body.content });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete('/:postId', isLoggedIn, async (req, res, next) => {  //DELETE / post/10
    try {
        await Post.destroy({
            where: { 
                id: req.params.postId,
                UserId: req.user.id,
            },
        });
        res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;