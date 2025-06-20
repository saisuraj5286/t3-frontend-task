import React from "react";
import Stats from "./stats";
import Description from "./description";


const TalentAcquisitionCard = () => {
  return (
    <div>
        <div className="mt-20 px-6 text-center  ">
            <h1 className="text-4xl text-black font-semibold max-w-[50%] mx-auto">Our <span className="text-indigo-400">Talent Acquisition</span> Process</h1>
            <p className="mt-4 text-base text-gray-800 max-w-3xl mx-auto">
                At Recruit GPT, we follow a process that is marked with rigorous steps and backed by cutting edge technology that results in the selection of high quality candidates.</p>
        </div>


    <div className="flex flex-col gap-8 px-6 items-center m-3 border border-gray-300 shadow-md rounded-2xl justify-between w-[85%] mx-auto py-10">
      {/*  1st  */}
      <div className="flex flex-row ">
      <Stats src="/statbg.png" alt="Statistics chart" />
      <Description
        title="Understanding Requirements"
        content="Conducting in-depth discussions to define job roles, expectations, and key skills. Aligning hiring objectives with business needs."
      />
      </div>
        {/* 2nd */}
      <div className="flex flex-row">
        <Description
        title="Screening & Competency Assessment"
        content="Analyzing industry trends and competitor hiring strategies. Identifying top talent pools and emerging skill demands."
      />
      <Stats src="/statbg.png" alt="Statistics chart" />
      </div>
      {/* 3rd */}
      <div className="flex flex-row ">
      <Stats src="/statbg.png" alt="Statistics chart" />
      <Description
        title="Talent Sourcing & Outreach"
        content="Utilizing AI-powered sourcing techniques to find the best candidates. Leveraging multiple channels, including job boards, social media, and professional networks."     />
      </div>
      {/* 4th */}
      <div className="flex flex-row">
        <Description
        title="Interview Coordination & Feedback"
        content="Scheduling interviews and facilitating seamless communication. Gathering and sharing constructive feedback from both parties."
      />
      <Stats src="/statbg.png" alt="Statistics chart" />
      </div>
      {/* 5th */}
      <div className="flex flex-row ">
      <Stats src="/statbg.png" alt="Statistics chart" />
      <Description
        title="Shortlisting & Profile Presentation"
        content="Curating a refined list of high-potential candidates.
Providing detailed candidate insights and suitability analysis."    />
      </div>
      {/* 6th */}
      <div className="flex flex-row">
        <Description
        title="Offer Negotiation & Onboarding Support"
        content="Assisting in salary discussions and contract finalization. Supporting a smooth transition for the selected candidate."
      />
      <Stats src="/statbg.png" alt="Statistics chart" />
      </div>
      {/* 7th */}
      <div className="flex flex-row ">
      <Stats src="/statbg.png" alt="Statistics chart" />
      <Description
        title="Background Verification & Reference Checks"
        content="Validating candidate credentials, experience, and professional reputation. Ensuring authenticity through comprehensive reference checks."    />
      </div>
    </div>
    </div>
  );
};

export default TalentAcquisitionCard;
