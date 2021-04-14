import { HYDRATE } from 'next-redux-wrapper';

import user from './user';
import post from './post';
import { combineReducers } from 'redux';

const rootReducer = combineReducers ({
    //reducer를 ssr하기위해 HYDRATE를 사용해야하는데 HYDRATE를 위해서 index를 추가 한 것이다.
    index: (state = {}, action) => {
        switch(action.type) {
            case HYDRATE:
                return { ...state, ...action.payload };
            
            default:
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;