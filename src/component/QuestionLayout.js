import React, { useState, useEffect } from "react";
import Exam from "../images/exa.jpg";
import Question from "./questions";
import QuestionCounter from "./questionCounter";
import Timer from "./Timer";
import Navbar from "./Navbar";
import Result from "./result";
import Failure from "./Failure";

const url = "https://opentdb.com/api.php?amount=5&category=18&type=multiple";

const QuestionLayout = (props) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers
          ].sort(() => Math.random()-0.5)
        }));
        setQuestions(questions);
      });
  }, []);

  console.log(questions[4]);

  const handleAnswer = (answer) => {
    
    if (!showAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 20);
      
      }
    }
    setShowAnswers(true);
  };
  const handleNextQuestion = () => {
    let newIndex = currentIndex + 1;
     setCurrentIndex(newIndex);
    setShowAnswers(false);
     
  }
  let result;
  if(score>=50){
  result = <Result score={score} />;
}
if(score< 50){
  result = <Failure score={score} />;
}

  return questions.length > 0 ? (
    <div className="bg-primary h-screen flex flex-col">
      {currentIndex >= questions.length ? (
        result
      ) : (
        <>
          <div className="flex  justify-between">
            <div className="h-48 w-48 z-2 top-0 left-0 bg-white rounded-br-full  rounded-tl-lg">
              {/* <img className="z-2 top-0 left-0 absolute" src={Ellipse} alt="" /> */}
              <img className="z-20 top-0 left-0 h-32 w-32" src={Exam} alt="" />
            </div>

            <div className="p-4">
              <Navbar />
            </div>
          </div>

          <div className="flex flex-col md:flex-row  ml-4 md:ml-8 lg:ml-16 mr-4 md:mr-8 lg:mr-16">
            <div className="mr-12 md:mr-24 lg:mr-36">
              <QuestionCounter />
            </div>
            <div className="h-full w-full mr-12 md:mr-24 lg:mr-36">
              <Question
                showAnswers={showAnswers}
                handleAnswer={handleAnswer}
                data={questions[currentIndex]}
                handleNextQuestion={handleNextQuestion}
              />
            </div>
            
            <div className="mt-36 md:mt-56">
              <Timer score={score} />
            </div>
          </div>
        </>
      )}
    </div>
  ) : (
    <h1 className="flex flex-row justify-center items-center text-primary p-auto font-bold">
      Loading
    </h1>
  );
};

export default QuestionLayout;
