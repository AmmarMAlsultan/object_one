import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../theem/css/style.css";
const Header = () => {
    function removelocalsorage() {
        window.localStorage.removeItem("email");
        window.location.pathname = "/";
    }
    return (
        <div className="topnav">
            {
                window.localStorage.getItem("email") ?
                    <>
                        <Link to="dashboad">Dashboad</Link>
                        <NavLink to="dashboad/users">Show Users</NavLink>
                        <button style={{ float: 'right', width: "100px", margin: "0", backgroundColor: "#3d7484" }} onClick={removelocalsorage}>Logout</button>
                    </>
                    :
                    <div className='link-login'>
                        <div className='link' style={{ display: "flex", alignItems: "center", justifyContent: "right", }}>
                            <NavLink to="/signup" style={{ marginRight: "5px", textDecorationLine: 'none' }}>SignUp</NavLink>
                            <NavLink to="/login" style={{ marginRight: "5px", textDecorationLine: 'none' }} >Login</NavLink>
                        </div>
                    </div>
            }
        </div>
    );
}

export default Header;
