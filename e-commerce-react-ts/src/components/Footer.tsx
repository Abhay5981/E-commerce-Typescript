import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <h2 className='text-center font-bold text-2xl mb-8'>Footer</h2>
      <footer className="text-white body-font bg-blue-950">
        <div className="container px-4 py-16 mx-auto">
          <div className="flex flex-wrap md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-6 md:mb-0">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">PAGES</h2>
              <nav className="list-none">
                <li>
                  <a className="text-gray-300 hover:text-gray-400">Home</a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-gray-400">Product</a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-gray-400">Collections</a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-gray-400">Contact Us</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-6 md:mb-0">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none">
                <li>
                  <a className="text-gray-300 hover:text-gray-400">Electronics</a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-gray-400">Jewelry</a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-gray-400">Men's Clothing</a>
                </li>
                <li>
                  <a className="text-gray-300 hover:text-gray-400">Women's Clothing</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-6 md:mb-0">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SUBSCRIBE</h2>
              <div className="flex flex-col md:flex-row md:justify-start items-center">
                <div className="relative w-full md:w-64 mb-4 md:mb-0">
                  <label htmlFor="footer-field" className="leading-7 text-sm text-gray-300">To Newsletter</label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="w-full md:w-auto bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-white">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2 text-center md:text-left">
                Don’t miss out on thousands of great
                <br className="hidden lg:block" />deals & promotions.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-4">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <a className="flex title-font font-medium items-center text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">FackStore</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-6 mt-4 sm:mt-0">
              © 2024— Abhay Kumar.
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank"> All rights reserved</a>
            </p>
            <div className="flex space-x-3 mt-4 sm:mt-0">
              <a className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="text-gray-500">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
