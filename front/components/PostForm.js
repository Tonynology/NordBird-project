import React, { useCallback, useRef, useEffect  } from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE, ADD_POST_REQUEST } from '../reducers/post';
import useInput from '../hooks/useInput';
import { backUrl } from '../config/config';


const PostForm = () => {
    const { imagePaths, addPostDone } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const [text, onChangeText, setText] = useInput('');

    useEffect(() => {
        if (addPostDone) {
            setText('');
        }
    }, [addPostDone])

    // const onChangeText = useCallback((e) => {
    //     setText(e.target.value);
    // }, []);

    const onSubmit = useCallback(() => {
        if (!text || !text.trim()) {
            return alert('please write the form');
        }
        const formData = new FormData();
        imagePaths.forEach((p) => {
            formData.append('image', p);
        });
        formData.append('content', text);
        
        for (const value of formData) {
            console.log(value);
        }
        return dispatch({
            type: ADD_POST_REQUEST,
            data: formData,
        });
    }, [text, imagePaths]);

    const imageInput = useRef();
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    const onChangeImages = useCallback((e) => {
        console.log('images', e.target.files);
        const imageFormData = new FormData(); //FormData() 형식으로 보내준다 그리고 multer가 처리
        [].forEach.call(e.target.files, (f) => {
            imageFormData.append('image', f);
        });

        for (const value of imageFormData) {
            console.log(value);
        }

        dispatch({
            type: UPLOAD_IMAGES_REQUEST,
            data: imageFormData,
        });
    }, []);

    const onRemoveImage = useCallback((index) => () => {
        dispatch({
            type: REMOVE_IMAGE,
            data: index,
        });
    });

    return (
        <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea
                value={text}
                onChange={onChangeText}
                maxLength={140}
                placeholder={'what happened?'}
            />
            <div>
                <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
                <Button onClick={onClickImageUpload}>Image upload</Button>
                <Button type="primary" style={{ float: 'right' }} htmlType="submit">Twit!</Button>
            </div>
            <div>
                {imagePaths.map((v, i) => ( //map안에 콜백함수에 데이터를 넣고싶으면 고차함수를 사용.
                    <div key={v} style={{ display: 'inline-block' }}>
                        <img src={v.replace(/\/thumb\//,  '/original/')} style={{ width: '200px' }} alt={v} />
                        <div>
                            <Button onClick={onRemoveImage(i)}>Delete</Button>
                        </div>
                    </div>
                ))}
            </div>
        </Form>
    )
};

export default PostForm;