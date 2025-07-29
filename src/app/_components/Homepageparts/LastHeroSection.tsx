import React from "react";

const LastHeroSection = () => {
  return (
    <div
      className="relative mx-auto my-9 mt-20 p-8  w-[85%] rounded-2xl text-white"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 21.16%, rgba(83, 86, 255, 0.5) 60.38%, #5356FF 90.5%)",
      }}
    >
      <div className="flex flex-col max-w-[65%]   justify-center items-center gap-5 mx-auto">
        <h1 className="lg:text-5xl sm:text-3xl  text-center font-semibold text-black">
          Unlock Your Business
          <span className="text-indigo-500"> Potential With Top Talent </span>
          Today!
        </h1>
        <p className="text-black">
          Contact Recruit GPT Now to connect with exceptional professionals and
          elevate your business.
        </p>
        <button className="rounded-full bg-black px-6 py-2 text-white transition hover:bg-gray-800">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LastHeroSection;
