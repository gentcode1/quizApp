import React from "react";
import Navigation from "./navigation";
import LeftRect from "../images/Rectangle 2.svg";
import RightRect from "../images/Rectangle 1.svg";
import polygon from "../images/Polygon 1 (1).png";
import homeImage from "../images/home2 1 (1).png";

function home() {
  return (
    <div class="h-screen bg-black-700  flex flex-col">
      <div class="relative ">
        <div class="">
          <img class="absolute left-0 top-0 " src={LeftRect} alt="" />
        </div>
        <div className="home__nav p-8 ">
          <Navigation home='Home' about='About'/>
        </div>
      </div>
      <div class="flex flex-row  justify-evenly pt-12">
        <div class="flex pl-32 w-full h-full ">
          <div class=" flex flex-col  w-1/4 h-full rounded-lg ring-1 ring-gray-400 ring-opacity-5 shadow-xl overflow-hidden bg-white items-center justify-evenly m-4 relative">
            <img class="absolute top-0" src={polygon} alt="" />
            <h1 class="text-3xl font-bold pt-8 ">Guidelines </h1>
            <p class="p-4  opacity-80 text-xl">
              quiz contain five questions<br/> Its done in 15 minutes<br/>  read  the
              question carefully  and tick the right answer  click on Finish if you are done
              with all questions .<br/> goodluck!
            </p>
            <a class="mx-auto lg:mx-0 hover:underline bg-primary text-white font-bold rounded-lg mt-4 lg:mt-0 py-2 px-6 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Start Now
            </a>
          </div>
          <div class="pl-24">
            <img src={homeImage} alt="" />
          </div>
        </div>
      </div>

      <div class="">
        <img class="absolute bottom-0 right-0" src={RightRect} alt="" />
      </div>
    </div>
  );
}

export default home;
