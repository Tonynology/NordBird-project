const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Hashtag extends Model {//MySQL에는 posts 테이블 생성.
    static init(sequelize) {
        return super.init({
            // id: {}, mysql에서 자동으로 넣어줌.
            name: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
        }, {
            modelName: 'Hashtag',
            tableName: 'hashtags',
            charset: 'utf8mb4',     //이모티콘 까지 저장하려면 8m4를 추가.
            collate: 'utf8mb4_general_ci', //한글 저장
            sequelize, 
        });
    }

    static associate(db) {
        db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
    }
};