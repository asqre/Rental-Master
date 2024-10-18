import React from 'react';
import { FaFacebook , FaTwitter, FaInstagram, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-10 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-300">
              We are dedicated to providing excellent service and innovative solutions to our customers.
            </p>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li className="mb-2"><a href="#" className="hover:text-blue-400 transition-colors duration-300">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400 transition-colors duration-300">Services</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400 transition-colors duration-300">About</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-300 mb-2">123 Business St, City, State 12345</p>
            <p className="text-sm text-gray-300 mb-2">Phone: (123) 456-7890</p>
            <p className="text-sm text-gray-300">Email: info@example.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {currentYear} CodeSkills. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;