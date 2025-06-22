import React from 'react';

const Hero = () => {
  return (
    <section className="bg-pink-100 min-h-[90vh] flex items-center justify-center text-center px-4">
      <div>
        <h2 className="text-5xl font-bold text-pink-600 mb-4">Your Beauty, Enhanced by AI</h2>
        <p className="text-gray-700 text-lg mb-6 max-w-xl mx-auto">
          Slayra helps you discover your perfect colors, styles, and wellness plan using AI skin analysis, mood styling, and cultural makeovers.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-pink-500 transition">Try Slayra Now</button>
      </div>
    </section>
  );
};

export default Hero;
