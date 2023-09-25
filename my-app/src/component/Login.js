import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import "./styles/Login.css";

export default function Login() {
   
    function signinBtn(){
        let signupBtn = document.getElementById("signupBtn");
        let signinBtn = document.getElementById("signinBtn");
        let submitBtn = document.getElementById("submitBtn");
        let nameField = document.getElementById("nameField");
        let title = document.getElementById("title");
        nameField.style.maxHeight = "0";
        title.innerHTML = "Sign In";
        signupBtn.classList.add("disable");
        signinBtn.classList.remove("disable");
        submitBtn.classList.remove("disable");
    }

    function signupBtn (){
        let signupBtn = document.getElementById("signupBtn");
        let signinBtn = document.getElementById("signinBtn");
        let submitBtn = document.getElementById("submitBtn");
        let nameField = document.getElementById("nameField");
        let title = document.getElementById("title");
        nameField.style.maxHeight = "60px";
        title.innerHTML = "Sign Up";
        signupBtn.classList.remove("disable");
        signinBtn.classList.add("disable");
        submitBtn.classList.add("disable");
    }

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
   

    const [message, setMessage] = useState("");
    const [showSubmitButton, setShowSubmitButton] = useState(false); // Track if Submit button should be displayed

  
    //test login

    const handleSubmit = async event => {

      
        // Check if both email and password are provided
        if (!email || !password) {
            setMessage('Please enter both email and password.');
            return; // Stop login attempt if fields are not filled
        }

        // Simulate authentication logic
        const testUsername = 'aaa';
        const testPassword = 'bbb';

        if (email === testUsername && password === testPassword) {
            localStorage.setItem('authenticated', true);
            navigate('/Home');
        } else {
            setMessage('Incorrect Login details. Try again or create an account.');
        }
    };

    const toggleSubmitButton = () => {
        setShowSubmitButton(true);
    };


    return (
        <div>
            <div class="container">
            <div class="form-box">
                <h1 id="title">Sign Up</h1>
                <form action="LoginDB.php" method="post">
                    <div class="input-group">
                        <div class="input-field" id="nameField">
                            <i class="fa-solid fa-user"></i>
                            <input 
                                type="text" 
                                placeholder="Name" 
                                name="fullName" required />
                        </div>

                        <div class="input-field">
                            <i class="fa-solid fa-envelope"></i>
                            <input 
                                type="email" 
                                placeholder="Email" 
                                name="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>

                        <div class="input-field">
                            <i class="fa-solid fa-lock"></i>
                            <input 
                                type="password" 
                                placeholder="Password" 
                                name="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required />
                        </div>
                        <p>Forgot password? <a href="#"> Click Here</a></p>
                    </div>
                    <div class="btn-field">
                        <button type="button" id="signupBtn" onClick={signupBtn}>Sign Up</button>
                        <button type="button" id="signinBtn" class="disable" onClick={() => { signinBtn(); toggleSubmitButton(); }}>Sign In</button>
                        
                    </div>
                    <div class="subbtn-field">
                        <button type="button" id="submitBtn" onClick={handleSubmit}>Submit</button>
                    </div>
                    {message && <p className="error-message">{message}</p>}
                </form>
            </div>
        </div>


        </div>
    );
}
