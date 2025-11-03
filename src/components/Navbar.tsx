import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8
    shadow-lg "
    >
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="#" className="text-3xl text-white font-semibold">
            Orhan
            <span className="text-red-500">TÜRKMENOĞLU</span>
          </a>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="relative text-white/80 transition duration-300 hover:text-red-500 group "
            >
              <span>{link.name}</span>
              <span
                className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500
            transition-all duration-300 group-hover:w-full"
              ></span>
            </a>
          ))}
        </div>
        {/* Mobile button */}
        <div className="md:hidden">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile menus */}
      {showMenu && (
        <div
          className="md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4
            flex flex-col space-y-4  text-center justify-center"
        >
          {navLinks.map((link,index) => (
            <a
              href={link.href}
              key={index}
              onClick={() => setShowMenu(!showMenu)}
              className="relative text-white/80 transition duration-300 hover:text-red-500 group "
            >
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
