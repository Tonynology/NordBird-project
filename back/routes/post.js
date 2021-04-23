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
            }, {
                model: User,
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
            PostId: req.params.postId,
        })
        // const post = await Post.created({
        //     content: req.body.content,
        // });
        res.status(201).json(post);
    } catch (error) {
        console.error(error);
        next(error);
    }    
});

router.delete('/', (req, res) => {  //DELETE / post
    res.json({ id: 1 });
});

module.exports = router;