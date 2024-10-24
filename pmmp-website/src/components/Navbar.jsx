import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Typewriter from './Typewriter'; // Import the Typewriter component

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  // Function to toggle the navbar
  const handleNavToggle = () => setNavOpen(!navOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo with Typewriter Effect */}
          <Typewriter />

          {/* Menu Toggle Button (visible on small screens) */}
          <div className="md:hidden">
            <button onClick={handleNavToggle} className="text-white text-2xl focus:outline-none">
              {navOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Navigation Links */}
          <div className={`md:flex md:items-center ${navOpen ? 'block' : 'hidden'} transition-all duration-300`}>
            <ul className="flex flex-col md:flex-row md:space-x-8 text-white text-lg">
              <li className="hover:text-yellow-300 transition-colors duration-200 py-2 md:py-0">
                <a href="#home">Home</a>
              </li>
              <li className="hover:text-yellow-300 transition-colors duration-200 py-2 md:py-0">
                <a href="#about">About</a>
              </li>
              <li className="hover:text-yellow-300 transition-colors duration-200 py-2 md:py-0">
                <a href="#services">Services</a>
              </li>
              <li className="hover:text-yellow-300 transition-colors duration-200 py-2 md:py-0">
                <a href="#testimonials">Testimonials</a>
              </li>
              <li className="hover:text-yellow-300 transition-colors duration-200 py-2 md:py-0">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
