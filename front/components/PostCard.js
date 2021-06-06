import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Popover, Avatar, List, Comment } from 'antd';
import { RetweetOutlined, HeartOutlined, MessageOutlined,  EllipsisOutlined, HeartTwoTone } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import moment from 'moment';

import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import { 
    LIKE_POST_REQUEST, 
    REMOVE_POST_REQUEST, 
    UNLIKE_POST_REQUEST, 
    RETWEET_REQUEST,
    UPDATE_POST_REQUEST,
} from '../reducers/post';
import FollowButton from './FollowButton';

// moment.locale('ko');

const PostCard = ({ post }) => {
    const dispatch = useDispatch();
    const { removePostLoading } = useSelector((state) => state.post);
    // const [liked, setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const id = useSelector((state) => state.user.me?.id);    
    const [editMode, setEditMode] = useState(false);
    
    const onClickUpdate = useCallback(() => {
        setEditMode(true);
    }, []);

    const onCancelUpdate = useCallback(() => {
        setEditMode(false);
    }, []);

    const onChangePost = useCallback((editText) => () => {
        dispatch({
            type: UPDATE_POST_REQUEST,
            data: {
                PostId: post.id,
                content: editText,
            },
        });
    }, [post]);

    const onLike = useCallback(() => {    //false->true / true->false 로 왔다갔다 바꿔주는 코드
        if (!id) {
            return alert('login is necessary');
        }
        return dispatch({
            type: LIKE_POST_REQUEST,
            data: post.id,
        });
    }, []);
    const onUnlike = useCallback(() => {    //false->true / true->false 로 왔다갔다 바꿔주는 코드
        if (!id) {
            return alert('login is necessary');
        }
        return dispatch({
            type: UNLIKE_POST_REQUEST,
            data: post.id,
        });
    }, [id]);
    const onToggleComment = useCallback(() => {
        // if (!id) {
        //     return alert('login is necessary');
        // }
        setCommentFormOpened((prev) => !prev);
    }, []);

    const onRemovePost = useCallback(() => {
        if (!id) {
            return alert('login is necessary');
        }
        return dispatch({
            type: REMOVE_POST_REQUEST,
            data: post.id,
        });
    }, [id]);

    const onRetweet = useCallback(() => {
        if (!id) {
            return alert('login is necessary');
        }
        return dispatch({
            type: RETWEET_REQUEST,
            data: post.id,
        });
    }, [id]);

    const liked = post.Likers.find((v) => v.id === id);
    // const id = me && me.id;
    return (
        <div style={{ marginBottom: 20 }}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[      //배열 안에 jsx를 넣을 땐 key값을 함께 넣어줘야함.
                    <RetweetOutlined key="retweet" onClick={onRetweet} />,
                    liked
                        ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onUnlike}/>
                        : <HeartOutlined key="heart" onClick={onLike}/>,
                    <MessageOutlined key="comment" onClick={onToggleComment}/>,
                    <Popover 
                        key="more" 
                        content={(
                            <Button.Group>
                                {id && post.User.id === id 
                                ? (
                                    <div>
                                        {!post.RetweetId && <Button onClick={onClickUpdate}>Edit</Button>}
                                        <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>Delete</Button>
                                    </div>
                                ) 
                                : <Button>Report</Button>}                            
                            </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>,
                ]}
                title={post.RetweetId ? `${post.User.nickname} retweeted.` : null}
                extra={id && <FollowButton post={post} />}
            >
                {post.RetweetId && post.Retweet
                ? (
                    <Card
                        cover={post.Retweet.Images[0] && <PostImages images={post.Retweet.Images} />}
                    >
                        <div style={{ float: 'right' }}>{moment(post.createdAt).format('YYYY.MM.DD')}</div>
                        <Card.Meta
                            avatar={(
                            <Link href={`/user/${post.Retweet.User.id}`} prefetch={false}>
                                <a><Avatar>{post.Retweet.User.nickname[0]}</Avatar></a>
                            </Link>
                        )}
                            title={post.Retweet.User.nickname}
                            description={<PostCardContent postData={post.Retweet.content} onChangePost={onChangePost} onCancelUpdate={onCancelUpdate} />}
                        />
                    </Card>
                )
                : (    
                    <div>     
                        <div style={{ float: 'right' }}>{moment(post.createdAt).format('YYYY.MM.DD')}</div>
                        <Card.Meta
                            avatar={(
                                <Link href={`/user/${post.User.id}`} prefetch={false}>
                                    <a><Avatar>{post.User.nickname[0]}</Avatar></a>
                                </Link>
                            )}
                            title={post.User.nickname}
                            description={<PostCardContent editMode={editMode} onChangePost={onChangePost} onCancelUpdate={onCancelUpdate} postData={post.content} />}
                        />
                    </div>   
            )}
                
            </Card>
            {commentFormOpened && (
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
                                    avatar={(
                                        <Link href={`/user/${item.User.id}`} prefetch={false}>
                                            <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                                        </Link>
                                    )}
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

PostCard.propTypes = {   //.object 대신 .shape은 object 안에 있는 모든걸 다 표기해줄려고 할때 사용.
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.string,
        Comments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object),
        Likers: PropTypes.arrayOf(PropTypes.object),
        RetweetId: PropTypes.number,
        Retweet: PropTypes.objectOf(PropTypes.any),
    }).isRequired,   
};

export default PostCard;