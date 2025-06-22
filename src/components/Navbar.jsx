import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black text-white px-6 py-5 flex justify-between items-center">
      <Link to="/">
        <img src="/logo2.png" alt="Slayra Logo" className="h-12" />
      </Link>
      <ul className="flex space-x-6 text-md">
        <li><Link to="/skin-analysis" className="hover:text-pink-400">Skin Analysis</Link></li>
        <li><Link to="/mood-styling" className="hover:text-pink-400">Mood Styling</Link></li>
        <li><Link to="/smart-outfit-pairing" className="hover:text-pink-400">Smart Outfit Pairing</Link></li>
        <li><Link to="/cultural-makeover" className="hover:text-pink-400">Cultural Makeovers</Link></li>
        <li><Link to="/self-care-guide" className="hover:text-pink-400">Self-Care Guide</Link></li>
        <li><Link to="/contact" className="hover:text-pink-400">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
