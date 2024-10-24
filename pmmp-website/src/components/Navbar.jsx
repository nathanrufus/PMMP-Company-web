import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Typewriter from './Typewriter'; 

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavToggle = () => setNavOpen(!navOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          {/* Typewriter and Icon */}
          <div className="flex justify-between items-center w-full md:w-auto">
            <Typewriter />
            <div className="md:hidden">
              <button
                onClick={handleNavToggle}
                className="text-white text-2xl focus:outline-none"
              >
                {navOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className={`md:flex md:justify-end ${navOpen ? 'block' : 'hidden'} w-full md:w-auto transition-all duration-300 mt-4 md:mt-0`}>
            <ul className="flex flex-col md:flex-row md:space-x-8 text-white text-lg">
              <li className="hover:text-yellow-300 transition-colors duration-200 py-2 md:py-0">
                <a href="#home" onClick={() => setNavOpen(false)}>Home</a>
              </li>
              <li className="hover:text-yellow-300 transition-colors duration-200 py-2 md:py-0">
                <a href="#about" onClick={() => setNavOpen(false)}>About</a>
              </li>
              <li className="hover:text-yellow-300 transition-colors duration-200 py-2 md:py-0">
                <a href="#services" onClick={() => setNavOpen(false)}>Services</a>
              </li>
              <li className="hover:text-yellow-300 transition-colors duration-200 py-2 md:py-0">
                <a href="#testimonials" onClick={() => setNavOpen(false)}>Testimonials</a>
              </li>
              <li className="hover:text-yellow-300 transition-colors duration-200 py-2 md:py-0">
                <a href="#contact" onClick={() => setNavOpen(false)}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
