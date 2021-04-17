import { all, fork, put, delay, takeLatest } from "@redux-saga/core/effects";

// function loginAPI(data) {
//     yield axios.post('/api/login', data)
// }

function* logIn(action) {
    try {
        yield delay(1000);
        // const result = yield call(loginAPI, action.data);    //call을 쓰면 동기, fork를 쓰면 비동기. result값을 받고 진행해야 하므로 call을 사용.
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: result.data
        });
    } catch (err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data
        })
    }    
}

// function logoutAPI() {
//     yield axios.post('/api/logout')
// }

function* logOut() {
    try {
        yield delay(1000);
        // const result = yield call(logoutAPI);    //call을 쓰면 동기, fork를 쓰면 비동기. result값을 받고 진행해야 하므로 call을 사용.
        yield put({
            type: 'LOG_OUT_SUCCESS',
            data: result.data
        });
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data
        })
    }    
}

function* watchLogin() {
    yield takeLatest('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUEST', logOut);
}

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogOut)
    ]);
}