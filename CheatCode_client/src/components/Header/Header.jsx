import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaHome, FaClipboardList, FaUsers, FaUserCircle } from 'react-icons/fa'; // Using Font Awesome icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling mobile menu

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/">CodeHub</Link> {/* Your app's logo */}
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              <FaBars className="text-2xl" />
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              menuOpen ? 'block' : 'hidden'
            } md:flex md:space-x-6 items-center space-y-4 md:space-y-0`}
          >
            {/* Home Button */}
            <Link to="/" className="flex items-center space-x-2 hover:text-yellow-400">
              <FaHome />
              <span>Home</span>
            </Link>

            {/* Problems Button */}
            <Link to="/problems" className="flex items-center space-x-2 hover:text-yellow-400">
              <FaClipboardList />
              <span>Problems</span>
            </Link>

            {/* Community Button */}
            <Link to="/community" className="flex items-center space-x-2 hover:text-yellow-400">
              <FaUsers />
              <span>Community</span>
            </Link>

            {/* Profile Icon Button */}
            <Link to="/profile" className="flex items-center space-x-2 hover:text-yellow-400">
              <FaUserCircle />
              <span>Profile</span>
            </Link>
          </div>

          {/* Mobile Menu (Hidden on Desktop) */}
          <div
            className={`${
              menuOpen ? 'block' : 'hidden'
            } md:hidden mt-4 space-y-4 bg-blue-700 text-center px-4 py-2`}
          >
            <Link to="/" className="block text-white">Home</Link>
            <Link to="/problems" className="block text-white">Problems</Link>
            <Link to="/community" className="block text-white">Community</Link>
            <Link to="/profile" className="block text-white">Profile</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
