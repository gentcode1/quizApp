import React from "react";

const Instruction = ({ rule }) => {
  return (
    <div class=" mx-auto relative">
      <div class="border-l-2 mt-2">
        <div class="transform transition cursor-pointer hover:-translate-y-2  ml-10 relative flex items-center px-2 py-2  text-white rounded  flex-col md:flex-row space-y-1 md:space-y-0">
          <div class="w-2 h-2 bg-gray-700 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-1 md:mt-0"></div>
          <div class="w-5 h-1 bg-gray-400 absolute -left-10 z-0"></div>
          <div class="flex-auto">
            {/* <h1 class="text-lg">rule 1</h1> */}
            <h1 class="text-md text-gray-700 font-bold">{rule}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
