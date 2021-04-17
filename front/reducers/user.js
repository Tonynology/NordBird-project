export const initialState = {
    isLoggingIn: false, //로그인 시도중
    isLoggedIn: false,
    isLoggingOut: false, //로그아웃 시도중
    me: null,
    signUpData: {},
    loginData: {},
}

export const loginRequestAction = (data) => {
    return {
        type: 'LOG_IN_REQUEST',
        data,
    }
};

export const logoutRequestAction = {
    type: 'LOG_OUT_REQUEST',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {        
        case 'LOG_IN_REQUEST':
            return {
                ...state,
                isLoggedIn: true,
            };
        case 'LOG_IN_SUCCESS':
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                me: { ...action.data, nickname: 'tony'},
            };
        case 'LOG_IN_FAILURE':
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
            };
        case 'LOG-OUT_REQUEST':
            return {
                ...state,
                isLoggingOut: true,
            };
        case 'LOG-OUT_SUCCESS':
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: false,
                me: null,
            };
        case 'LOG-OUT_FAILURE':
            return {
                ...state,
                isLoggingOut: false,
            };
        default:
            return state;
    }
};

export default reducer;