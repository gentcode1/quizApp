import React from "react";
import logo from "../images/klab.png";
import Instruction from "./Instruction";
import Categories from "./Categories";
import image from "../images/course.jpg";
import { Link } from "react-router-dom";

function home() {
  return (
    <div class="flex flex-col  md:flex-row lg:flex-row justify-center px-6 ">
      <div class="w-full lg:w-3/4  flex flex-col  md:flex-row lg:flex-row  border-md justify-center items-center  shadow-md">
        <div className="h-full w-full md:w-1/2 p-4 ">
          <img src={logo} alt="" className="w-24 h-8 mb-4 " />
          <h2 className="txt-md md:text-lg font-semibold">
            kLab Startups Academy Challenge
          </h2>
          <h1 className="txt-lg md:text-2xl font-bold text-blue-700">
            Instructions
          </h1>
          <div className="mr-4">
            <Instruction rule={"read the instruction carefully to start a quiz you need to click on the cotegory first and let's go to start"} />
            <Instruction rule={"quiz is going to take 10 minutes and you do five questions"} />
            <Instruction rule={"it's multiple choice and you need to select only  one answer and click on arrow to continue if you are sure cause there is no turn back"} />
            <Instruction rule={"make sure to do right choices and rememember it's time bound"} />
            
          </div>
          <div>
            <h1>Categories</h1>
            <div className="flex flex-col  md:flex-row lg:fle-row  mt-4">
              <a href="https://icons8.com/icon/0Da6k7SMq0hs/react"></a>
              <Categories
                icon={"https://img.icons8.com/dotty/80/000000/react.png"}
                name={"react"}
              />
              <Categories
                icon={"https://img.icons8.com/ios/50/000000/flutter.png"}
                name={"Flutter"}
              />
              <Categories
                icon={
                  "https://img.icons8.com/material-outlined/50/000000/django.png"
                }
                name={"Django"}
              />
              <Categories
                icon={"https://img.icons8.com/ios-filled/50/000000/laravel.png"}
                name={"Laravel"}
              />
            </div>
          </div>
        </div>
        <div
          class=" h-screen md:h-full bg-black opacity-55 lg:block w-full lg:w-1/2 bg-cover rounded-r-lg "
          style={{
            backgroundImage: "url(" + `${image}` + ")",
            backgroundColor: "white",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="flex justify-evenly items-center rounded-full bg-white p-2 h-20 w-20 hover:bg-gray-100 transition transform cursor-pointer  hover:scale-105 duration-300 ease-in-out">
              <Link to="/question"><button className="font-bold text-sm ">Let's Go</button></Link>
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
                <line x1="5" y1="12" x2="19" y2="12" />{" "}
                <line x1="15" y1="16" x2="19" y2="12" />{" "}
                <line x1="15" y1="8" x2="19" y2="12" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
