export const initialState = {
    isLoggedIn: false,
    me: null,
    signUpData: {},
    loginData: {},
}

export const loginAction = (data) => {
    return {
        type: 'LOG-IN',
        data,
    }
};

export const logoutAction = {
    type: 'LOG-OUT',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {        
        case 'LOG-IN':
            return {
                ...state,
                isLoggedIn: true,
                me: action.data,
            };
        case 'LOG-OUT':
            return {
                ...state,
                isLoggedIn: false,
                me: null,
            };
        default:
            return state;
    }
};

export default reducer;