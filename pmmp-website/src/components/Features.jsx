import React from 'react';
import { FaComments, FaBullhorn, FaUsers, FaMagic } from 'react-icons/fa';

const Features = () => {
  return (
    <section id="features" className="bg-gray-900 text-white py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-300 drop-shadow-lg">
          Why Choose Us
        </h2>
        <p className="text-lg md:text-xl mb-12 text-gray-300">
          Explore the key features that make PMMP the right choice for your business.
        </p>
        
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaComments className="text-3xl text-yellow-300 mb-4" />
            <h3 className="text-sm font-semibold text-yellow-300">Dedicated Support</h3>
            <p className="text-gray-400 mt-2">
              Our team provides round-the-clock support tailored to your business needs, ensuring smooth operation at all times.
            </p>
          </div>

          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaBullhorn className="text-3xl text-yellow-300 mb-4" />
            <h3 className="text-sm font-semibold text-yellow-300">Professional Communication</h3>
            <p className="text-gray-400 mt-2">
              Maintain consistent and professional communication with clients, vendors, and stakeholders with our assistance.
            </p>
          </div>

          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaUsers className="text-3xl text-yellow-300 mb-4" />
            <h3 className="text-sm font-semibold text-yellow-300">Collaborative Approach</h3>
            <p className="text-gray-400 mt-2">
              We work closely with you to understand your business and offer solutions that align with your goals.
            </p>
          </div>

          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaMagic className="text-3xl text-yellow-300 mb-4" />
            <h3 className=" text-sm font-semibold text-yellow-300">Customized Services</h3>
            <p className="text-gray-400 mt-2">
              No two businesses are the same. We offer customized solutions to meet the specific needs of your business or personal projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
