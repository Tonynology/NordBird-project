// because of next.js, don't need to import.
// but the folder should be 'pages' because next recognize 'pages' folder and change the files into each page

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from "../components/AppLayout";
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_POSTS_REQUEST } from '../reducers/post';


const Home = () => {
    const dispatch = useDispatch();    
    const { me } = useSelector((state) => state.user);      //구조분해.
    const { mainPosts, hasMorePost, loadPostsLoading } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch({
            type: LOAD_POSTS_REQUEST,
        });
    }, []);

    useEffect(() => {
        function onScroll() {
            console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                if (hasMorePost && !loadPostsLoading) {
                    dispatch({
                        type: LOAD_POSTS_REQUEST,
                    });
                }                
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll); //useEffect에서 window eventlister를 사용하면 remove를 해줘야한다. 안그러면 메모리에 쌓임.
        };
    }, [hasMorePost, loadPostsLoading]);


    return (
        <AppLayout>
            {me && <PostForm />}
            {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
        </AppLayout>
    );
}

export default Home;