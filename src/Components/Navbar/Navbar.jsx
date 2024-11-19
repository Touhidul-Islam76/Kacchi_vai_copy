import React, { useState } from 'react'
import logo from '../../assets/nav-logo.webp'
import { Link } from 'react-router-dom';

const navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='sticky block top-0 w-full z-10 '>
      <nav className="bg-white text-black shadow-lg font-bold">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div>
            <img className="h-12 w-12" src={logo} alt="Logo" />
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-[#FF0000] transition-all duration-500 hover:bg-[#FFF2F2] p-4 rounded-[48px]">Home</Link>
            <Link to="/menu" className="hover:text-[#FF0000] transition-all duration-500 hover:bg-[#FFF2F2] p-4 rounded-[48px]">Menu</Link>
            <Link to="/offers" className="hover:text-[#FF0000] transition-all duration-500 hover:bg-[#FFF2F2] p-4 rounded-[48px]">Offers</Link>
            <Link to="/contact" className="hover:text-[#FF0000] transition-all duration-500 hover:bg-[#FFF2F2] p-4 rounded-[48px]">Order process</Link>
            <Link to="/branches" className="hover:text-[#FF0000] transition-all duration-500 hover:bg-[#FFF2F2] p-4 rounded-[48px]">Branches</Link>
            <Link to="/about" className="hover:text-[#FF0000] transition-all duration-500 hover:bg-[#FFF2F2] p-4 rounded-[48px]">About us</Link>
          </div>
          <div className="md:hidden ms-auto mr-8">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <Link to="booking"><button className='bg-[#FF0000] text-white font-bold py-2 px-4 rounded-[48px] transition-all duration-500 hover:bg-[#FF4A4A]'>Booking</button></Link>
        </div>
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col items-center space-y-2 pb-4">
            <Link to="/" className="hover:text-[#FF0000] transition-all duration-500">Home</Link>
            <Link to="/menu" className="hover:text-[#FF0000] transition-all duration-500">Menu</Link>
            <Link to="/offers" className="hover:text-[#FF0000] transition-all duration-500">Offers</Link>
            <Link to="/contact" className="hover:text-[#FF0000] transition-all duration-500">Order process</Link>
            <Link to="/branches" className="hover:text-[#FF0000] transition-all duration-500">Branches</Link>
            <Link to="/about" className="hover:text-[#FF0000] transition-all duration-500">About us</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default navbar
