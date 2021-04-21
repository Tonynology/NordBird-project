const { sequelize } = require(".");     //sequelize에서는 module이라부르고 sql에서는 table이라고 부름.

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', { //MySQL에는 users 테이블 생성.
        // id: {}, mysql에서 자동으로 넣어줌.
        email: {
            type: DataTypes.STRING(30),
            allowNull: false, //필수
            unique: true, //고유한 값
        },
        nickname: {
            type: DataTypes.STRING(30),
            allowNull: false, //필수
        },
        password: {
            type: DataTypes.STRING(100),    //암호화 되니까 길게 설정.
            allowNull: false, //필수
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci', //한글 저장
    });
    User.associate = (db) => {
        db.User.hasMany(db.Post)   //한 유저가 다수의 포스트 가능
        db.User.hasMany(db.Comment)
        db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });//사용자와 게시글의 좋아요 관계
        db.User.belongsToMany(db.Post, { through: 'Follow', as: 'Followers', foreignKey: 'FollowingId' });
        db.User.belongsToMany(db.Post, { through: 'Follow', as: 'Followings', foreignKey: 'FollowingId' });
    };
    return User;
};