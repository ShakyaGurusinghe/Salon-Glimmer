import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact Us', href: '#contact' }
  ];

  return (
    <nav className="bg-slate-900 text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9M19 9H14V4H19V9Z"/>
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Glimmer
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-slate-800 rounded-md"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Get Started Button - Desktop */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-2 rounded-full font-medium hover:from-pink-500 hover:to-rose-500 transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-95 md:hidden z-40">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white p-2"
            >
              <X size={32} />
            </button>
            
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={toggleMenu}
                className="text-white text-2xl font-medium hover:text-pink-400 transition-colors duration-200 border-l-4 border-transparent hover:border-pink-400 pl-4"
              >
                {item.name}
              </a>
            ))}
            
            <button 
              onClick={toggleMenu}
              className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-3 rounded-full font-medium text-lg mt-8 hover:from-pink-500 hover:to-rose-500 transition-all duration-200 shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;