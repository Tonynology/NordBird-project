module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', { //MySQL에는 posts 테이블 생성.
        // id: {}, mysql에서 자동으로 넣어줌.
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4',     //이모티콘 까지 저장하려면 8m4를 추가.
        collate: 'utf8mb4_general_ci', //한글 저장
    });
    Post.associate = (db) => {
        db.Post.belongsTo(db.User);
        db.Post.belongsToMany(db.Hashtag, { through: 'PosthHashtag' });
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Image);
        db.Post.belongsToMany(db.User, { through: 'Like', ad: 'Likers' });  //사용자와 게시글의 좋아요 관계({ through: 'Like' }) 를 넣어서 중간 테이블 관계 이름을 설정
        db.Post.belongsTo(db.Post, { as: 'Retweet' });    
    };
    return Post;
};