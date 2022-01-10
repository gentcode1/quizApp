import React,{useState} from "react";
import image from '../images/exa.jpg'

// const getColor=

const Navbar = () => {
 
  return (
    <div class="flex w-full justify-evenly  text-xl">
      {/* <div class="  flex-grow mr-16 lg:flex lg:items-center lg:w-auto hidden  lg:mt-0 bg-white lg:bg-transparent text-black  lg:p-0 z-20"> */}
      {/* <ul class='list-reset lg:flex justify-end flex-1 '>
          <li>
            <a class="inline-block text-white no-underline hover:text-gray-800 font-bold hover:underline py-2 px-4"> 
              Home
            </a>
          </li>
          <li>
            <a class="inline-block text-white no-underline hover:text-gray-700  font-bold hover:underline py-2 px-4" >
              About
            </a>
          </li>
          <li>
            <a class="inline-block text-white no-underline hover:text-gray-700 font-bold hover:underline py-2 px-4">
              Contact
            </a>
          </li>
        </ul> */}
      {/* </div> */}
      {/* <div class="flex lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black pr-12  lg:p-0 z-20">
        <button className='mr-16  bg-white text-primary w-24 h-10 rounded-lg hover:underline font-bold shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>Logout</button>
        <button className='mr-16 w-24 h-10 ring-2 ring-primary rounded-lg hover:underline font-bold shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>Register</button>
        
        </div> */}
      <div className="px-2">
        <img
          alt="..."
          src="https://i.pinimg.com/236x/70/07/8b/70078bfdb7351f71c870dfaf965b0379.jpg"
          class="shadow-lg rounded-full mx-auto w-16 h-16"
        />
        <div className="pt-2 text-center">
          <h5 className="text-xl font-bold text-white">HyMe</h5>
          <p className="mt-1 text-sm text-white  font-semibold">
            hyme@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
