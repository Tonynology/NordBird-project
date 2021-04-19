import React, { useEffect } from 'react';
import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import { useSelector } from 'react-redux';
import Router from 'next/router';

const Profile = () => {
    const { me } = useSelector((state) => state.user);

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

export default Profile;