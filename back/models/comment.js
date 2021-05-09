const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Comment extends Model {
    static init(sequelize) {
        return super.init({
            // id: {}, mysql에서 자동으로 넣어줌.
            content: {
            type: DataTypes.TEXT,
            allowNull: false,
            },
        }, {
            modelName: 'Comment',
            tableName: 'comments',
            charset: 'utf8mb4',     //이모티콘 까지 저장하려면 8m4를 추가.
            collate: 'utf8mb4_general_ci', //한글 저장
            sequelize, 
        });
    }

    static associate(db) {
        db.Comment.belongsTo(db.User);
        db.Comment.belongsTo(db.Post);
    }
};
