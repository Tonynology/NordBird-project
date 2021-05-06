const express = require('express');
const bcrypt = require('bcrypt');
const { Post, Image, Comment, User } = require('../models');
const passport = require('passport');
const db = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Op } = require('sequelize');

const router = express.Router();

router.get('/', async (req, res, next) => {   //GET /user
    try {
        if (req.user) {
            const fullUserWithoutPassword = await User.findOne({
                where: { id: req.user.id },
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: Post,
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followings',
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followers',
                    attributes: ['id'],
                }]
            })
            res.status(200).json(fullUserWithoutPassword);
        } else {
            res.status(200).json(null);
        }        
    } catch (error) {
        console.error(error);
        next(error);
    }    
});

router.get('/followers', isLoggedIn, async (req, res, next) => {   //get /user/followers
    try {
        const user = await User.findOne({ where: { id: req.user.id }});
        if (!user) {
            res.status(403).send('The user is not exist.');
        }
        const followers = await user.getFollowers({
            limit: parseInt(req.query.limit),
        });        
        res.status(200).json(followers);        
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.get('/following', isLoggedIn, async (req, res, next) => {   //get /user/following
    try {
        const user = await User.findOne({ where: { id: req.user.id }});
        if (!user) {
            res.status(403).send('The user is not exist.');
        }
        const followings = await user.getFollowings({
            limit: parseInt(req.query.limit),
        });        
        res.status(200).json(followings);        
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.get('/:userId', async (req, res, next) => { // GET /user/3
    try {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.params.id },
        attributes: {
          exclude: ['password']
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        }]
      })
      if (fullUserWithoutPassword) {
        const data = fullUserWithoutPassword.toJSON();
        data.Posts = data.Posts.length;
        data.Followings = data.Followings.length;
        data.Followers = data.Followers.length;
        res.status(200).json(data);
      } else {
        res.status(404).json('User is not exist.');
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

router.get('/:userId/posts', async (req, res, next) => {   // GET /user/1/posts
    try {
        const where = { UserId: req.params.userId };
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

router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr) => {
            if (loginErr) {
                console.error(loginErr);
                return next(loginErr);
            }
            // res.setHeader('Cookie', 'cxlhy;)랜덤한 문자열을 보내줌
            const fullUserWithoutPassword = await User.findOne({
                where: { id: user.id },
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: Post,
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followings',
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followers',
                    attributes: ['id'],
                }]
            })
            return res.status(200).json(fullUserWithoutPassword);
        });
    })(req, res, next);
});

router.post('/', isNotLoggedIn, async (req, res, next) => {    // POST /user/
    try {
        const exUser = await User.findOne({        //무슨 함수가 비동기인지는 항상 공식문서를 찾아봐야한다.
            where: {
                email: req.body.email,
            }
        });
        if (exUser) {
            return res.status(403).send('The ID is already existing');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
        });
        res.status(201).send('ok');
    } catch (error) {
        console.error(error);
        next(error);    //status(500)
    }    
});

router.post('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('ok');
});

router.patch('/nickname', isLoggedIn, async (req, res, next) => {
    try {
        await User.update({
            nickname: req.body.nickname,
        }, {
            where: { id: req.user.id },
        });
        res.status(200).json({ nickname: req.body.nickname });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.patch('/:userId/follow', isLoggedIn, async (req, res, next) => {   //PATCH /user/1/follow
    try {
        const user = await User.findOne({ where: { UserId: parseInt(req.params.userId, 10) }});
        if (!user) {
            res.status(403).send('The user is not exist.');
        }
        await user.addFollowers(req.user.id);        
        res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete('/:userId/follow', isLoggedIn, async (req, res, next) => {   //DELETE /user/1/follow
    try {
        const user = await User.findOne({ where: { UserId: parseInt(req.params.userId, 10) }});
        if (!user) {
            res.status(403).send('The user is not exist.');
        }
        await user.removeFollowers(req.user.id);        
        res.status(200).json({ UserId: parseInt(req.params.userId, 10) });        
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete('/follow/:userId', isLoggedIn, async (req, res, next) => {   //DELETE /follow/2
    try {
        const user = await User.findOne({ where: { UserId: parseInt(req.params.userId, 10) }});
        if (!user) {
            res.status(403).send('The user is not exist.');
        }
        await user.removeFollowerings(req.user.id);        
        res.status(200).json({ UserId: parseInt(req.params.userId, 10) });        
    } catch (error) {
        console.error(error);
        next(error);
    }
});



module.exports = router;