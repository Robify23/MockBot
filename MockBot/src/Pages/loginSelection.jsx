import React, { useState } from 'react';
import './loginSelection.css';
import { Link } from 'react-router-dom';

const SignupOptions = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="signup-options-container">
      <h1 className="welcome-text">Welcome to MockBot</h1>
      <button className="select-button" onClick={handleClick}>
        Get Started
      </button>

      {showOptions && (
        <div className="options">
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/signup'><div className="option-card candidate-card" onClick={() => alert("Candidate Login/Signup")}>
            <h2>Candidate</h2>
            <p>Prepare for interviews and get noticed by top companies.</p>
          </div></Link>
          <div className="option-card company-card" onClick={() => alert("Company Login/Signup")}>
            <h2>Company</h2>
            <p>Find ideal candidates tailored to your job requirements.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupOptions;
