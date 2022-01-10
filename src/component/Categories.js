import React from "react";

const Categories = ({ icon, name }) => {
  return (
    <div className=" flex flex-col ring-1 ring-gray-700 mx-auto px-2 rounded-sm shadow-sm transform hover:bg-gray-50  transition cursor-pointer  hover:scale-105 duration-300 ease-in-out mb-4 md:mb-0">
      <img src={icon} alt="icon" className="w-8 h-8 " />
      <p className="text-sm">{name}</p>
    </div>
  );
};

export default Categories;
