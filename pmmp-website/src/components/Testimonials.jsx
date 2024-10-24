import React from 'react';
import Jane from "./assets/testimonials/maria.jpg"
import David from "./assets/testimonials/david.jpg"
import fem from "./assets/testimonials/fem1.jpeg"


const Testimonials = () => {
  const testimonials = [
    {
      img: Jane,
      text: "\"PMMP has transformed how I manage my business. Their support has been invaluable in handling the day-to-day tasks, allowing me to focus on growth.\"",
      name: "Jane Smith",
    },
    {
      img: David,
      text: "\"As a solopreneur, I was overwhelmed by admin tasks. PMMP stepped in and handled everything professionally, giving me back precious time.\"",
      name: "David Johnson",
    },
    {
      img: fem,
      text: "\"Their team is detail-oriented and proactive. I highly recommend PMMP for anyone looking to streamline their business operations.\"",
      name: "Maria Lopez",
    },
  ];

  return (
    <section id="testimonials" className="bg-indigo-900 text-white py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-300 drop-shadow-lg">
          What Our Clients Say
        </h2>
        <p className="text-lg md:text-xl mb-12 text-gray-100">
          Hear from those who have trusted PMMP with their business needs.
        </p>
        
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-yellow-300 overflow-hidden"
              />
              <p className="text-yellow-100 italic mb-4">
                {testimonial.text}
              </p>
              <h3 className="text-lg font-semibold text-yellow-300">
                - {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
