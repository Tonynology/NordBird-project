const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Image extends Model {//MySQL에는 image 테이블 생성.
    static init(sequelize) {
        return super.init({
            // id: {}, mysql에서 자동으로 넣어줌.
            src: {
                type: DataTypes.STRING(200),
                allowNull: false,
            },
        }, {
            modelName: 'Image',
            tableName: 'images',
            charset: 'utf8mb4',     //이모티콘 까지 저장하려면 8m4를 추가.
            collate: 'utf8mb4_general_ci', //한글 저장
            sequelize, 
        });
    }

    static associate(db) {
        db.Post.belongsTo(db.Post);
    }
};