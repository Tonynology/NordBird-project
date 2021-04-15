import { Form, Input, Button } from 'antd';
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { useSelector } from 'react-redux';

const CommentForm = ({ post }) => {
    const id = useSelector((state) => state.user.me?.id);
    const [commentText, onChangeCommentText] = useInput('');    //useInput은  커스텀이다.

    // == const [commentText, setCommentText] = useState('');
    // const onChangeCommentText = useCallback(()~);

    const onSubmitComment = useCallback(() => {
        console.log(post.id, commentText);
    }, [commentText]);
    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
                <Button type="primary" htmlType="submit">TWIT~~</Button>
            </Form.Item>
        </Form>
    );
};

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
};

export default CommentForm;