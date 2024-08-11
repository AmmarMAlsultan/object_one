import React from 'react';
import { useState, useEffect } from 'react';

// import Header from '../layout/Header';
import axios from 'axios';

const Login = () => {

    useEffect(() => {
        document.title = "Login";
    }, []);

    const [email, setemail] = useState("");
    const [password, setpassoward] = useState("");
    const [accept, setaccept] = useState(false);
    const [msg, setmsg] = useState();
    async function submit(e) {
        e.preventDefault();
        let flag = true;
        setaccept(true)
        if (password.length < 5) {
            flag = false;
        } else {
            flag = true
        }
        try {
            if (flag) {
                let getdata = await axios.post('http://127.0.0.1:8000/api/login', {
                    email: email,
                    password: password,
                });
                if (getdata.status === 200) {
                    window.localStorage.setItem("email", email);
                    console.log("Ammar");
                    window.location.pathname = "/dashboad";
                }
            }

        } catch (error) {
            setmsg(error.response.status);
        }

    }
    return (
        <>
            {/* <Header /> */}
            <div className='indexlogin'>

                <form onSubmit={submit} action="" method="">
                    <div className="imgcontainer" style={{ display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                        <div>
                            <i style={{ fontSize: "xx-large" }} className="fa-regular fa-user"></i>
                            <p style={{margin:"0", fontStyle:"initial", color:"green"}}>login</p>
                        </div>
                    </div>
                    <div className="container">

                        <label htmlFor="em">Email</label>
                        <input type="email" name="" id="email" required placeholder='Enter Email' onChange={(e) => setemail(e.target.value)} />
                        {accept && msg === 401 && <p style={{ color: "red", marginTop: "2px", fontSize: "small", fontWeight: "bold" }}>الأيميل ليس موجود</p>}

                        <label htmlFor="password"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" id='password' onChange={(e) => setpassoward(e.target.value)} />
                        {msg === 400 && accept && <p style={{ color: "red", marginTop: "2px", fontSize: "small", fontWeight: "bold" }}>كلمة المرور ليست موجودة</p>}


                        <button type="submit">Login</button>

                    </div>
                </form>

            </div>
        </>
    );
}

export default Login;
