import React from 'react';
import Quiz from '../Components/IQquiz';

const questions = [
  {
    questionText: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Rome"],
    correctAnswer: "Paris",
  },
  {
    questionText: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correctAnswer: "Mars",
  },
  {
    questionText: "Who wrote 'Hamlet'?",
    options: ["William Shakespeare", "Mark Twain", "Jane Austen", "Charles Dickens"],
    correctAnswer: "William Shakespeare",
  },
  {
    questionText: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "H2"],
    correctAnswer: "H2O",
  }
];

function IQquizpage() {
  return (
    <div className="quiz-container">
      <Quiz questions={questions} />
    </div>
  );
}

export default IQquizpage;
