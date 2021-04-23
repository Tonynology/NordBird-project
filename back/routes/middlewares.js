exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.stateu(401).send('login is necessary');
    }
};

exports.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next(); //인자가 없으면 다음 미들웨어로 간다. 하지만 인자가 있느면 에러처리로 간다.
    } else {
        res.stateu(401).send('login is not necessary');
    }
};