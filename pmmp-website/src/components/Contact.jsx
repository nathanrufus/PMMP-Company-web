import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-indigo-800 text-white py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-300 drop-shadow-lg">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-100">
          Reach out to us for inquiries, partnerships, or just to say hello.
        </p>
        
        <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-md max-w-lg mx-auto">
          <p className="mb-4">
            <strong>Address:</strong> 85 aptos avenue, San Francisco
          </p>
          <p className="mb-4">
            <strong>Phone:</strong> +254 797 468010
          </p>
          <p className="mb-4">
            <strong>Email:</strong> jacobrotich2018@gmail.com
          </p>
          
          <div className="flex justify-center space-x-4 mt-6">
            <a href="https://facebook.com/pmmpcompany" className="text-white hover:text-yellow-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://x.com/rotichjacob8" className="text-white hover:text-yellow-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://youtube.com/pmmpcompany" className="text-white hover:text-yellow-300">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
