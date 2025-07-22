import React from "react";
import Image from "next/image";
import NavBar from "../NavBar/NavBar";
const Home1 = () => {
  return (
    <>
    <div className="relative">
      <NavBar/>
      <div
        className="absolute top-0 sm:left-10 sm:right-10 md:left-15 md:right-15 lg:right18 lg:left-18 mt-10   mx-auto h-screen w-[90%] rounded-2xl text-white md:"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 11.16%, rgba(83, 86, 255, 0.5) 41.38%, #5356FF 79.5%)",
        }}
      >
        <section className="mt-20 px-4 text-center md:px-0">
          <div className=" mt-">
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
            Discover the <span className="text-indigo-600">Best Talent</span>
            <br />
            for your Companies
          </h1>
          <p className="mt-4 text-sm sm:text-xs text-gray-600 md:text-base">
            We Connect You With High-Quality Professionals Across Various
            Industry Fields.
          </p>

          {/* Buttons */}
          <div className="mt-6 space-x-4">
            <button className="rounded-full border text-black border-black px-6 py-2 transition hover:bg-black hover:text-white">
              Learn More
            </button>
            <button className="rounded-full bg-black px-6 py-2 text-white transition hover:bg-gray-800">
              Get Started
            </button>
          </div>
          </div>

          <Image
            src="/Dashboard.png"
            alt="dashboard"
            width={900}
            height={900}
            className="absolute top-80 left-1/2 transform -translate-x-1/2 w-[90%] rounded-2xl shadow-xl"
          />
        </section>
      </div>

      {/* Move this outside to actually push next section down */}
      <div className="xl:h-290 lg:h-250 md:h-210 sm:h-180 h-150" />
      </div>
    </>
  );
};

export default Home1;
