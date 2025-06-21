import React from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode; 
}

const Cards: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-start rounded-xl my-2 gap-4  bg-white border border-gray-200  shadow-xl p-6  hover:shadow-xl transition w-[80%] md:w-[25%]">
      {icon && <div className="my- text-4xl text-indigo-600">{icon}</div>}
      <h3 className="text-xl font-semibold  text-gray-800">{title}</h3>
      <p className="mt-2  text-gray-600">{description}</p>
      <button className="text-indigo-500">read more..</button>
    </div>
  );
};

export default Cards;
