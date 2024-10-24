import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 text-white py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
          About <span className="text-yellow-300">PMMP</span>
        </h2>
        <p className="text-lg md:text-xl mb-8 text-yellow-100">
          PMMP Company offers dedicated executive assistance services tailored to the unique needs of businesses and solopreneurs. Our experienced team provides everything from calendar management to project coordination, ensuring you stay organized and productive.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Why Choose Us - Section 1 */}
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
              Why Choose Us?
            </h3>
            <ul className="space-y-3 text-yellow-100">
              <li className="flex items-center">
                <span className="bg-yellow-300 text-pink-600 rounded-full p-2 mr-3">✓</span>
                Tailored assistance for businesses of all sizes
              </li>
              <li className="flex items-center">
                <span className="bg-yellow-300 text-pink-600 rounded-full p-2 mr-3">✓</span>
                Highly experienced team to manage your needs
              </li>
              <li className="flex items-center">
                <span className="bg-yellow-300 text-pink-600 rounded-full p-2 mr-3">✓</span>
                Comprehensive support including project management
              </li>
              <li className="flex items-center">
                <span className="bg-yellow-300 text-pink-600 rounded-full p-2 mr-3">✓</span>
                Time-saving solutions that increase efficiency
              </li>
            </ul>
          </div>

          {/* Why Choose Us - Section 2 */}
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
              Our Benefits
            </h3>
            <ul className="space-y-3 text-yellow-100">
              <li className="flex items-center">
                <span className="bg-yellow-300 text-pink-600 rounded-full p-2 mr-3">✓</span>
                Streamline your day-to-day operations
              </li>
              <li className="flex items-center">
                <span className="bg-yellow-300 text-pink-600 rounded-full p-2 mr-3">✓</span>
                Focus on growing your business while we handle the details
              </li>
              <li className="flex items-center">
                <span className="bg-yellow-300 text-pink-600 rounded-full p-2 mr-3">✓</span>
                Customized plans for solopreneurs and businesses
              </li>
              <li className="flex items-center">
                <span className="bg-yellow-300 text-pink-600 rounded-full p-2 mr-3">✓</span>
                Flexible support that evolves with your needs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
