
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import sba from "../../assets/sbalogo.png"
import dataandai from "../../assets/headericons/data_and_ai.svg"
import itautomation from "../../assets/headericons/itautomation.svg"
import openhybridcloud from "../../assets/headericons/openhybridcloud.svg"
import securityandsustainability from "../../assets/headericons/securityandsustainability.svg"
import aboutus from "../../assets/headericons/aboutus.svg"
import leadership from "../../assets/headericons/leadership.svg"

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <br />
      <br />
      <nav className="bg-white/30 backdrop-blur-md fixed w-full top-0 left-0 z-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-white">
                <img src={sba} height={50} width={50} alt="" />
              </a>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* Who We Are Dropdown */}
                <div className="relative group">
                  <button className="text-white   hover:text-white px-3 py-3 rounded-md text-sm font-medium">
                    Who We Are
                  </button>
                  <div className="absolute hidden group-hover:block bg-black backdrop-blur-md text-black  shadow-md rounded-md w-60">
                    <a href="/Aboutus" className="block hover:bg-red-600 hover:text-white  px-4 py-2 text-white flex items-center" style={{ textDecoration: "none", borderBottom:"1px solid white"}}>
                    <img src={aboutus} alt="Data and AI" height={50} width={50} className="mr-2" />About Us</a>
                    <a href="/Leadership" className=" hover:bg-red-600 hover:text-white  block px-4 py-2 text-white flex items-center" style={{ textDecoration: "none"}}>
                    <img src={leadership} alt="IT and Business Automation" height={50} width={50} className="mr-2" />
                    Leadership
                   </a>
                   </div>
                </div>

                {/* What We Do Dropdown */}
                <div className="relative group">
                  <button className="text-white hover:text-white px-3 py-3 rounded-md text-sm font-medium">
                    Our Solutions
                  </button>
                  <div className="absolute hidden group-hover:block bg-black backdrop-blur-md text-black shadow-md rounded-md w-80">
    <a href="/Data-and-Ai" className="block px-4 py-2 hover:bg-red-600 hover:text-white text-white flex items-center" style={{ textDecoration: "none", borderBottom:"1px solid white"}}>
      <img src={dataandai} alt="Data and AI" height={50} width={50} className="mr-2" />
      Data and AI
    </a>
    <a href="/IT-And-Automation" className="block px-4 py-2 hover:bg-red-600 hover:text-white  text-white flex items-center" style={{ textDecoration: "none",borderBottom:"1px solid white"}}>
      <img src={itautomation} alt="IT and Business Automation" height={50} width={50} className="mr-2" />
      IT and Business Automation
    </a>
    <a href="/Open-Hybrid-Cloud" className="block px-4 py-2 hover:bg-red-600 hover:text-white  text-white flex items-center" style={{ textDecoration: "none" , borderBottom:"1px solid white"}}>
      <img src={openhybridcloud} alt="Open Hybrid Cloud" height={50} width={50} className="mr-2" />
      Open Hybrid Cloud
    </a>
    <a href="/Security-And-Sustainability" className="block px-4 hover:bg-red-600 hover:text-white  py-2 text-white flex items-center" style={{ textDecoration: "none"}}>
      <img src={securityandsustainability} alt="Security and Sustainability" height={50} width={50} className="mr-2" />
      Security and Sustainability
    </a>
  </div>
</div>


                {/* Other Menu Items */}
               
                <a href="#" className="text-white hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" style={{ textDecoration: "none" }}>
                  Careers
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
            <h5 href="#" className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Who We Are
            </h5>
            <a href="#" style={{textDecoration:"none"}} className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About us
            </a>
            <a href="#" style={{textDecoration:"none"}} className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Leadership
            </a>
            <hr className="text-white" />
            <h5 href="#" className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Our Solutions
            </h5>
            <a href="/Data-and-Ai" style={{textDecoration:"none"}} className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Data And AI
            </a>
            <a href="/IT-And-Automation" style={{textDecoration:"none"}} className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              IT and Buisness Automation
            </a>
            <a href="/Open-Hybrid-Cloud" style={{textDecoration:"none"}} className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Open Hybrid Cloud
            </a>
            <a href="/Security-And-Sustainability" style={{textDecoration:"none"}} className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Security And Sustainability
            </a>
            <hr className="text-white" />
            <h5 href="#" className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Others
            </h5>
            <a href="#" style={{textDecoration:"none"}} className="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Careers
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}


export default Header;