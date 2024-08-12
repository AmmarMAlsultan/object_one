import React from 'react';
import { useEffect, useState } from 'react';
import Page404 from "../layout/Page404"
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
const Users = () => {

    const [showuser, getuser] = useState([]);
    useEffect(() => {
        document.title = "Edit User";
    }, []);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/user/show")
            .then((res) => res.json())
            .then((data) => getuser(data));
    }, [getuser]);

    function userdelete(id) {
        console.log(id);
        axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`)
            .then(() => {
                // بعد الحذف بنجاح، نقوم بتصفية المستخدمين المحدثين
                const updatedUsers = showuser.filter(user => user.id !== id);
                // تحديث حالة showuser بالمستخدمين المحدثين
                getuser(updatedUsers);
            })
    }
    let i = 1;
    const showusers = showuser.map((user, index) =>
        <tr key={index} style={{ textAlign: "center", boxShadow: "1px 1px 8px 1px #c2c2c2" }}>
            <td>{index = i++}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.created_at}</td>
            <td>
                <Link to={`${user.id}`}><i className="fa-regular fa-pen-to-square" style={{ marginRight: "8px", cursor: "pointer", color: "#009aff" }} ></i></Link>
                <i className="fa-solid fa-trash" style={{ cursor: "pointer", color: "#a82323" }} onClick={() => userdelete(user.id)}></i>
            </td>
        </tr>
    );

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", margin: "10px" }}>
            {
                window.localStorage.getItem("email") ?
                    <table style={{
                        width: "80%",
                        tableLayout: "fixed",
                        border: "1px solid #000",
                        justifyContent: 'center'
                    }}>
                        <thead style={{ background: "#b7c0c0", height: "34px" }}>
                            <tr style={{ textAlign: "center" }}>
                                <th>#</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>created at</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showusers}
                        </tbody>
                    </table>
                    :
                    <Page404 />
            }
        </div>
    );
}

export default Users;
