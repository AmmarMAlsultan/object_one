import React from 'react';
import { useState,useEffect } from 'react';
import "../theem/css/Login.css";
const Login = () => {
    return (
        <div className='indexlogin'>
            <form action="" method="">
                <div className="imgcontainer">
                    <img src="img_avatar2.png" alt="Login" className="avatar" />
                </div>
                <div className="container">
                    <label htmlFor="em">Email</label>
                    <input type="email" name="" id="email" required placeholder='Enter Email' />
                    <label htmlFor="psw">
                        <b>Password</b>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="psw"
                        required
                    />
                    <button type="submit">Login</button>

                </div>
            </form>

        </div>
    );
}

export default Login;
