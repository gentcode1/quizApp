import React, { useState, useEffect } from "react";
import Exam from "../images/exa.jpg";
import Question from "./questions";
import QuestionCounter from "./questionCounter";
import Timer from "./Timer";
import Navbar from "./Navbar";

const url = "https://opentdb.com/api.php?amount=5&category=18&type=multiple";

const QuestionLayout = () => {
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

  return questions.length > 0 ? (
    <div className="bg-primary h-screen flex flex-col">
      {currentIndex >= questions.length ? (
        <h1 className="text-3xl">your score is {score}%</h1>
      ) : (
        <>
          <div className="flex  justify-between">
            <div className="h-48 w-48 z-2 top-0 left-0 bg-white rounded-br-full  rounded-tl-lg">
              {/* <img className="z-2 top-0 left-0 absolute" src={Ellipse} alt="" /> */}
              <img className="z-20 top-0 left-0 h-32 w-32" src={Exam} alt="" />
            </div>

            <div className="mt-8">
              <Navbar />
            </div>
          </div>

          <div className="flex  ml-16 mr-16">
            <div className="mr-36">
              <QuestionCounter />
            </div>
            <div className="h-80 w-full mr-36">
              <Question
                showAnswers={showAnswers}
                handleAnswer={handleAnswer}
                  data={questions[currentIndex]}
                  handleNextQuestion={handleNextQuestion}
              />
            </div>
            )
            <div className="mt-56">
              <Timer />
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
