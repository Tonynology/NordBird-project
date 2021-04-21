module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', { //MySQL에는 posts 테이블 생성.
        // id: {}, mysql에서 자동으로 넣어줌.
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4',     //이모티콘 까지 저장하려면 8m4를 추가.
        collate: 'utf8mb4_general_ci', //한글 저장
    });
    Comment.associate = (db) => {
        db.Comment.belongsTo(db.User);
        db.Comment.belongsTo(db.Post);
    };
    return Comment;
};