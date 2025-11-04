import React, { useState } from "react";
import { Menu, X, Home, Users, Briefcase, Phone } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About Us", href: "#about", icon: Users },
    { name: "Services", href: "#services", icon: Briefcase },
    { name: "Contact Us", href: "#contact", icon: Phone },
  ];

  return (
    <nav className="bg-slate-900 text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/logo.jpeg"
                alt="Glimmer Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveItem(item.name)}
                  className={`text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-slate-800 rounded-md ${
                    activeItem === item.name ? "text-white bg-slate-800" : ""
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Get Started Button - Desktop */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-[#BD8E89] to-[#7F6269] text-white px-6 py-1.5 rounded-md font-medium hover:from-[#a87c77] hover:to-[#6e5259] transition-all duration-200 shadow-lg hover:shadow-xl">
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

      {/* Mobile Menu Overlay - Left aligned */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-95 md:hidden z-40">
          <div className="h-full flex flex-col">
            {/* Close button at top right */}
            <div className="flex justify-end p-6">
              <button
                onClick={toggleMenu}
                className="text-white p-2 hover:bg-slate-800 rounded-md transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation items aligned to left */}
            <div className="flex-1 px-8 space-y-4"> {/* Added left padding */}
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeItem === item.name;
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleItemClick(item.name)}
                    className={`flex items-center space-x-4 text-white text-lg font-medium hover:text-pink-400 transition-colors duration-200 w-full py-3 ${
                      isActive ? "text-pink-400" : ""
                    }`}
                  >
                    <IconComponent size={20} />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Get Started button at bottom left */}
            <div className="p-8"> {/* Added padding */}
              <button
                onClick={toggleMenu}
                className="bg-gradient-to-r from-[#BD8E89] to-[#7F6269] text-white px-6 py-2 rounded-md font-medium hover:from-[#a87c77] hover:to-[#6e5259] transition-all duration-200 shadow-lg hover:shadow-xl w-full"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;