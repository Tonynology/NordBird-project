export const initialState = {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
}

export const loginAction = (data) => {
    return {
        type: 'LOG-IN',
        data,
    }
};

export const logoutAction = () => {
    return {
        type: 'LOG-OUT',
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {        
        case 'LOG-IN':
            return {
                ...state,
                isLoggedIn: true,
                user: action.data,
            };
        case 'LOG-OUT':
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
};

export default reducer;