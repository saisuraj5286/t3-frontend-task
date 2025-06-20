'use client';


import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border border-gray-300 shadow-2xs py-4 px-6  rounded-2xl">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-black-800">{question}</h3>
        <div className="text-xl text-indigo-600">
          {isOpen ? <FiMinus /> : <FiPlus />}
        </div>
      </div>
      {isOpen && (
        <p className="mt-2 text-sm text-black-600 transition-all duration-300 ease-in-out">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;
