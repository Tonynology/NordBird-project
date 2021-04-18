import React from 'react';
import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import { useSelector } from 'react-redux';

const Profile = () => {
    const { me } = useSelector((state) => state.user);
    
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