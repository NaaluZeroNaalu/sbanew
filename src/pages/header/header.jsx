
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import sba from "../../assets/sbalogo.png"

function Header(){


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);


    return(

        <>
      <br />
      <br />
      <nav className="bg-white/30 backdrop-blur-md fixed w-full top-0 left-0 z-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-bold text-white">
                <img src={sba} height={50} width={50} alt="" />
              </a>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-white hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" style={{ textDecoration: "none" }}>
                  Home
                </a>
                <a href="#" className="text-white hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" style={{ textDecoration: "none" }}>
                  About
                </a>
                <a href="#" className="text-white hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" style={{ textDecoration: "none" }}>
                  Services
                </a>
                <a href="#" className="text-white hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" style={{ textDecoration: "none" }}>
                  Contact
                </a>
                <a href="#" className="btn btn-danger px-3 py-2 text-sm font-medium">
                  Request a demo
                </a>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="-mr-2 flex md:hidden">
              <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#" className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="#" className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Services
            </a>
            <a href="#" className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
          </div>
        </div>
      </nav>
        </>
    )
}

export default Header;