import React from 'react';
import { useState,useEffect } from 'react';
import "../theem/css/Login.css";
import axios from 'axios';

const Signup = () => {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [passwoard,setpassoward]=useState("");
    const [passwoardR,setpassowardR]=useState("");
    const [accept,setaccept]=useState(false);
    const [flag,setflag]=useState(false);
    function submit(e){
        e.preventDefault();
        setaccept(true)
        if( passwoard.length < 5 || passwoardR !== passwoard ||name === ""){
            setflag(false);
        // }else{
        //     setflag(true)
        }
        if(flag){
            let res = axios.post('http://127.0.0.1:8000/api/register',{
                name:name,
                email:email,
                passwoard:passwoard,
                passwoardR:passwoardR,
            }).then((r)=>console.log(r));
            
        }
    }
    return (
        <div className='indexlogin'>
            <form onSubmit={submit} action="" method="">
                <div className="imgcontainer">
                    <img src="img_avatar2.png" alt="Login" className="avatar" />
                </div>
                <div className="container">

                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" id='name' name="uname"  onChange={(e)=>setname(e.target.value)} />
                    {name === "" && accept && <p style={{color:"red", marginTop:"2px", fontSize:"small", fontWeight:"bold"}}>يرجى ادخال الاسم</p>}

                    <label htmlFor="em">Email</label>
                    <input type="email" name="" id="email" required placeholder='Enter Email' onChange={(e)=>setemail(e.target.value)}/>

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id='password'  onChange={(e)=>setpassoward(e.target.value)}/>
                    { passwoard.length < 5 && accept && <p style={{color:"red", marginTop:"2px", fontSize:"small", fontWeight:"bold"}}>يجب ان  تكون كلمة المرور اكبر من 5 احرف</p>}

                    <label htmlFor="passwordR"><b>Rd Password</b></label>
                    <input type="password" placeholder="Enter Rd Password" name="passwordR" id='passwordR'  onChange={(e)=>setpassowardR(e.target.value)}/>
                    {passwoardR !== passwoard && accept && <p style={{color:"red", marginTop:"2px", fontSize:"small", fontWeight:"bold"}}>يجب ان تتطابق كلمات المرور</p>}

                    <button  type="submit">Login</button>

                </div>
            </form>

        </div>
    );
}

export default Signup;