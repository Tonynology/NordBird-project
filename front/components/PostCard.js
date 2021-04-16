import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Popover, Avatar, List, Comment } from 'antd';
import { RetweetOutlined, HeartOutlined, MessageOutlined,  EllipsisOutlined, HeartTwoTone } from '@ant-design/icons';
import { useSelector } from 'react-redux';

import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';

const PostCard = ({ post }) => {
    const [liked, setLiked] = useState(false);
    const [commetnFormOpened, setCommentFormOpened] = useState(false);
    const onToggleLike = useCallback(() => {    //false->true / true->false 로 왔다갔다 바꿔주는 코드
        setLiked((prev) => !prev);
    }, []);
    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
    }, []);

    const { me } = useSelector((state) => state.user);
    const id = me?.id;
    // const id = me && me.id;
    return (
        <div style={{ marginBottom: 20 }}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[      //배열 안에 jsx를 넣을 땐 key값을 함께 넣어줘야함.
                    <RetweetOutlined key="retweet"/>,
                    liked
                        ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike}/>
                        : <HeartOutlined key="heart" onClick={onToggleLike}/>,
                    <MessageOutlined key="comment" onClick={onToggleComment}/>,
                    <Popover key="more" content={(
                        <Button.Group>
                            {id && post.User.id == id 
                            ? (
                                <div>
                                    <Button>Edit</Button>
                                    <Button type="danger">Delete</Button>
                                </div>
                            ) 
                            : <Button>Report</Button>}                            
                        </Button.Group>
                    )}>
                        <EllipsisOutlined key="retweet"/>
                    </Popover>
                ]}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={<PostCardContent postData={post.content} />}
                />
            </Card>
            {commetnFormOpened && (
                <div>
                    <CommentForm post={post} />
                    <List 
                        header={`${post.Comments.length}개의 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments}
                        renderItem={(item) => (
                            <li>
                                <Comment 
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </div>
            )}
            {/* <CommentForm />
            <Comments /> */}
        </div>
    );
};

PostCard.prpTypes = {   //.object 대신 .shape은 object 안에 있는 모든걸 다 표기해줄려고 할때 사용.
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.object,
        Comments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,   
};

export default PostCard;