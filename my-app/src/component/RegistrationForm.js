import React, { Component } from 'react';
import { useState } from "react";




const RegistrationForm = () => {
    //get form data sent to the database
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    //check database
    function validateForm() {

        return email.length > 0 && password.length > 0;
    
      }
    function handleSubmit(event) {

        event.preventDefault();
    
      }

    return (
        <div >
            <form  onSubmit={handleSubmit}>
                <div class="container">
                    <h1>Create Account</h1>
                    <p> Fill in the form to create an account.</p>


                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required/> 

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" value = {password} required onChange={(e) => setPassword(e.target.value)}/>

                    <label for="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw-repeat" id="psw-repeat" required/>

                
    
                 

                    <button type="submit" class="submit" disabled={!validateForm()} >Submit</button>
                </div>

                <div class="container signin">
                    <p>Already have an account? <a href="/Login">Sign in</a>.</p>
                </div>
            </form>
        </div>

    );
}


export default RegistrationForm;