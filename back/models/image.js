module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', { //MySQL에는 posts 테이블 생성.
        // id: {}, mysql에서 자동으로 넣어줌.
        src: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
    }, {
        charset: 'utf8',     //이모티콘 까지 저장하려면 mb4를 추가.
        collate: 'utf8_general_ci', //한글 저장
    });
    Image.associate = (db) => {
        db.Post.belongsTo(db.Post);
    };
    return Image;
}