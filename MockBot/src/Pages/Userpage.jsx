import React, { useState } from 'react';
import './Userpage.css'; 
import Card from '../Components/Card.jsx';
import {  FaClipboardList, FaFileAlt, FaTachometerAlt, FaBook } from 'react-icons/fa';
import techpic from '../Pictures/server.png';
import IQ from '../Pictures/development (1).png';
import Emotional from "../Pictures/emotional-intelligence (1).png";
import PDF from '../Pictures/pdf.png';
import ATS from '../Pictures/version.png';
import extra from '../Pictures/emotional-intelligence.png';
import { Link } from 'react-router-dom';


const Userpage = () => {
    // State to track the active section
    const [activeSection, setActiveSection] = useState(null);

    const handleSectionChange = (section) => {
        setActiveSection(section); // Set the active section based on the clicked menu item
    };

    return (
      <>
        <div className="sidebar">
            <div className="app-name"><Link style={{ textDecoration: 'none', color: 'inherit' }} to='/'>MockBot</Link></div>

            <div className="profile-section">
                <div className="profile-icon">M</div> 
                <div className="profile-info">
                    <div className="profile-name">Maryam Malik</div>
                    <div className="profile-plan">Manage Account (Free Plan)</div>
                </div>
            </div>
        
            <ul className="menu">
                <li className='menu-item' onClick={()=>handleSectionChange('dashboard')}><FaClipboardList style={{marginRight:"10px"}}></FaClipboardList>Dashboard</li>
                <li className="menu-item" onClick={() => handleSectionChange('interviewPreparation')}>
                <FaFileAlt style={{marginRight:"10px"}}></FaFileAlt>  Interview Preparation
                </li>
                <li className="menu-item" onClick={() => handleSectionChange('resumeOptimization')}>
                 < FaTachometerAlt style={{marginRight:"10px"}}></ FaTachometerAlt>   Resume Optimization
                </li>
                <li className="menu-item" onClick={()=>handleSectionChange('')}><FaBook style={{marginRight:"10px"}}></FaBook><Link  style={{ textDecoration: 'none', color: 'inherit' }} to='/'>Logout</Link></li>
            </ul>
        </div>

        <div className='screen'>
            {activeSection === 'interviewPreparation' && (
                <div className="card-container">
                    <Card 
                        icon={techpic}
                        title="Technical Test"
                        description="Ace your interview with AI-generated quizzes and flaunt your scores to land a job!"
                    />
                    <Card 
                        icon={IQ}
                        title="IQ Test"
                        description="Test Your Smarts: How High Can You Score?"
                    />
                    <Card 
                        icon={Emotional}
                        title="EQ Test"
                        description="Empathy Is Key: What’s Your Emotional Quotient?"
                    />
                </div>
            )}
            {activeSection === 'resumeOptimization' && (
                <div className="card-container">
                    <Card 
                        icon={PDF}
                        title="PDF Conversion"
                        description="Effortless PDF Conversion: Transform Your Files in Seconds!"
                        path="/pdf"
                    />
                    <Card 
                        icon={ATS}
                        title="ATS Friendly"
                        description="Pass the ATS and Impress the Hiring Team!"
                        path="/ats"
                    />
                    <Card 
                        icon={extra}
                        title="Online Assessment"
                        description="Crack online tests instantly with powerful LLM vision technology"
                    />
                </div>
            )}
             {activeSection === 'dashboard' && (
                <div className="card-container">
                  <Card 
                        icon={techpic}
                        title="Technical Test"
                        description="Ace your interview with AI-generated quizzes and flaunt your scores to land a job!"
                    />
                    <Card 
                        icon={IQ}
                        title="IQ Test"
                        description="Test Your Smarts: How High Can You Score?"
                    />
                    <Card 
                        icon={Emotional}
                        title="EQ Test"
                        description="Empathy Is Key: What’s Your Emotional Quotient?"
                    />
                    <Card 
                        icon={PDF}
                        title="PDF Conversion"
                        description="Effortless PDF Conversion: Transform Your Files in Seconds!"
                        path="/pdf"
                    />
                    <Card 
                        icon={ATS}
                        title="ATS Friendly"
                        description="Pass the ATS and Impress the Hiring Team!"
                        path="/ats"
                    />
                    <Card 
                        icon={extra}
                        title="Online Assessment"
                        subtitle="Crack online tests instantly with powerful LLM vision technology"
                        description=""
                    />
                </div>
            )}
        </div>
      </>
    );
};

export default Userpage;
