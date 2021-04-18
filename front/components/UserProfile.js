import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

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
                <div key="twit"><br/>{me.Posts.length}</div>,
                <div key="following"><br/>{me.Followings.length}</div>,
                <div key="follow"><br/>{me.Followers.length}</div>
            ]}
        >
            <Card.Meta  
                avatar={<Avatar>{me.nickname[0]}</Avatar>}
                title={me.nickname}
            />
            <Button onClick={onLogout} loading={logOutLoading}>Logout</Button>
        </Card>
    );
}

export default UserProfile;