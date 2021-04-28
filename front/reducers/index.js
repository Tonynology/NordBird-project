import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers, combineReducers } from 'redux';

import user from './user';
import post from './post';


const rootReducer = (state, action) =>  {
    //reducer를 ssr하기위해 HYDRATE를 사용해야하는데 HYDRATE를 위해서 index를 추가 한 것이다.
    switch (action.type) {
        case HYDRATE:
            console.log('HYDRATE', action);
            return action.payload;
        default: {
            const combineReducers = combineReducers({
                user,
                post,
            });
            return combineReducers(state, action);
        }
    }
};

export default rootReducer;