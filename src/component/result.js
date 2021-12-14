import React from "react";
import Navbar from "./Navbar";
import ResultImage from "../images/congz.jpg";
import Progress from "./Progress";
import Success from "../images/success.webp";
import Confetti from "react-confetti";

const Result = () => {
  return (
    <div className="bg-primary h-screen flex flex-col">
      <Confetti />
      <div className="flex  justify-between">
        <div className="h-48 w-48 z-2 top-0 left-0 bg-white rounded-br-full  rounded-tl-lg">
          {/* <img className="z-2 top-0 left-0 absolute" src={Ellipse} alt="" /> */}
          <img
            className="z-20 top-0 left-0 h-32 w-32"
            src={ResultImage}
            alt=""
          />
        </div>

        <div className='mt-8'>
          <Navbar />
        </div>
      </div>

      <div className="flex flex-col ml-52 bg-white mr-44 h-96 px-36 py-2 text-xl">
        <div className="w-full ">
          <div className="w-3/5">
            <p className="mb-4 text-primary">
              Congratulation HyMe You Have Made It{" "}
            </p>
            <Progress progressPercentage={75} />
          </div>
         
          <div className="flex justify-between items-center ">
            <div>
              <div className="flex">
                <svg
                  class="h-8 w-8 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p>
                  Passed Questions:<span className="ml-2">4</span>
                </p>
              </div>
               
              <div className="flex">
                <svg
                  class="h-8 w-8 text-black"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <line x1="18" y1="6" x2="6" y2="18" />{" "}
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                <p>
                  Failled Questions:<span className="ml-2">1</span>
                </p>
              </div>

              <p>
                Attempts:<span className="mx-2">5</span> Questions
              </p>
            </div>
            <div>
              <img src={Success} alt="" />
            </div>
          </div>
          <div className='flex'>
            <p className='text-md'>
              You can share your success and download your certificate pdf file
              by clicking on{" "}
              <span className="text-primary font-semibold"> Download</span>
            </p>
          </div>
          
        </div>
       
        </div>
        
       <div className='flex flex-row justify-between'> 
      <div className='flex flex-row ml-52 mt-8'>
        <p className="text-white font-semibold mr-2">Share</p>
        <svg
          class="h-5 w-5 text-white mr-2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <circle cx="6" cy="12" r="3" /> <circle cx="18" cy="6" r="3" />{" "}
          <circle cx="18" cy="18" r="3" />{" "}
          <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />{" "}
          <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" />
        </svg>
        <svg
          class="h-5 w-5 text-white mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
        <svg
          class="h-5 w-5 text-white "
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
          <rect x="2" y="9" width="4" height="12" />{" "}
          <circle cx="4" cy="4" r="2" />
          </svg>
        </div>
        <div className=" flex mr-16 mb-16 h-16 w-16 ring-2  ring-white rounded-full bg-white items-center justify-center "> Done</div>
      </div>
    </div>
  );
};

export default Result;
