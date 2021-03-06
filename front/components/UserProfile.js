import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { LOG_OUT_REQUEST } from '../reducers/user';

// const UserProfile = ({ setIsLoggedIn }) => {
const UserProfile = () => {
    const dispatch = useDispatch();
    const { me, logOutLoading } = useSelector((state) => state.user);

    const onLogout = useCallback(() => {
        // setIsLoggedIn(false);
        dispatch({
            type: LOG_OUT_REQUEST,
          });
    }, []);

    return (
        <Card
            actions={[
                <div key="twit"><Link href={`/user/${me.id}`}><a>Tweet<br/>{me.Posts.length}</a></Link></div>,
                <div key="followings"><Link href="/profile"><a>Following<br/>{me.Followings.length}</a></Link></div>,
                <div key="followers"><Link href="/profile"><a>Follower<br/>{me.Followers.length}</a></Link></div>
            ]}
        >
            <Card.Meta  
                avatar={(
                    <Link href={`/user/${me.id}`} prefetch={false}>                    
                        <a><Avatar>{me.nickname[0]}</Avatar></a>
                    </Link>
                )}
                title={me.nickname}
            />
            <Button onClick={onLogout} loading={logOutLoading}>Logout</Button>
        </Card>
    );
}

export default UserProfile;