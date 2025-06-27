import React from 'react';

const Navbar = () => {
  const toggleMobileMenu = () => {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-navbar px-navbar-inner">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-semibold text-gray-900">Logo</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#" className="bg-blue-600 text-white px-5 py-2.5 rounded-md text-navbar font-medium hover:bg-blue-700 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-navbar font-medium transition-colors">
              Prepare
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-navbar font-medium transition-colors">
              Jobs
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-navbar font-medium transition-colors">
              My Learning
            </a>
          </div>

          {/* User Profile */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-gray-700 font-medium text-navbar">Ahmed Mohamed</span>
            <div className="w-9 h-9 bg-orange-400 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">A</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden pb-navbar px-navbar-inner">
          <div className="space-y-3">
            <a href="#" className="block bg-blue-600 text-white px-5 py-2.5 rounded-md text-navbar font-medium">
              Home
            </a>
            <a href="#" className="block text-gray-700 hover:text-gray-900 px-5 py-2.5 text-navbar font-medium">
              Prepare
            </a>
            <a href="#" className="block text-gray-700 hover:text-gray-900 px-5 py-2.5 text-navbar font-medium">
              Jobs
            </a>
            <a href="#" className="block text-gray-700 hover:text-gray-900 px-5 py-2.5 text-navbar font-medium">
              My Learning
            </a>
            <div className="flex items-center space-x-4 px-5 py-3 border-t border-gray-200 mt-4">
              <div className="w-9 h-9 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">A</span>
              </div>
              <span className="text-gray-700 font-medium text-navbar">Ahmed Mohamed</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;