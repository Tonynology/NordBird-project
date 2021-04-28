import React, { useEffect } from 'react';
import { END }  from 'redux-saga';
import axios from 'axios';

import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';

const Profile = () => {
    const dispatch = useDispatch();
    const { me } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch({
            type: LOAD_FOLLOWERS_REQUEST,
        });
        dispatch({
            type: LOAD_FOLLOWERS_REQUEST,
        });
    }, []);

    useEffect(() => {
        if (!(me && me.id)) {
            Router.push('/');
        }
    }, [me && me.id]);

    if (!me) {
        return null;
    }
    
    return(
        <div> 
            <Head>
                <title>My Profile | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="following list" data={me.Followings}/>
                <FollowList header="follower list" data={me.Followers}/>
            </AppLayout>            
        </div>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context ) => {
    console.log('getServerSideProps start');
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';       
    //서버에서 쿠키가 공유가 되기때문에 로그인이 공유되는 문제가 발생하기때문에 이런식으로 쿠키를 지웠다가 채운다.
    if (context.req && cookie) {
        axios.defaults.headers.Cookie = cookie;        
    }
    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    console.log('getServerSideProps end');
    await context.store.sagaTask.toPromise();
});


export default Profile;