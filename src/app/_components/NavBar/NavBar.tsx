'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // optional icons package

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-white shadow-md border border-gray-100 rounded-2xl p-4 mx-auto mt-10 max-w-[95%] sm:max-w-[80%] md:max-w-[80%] lg:max-w-[80%]'>
      
      <div className='flex justify-between items-center'>
        {/* Logo */}
        <div className='flex items-center space-x-2'>
          <img src="/logo.svg" alt="Logo" className="w-10 h-10 object-contain" />
          <h1 className='text-xl font-semibold'>Recruit GPT</h1>
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex space-x-6'>
          <Link href="/" className="hover:text-blue-600 font-medium">Home</Link>
          <Link href="/clients" className="hover:text-blue-600 font-medium">Clients</Link>
          <Link href="/features" className="hover:text-blue-600 font-medium">Features</Link>
          <Link href="/works" className="hover:text-blue-600 font-medium">Works</Link>
          <Link href="/about" className="hover:text-blue-600 font-medium">About</Link>
        </div>

        
        <div className='hidden lg:block'>
          <Link href="/getstarted">
            <button className="bg-black text-white px-4 py-2 rounded-3xl hover:bg-gray-700">
              Get Started
            </button>
          </Link>
        </div>

        
        <div className='lg:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className='flex flex-col space-y-3 mt-4 lg:hidden bg-white'>
          <Link href="/" className="hover:text-blue-600 font-medium">Home</Link>
          <Link href="/clients" className="hover:text-blue-600 font-medium">Clients</Link>
          <Link href="/features" className="hover:text-blue-600 font-medium">Features</Link>
          <Link href="/works" className="hover:text-blue-600 font-medium">Works</Link>
          <Link href="/about" className="hover:text-blue-600 font-medium">About</Link>
          <Link href="/getstarted">
            <button className="bg-black text-white px-4 py-2 rounded-3xl hover:bg-gray-700">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
