import './Signup.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [signupData, setSignupData] = useState({ username: '', email: '', password: '', university: 'harvard' });
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  // Handle input changes
  const handleSignupChange = (e) => setSignupData({ ...signupData, [e.target.name]: e.target.value });
  const handleLoginChange = (e) => setLoginData({ ...loginData, [e.target.name]: e.target.value });

  // Signup function
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        navigate('/userpage'); // Navigate to userpage on successful signup
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Signup Error:', error);
      alert('Failed to sign up. Please try again.');
    }
  };

  // Login function
  /*const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
       
      });
      const { token } = response.data; // Assuming the token is in response.data.token

      // Store the token in localStorage
      localStorage.setItem('token', token); 
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        navigate('/userpage'); // Navigate to userpage on successful login
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Login Error:', error);
      alert('Failed to log in. Please try again.');
    }
  };*/
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Make the POST request
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData), // loginData should have email and password
      });
  
      // If the response is successful
      if (response.ok) {
        const data = await response.json(); // Parse JSON data from response
  
        const { token } = data; // Extract token from the response data
  
        // Store the token in localStorage
        localStorage.setItem('token', token);
        console.log('Token stored in localStorage:', token);
  
        // Show success message
        alert(data.message);
  
        // Redirect to user page after login
        navigate('/userpage');
      } else {
        // If there was an error
        const data = await response.json();
        alert(data.message); // Display error message from server
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Login Error:', error);
      alert('Failed to log in. Please try again.');
    }
  };
  

  return (
    <div className="center">
      <div className="auth-main">
        <input type="checkbox" id="auth-chk" aria-hidden="true" />
        
        <div className="auth-signup">
          <form onSubmit={handleSignup}>
            <label htmlFor="auth-chk" aria-hidden="true" className="auth-label">Sign Up</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              className="auth-input"
              value={signupData.username}
              onChange={handleSignupChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="auth-input"
              value={signupData.email}
              onChange={handleSignupChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="auth-input"
              value={signupData.password}
              onChange={handleSignupChange}
            />
            <select
              name="university"
              className="auth-select"
              value={signupData.university}
              onChange={handleSignupChange}
              required
            >
              <option value="harvard">Riphah International University</option>
              <option value="mit">NUST University</option>
              <option value="stanford">COMSATS University</option>
              <option value="oxford">GIKI University</option>
              <option value="cambridge">CUST University</option>
            </select>
            <button type="submit" className="auth-button">Sign Up</button>
          </form>
        </div>

        <div className="auth-login">
          <form onSubmit={handleLogin}>
            <label htmlFor="auth-chk" aria-hidden="true" className="auth-label">Login</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="auth-input"
              value={loginData.email}
              onChange={handleLoginChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="auth-input"
              value={loginData.password}
              onChange={handleLoginChange}
            />
            <button type="submit" className="auth-button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;