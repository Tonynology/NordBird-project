import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';


const UserProfile = ({ setIsLoggedIn }) => {
    const onLogout = useCallback(() => {
        setIsLoggedIn(false);
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