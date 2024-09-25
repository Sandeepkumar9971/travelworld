import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Brand Name */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">
            <span className="text-yellow-500 font-pacifico uppercase">Travel</span>
            <span className="text-green-500 font-pacifico uppercase">World</span>
          </h2>
          <p className="text-gray-400 mt-1">Your travel partner for unforgettable experiences.</p>
        </div>

        {/* Social Media Icons */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-yellow-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="bg-gray-900 py-4 mt-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Travel World. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
