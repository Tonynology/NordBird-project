import React from 'react';
import PropType from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css'

const NodeBird = ({ Component }) => {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>NodeBird</title>
            </Head>
            <Component />
        </div>
    )
};

NodeBird.propType = {
    Component: PropType.elementType.isRequired,
}

export default NodeBird;