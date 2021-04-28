// because of next.js, don't need to import.
// but the folder should be 'pages' because next recognize 'pages' folder and change the files into each page

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import axios from 'axios';
import AppLayout from "../components/AppLayout";
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';
import axios from 'axios';

const Home = () => {
    const dispatch = useDispatch();    
    const { me } = useSelector((state) => state.user);      //구조분해.
    const { mainPosts, hasMorePost, loadPostsLoading, retweetError } = useSelector((state) => state.post);

    useEffect(() => {
        if (retweetError) {
            alert(retweetError);
        }
    }, [retweetError]);


    useEffect(() => {
        function onScroll() {
            console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                if (hasMorePost && !loadPostsLoading) {
                    const lastId = mainPosts[mainPosts.length - 1]?.id;
                    dispatch({
                        type: LOAD_POSTS_REQUEST,
                        lastId,
                    });
                }                
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll); //useEffect에서 window eventlister를 사용하면 remove를 해줘야한다. 안그러면 메모리에 쌓임.
        };
    }, [hasMorePost, loadPostsLoading, mainPosts]);


    return (
        <AppLayout>
            {me && <PostForm />}
            {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
        </AppLayout>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(async (context ) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';       
    //서버에서 쿠키가 공유가 되기때문에 로그인이 공유되는 문제가 발생하기때문에 이런식으로 쿠키를 지웠다가 채운다.
    if (context.req && cookie) {
        axios.defaults.headers.Cookie = cookie;        
    }
    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
        type: LOAD_POSTS_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default Home;