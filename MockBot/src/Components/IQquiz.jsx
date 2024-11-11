import React, { useState } from 'react';
import './IQquiz.css';

function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false); // State for 3D flip
  const [totalScore, setTotalScore] = useState(0); // Store total score
  const [quizFinished, setQuizFinished] = useState(false); // Track if quiz is finished

  // Handle next button for non-final questions
  const handleNext = () => {
    if (selectedAnswer) {
      // Add the selected option's score to total score
      const score = getScore(selectedAnswer);
      setTotalScore(prevScore => prevScore + score);
    }

    setIsFlipping(true);
    setTimeout(() => {
      setSelectedAnswer(null);
      setCurrentQuestion((prev) => prev + 1);
      setIsFlipping(false);
    }, 600); // Match CSS transition duration
  };

  // Handle answer selection
  const handleAnswer = (option) => {
    setSelectedAnswer(option);
  };

  // Map each option to a specific score
  const getScore = (answer) => {
    const scoreMapping = {
      'Strongly disagree': 1,
      'Disagree': 2,
      'Neutral': 3,
      'Agree': 4,
      'Strongly Agree': 5
    };

    return scoreMapping[answer] || 0;
  };

  // Handle quiz submission
  const handleSubmit = () => {
    if (selectedAnswer) {
      // Add the selected option's score to total score
      const score = getScore(selectedAnswer);
      setTotalScore(prevScore => prevScore + score);
    }

    setQuizFinished(true); // Mark the quiz as finished
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
      {quizFinished ? (
        <div className="score-display">
          <h3>Your Total Score:</h3>
          <h4>{totalScore}</h4>
          <button className="retry-btn" onClick={() => window.location.reload()}>Try Again</button>
        </div>
      ) : (
        isLastQuestion ? (
          <button className="submit-btn" onClick={handleSubmit} disabled={!selectedAnswer}>
            Submit
          </button>
        ) : (
          <button className="next-btn" onClick={handleNext} disabled={!selectedAnswer}>
            Next Question
          </button>
        )
      )}
    </div>
  );
}

export default Quiz;
