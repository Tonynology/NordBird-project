import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../reducers/user';

//Styled-component 방식. 이것 대신 useMemo 를 써도 됨. useMemo는 값을 저장하는 기능.
const ButtonWrapper = styled.div`       
    margin-top: 10px;
`;

const FormWrapper = styled(Form)`
    padding: 10px;
`;
// const LoginForm = ({ setIsLoggedIn }) => 
const LoginForm = () => {
    const dispatch = useDispatch();
    const { logInLoading, logInError } = useSelector((state) => state.user);
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');

    useEffect(() => {
        if (logInError) {
            alert(logInError);
        }
    }, [logInError]);

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
        // setIsLoggedIn(true);
        dispatch({
            type: LOG_IN_REQUEST,
            data: { email, password },
          });
    }, [email, password]);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-email">email</label>
                <br/>
                <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
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
                <Button type="primary" htmlType="submit" loading={logInLoading}>Login</Button>
                <Link href="/signup"><a><Button>Signup</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
}

// LoginForm.propTypes = {
//     setIsLoggedIn: PropTypes.func.isRequired,
// };

export default LoginForm;