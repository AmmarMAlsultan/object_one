import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Signup = () => {

    useEffect(() => {
        document.title = "Sign up";
    }, []);

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassoward] = useState("");
    const [passwordR, setpassowardR] = useState("");
    const [accept, setaccept] = useState(false);
    const [msg, setmsg] = useState();
    async function submit(e) {
        e.preventDefault();
        let flag = true;
        setaccept(true)
        if (password.length < 5 || passwordR !== password || name === "") {
            flag = false;
        } else {
            flag = true
        }
        try {
            if (flag) {
                
                let respons = await axios.post('http://127.0.0.1:8000/api/register', {
                    name: name,
                    email: email,
                    password: password,
                    passwordR: passwordR,
                });
                if (respons.status === 200) {
                    window.localStorage.setItem("email", email);
                    window.location.pathname = "/dashboad";
                }
            }
        }  catch (error) {
            if (error.response) {
                console.log('Error Data:', error.response.data);
                console.log('Error Status:', error.response.status);
            } else {
                console.log('Error Message:', error.message);
            }
        }
    }
    return (
        <>
            {/* <Header/> */}
            <div className='indexlogin'>
                <form onSubmit={submit} action="" method="">
                    <div className="imgcontainer" style={{ display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                        <div>
                            <i style={{ fontSize: "xx-large" }} className="fa-regular fa-user"></i>
                            <p style={{ margin: "0", fontStyle: "initial", color: "green" }}>Sign Up</p>
                        </div>
                    </div>
                    <div className="container">

                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" id='name' name="uname" onChange={(e) => setname(e.target.value)} />
                        {name === "" && accept && <p style={{ color: "red", marginTop: "2px", fontSize: "small", fontWeight: "bold" }}>يرجى ادخال الاسم</p>}

                        <label htmlFor="em">Email</label>
                        <input type="email" name="" id="email" required placeholder='Enter Email' onChange={(e) => setemail(e.target.value)} />
                        {accept && msg === 422 && <p style={{ color: "red", marginTop: "2px", fontSize: "small", fontWeight: "bold" }}>الأيميل مسجل بالفعل</p>}

                        <label htmlFor="password"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" id='password' onChange={(e) => setpassoward(e.target.value)} />
                        {password.length < 5 && accept && <p style={{ color: "red", marginTop: "2px", fontSize: "small", fontWeight: "bold" }}>يجب ان  تكون كلمة المرور اكبر من 5 احرف</p>}

                        <label htmlFor="passwordR"><b>Rd Password</b></label>
                        <input type="password" placeholder="Enter Rd Password" name="passwordR" id='passwordR' onChange={(e) => setpassowardR(e.target.value)} />
                        {passwordR !== password && accept && <p style={{ color: "red", marginTop: "2px", fontSize: "small", fontWeight: "bold" }}>يجب ان تتطابق كلمات المرور</p>}

                        <button type="submit">Login</button>

                    </div>
                </form>

            </div>
            
        </>
    );
}

export default Signup;