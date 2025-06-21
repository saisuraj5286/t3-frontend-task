import React from 'react'
import Cards from '../Cards'
import { AiOutlineFileText, AiOutlineAudio, AiOutlineCheckCircle} from "react-icons/ai";


const Home2 = () => {
  return (
    <>
         <section className="mt-20 px-6 text-center text-gray-100">
        <button className="rounded-full bg-white px-6 py-2 text-indigo-600 border border-indigo-600 mb-6 hover:bg-indigo-50 transition">
          Get Started
        </button>
        <h1 className="text-4xl text-black font-semibold max-w-[45%] mx-auto">
          Why Choose Us?{" "}
          <span className="text-indigo-600">Discover The Advantages</span> With Recruit GPT
        </h1>
        <p className="mt-4 text-base text-gray-800 max-w-3xl mx-auto">
          At Recruit GPT, we pride ourselves on providing exceptional professionals
          that drive your business forward. Here’s why our clients trust us to meet their needs:
        </p>
      </section>

    
     <div className="flex  flex-col md:flex-row justify-center items-stretch gap-6 mt-6">
        <Cards
          title="AI-Powered Resume Creation"
          description="We leverage advanced AI technology to craft professional, tailored resumes that highlight your skills and experience effectively."
          icon={<AiOutlineFileText />}
        />
        <Cards
          title="AI-Powered Interviews"
          description="Our AI-driven interview platform customizes questions based on the candidate’s skills, job description, and recruiter requirements. "
          icon={<AiOutlineAudio />}
        />
        <Cards
          title="AI-Powered Interview Feedback"
          description="We leverage advanced AI technology to craft professional, tailored resumes that highlight your skills and experience effectively. "
          icon={<AiOutlineCheckCircle />}
        />
      </div>
    </>
  )
}

export default Home2
