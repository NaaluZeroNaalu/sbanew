
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

function Header(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return(

        <>
         <div id="navbar" style={{ paddingRight: "100px", paddingLeft: "100px" }} className="pt-4">
      <nav className="bg-transparent  shadow-md sticky top-0">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="text-white font-bold text-xl">MyLogo</div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* Home Dropdown */}
                <div className="relative group">
                  <a
                    href="#"
                    className="text-white hover:text-white px-5 py-2 rounded-md text-sm font-medium no-underline"
                  >
                    What we do
                  </a>
                  <div className="absolute left-0 hidden group-hover:block bg-gray-700 text-white p-2 rounded-md shadow-md">
                    <a href="#" className="block px-3 py-2">Submenu 1</a>
                    <a href="#" className="block px-3 py-2">Submenu 2</a>
                  </div>
                </div>

                {/* About Dropdown */}
                <div className="relative group">
                  <a
                    href="#"
                    className="text-white  hover:text-white px-5 py-2 rounded-md text-sm font-medium no-underline"
                  >
                    Who we are
                  </a>
                  <div className="absolute left-0 hidden group-hover:block bg-gray-700 text-white p-2 rounded-md shadow-md">
                    <a href="#" className="block px-3 py-2">Submenu 1</a>
                    <a href="#" className="block px-3 py-2">Submenu 2</a>
                  </div>
                </div>

                {/* Services Dropdown */}
                <div className="relative group">
                  <a
                    href="#"
                    className="text-white  hover:text-white px-5 py-2 rounded-md text-sm font-medium no-underline"
                  >
                    Services
                  </a>
                  <div className="absolute left-0 hidden group-hover:block bg-gray-700 text-white p-2 rounded-md shadow-md">
                    <a href="#" className="block px-3 py-2  text-white no-underline">Submenu 1</a>
                    <a href="#" className="block px-3 py-2">Submenu 2</a>
                  </div>
                </div>

                {/* Regular Links */}
                <a
                  href="#"
                  className="text-white  hover:text-white px-5 py-2 rounded-md text-sm font-medium no-underline"
                >
                  Carrers
                </a>

                <a
                  id="request"
                  href="#"
                  className="text-white btn btn-outline-danger shadow-xs hover:bg-red-700 hover:text-white px-5 py-2 rounded-md text-sm font-medium no-underline"
                >
                  Request a Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
        </>
    )
}

export default Header;