import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [faqs] = useState([
    { question: "Why did you make this site?", id: 1 },
    { question: "How accurate are the AI interview questions and feedback?", id: 2 },
    { question: "Can I use this site to practice interviews for any job role?", id: 3 },
    // Add more FAQs as needed
  ]);

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h2>Frequently asked questions</h2>
        <p>How can we help you?</p>
      </div>

      <div className="faq-list">
        {faqs.map(faq => (
          <div key={faq.id} className="faq-item">
            <p>{faq.question}</p>
            <span className="arrow">→</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
