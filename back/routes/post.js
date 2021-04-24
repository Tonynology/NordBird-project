const express = require('express');

const { Post, Image, Comment, User } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();
router.post('/', isLoggedIn, async (req, res, next) => {  //POST / post
    try {
        const post = await Post.created({
            content: req.body.content,
            UserId: req.user.id,
        });
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

router.post('/:postId/comment', isLoggedIn, async (req, res, next) => {  //POST /post/1/comment
    try {
        const post = await Post.findOne({
            where: { id: req.params.postId }
        })
        if (!post) {
            return res.status(403).send('post is not exist');
        }
        const comment = await Comment.create({
            content: req.body.content,
            PostId: parseInt(req.params.postId),
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
        const Post = await Post.findOne({
            where: {
                id: req.params.postId
            }
        });
        if (!post) {
            return res.status(403).send('post is not exist');
        }
        await post.addLikers(req.user.id);     //db조작할땐 항상 await 쓰기
        res.json({ postId: post.id, UserId: req.user.id});
    } catch (error) {
        console.error(error);
        next(error);
    }    
});

router.delete('/:postId/like', isLoggedIn, async (req, res, next) => {    //DELETE /post/1/like
    try {
        const Post = await Post.findOne({
            where: {
                id: req.params.postId
            }
        });
        if (!post) {
            return res.status(403).send('post is not exist');
        }
        await post.removeLikers(req.user.id);     //db조작할땐 항상 await 쓰기
        res.json({ postId: post.id, UserId: req.user.id});
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete('/:postId', isLoggedIn, async (req, res, next) => {  //DELETE / post/10
    try {
        await Post.destroy({
            where: { 
                id: req.params.id,
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