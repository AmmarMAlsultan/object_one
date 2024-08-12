import React from 'react';
import { useEffect} from 'react';
import { Outlet } from 'react-router-dom';
const Home = () => {
    
    useEffect(() => {
        document.title = "Dashboad";
    }, []);
    return (
        <>
        <Outlet/>
        </>
    );
}

export default Home;
