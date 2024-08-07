import React from 'react';
import { NavLink } from 'react-router-dom';
import "../theem/css/Login.css";

const Header = () => {
    return (
        <div>
            <div className='link' style={{display:"flex",alignItems:"center",justifyContent:"right",}}>
                <NavLink to="/signup" style={{ marginRight: "5px",textDecorationLine:'none' }}>SignUp</NavLink>
                <NavLink to="/login" style={{ marginRight: "5px",textDecorationLine:'none' }}>Login</NavLink>
            </div>
        </div>
    );
}

export default Header;
