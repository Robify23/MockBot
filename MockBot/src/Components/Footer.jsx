import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-title">MockBot</p>
        </div>
        <div className="footer-right">
          <p>
            Made by <a href="https://www.linkedin.com/in/musabbiha-fatima-427957279/">Musabbiha</a> <a href="https://www.linkedin.com/in/maryam-malik-b118b8286/">Maryam</a> and <a href="https://www.linkedin.com/in/mahnoor-tanzeel-4a733a229/">Mahnoor</a>
          </p>
          <p>
            Questions or feedback? Email <a href="mailto:hello@interviewsby.ai">hello@MockBot</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
