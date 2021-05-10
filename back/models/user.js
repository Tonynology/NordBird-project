const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class User extends Model {//MySQL에는 user 테이블 생성.
    static init(sequelize) {
        return super.init({
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
            modelName: 'User',
            tableName: 'users',
            charset: 'utf8mb4',     //이모티콘 까지 저장하려면 8m4를 추가.
            collate: 'utf8mb4_general_ci', //한글 저장
            sequelize, 
        });
    }

    static associate(db) {
        db.User.hasMany(db.Post)   //한 유저가 다수의 포스트 가능
        db.User.hasMany(db.Comment)
        db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });//사용자와 게시글의 좋아요 관계
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'FollowingId' });
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'FollowingId' }); 
    }
};
