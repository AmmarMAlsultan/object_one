import React from 'react';
import { useEffect } from 'react';
import Login from './Login';
import Page404 from "../layout/Page404"
// import Header from '../layout/Header';
const Home = () => {
    useEffect(() => {
        document.title = "Home";
     }, []);
    return (
        <div>
            {
            window.localStorage.getItem("email")?
            <p>Home</p>
            :
            <Page404/>
            }
        </div>
    );
}

export default Home;
