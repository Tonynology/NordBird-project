import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useDispatch } from 'react-redux';

import { logoutAction } from '../reducers/user';

// const UserProfile = ({ setIsLoggedIn }) => {
const UserProfile = () => {
    const dispatch = useDispatch();
    
    const onLogout = useCallback(() => {
        // setIsLoggedIn(false);
        dispatch(logoutAction());
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
                avatar={<Avatar>TM</Avatar>}
                title="tonyMoon"
            />
            <Button onClick={onLogout}>Logout</Button>
        </Card>
    );
}

export default UserProfile;