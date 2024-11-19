import {Link} from "react-router-dom";
import React, { useState } from 'react';
import './IQquiz.css';

function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      setTotalScore((prevScore) => prevScore + (selectedAnswer + 1));
    }

    setIsFlipping(true);
    setTimeout(() => {
      setSelectedAnswer(null);
      setCurrentQuestion((prev) => prev + 1);
      setIsFlipping(false);
    }, 600);
  };

  const handlePrevious = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setSelectedAnswer(null);
      setCurrentQuestion((prev) => prev - 1);
      setIsFlipping(false);
    }, 600);
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setTotalScore((prevScore) => prevScore + (selectedAnswer + 1));
    }
    setQuizFinished(true);
  };

  const isLastQuestion = currentQuestion === questions.length - 1;
  const isFirstQuestion = currentQuestion === 0;

  return (
    <div className={`quiz-container`}>
      {quizFinished ? (
        <div className="score-dis">
          <h3>Your Total Score:</h3>
          <h4>{totalScore}</h4>
          <button className="home" >
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/userpage">Go Back Home</Link>
          </button>
        </div>
      ) : (
        <div className={`quiz-card ${isFlipping ? 'flip' : ''}`}>
          <div className="front">
            <h2>Question {currentQuestion + 1}</h2>
            <p>{questions[currentQuestion].questionText}</p>
            {questions[currentQuestion].image && (
              <div className="question-image">
                <img
                  src={questions[currentQuestion].image}
                  alt="Question Visual"
                  className="question-img"
                />
              </div>
            )}
            <div className="qoptions">
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className={`qoption ${selectedAnswer === index ? 'selected' : ''}`}
                  onClick={() => handleAnswer(index)}
                >
                  <img src={option.src} alt={option.label} className="option-img" />
                </div>
              ))}
            </div>
          </div>
          {isFirstQuestion ? (
            <button className="previous-btn" disabled>
              Previous
            </button>
          ) : (
            <button className="previous-btn" onClick={handlePrevious}>
              Previous
            </button>
          )}
          {isLastQuestion ? (
            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
            >
              Submit
            </button>
          ) : (
            <button
              className="next-btn"
              onClick={handleNext}
              disabled={selectedAnswer === null}
            >
              Next Question
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;


