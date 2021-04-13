import React, { useState, useCallback, useMemo } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import useInput from '../hooks/useInput';

//Styled-component 방식. 이것 대신 useMemo 를 써도 됨. useMemo는 값을 저장하는 기능.
const ButtonWrapper = styled.div`       
    margin-top: 10px;
`;

const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    // const [id, setId] = useState('');
    // const [password, setPassword] = useState('');

    // const onChangeId = useCallback((e) => {//이런것들 처럼 component에 props를 넘기는 함수는 useCallback을 써야 최적화가 된다.
    //     setId(e.target.value);
    // }, []);

    // const onChangePassword = useCallback((e) => {
    //     setPassword(e.target.value);
    // }, []);

    // const style = useMemo(() => ({ marginTop: 10}), []);

    const onSubmitForm = useCallback(() => {
        setIsLoggedIn(true);
    }, [id, password]);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">ID</label>
                <br/>
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">password</label>
                <br/>
                <Input 
                    name="user-password" 
                    type="password" 
                    value={password} 
                    onChange={onChangePassword} 
                    required 
                />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>Login</Button>
                <Link href="/signup"><a><Button>Signup</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
}

LoginForm.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
};

export default LoginForm;