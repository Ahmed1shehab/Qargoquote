import React from 'react';
import { Link } from 'react-router-dom';
import q from '../assets/q.png';

export const Footer = () => {
  return (
    <footer id='Subscribe' className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <img src={q} alt="Qargo" className="w-64 ml-4 " />          </Link>
          <button 
            type="button" 
            className="py-3 px-6 text-md font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Subscribe Now
          </button>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <Link to="/" className="hover:underline">Qargoquote™</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
