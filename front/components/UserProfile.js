import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { logoutRequestAction } from '../reducers/user';

// const UserProfile = ({ setIsLoggedIn }) => {
const UserProfile = () => {
    const dispatch = useDispatch();
    const { me, isLoggingOut } = useSelector((state) => state.user);

    const onLogout = useCallback(() => {
        // setIsLoggedIn(false);
        dispatch(logoutRequestAction());
    }, []);

    return (
        <Card
            actions={[
                <div key="twit"><br/>0</div>,
                <div key="following"><br/>0</div>,
                <div key="follow"><br/>0</div>
            ]}
        >
            <Card.Meta  
                avatar={<Avatar>{me.nickname[0]}</Avatar>}
                title={me.nickname}
            />
            <Button onClick={onLogout} loading={isLoggingOut}>Logout</Button>
        </Card>
    );
}

export default UserProfile;