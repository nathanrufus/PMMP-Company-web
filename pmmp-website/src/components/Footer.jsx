import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">PMMP Company</h3>
            <p className="text-gray-300">
              1234 Business Park, Suite 100, New York, NY 12345
            </p>
            <p className="text-gray-300 mt-1">Phone: +1 987 654 3210</p>
            <p className="text-gray-300 mt-1">Email: info@pmmpcompany.com</p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://facebook.com/pmmpcompany"
                className="text-white hover:text-yellow-300 transition-colors"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://x.com/rotichjacob8"
                className="text-white hover:text-yellow-300 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://youtube.com/pmmpcompany"
                className="text-white hover:text-yellow-300 transition-colors"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-yellow-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-yellow-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-yellow-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} PMMP Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
