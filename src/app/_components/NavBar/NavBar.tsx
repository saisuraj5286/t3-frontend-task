import React from 'react'
import Link from 'next/link'


const NavBar = () => {
  return (
    <nav className='flex max-w-[70%] items-center justify-between px-8 py-4 shadow-md bg-white place-content-between rounded-2xl  m-2 p-2 mx-auto'>
      <div className='flex min-w-[30%] items-center  '>
        <img src="/recuritlogo.png" alt="" />
        <h1 className='text-2xl'>Recuit GPT</h1>
      </div>
      <div className='flex min-w-[45%] place-content-between '>
         <Link href="/" className="hover:text-blue-600 font-medium">Home</Link>
        <Link href="/clients" className="hover:text-blue-600 font-medium">Clients</Link>
        <Link href="/features" className="hover:text-blue-600 font-medium">Features</Link>
        <Link href="/works" className="hover:text-blue-600 font-medium">Works</Link>
        <Link href="/about" className="hover:text-blue-600 font-medium">About</Link>
      </div>
        <div>
        <Link href="/getstarted">
          <button className="bg-black text-white px-3 py-2 rounded-3xl hover:bg-gray-700">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
