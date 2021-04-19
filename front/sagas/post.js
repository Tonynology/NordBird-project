import { all, takeLatest, delay, fork, put } from "@redux-saga/core/effects";
import shortId from 'shortid';
import {
    ADD_COMMENT_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_POST_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    // generateDummyPost,
    // LOAD_POSTS_FAILURE,
    // LOAD_POSTS_REQUEST,
    // LOAD_POSTS_SUCCESS,
    REMOVE_POST_FAILURE,
    REMOVE_POST_REQUEST,
    REMOVE_POST_SUCCESS,
  } from '../reducers/post';
  import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';


function addPostAPI(data) {
    return axios.post('/api/post', data)
}

function* addPost(action) {
    try {
        yield delay(1000);
        // const result = yield call(addPostAPI, action.data);    //call을 쓰면 동기, fork를 쓰면 비동기. result값을 받고 진행해야 하므로 call을 사용.
        const id = shortId.generate();
        yield put({
            type: ADD_POST_SUCCESS,
            data: {
                id,
                content: action.data,
            },
        });
        yield put({
            type: ADD_POST_TO_ME,
            data: id,
        });
    } catch (err) {
        yield put({
            type: ADD_POST_FAILURE,
            data: err.response.data
        })
    }    
}

function removePostAPI(data) {
    return axios.post('/api/post', data)
}

function* removePost(action) {
    try {
        yield delay(1000);
        // const result = yield call(addPostAPI, action.data);    //call을 쓰면 동기, fork를 쓰면 비동기. result값을 받고 진행해야 하므로 call을 사용.

        yield put({         //post reducer 조작 부분
            type: REMOVE_POST_SUCCESS,
            data: action.data,
        });
        yield put({         //user reducer 조작 부분
            type: REMOVE_POST_OF_ME,
            data: action.data,
        });
    } catch (err) {
        yield put({
            type: REMOVE_POST_FAILURE,
            data: err.response.data
        })
    }    
}

function addCommentAPI(data) {
    return axios.post(`/api/post/${data.postId}/comment`, data)
}

function* addComment(action) {
    try {
        yield delay(1000);
        // const result = yield call(addPostAPI, action.data);    //call을 쓰면 동기, fork를 쓰면 비동기. result값을 받고 진행해야 하므로 call을 사용.
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        yield put({
            type: ADD_COMMENT_FAILURE,
            data: err.response.data
        })
    }    
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchRemovePost),
        fork(watchAddComment),
    ]);
}