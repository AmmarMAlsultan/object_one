import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
const Edit = () => {
    const [show_user, getuesredit] = useState([]);
    const [update_name, setnameupdate] = useState([]);
    const [update_email, setemailupdate] = useState([]);
    const [update_passowrd, setpassowrdupdate] = useState([]);
    const [accept, setaccept] = useState(false);
    const user_id = window.location.pathname.split("/").slice(-1)[0];
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/user/showbyid/${user_id}`)
            .then((res) => res.json())
            .then((data) => getuesredit(data));
    }, []);
    async function submit(e) {
        e.preventDefault();
        let flag = true;
        setaccept(true)
        if (update_passowrd.length < 5 || update_name === "") {
            flag = false;
        } else {
            flag = true
        }
        try {
            if (flag) {

                let respons = await axios.post(`http://127.0.0.1:8000/api/user/update/${user_id}`, {
                    name: update_name,
                    email: update_email,
                    password: update_passowrd,
                });
                if (respons.status === 200) {
                    window.location.pathname = "/dashboad/users";
                }
            }
        } catch (error) {
            if (error.response) {
                console.log('Error Data:', error.response.data);
                console.log('Error Status:', error.response.status);
            } else {
                console.log('Error Message:', error.message);
            }
        }
    }
    const user_edit = show_user.map((data, index) =>
        <div key={index} className="card-body">
            <div className="form-group">
                <label htmlFor='name'>Name:</label>
                <input type="text" name="" id="name" defaultValue={data.name} onChange={(e) => setnameupdate(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="" id="email" defaultValue={data.email} onChange={(e) => setemailupdate(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="passowrd">Passowrd:</label>
                <input type="password" name="" id="passowrd" defaultValue={""} onChange={(e) => setpassowrdupdate(e.target.value)} />
            </div>
        </div>
    );
    return (
        <div>
            <div className="card">
                <form onSubmit={submit} style={{ width: "100%" }}>
                    <div className="card-header">
                        <h2>Update The User</h2>
                    </div>
                    {user_edit}
                    <div className="card-footer">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Edit;
