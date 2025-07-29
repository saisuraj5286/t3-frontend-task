import React from "react";
import Image from "next/image";
import NavBar from "../NavBar/NavBar";
const Home1 = () => {
  return (
    <>
      <div className="relative">
        <NavBar />
        <div
          className="lg:right18 md: absolute top-0 mx-auto mt-10 h-screen w-[90%] rounded-2xl text-white sm:right-10 sm:left-10 md:right-15 md:left-15 lg:left-18"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 11.16%, rgba(83, 86, 255, 0.5) 41.38%, #5356FF 79.5%)",
          }}
        >
          <section className="mt-20 px-4 text-center md:px-0">
            <div className="mt-">
              <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
                Discover the{" "}
                <span className="text-indigo-600">Best Talent</span>
                <br />
                for your Companies
              </h1>
              <p className="mt-4 text-sm text-gray-600 sm:text-xs md:text-base">
                We Connect You With High-Quality Professionals Across Various
                Industry Fields.
              </p>

              
              <div className="mt-6 space-x-4">
                <button className="rounded-full border border-black px-6 py-2 text-black transition hover:bg-black hover:text-white">
                  Learn More
                </button>
                <button className="rounded-full bg-black px-6 py-2 text-white transition hover:bg-gray-800">
                  Get Started
                </button>
              </div>
            </div>

            <Image
              src="/star.svg"
              alt="star"
              width={70}
              height={70}
              className="absolute top-25 left-6/8"
            />
            <Image
              src="/star.svg"
              alt="star"
              width={220}
              height={220}
              className="absolute top-55 left-0 rotate-45"
            />

            <Image
              src="/Dashboard.png"
              alt="dashboard"
              width={900}
              height={900}
              className="absolute top-80 left-1/2 w-[90%] -translate-x-1/2 transform rounded-2xl shadow-xl"
            />
          </section>
        </div>

        
        <div className="h-150 sm:h-180 md:h-210 lg:h-250 xl:h-290 2xl:h-330" />
      </div>
    </>
  );
};

export default Home1;
