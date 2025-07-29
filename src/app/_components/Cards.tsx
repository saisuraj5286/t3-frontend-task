import React from "react";
import Image from "next/image"; 
interface CardProps {
  title: string;
  description: string;
  imageSrc?: string; 
}

const Cards: React.FC<CardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="flex flex-col items-start rounded-xl my-2 gap-4 min-h-70 bg-white border border-gray-200 shadow-xl p-6 hover:shadow-2xl transition w-[80%] lg:w-[25%]">
      {imageSrc && (
        <div className="w-16 h-16 relative">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <button className="text-indigo-500">Read more..</button>
    </div>
  );
};

export default Cards;

