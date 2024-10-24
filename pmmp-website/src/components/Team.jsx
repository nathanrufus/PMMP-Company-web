import React from 'react';
import John from "./assets/team/john.jpeg"
import Jane from "./assets/team/jane.jpeg"
import Karen from "./assets/team/karen.jpg"
import Mike from "./assets/team/mike.jpeg"


const Team = () => {
  const teamMembers = [
    {
      img: John,
      name: "John Doe",
      job: "Director",
    },
    {
      img: Mike,
      name: "Mike Doe",
      job: "Senior Executive Assistant",
    },
    {
      img: Jane,
      name: "Jane Doe",
      job: "Project Manager",
    },
    {
      img: Karen,
      name: "Karen Doe",
      job: "Client Relations Manager",
    },
  ];

  return (
    <section id="team" className="bg-gray-100 py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-800 drop-shadow-md">
          Meet Our Team
        </h2>
        <p className="text-lg md:text-xl mb-12 text-gray-700">
          Our dedicated team is here to support you with expertise and passion.
        </p>
        
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-indigo-700">
                {member.name}
              </h3>
              <p className="text-gray-500">
                {member.job}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
