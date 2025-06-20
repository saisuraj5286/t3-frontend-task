"use client";

import React from "react";
import { FaFacebook, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mx-auto mb-6 max-w-[85%] rounded-2xl bg-gray-900 px-6 py-10 pb-15 text-white md:px-20">
      <div className="flex flex-col gap-10 md:flex-row">
        {/* Right Box - 70% */}
        <div className="flex w-full flex-col gap-6 md:w-[70%]">
          <div className="flex gap-3">
            <img className="rounded-[50%]" src="footerlogo.png" width={30} height={30} alt="" />
            <h2 className="text-2xl font-bold">Recurit GPT</h2>
          </div>

          <p className="max-w-lg text-gray-300">
            Analyze. Visualize. Collaborate. Elevate
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <FaFacebook size={24} />
            </a>

            <a href="#" className="text-gray-300 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a
              href="mailto:yourname@example.com"
              className="text-gray-300 hover:text-white"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Left Box - 30% */}
        <div className="grid w-full grid-cols-2 gap-6 md:w-[30%]">
          <div className="flex flex-col gap-3">
            <a href="#" className="hover:underline">
              Product
            </a>
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Company
            </a>
            <a href="#" className="hover:underline">
              Product
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#" className="hover:underline">
              Features
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
            <a href="#" className="hover:underline">
              Login
            </a>
            <a href="#" className="hover:underline">
              Register
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
