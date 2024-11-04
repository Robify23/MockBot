import React, { useState } from 'react';
import './IQquiz.css';

function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false); // State for 3D flip

  const handleNext = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setSelectedAnswer(null);
      setCurrentQuestion((prev) => prev + 1);
      setIsFlipping(false);
    }, 600); // Match CSS transition duration
  };

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
  };

  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className={`cardit ${isFlipping ? 'flip' : ''}`}>
      <h2>Question {currentQuestion + 1}</h2>
      <p>{questions[currentQuestion].questionText}</p>
      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className={`option ${selectedAnswer === option ? 'selected' : ''}`}>
            {option}
          </button>
        ))}
      </div>
      {isLastQuestion ? (
        <button className="submit-btn">Submit Quiz</button>
      ) : (
        <button className="next-btn" onClick={handleNext} disabled={!selectedAnswer}>
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;
