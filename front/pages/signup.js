import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import styled from 'styled-components';

import AppLayout from "../components/AppLayout";
import useInput from '../hooks/useInput';
import { SIGN_UP_REQUEST } from '../reducers/user';
import { useSelector, useDispatch } from 'react-redux';

const ErrorMessage = styled.div`
    color: red;
`

const Signup = () => {
    const dispatch = useDispatch();
    const { signUpLoading } = useSelector((state) => state.user);

    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');

    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback(() => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value === password);
    }, [password]);
    
    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, []);

    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true)
        }
        console.log(email, nickname, password);
        dispatch({
            tpe: SIGN_UP_REQUEST,
            data: { email, password, nickname },
        })
    }, [email, password, passwordCheck, term]);

    return (
        <AppLayout>
            <Head>
                <title>Sign up| NodeBird</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-email">Email</label>
                    <br/>
                    <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
                </div>
                <div>
                    <label htmlFor="user-nick">Nickname</label>
                    <br/>
                    <Input name="user-nick" value={nickname} onChange={onChangeNickname} required />
                </div>
                <div>
                    <label htmlFor="user-password">Password</label>
                    <br/>
                    <Input name="user-password" value={password} onChange={onChangePassword} required />
                </div>
                <div>
                    <label htmlFor="user-password-check">password</label>
                    <br/>
                    <Input 
                        name="user-password-check" 
                        type="password" 
                        value={passwordCheck} 
                        onChange={onChangePasswordCheck} 
                        required 
                    />
                    {passwordError && <ErrorMessage>password is not matched</ErrorMessage>}
                </div>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>Agree?</Checkbox>
                    {termError && <ErrorMessage>Please Agree</ErrorMessage>}
                </div>
                <div style={{ marginTop: 10 }}>
                    <Button type="primary" htmlType="submit" loading={signUpLoading}>SIGN UP</Button>
                </div>
            </Form>     
        </AppLayout>
    );
};

export default Signup;