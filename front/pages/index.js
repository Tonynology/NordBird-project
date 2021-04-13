// because of next.js, don't need to import.
// but the folder should be 'pages' because next recognize 'pages' folder and change the files into each page

import React from 'react';
import AppLayout from "../components/AppLayout";



const Home = () => {
    return (
        <AppLayout>
            <div>Hello, Next!</div>
        </AppLayout>
    );
}

export default Home;