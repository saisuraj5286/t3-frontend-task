import React from 'react';
import Cards from '../Cards';
import {
  AiOutlineFileText,
  AiOutlineAudio,
  AiOutlineCheckCircle,
} from 'react-icons/ai';

const Home2 = () => {
  return (
    <>
      {/* Top Section */}
      <section className="mt-16 px-4 text-center text-gray-100 sm:px-6 lg:px-10">
        <button className="rounded-full bg-white px-6 py-2 text-indigo-600 border border-indigo-600 mb-6 hover:bg-indigo-50 transition">
          Get Started
        </button>

        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold text-black leading-tight max-w-[50%] sm:max-w-[80%] md:max-w-[60%] mx-auto">
          Why Choose Us?{' '}
          <span className="text-indigo-600">Discover The Advantages</span> With Recruit GPT
        </h1>

        <p className="mt-4 text-sm sm:text-base text-gray-800 max-w-[90%] sm:max-w-[80%] md:max-w-[60%] xl:max-w-2xl mx-auto">
          At Recruit GPT, we pride ourselves on providing exceptional professionals
          that drive your business forward. Here’s why our clients trust us to meet their needs:
        </p>
      </section>

      {/* Cards Section */}
      <div className="mt-10 flex flex-col lg:flex-row flex-wrap justify-center items-center gap-6 mx-auto px-4 sm:px-6 lg:px-10">
        <Cards
          title="AI-Powered Resume Creation"
          description="We leverage advanced AI technology to craft professional, tailored resumes that highlight your skills and experience effectively."
          icon={<AiOutlineFileText />}
        />
        <Cards
          title="AI-Powered Interviews"
          description="Our AI-driven interview platform customizes questions based on the candidate’s skills, job description, and recruiter requirements."
          icon={<AiOutlineAudio />}
        />
        <Cards
          title="AI-Powered Interview Feedback"
          description="We leverage advanced AI technology to provide structured feedback to help candidates improve and succeed."
          icon={<AiOutlineCheckCircle />}
        />
      </div>
    </>
  );
};

export default Home2;
