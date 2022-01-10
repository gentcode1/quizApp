import React, { useState } from "react";
import "./Question.css";

const Questions = ({
  handleNextQuestion,
  showAnswers,
  handleAnswer,
  data: { question, correct_answer, answers },
}) => {
  const [name, setName] = useState("");

  

  // const handleChange = (e) => {
  //   let {name, value } = e.target
  //   setName({
  //     [name]:value
  //   })
    
  // };
  

  return (
    <div className=" h-80 bg-white question text-xl">
      <div className="mx-12  p-4">
        <h2
          className="font-semi-bold "
          dangerouslySetInnerHTML={{ __html: question }}
        ></h2>
      </div>

      <div className="radio-buttons flex flex-col mx-16 my-4">
        {answers.map((answer) => {
          const correctColor = showAnswers
            ? answer === correct_answer
              ? "text-green-500"
              : "text-red-500"
            : "text-black";

          return (
            <label className={`${correctColor} mt-auto`}>
              <input
                className={`mr-4`}
                id={answer}
                value={answer}
                name="questions"
                type="radio"
                onChange={(e)=>setName(e.target.value)}
                onClick={() => handleAnswer(answer)}
              />
              {answer}
            </label>
          );
        })}
      </div>

      <div className=" flex justify-around mt-8 my-4">
        {showAnswers && (
          <button className="ring-1 ring-black md:ring-primary rounded-lg h-8 w-16"
        onClick={handleNextQuestion}>
          <svg
            class="h-8 w-8 text-black md:text-primary "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>)}
        
      </div>
    </div>
  );
};

export default Questions;
