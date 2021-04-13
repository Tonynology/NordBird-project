import React, { useState } from 'react';
import PropType from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`

const AppLayout = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);///dummy data for login without server
    
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>NodeBird</a></Link>
                </Menu.Item>    
                <Menu.Item>
                    <Link href="/profile"><a>Profile</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>Signup</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="/" target="_blank" rel="noreferrer nooppener">Made by Tony Moon</a>
                </Col>
            </Row>
        </div>
    )
};

AppLayout.propType = {
    children: PropType.node.isRequired,
};

export default AppLayout;