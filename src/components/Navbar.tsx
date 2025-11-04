import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  // Scroll olunca arka plan değişsin
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav
      className={`fixed w-full z-50 py-4 px-8 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0b0b0b]/90 backdrop-blur-lg shadow-lg shadow-red-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl md:text-3xl font-bold text-white tracking-wide"
        >
          <span className="text-white">Orhan</span>
          <span className="text-red-500">Türkmenoğlu</span>
        </a>

        {/* === Desktop Menü === */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="relative text-gray-300 hover:text-red-500 font-medium transition-all duration-300 group"
            >
              {link.name}
              <span
                className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"
              ></span>
            </a>
          ))}
        </div>

        {/* === Mobil Menü Butonu === */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          {showMenu ? (
            <FaXmark onClick={handleClick} />
          ) : (
            <FaBars onClick={handleClick} />
          )}
        </div>
      </div>

      {/* === Mobil Menü === */}
      {showMenu && (
        <div className="md:hidden mt-4 bg-[#121212] rounded-lg p-6 flex flex-col space-y-6 text-center">
          {navLinks.map((link, index) => (
            <a
              href={link.href}
              key={index}
              onClick={handleClick}
              className="text-gray-300 hover:text-red-500 font-medium transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
