import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + About */}
        <div>
          <img src="/logo2.png" alt="Slayra Logo" className="h-16 mb-4" />
          <p className="text-md text-gray-400">
            Slayra empowers you to express yourself through personalized fashion, makeup,
            and wellness powered by AI.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl text-pink-600 font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-md text-gray-400">
            <li><Link to="/skin-analysis" className="hover:text-pink-400">Skin Analysis</Link></li>
            <li><Link to="/mood-styling" className="hover:text-pink-400">Mood Styling</Link></li>
            <li><Link to="/smart-outfit-pairing" className="hover:text-pink-400">Smart Outfit Pairing</Link></li>
            <li><Link to="/cultural-makeovers" className="hover:text-pink-400">Cultural Makeovers</Link></li>
            <li><Link to="/self-care-guide" className="hover:text-pink-400">Self-Care Guide</Link></li>
          </ul>
        </div>

        {/* Contact or Newsletter */}
        <div>
          <h4 className="text-xl text-pink-600 font-semibold mb-3">Stay Connected</h4>
          <p className="text-md text-gray-400 mb-3">Join our newsletter for beauty tips & updates.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-black w-full sm:w-auto"
            />
            <button type="submit" className="bg-pink-600 hover:bg-pink-500 px-4 py-2 rounded-md text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Slayra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
