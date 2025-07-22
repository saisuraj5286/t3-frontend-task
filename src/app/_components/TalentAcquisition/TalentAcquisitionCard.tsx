import React from "react";
import Stats from "./stats";
import Description from "./description";



const TalentAcquisitionCard = () => {
  return (
    <div>
      <div className="mt-20 mb-9 px-6 text-center">
        <h1 className="mx-auto max-w-[50%] text-4xl font-semibold text-black">
          Our <span className="text-indigo-500">Talent Acquisition</span>{" "}
          Process
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-gray-800">
          At Recruit GPT, we follow a process that is marked with rigorous steps
          and backed by cutting edge technology that results in the selection of
          high quality candidates.
        </p>
      </div>

      <div className="m-3 mx-auto flex w-[85%] flex-col  items-center justify-between gap-8 rounded-2xl border border-gray-300 px-6 py-10 shadow-md">
        {/*  1st  */}
        <div className="flex md:flex-row flex-col gap-5">
          <Stats
            src="/talentacquisitionimgs/Todaylist.png"
            alt="Statistics chart"
          />
          <Description
            title="Understanding Requirements"
            content="Conducting in-depth discussions to define job roles, expectations, and key skills. Aligning hiring objectives with business needs."
          />
        </div>
        {/* 2nd */}
        <div className="flex md:flex-row flex-col-reverse gap-5">
          <Description
            title="Screening & Competency Assessment"
            content="Analyzing industry trends and competitor hiring strategies. Identifying top talent pools and emerging skill demands."
          />
          <Stats
            src="/talentacquisitionimgs/statbg.png"
            alt="Statistics chart"
          />
        </div>
        {/* 3rd */}
        <div className="flex md:flex-row flex-col gap-5">
          
          <Stats
            src="/talentacquisitionimgs/Statistics.png"
            alt="Statistics chart"
          />
          <Description
            title="Talent Sourcing & Outreach"
            content="Utilizing AI-powered sourcing techniques to find the best candidates. Leveraging multiple channels, including job boards, social media, and professional networks."
          />
        </div>
        {/* 4th */}
        <div className="flex md:flex-row flex-col-reverse gap-5">
          <Description
            title="Interview Coordination & Feedback"
            content="Scheduling interviews and facilitating seamless communication. Gathering and sharing constructive feedback from both parties."
          />
          <Stats src="/talentacquisitionimgs/AiFeedback.png" alt="Statistics chart" />
          
        </div>
        {/* 5th */}
        <div className="flex md:flex-row flex-col gap-5">
         
          <Stats src="/talentacquisitionimgs/OverallStudents.png" alt="Statistics chart" />
          <Description
            title="Shortlisting & Profile Presentation"
            content="Curating a refined list of high-potential candidates. Providing detailed candidate insights and suitability analysis."
          />
        </div>
        {/* 6th */}
        <div className="flex md:flex-row flex-col-reverse gap-5">
          <Description
            title="Offer Negotiation & Onboarding Support"
            content="Assisting in salary discussions and contract finalization. Supporting a smooth transition for the selected candidate."
          />
          <Stats src="/talentacquisitionimgs/Candidates.png" alt="Statistics chart" />
          
        </div>
        {/* 7th */}
        <div className="flex md:flex-row flex-col gap-5">
         
          <Stats src="/talentacquisitionimgs/BackgroundPro.png" alt="Statistics chart" />
          <Description
            title="Background Verification & Reference Checks"
            content="Validating candidate credentials, experience, and professional reputation. Ensuring authenticity through comprehensive reference checks."
          />
        </div>
      </div>
    </div>
  );
};

export default TalentAcquisitionCard;
