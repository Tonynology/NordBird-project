import React, { useState } from 'react';
import PropType from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`

const Global = createGlobalStyle`
    .ant-row {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }
    
    .ant-col:first-child {
        padding-left: 0 !important;
    }
    
    .ant-col:last-child {
        padding-right: 0 !important;
    }
`;

const AppLayout = ({children}) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false); ///dummy data for login without server
    // redux/reducers 의 중앙관리 덕에 더이상 필요하지 않음.

    const { me } = useSelector((state) => state.user);      //useSelector는 npm i react-redux 필요
    //  == const { isLoggedIn } = useSelector((state) => state.user);  구조분해 할당.
    return (
        <div>
            <Global />
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
                    {/* {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>} */}
                    {me ? <UserProfile /> : <LoginForm />}
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