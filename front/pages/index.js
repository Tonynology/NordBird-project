// because of next.js, don't need to import.
// but the folder should be 'pages' because next recognize 'pages' folder and change the files into each page

import React from 'react';
import { useSelector } from 'react-redux';
import AppLayout from "../components/AppLayout";
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';


const Home = () => {
    const { isLoggedIn } = useSelector((state) => state.user);      //구조분해.
    const { mainPosts } = useSelector((state) => state.post);

    return (
        <AppLayout>
            {isLoggedIn && <PostForm />}
            {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
        </AppLayout>
    );
}

export default Home;