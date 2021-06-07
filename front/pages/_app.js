import React from 'react';
import PropType from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css'
import withReduxSaga from 'next-redux-saga';

import wrapper from '../store/configureStore';

const Blueboard = ({ Component }) => {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>Blueboard</title>
            </Head>
            <Component />
        </div>
    )
};

Blueboard.propType = {
    Component: PropType.elementType.isRequired,
}

export default wrapper.withRedux(withReduxSaga(Blueboard));