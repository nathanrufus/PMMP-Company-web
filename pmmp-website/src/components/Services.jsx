import React from 'react';
import { FaCalendar, FaEnvelope, FaBriefcase, FaPlane, FaUsers, FaChartBar } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCalendar className="text-yellow-300 text-4xl mb-4" />,
      name: "Calendar Management",
      text: "We manage your schedule, ensuring your appointments and meetings are well-organized, and no opportunity is missed.",
    },
    {
      icon: <FaEnvelope className="text-yellow-300 text-4xl mb-4" />,
      name: "Email Management",
      text: "Organize, prioritize, and respond to emails efficiently with our expert email management services.",
    },
    {
      icon: <FaBriefcase className="text-yellow-300 text-4xl mb-4" />,
      name: "Project Coordination",
      text: "Keep your projects on track with our dedicated project coordination, handling timelines, tasks, and communication.",
    },
    {
      icon: <FaPlane className="text-yellow-300 text-4xl mb-4" />,
      name: "Travel Planning",
      text: "We plan and coordinate all aspects of your travel, ensuring a smooth experience with no hassle.",
    },
    {
      icon: <FaUsers className="text-yellow-300 text-4xl mb-4" />,
      name: "Client Communication",
      text: "Maintain strong relationships with clients through our professional communication management services.",
    },
    {
      icon: <FaChartBar className="text-yellow-300 text-4xl mb-4" />,
      name: "Research & Data Analysis",
      text: "Gain insights through comprehensive research and data analysis to inform your business strategies.",
    },
  ];

  return (
    <section id="services" className="bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-800 text-white py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-300 drop-shadow-lg">
          Our Services
        </h2>
        <p className="text-lg md:text-xl mb-12 text-gray-100">
          Discover the range of services we offer to elevate your business and streamline operations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Cards */}
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-yellow-300">
                {service.name}
              </h3>
              <p className="text-yellow-100">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
