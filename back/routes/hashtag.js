const express = require('express');
const { Hashtag, Post, Image, Comment, User } = require('../models');
const router = express.Router();
const { Op } = require('sequelize');

router.get('/:hashtag', async (req, res, next) => {   // GET /hashtag/노드
    try {
        const where = {};
        if (parserInt(req.query.lastId, 10)) {  //초기 로딩이 아닐때
            where.id = { [Op.lt]: parseInt(req.query.lastId, 10)}
        }
        const posts = await Post.findAll({
            where,
            // where: { id: lastId },
            limit: 10, // limit과 offset을 같이써서 1번 게시글부터 10개 게시글까지 만 가져오라.
            // offset: 0,  // limit과 offset의 단점은 게시글이 중간에 지워졌을때 또는 중간에 새 게시글이 추가될때
            order: [
                ['createdAt', 'DESC'],
                [Comment, 'createdAt', 'DESC']            
            ],  // offset과 limit이 꼬여버린다. 그래서 offset대신 lastId를 사용.
            
            include: [{
                model: Hashtag,
                where: { name: decodeURIComponent(req.params.hashtag) },
            }, {
                model: User,
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
                model: User,    // 좋아요 누른 사람
                as: 'Likers',
                attributes: ['id'],
            }, {
                model: Post,
                as: 'Retweet',
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }, {
                    model: Image,
                }]
            }],
        });
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        next(error);
    }    
});

module.exports = router;