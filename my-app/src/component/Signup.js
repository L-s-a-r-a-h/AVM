import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles/Login.css';
import axios from 'axios';

export default function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:5000/signup', { fullName: fullName, email: email, password: password })
      .then((res) => {
        console.log(res.data);

        if (res.data === 'Signup successful') {
          setIsSuccess(true);
          setMessage('Signup successful! Please return to the login page.');
        } else if (res.data === 'Email already in use') {
          setIsSuccess(false);
          setMessage('Email already in use. Please use a different email.');
        } 
        else if (res.data === 'Password must be at least 8 characters long.') {
          setIsSuccess(false);
          setMessage('Password must be at least 8 characters long.');
        } 
        else {
          setIsSuccess(false);
          setMessage('Please enter all required fields.');
        }
      })
      .catch((err) => {
        console.error(err);
        setIsSuccess(false);
        setMessage('An error occurred during signup. Please try again.');
      });
  };

  useEffect(() => {
    if (message === 'Signup successful. Please return to the login page.') {
      // Add any additional logic or navigation here if needed
    }
  }, [message]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleSubmit(event);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleSubmit]);

  return (
    <div>
      <div className="logincontainer">
        <div className="form-box">
          <h1 id="title">Sign Up</h1>
          <form action="" method="post">
            <div className="input-group">
              <div className="input-field">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className="input-field">
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="input-field">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="link-container">
              <p>Already have an account? <Link to="/login">Back to Login</Link></p>
            </div>
            <div className={`subbtn-field ${isSuccess ? 'success' : 'failure'}`}>
              <button type="button" id="submitBtn" onClick={handleSubmit}>
                Sign Up
              </button>
            </div>

            {message && ( <p className={`message ${isSuccess ? 'success' : 'failure'}`} style={{ textAlign: 'center', fontSize: '14px' }}>{message}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
