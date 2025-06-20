import React from "react";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "What is RecruIT GPT?",
    answer:"",
  },
  {
    question: "How does AI help in resume creation?",
    answer: "",
  },
  {
    question: "Can I customize the AI-generated resume?",
    answer: "",
  },
  {
    question: "How does the AI interview process work?",
    answer: "",
  },
  {
    question: "What kind of feedback does the AI interview provide?",
    answer: "",
  },
  {
    question: "How does RecruIT GPT match candidates with job requirements?",
    answer: "",
  },
  {
    question: "Is the AI interview process suitable for all industries?",
    answer: "",
  },
  {
    question: "Can recruiters access candidate performance reports?",
    answer: "",
  },
  {
    question: "How secure is the data shared on RecruIT GPT?",
    answer: "",
  },
  
];

const FAQs: React.FC = () => {
  return (
    <div className="w-full md:w-[85%] mx-auto my-10 px-10 py-17 border border-gray-200 rounded-2xl">
        <div className="text-center mt-2">
            <button className="rounded-full bg-white px-8 py-1 text-indigo-600 border border-indigo-600 mb-6 hover:bg-blue-800 transition">
          FAQs
        </button>
        <h1 className="text-3xl font-bold  text-center text-indigo-500">Frequently Asked Questions</h1>
        <p className="mt-4 text-base text-black-800 font-medium max-w-4xl mx-auto">Explore answers to common queries about Recruit GPT and our services. If you have any further questions, feel free to reach out to our team for assistance.</p>
        </div>
      <div className="max-w-[85%] mt-15 flex flex-col gap-4 mx-auto">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
      </div>
    </div>
  );
};

export default FAQs;
