import React, { Component } from 'react';
import { useForm } from "react-hook-form";
import {useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    function validateForm() {

        return email.length > 0 && password.length > 0;
    
      }

    function handleSubmit(event) {

        event.preventDefault();
    
      }

    return (
        <div >
            <h1>HI</h1>
            <form onSubmit={handleSubmit}>

                <div >
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" value = {email} required onChange={(e) => setEmail(e.target.value)}/>

                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" value = {password} required onChange={(e) => setPassword(e.target.value)}/>

                    <button type="submit" disabled={!validateForm()}>Login</button>
                </div>

                <div >
                    <span > <a href="/Register">Create Account</a></span>
                </div>
            </form>
            

        </div>
    );
}
