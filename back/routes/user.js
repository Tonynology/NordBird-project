const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const passport = require('passport');

const router = express.Router();

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            return res.status(403).send(info.reason);
        }
        return req.login(user, async (loginErr) => {
            if (loginErr) {
                console.error(loginErr);
                return next(loginErr);
            }
            // res.setHeader('Cookie', 'cxlhy;)랜덤한 문자열을 보내줌
            return res.status(200).json(user);
        });
    })(req, res, next);
});

router.post('/', async (req, res, next) => {    // POST /user/
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
        res.statud(200).send('ok');
    } catch (error) {
        console.error(error);
        next(error);    //status(500)
    }    
});

module.exports = router;