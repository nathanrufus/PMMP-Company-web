import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white text-center py-20 shadow-lg">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide drop-shadow-lg">
        Executive Assistance for Businesses and Solopreneurs
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto px-6 text-yellow-100 drop-shadow-md">
        At <span className="text-yellow-300 font-bold">PMMP</span>, we specialize in providing top-tier executive assistance to help businesses and solopreneurs streamline operations, manage tasks, and grow efficiently. Let us handle the details so you can focus on success.
      </p>
    </header>
  );
};

export default Header;
