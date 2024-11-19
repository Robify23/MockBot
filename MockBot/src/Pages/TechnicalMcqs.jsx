import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TechnicalMcqs.css";

const App = () => {
  const [timer, setTimer] = useState(60);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const questions = [
    {
      question: "What does UI stand for in UI/UX design?",
      options: ["User Interaction", "User Integration", "User Interface", "Universal Interface"],
    },
    {
      question: "Which principle is essential in UX design for ensuring ease of use?",
      options: ["Consistency", "Aesthetics", "Flexibility", "Adaptability"],
    },
    {
      question: "Which color scheme is typically used to ensure accessibility for visually impaired users?",
      options: ["Monochromatic", "High Contrast", "Triadic", "Muted Colors"],
    },
    {
      question: "What is the main goal of a wireframe in UI/UX design?",
      options: ["To add animations", "To determine the color scheme", "To outline the layout and structure", "To finalize the typography"],
    },
    {
      question: "Which of the following tools is commonly used for prototyping in UI/UX design?",
      options: ["Adobe Lightroom", "Figma", "Visual Studio Code", "Blender"],
    },
  ];

  useEffect(() => {
    if (!isSubmitted && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }

    if (timer === 0 && !isSubmitted) {
      handleSubmit();
    }
  }, [timer, isSubmitted]);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      setSelectedOption(null);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    alert("Time's up! Quiz submitted");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="technical">
      <button className="back-arrow" onClick={handleBack} disabled={isSubmitted || timer === 0}>
        ←
      </button>
      <div className="mcq-container">
        <div className="headertech">
          <div className="timer">Time Left: {timer}s</div>
        </div>
        <div className="question-box">
          <h2>{questions[currentQuestion].question}</h2>
          <ul className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <label className="option">
                  <input
                    type="checkbox"
                    name={`question-${currentQuestion}`}
                    value={option}
                    disabled={timer === 0 || isSubmitted} // Disable selection if time is up or quiz is submitted
                    checked={selectedOption === option}
                    onChange={() => setSelectedOption(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer">
          <button
            className="prev-btn"
            onClick={handlePrev}
            disabled={timer === 0 || currentQuestion === 0 || isSubmitted} // Disable Prev button if time is up or quiz is submitted
          >
            Prev
          </button>
          {currentQuestion < questions.length - 1 ? (
            <button
              className="next-btn"
              onClick={handleNext}
              disabled={timer === 0 || !selectedOption || isSubmitted} // Disable Next button if time is up or quiz is submitted
            >
              Next
            </button>
          ) : (
            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={timer === 0 || !selectedOption || isSubmitted} // Disable Submit button if time is up or quiz is submitted
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;