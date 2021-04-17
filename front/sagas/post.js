import { all, takeLatest, delay, fork, put } from "@redux-saga/core/effects";


// function addPostAPI(data) {
//     yield axios.post('/api/post', data)
// }

function* addPost(action) {
    try {
        yield delay(1000);
        // const result = yield call(addPostAPI, action.data);    //call을 쓰면 동기, fork를 쓰면 비동기. result값을 받고 진행해야 하므로 call을 사용.
        yield put({
            type: 'ADD_POST_SUCCESS',
            data: result.data
        });
    } catch (err) {
        yield put({
            type: 'ADD_POST_FAILURE',
            data: err.response.data
        })
    }    
}

function* watchAddPost() {
    yield takeLatest('ADD_POST_REQUEST', addPost);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
    ]);
}