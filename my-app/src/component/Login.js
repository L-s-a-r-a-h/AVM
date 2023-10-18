import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './styles/Login.css';
import axios from 'axios'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  

  function handleSubmit(event) {
    event.preventDefault();
  
    axios.post('http://localhost:5000/users', { email, password })
      .then((res) => {
        console.log(res);
  
        if (res.data === "Login Successfully") {
          setMessage('Login successful. Redirecting...');
          navigate('/Home');
        } 
        else if(res.data === 'Please enter all required fields.') {
          setMessage('Please enter all required fields.');
        } 
        else if(res.data === 'Invalid email or password') {
          setMessage('Invalid email or password');
        } 
        else {
          setMessage('Login failed. Please check your credentials.');
        }
      })
      .catch((err) => {
        console.log(err);
        setMessage('An error occurred during login. Please try again.');
      });
  }
  
  useEffect(() => {
    if (message === 'Login successful. Redirecting...') {
      navigate('/Home');
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
          <h1 id="title">Sign In</h1>
          <form action="" method="post">
            <div className="input-group">
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
              <div className="link-container">
              <p>
                Forgot password? <a href="#">Click Here</a>
              </p>
              <p>
                Don't have an account? <Link to="/Signup">Sign Up</Link>
              </p>
            </div>
          </div>
            
           
            <div className="subbtn-field">
              <button type="button" id="submitBtn" onClick={handleSubmit}>
                Login
              </button>
            </div>
            {message && <p className="error-message">{message}</p>}

            
          </form>
        </div>
      </div>
    </div>
  );
}
