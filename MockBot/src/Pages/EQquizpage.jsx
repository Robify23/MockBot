import React from 'react';
import Quiz from '../Components/IQquiz';

const questions = [
  {
    questionText: "I know when to speak about my personal problems to others.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "Paris",
  },
  {
    questionText: "When I am faced with obstacles, I remember times I faced similar obstacles and overcame them.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "Mars",
  },
  {
    questionText: "I expect that I will do well on most things I try.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "William Shakespeare",
  },
  {
    questionText: "Other people find it easy to confide in me.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "I find it hard to understand the non verbal messages of other people.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "Some of the major events of my life have led me to re-evaluate what is important and not important.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "When my mood changes, I see new possibilities.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "Emotions are one of the things that make my life worth living.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: " I am aware of my emotions as I experience them.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: " I expect good things to happen.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: " I like to share my emotions with others.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "I expect good things to happen.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "When I experience a positive emotion, I know how to make it last.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "I arrange events others enjoy.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "I seek out activities that make me happy",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "I am aware of the non-verbal messages I send to others.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "I present myself in a way that makes a good impression on others.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "When I am in a positive mood, solving problems is easy for me.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "By looking at their facial expressions, I recognize the emotions people are experiencing.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "I know why my emotions change.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "When I am in a positive mood, I am able to come up with new ideas.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "I have control over my emotions.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "I easily recognize my emotions as I experience them.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "I motivate myself by imagining a good outcome to tasks I take on",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "I compliment others when they have done something well.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "I compliment others when they have done something well.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: " I am aware of the non-verbal messages other people send.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "When another person tells me about an important event in their life, I almost feel as though I have experienced this event myself.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: " When I feel a change in emotions, I tend to come up with new ideas.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "When I am faced with a challenge, I give up because I believe I will fail.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "I know what other people are feeling just by looking at them.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "I help other people feel better when they are down.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "I use good moods to help myself keep trying in the face of obstacles.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
    correctAnswer: "H2O",
  },
  {
    questionText: "It is difficult for me to understand why people feel the way they do.",
    options: ["Strongly disagree", "Disagree", "Nuetral", "Agree", "Strongly Agree"],
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
