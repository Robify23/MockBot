import React, { useState } from 'react';
import './AppDescription.css';

function AppDescription() {
  const [jobDescription, setJobDescription] = useState('');

  const handleInputChange = (e) => {
    setJobDescription(e.target.value);
  };

  const handleGenerateQuestions = () => {
    alert('Generating questions for: ' + jobDescription);
  };

  return (
    <div>
      {/* Glass effect with gradient background */}
      <div className="glass-container">
        <h1 className="glass-heading">AI provides everything you need</h1>
        <p className="glass-subheading">
          Automatically, <span className="glass-text-highlight">in seconds!</span>
        </p>
      </div>

      <div className="container">
        {/* Left Column for text */}
        <div className="left-content">
          <h1 className="main-heading">Give yourself an unfair advantage in interviews</h1>
          <p className="subheading">
            Wouldn't it be nice to know which questions the recruiters will ask you <em>(and how to answer them)</em> before the interview?
          </p>

          <div className="step-section">
            <div className="icon">
              <span role="img" aria-label="clipboard">📋</span>
            </div>
            <h2 className="step-title">Step 1 - Generate questions</h2>
            <p className="step-description">
              Paste a job description, receive <span className="highlight">realistic interview questions</span>, tailored to the role.
            </p>
            <ul className="features-list">
              <li>✔ Behavioral and technical questions</li>
              <li>✔ Works for all job descriptions and industries</li>
            </ul>
          </div>
        </div>

        {/* Right Column for job description form */}
        <div className="right-content">
          <div className="job-description-section">
            <div className="job-tags">
              <button>Marketing Specialist</button>
              <button>Customer Service Representative</button>
              <button>Sales Representative</button>
              <button>Human Resources Specialist</button>
              <button>Data Analyst</button>
              <button>UX/UI Designer</button>
              <button>QA Engineer</button>
            </div>

            <textarea
              className="job-description-textarea"
              placeholder="Paste your job description here..."
              value={jobDescription}
              onChange={handleInputChange}
            ></textarea>

            <button className="generate-btn" onClick={handleGenerateQuestions}>
              Generate Questions <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppDescription;
