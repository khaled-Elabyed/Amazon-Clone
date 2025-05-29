import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-3">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-yellow-400">
          AmazonClone
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-sm md:text-base">
          <Link
            to="/"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Home
          </Link>

          <Link
            to="/cart"
            className="flex items-center gap-1 hover:text-yellow-400 transition-colors duration-200"
          >
            <FaCartPlus className="text-lg" />
            Cart
          </Link>

          <Link
            to="/login"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-1 px-4 rounded-md transition duration-200"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
