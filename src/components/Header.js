import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import lol from "../assets/q.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    // Smooth scrolling behavior
    const handleSmoothScroll = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-rose-900 text-white min-h-6">
        <div className="max-w-[1280px] mx-auto flex items-center justify-center md:justify-end px-4">
          <ul className="flex text-xs space-x-4 m-2">
            <li className="after:content-['|'] after:ml-4 last:after:content-[''] hover:cursor-pointer">
              <a href="#Welcome">Welcome</a>
            </li>
            <li className="after:content-['|'] after:ml-4 last:after:content-[''] hover:cursor-pointer">
              <a href="#Our-Story">Our Story</a>
            </li>
            <li className="hover:cursor-pointer">
              <a href="#Subscribe">Subscribe</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Logo */}
      <div className="max-w-[1280px] mx-auto flex justify-center py-4">
        <img src={lol} alt="Qargo" className="w-32 md:w-64" />
      </div>

      {/* Main Navigation */}
      <div className="bg-rose-900 text-white min-h-6">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-4">
          {/* Hamburger Icon */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleMenu}
              className="text-white text-xl md:hidden focus:outline-none"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Main Nav Links */}
          <ul
            className={`${
              isOpen ? "flex" : "hidden"
            } flex-col md:flex md:flex-row md:space-x-14 mt-14 md:mt-0 absolute md:relative top-20 left-0 right-0 md:top-auto bg-rose-900 md:bg-transparent text-center md:items-center z-10`}
          >
            <li className="hover:cursor-pointer p-2">
              <a href="#what-is-qargoquote">What is Qargoquote</a>
            </li>
            <li className="hover:cursor-pointer">
              <a href="#logistics-business-owner">Logistics Business Owner</a>
            </li>
            <li className="hover:cursor-pointer">
              <a href="#key-benefits">Key Benefits</a>
            </li>
            <li className="hover:cursor-pointer">
              <a href="#service-provider">Service Provider</a>
            </li>
            <li className="hover:cursor-pointer">
              <a href="#importer-trading">Importer & Trading</a>
            </li>
          </ul>


          <div className="md:flex space-x-4 justify-center items-center mt-2 md:mt-0">
            <button
              type="button"
              className="focus:outline-none text-gray-800 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xs px-4 py-1.5 mb-2 dark:focus:ring-gray-600"
            >
              Sign In
            </button>
            <button
              type="button"
              className="focus:outline-none text-gray-800 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xs px-4 py-1.5 mb-2 dark:focus:ring-gray-600"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
