const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local'); //Strategy를 LocalStrategy 로 이름을 바꿈
const { User } = require('../models');
const bcrypt = require('bcrypt');

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
    }, async (email, password, done) => {
        try {
            const user = await User.findOne({
                where: { email }
            });
            if (!user) {
                return done(null, false, { reason: 'It is not existing email'});
            }
            const result = await bcrypt.compare(password, user.password);
            if (result) {
                return done(null, user);
            }
            return done(null, false, { reason: 'password is incorrect'});
        } catch (error) {
            console.error(error);
            return done(error);
        }
        
    }));
};