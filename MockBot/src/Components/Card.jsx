/*import React from 'react';
import './Card.css'; // Optional: Import styles for the Card component

const Card = ({ icon, title, subtitle, description }) => {
    return (
        <div className="card">

             <div className='border'>
            <h3>{title}</h3>
             <div className="icon">{icon}</div>
             </div>

            <p>{subtitle}</p>
            <p>{description}</p>
        </div>
    );
};

export default Card;*/
import React, { useState } from 'react';
import './Card.css'; // Assuming your styles are here
import { Link } from 'react-router-dom';

const FlipCard = ({ icon, title, description, path }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <img className="icon" src={icon} alt="" /> 
                    <h3>{title}</h3>
                </div>
                <div className="flip-card-back">
                    <h3 className='backtitle'>{title}</h3>
                    <p>{description}</p>
                    <button><Link style={{ textDecoration: 'none', color: 'inherit' }} to={path} >Open</Link></button>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
