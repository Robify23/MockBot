/*import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';
import './ATS.css';

const ATSResumeUpload = () => {
  const [resumeStatus, setResumeStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleResumeUpload = (event) => {
    event.preventDefault();
    const file = event.target.resume.files[0];

    if (!file) {
      alert('Please upload a resume!');
      return;
    }

    // Simulate ATS analysis
    setIsLoading(true);
    setTimeout(() => {
      const isAccepted = Math.random() > 0.5; // Randomly accept/reject for now
      setResumeStatus(isAccepted ? 'accepted' : 'rejected');
      setIsLoading(false);
    }, 2000); // Simulate 2-second ATS processing
  };

  return (
    <motion.div
      className="ats-resume-upload-container"
     
    >
      <motion.h1 className="namediff">
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/userpage'>MockBot</Link>
        </motion.h1>
      <motion.h1
        className="ats-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        Upload Your Resume for ATS Check
      </motion.h1>
      <form className="ats-form" onSubmit={handleResumeUpload}>
        <motion.div
          className="form-group"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <label htmlFor="resume">Upload Resume (PDF/Word):</label>
          <input type="file" id="resume" name="resume" accept=".pdf, .doc, .docx" required />
        </motion.div>

        <motion.button
          type="submit"
          className="submit-btn"
          whileHover={{ scale: 1.1, backgroundColor: '#9f5d00' }}
          transition={{ duration: 0.3 }}
        >
          {isLoading ? 'Analyzing...' : 'Submit Resume'}
        </motion.button>
      </form>

      {resumeStatus && (
        <motion.div
          className={`resume-status ${resumeStatus}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {resumeStatus === 'accepted' ? (
            <p className="accepted">Congratulations! Your resume has been accepted.</p>
          ) : (
            <p className="rejected">Sorry, your resume has been rejected. Please review and try again.</p>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ATSResumeUpload;*/
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ATS.css';

const ATSResumeUpload = () => {
  const [resumeStatus, setResumeStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleResumeUpload = (event) => {
    event.preventDefault();
    const file = event.target.resume.files[0];

    if (!file) {
      alert('Please upload a resume!');
      return;
    }

    // Simulate ATS analysis
    setIsLoading(true);
    setTimeout(() => {
      const isAccepted = Math.random() > 0.5; // Randomly accept/reject for now
      setResumeStatus(isAccepted ? 'accepted' : 'rejected');
      setIsLoading(false);
    }, 2000); // Simulate 2-second ATS processing
  };

  const closePopup = () => {
    setResumeStatus('');
  };

  return (
    <motion.div className="ats-resume-upload-container">
      <motion.h1 className="namediff">
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/userpage">MockBot</Link>
      </motion.h1>
      <motion.h1
        className="ats-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        Upload Your Resume for ATS Check
      </motion.h1>
      <form className="ats-form" onSubmit={handleResumeUpload}>
        <motion.div
          className="form-group"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <label htmlFor="resume">Upload Resume (PDF/Word):</label>
          <input type="file" id="resume" name="resume" accept=".pdf, .doc, .docx" required />
        </motion.div>

        <motion.button
          type="submit"
          className="submit-btn"
          whileHover={{ scale: 1.1, backgroundColor: '#9f5d00' }}
          transition={{ duration: 0.3 }}
        >
          {isLoading ? 'Analyzing...' : 'Submit Resume'}
        </motion.button>
      </form>

      {resumeStatus && (
        <motion.div
          className="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className={`popup-box ${resumeStatus}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`popup-icon ${resumeStatus}`}>
              {resumeStatus === 'accepted' ? '✔️' : '❌'}
            </div>
          
            <p>
              {resumeStatus === 'accepted'
                ? 'Your resume has been accepted.'
                : 'Your resume has been rejected. Please review and try again.'}
            </p>
            <button className="close-btn" onClick={closePopup}>OK</button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ATSResumeUpload;
