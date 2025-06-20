import React from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode; 
}

const Cards: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-start rounded-2xl my-4   bg-white border border-gray-200  shadow-xl p-6  hover:shadow-xl transition w-[80%] md:w-[25%]">
      {icon && <div className="my-6 text-4xl text-indigo-600">{icon}</div>}
      <h3 className="text-xl font-semibold  text-gray-800">{title}</h3>
      <p className="mt-2  text-gray-600">{description}</p>
    </div>
  );
};

export default Cards;
