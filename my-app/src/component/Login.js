import React, { Component } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import "./styles/Login.css";

export default function Login() {
   
    function signinBtn(){
        let signupBtn = document.getElementById("signupBtn");
        let signinBtn = document.getElementById("signinBtn");
        let nameField = document.getElementById("nameField");
        let title = document.getElementById("title");
        nameField.style.maxHeight = "0";
        title.innerHTML = "Sign In";
        signupBtn.classList.add("disable");
        signinBtn.classList.remove("disable");
    }

    function signupBtn (){
        let signupBtn = document.getElementById("signupBtn");
        let signinBtn = document.getElementById("signinBtn");
        let nameField = document.getElementById("nameField");
        let title = document.getElementById("title");
        nameField.style.maxHeight = "60px";
        title.innerHTML = "Sign Up";
        signupBtn.classList.remove("disable");
        signinBtn.classList.add("disable");
    }

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
        <div>
            <div class="container">
            <div class="form-box">
                <h1 id="title">Sign Up</h1>
                <form action="LoginDB.php" method="post">
                    <div class="input-group">
                        <div class="input-field" id="nameField">
                            <i class="fa-solid fa-user"></i>
                            <input type="text" placeholder="Name" name="fullName" required />
                        </div>

                        <div class="input-field">
                            <i class="fa-solid fa-envelope"></i>
                            <input type="email" placeholder="Email" name="email" required />
                        </div>

                        <div class="input-field">
                            <i class="fa-solid fa-lock"></i>
                            <input type="password" placeholder="Password" name="password" required />
                        </div>
                        <p>Forgot password? <a href="#"> Click Here</a></p>
                    </div>
                    <div class="btn-field">
                        <button type="button" id="signupBtn" onClick={signupBtn}>Sign Up</button>
                        <button type="button" id="signinBtn" class="disable" onClick={signinBtn}>Sign In</button>
                    </div>
                </form>
            </div>
        </div>


        </div>
    );
}
