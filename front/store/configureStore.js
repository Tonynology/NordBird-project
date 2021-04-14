import {createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevtools } from 'redux-devtools-extension';

import reducer from '../reducers';

const configureStore = () => {
    const middlewares = [];
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevtools(applyMiddleware(...middlewares))
    const store = createStore(reducer, enhancer);
    return store;
};

const wrapper = createWrapper(configureStore, 
    {debug: process.env.NODE_ENV === 'development',});      //debug 부분이 true면 redux에 관한 자세한 설명이 나오므로 dev환경에선 true로 해주는게 좋음.

export default wrapper;