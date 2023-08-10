import React, { Component } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const [user, setUser] = useState()

    const [message, setMessage] = useState("");

    function validateForm() {

        return email.length > 0 && password.length > 0;

    }
    //test login
    const users = [{ username: "aaa", password: "bbb" }];

    const handleSubmit = async event => {

        event.preventDefault();
        // ---------------authenticate user log in from server ---------------------------
        //const user = { email, password };
        // const url = ""; // server url need to create later
        // const response = await fetch(url,user);
        // setUser(response.data);
        // store the user in localStorage

        // localStorage.setItem('user', response.data);

        const account = users.find((user) => user.username === email);

        if (account && account.password === password) {
            localStorage.setItem("authenticated", true);
            navigate("/Home");
        } else {
            setMessage("Incorrect Login details.Try again. or create account");
        }


    }
    if (user) {
        return <div>{user.name} is loggged in</div>;
    }
    return (
        <div >
            <h1>HI</h1>
            <form onSubmit={handleSubmit}>

                <div >
                    <p>{message}</p>
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button type="submit" disabled={!validateForm()}>Login</button>
                </div>

                <div >
                    <span > <a href="/Register">Create Account</a></span>
                </div>
            </form>


        </div>
    );
}
