import React from 'react';
import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
    const followingList = [{ nickname: 'tm'}, { nickname: 'aa'}, { nickname: 'bb'},]
    const followerList = [{ nickname: 'zz'}, { nickname: 'yy'}, { nickname: 'xx'},]
    
    return(
        <div> 
            <Head>
                <title>My Profile | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="following list" data={followingList}/>
                <FollowList header="follower list" data={followerList}/>
            </AppLayout>            
        </div>
    );
};

export default Profile;