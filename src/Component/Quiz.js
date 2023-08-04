import React from "react";
import { useState } from "react";
import {Data} from "./Data" //here I used {data} because i exported my component as named export that's why recived or import component like this
import "./Quiz.css"


//here i created one arrow function for declare all states which needed for app updation
const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0); //this state is used for display active  question ,after app execution which question should be display first or which question you want to display first
  
  const [selectedAnswer, setSelectedAnswer] = useState(""); //this state stores selected answer during quiz 
  const [showResult, setShowResult] = useState(false); //this will display result after complete the quiz
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null); //this will stores index number of question after select an answer
  const [result, setResult] = useState({ // default set value 0 , after quiz complete it will changed 
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = Data; // extract question property from data object using destructuring
  const { question, choices, correctAnswer } = questions[activeQuestion]; // extract specific property from data object and set equal to current question index

  const onClickNext = () => { //created next button function
    setSelectedAnswerIndex(null); //first inedx should be null ,set result state using condtion. when answer is selected than update score with correct answers .prev used as an argument for get data otherwise update wrong ans state  
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    
    //this condtion used for check status of question and move to next
    if (activeQuestion !== questions.length - 1) { //if active question is not last one of quiz than execute first part of if 
      setActiveQuestion((prev) => prev + 1); //it will move next 
    } else {
      setActiveQuestion(0); //if last one than set state 0 and display result
      setShowResult(true);
    }
  };

  //after ans. selection it will check ans. and correct ans. 
  const onAnswerSelected = (answer, index) => { //take two params for get selected ans. and index of question
    setSelectedAnswerIndex(index); //first need to set selected index for select the ans. from quiz without index can't select the ans. 
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  //if question number is less than 10 than it will add 0 before the number
  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);
  
  const restartQuiz = () => { //restart used for play again  and set all state by default value
   
    setActiveQuestion(0);
    setSelectedAnswer("");
    setShowResult(false);
    setSelectedAnswerIndex(null);
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    });
  }
  return (
    <div className="quiz-container">
      {" "} 
      {!showResult ? (
        <div>
          <div>
            <span className="active-question-no">
              {" "}
              {/* it will increse the number of question */}
              {addLeadingZero(activeQuestion + 1)}{" "} 
            </span>{" "}
            <span className="total-question">
              {" "}
              {/* it will display total number of question in quiz */}
              /{addLeadingZero(questions.length)}
            </span>
          </div>{" "}
          {/* display question */}
          <h2> {question} </h2>{" "}
          <ul>
            {" "}
            {/* display options */}
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index ? "selected-answer" : null
                }
              >
                {" "}
                {answer}{" "}
              </li>
            ))}{" "}
          </ul>{" "}
          <div className="flex-right">
            <button
              onClick={onClickNext}  //next button
              disabled={selectedAnswerIndex === null}
            >
              {" "}
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}{" "} 
              {/* //if last question than display finish button */}
            </button>{" "}
          </div>{" "}
        </div>
      ) : (
        <div className="result">
          <h3> Result </h3>{" "}
          <p>
            Total Question: <span> {questions.length} </span>{" "}
          </p>{" "}
          <p>
            Total Score: <span> {result.score} </span>{" "}
          </p>{" "}
          <p>
            Correct Answers: <span> {result.correctAnswers} </span>{" "}
          </p>{" "}
          <p>
            Wrong Answers: <span> {result.wrongAnswers} </span>{" "}
          </p>{" "}
          <button onClick={restartQuiz} style={{marginLeft:"25px"}}>Restart quiz</button>
        </div>
      )}{" "}
    </div>
  );
};

export default Quiz;
