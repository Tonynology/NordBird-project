import React, { useCallback, useMemo } from 'react';
import { Form, Input } from 'antd';
import { CHANGE_NICKNAME_REQUEST } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';

const NicknameEditForm = () => {
    //useMemo 방식. Styled-component 방식으로 해도 됨.
    const style = useMemo (() => ({
        marginBottom: '20px', border: '1px solid #d9d9d9', padding: '20px'
    }), []);
    const { me } = useSelector((state) => state.user);
    const [nickname, onChangeNickname] = useInput(me?.nickname || '');
    const dispatch = useDispatch();

    const onSubmit = useCallback(() => {
        dispatch({
            type: CHANGE_NICKNAME_REQUEST,
            data: NicknameEditForm,
        });
    }, [nickname]);

    return (
        <Form style={style}>
            <Input.Search 
                value={nickname} 
                onChange={onChangeNickname}  
                addonBefore="Nickname" 
                enterButton="Edit" 
                onSearch={onSubmit}
                />
        </Form>
    );
};

export default NicknameEditForm;