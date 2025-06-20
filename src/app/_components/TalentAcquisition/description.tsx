import React from "react";

interface DescriptionProps {
  title: string;
  content: string;
}

const Description: React.FC<DescriptionProps> = ({ title, content }) => {
  return (
    <div className="w-full md:w-1/2 p-6 flex flex-col justify-center gap-8 text-left">
      
      
      <button
        className="self-start rounded-full border border-indigo-500 px-4 py-1 text-sm font-medium text-indigo-500 hover:bg-indigo-50 transition"
        aria-label="Learn how it works"
      >
        How it works
      </button>

      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-medium text-gray-900 leading-snug">
          {title}
        </h1>
        <p className="text-base text-gray-700 leading-relaxed">
          {content}
        </p>
      </div>
      
      <button
        className="self-start rounded-full bg-black px-5 py-2 text-white text-sm font-semibold hover:bg-gray-800 transition"
        aria-label="Discover available talent"
      >
        Discover Talent
      </button>
    </div>
  );
};

export default Description;
