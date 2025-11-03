import React from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
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
        <div className="hidden md:flex space-x-10">
          <a
            href="#home"
            className="relative text-white/80 transition duration-300 hover:text-red-500 group "
          >
            <span>Home</span>
            <span
              className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500
            transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
          <a
            href="#about"
            className="relative text-white/80 transition duration-300 hover:text-red-500 group "
          >
            <span>About</span>
            <span
              className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500
            transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
          <a
            href="#skilss"
            className="relative text-white/80 transition duration-300 hover:text-red-500 group "
          >
            <span>Skilss</span>
            <span
              className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500
            transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
          <a
            href="#projects"
            className="relative text-white/80 transition duration-300 hover:text-red-500 group "
          >
            <span>Projects</span>
            <span
              className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500
            transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
          <a
            href="#experience"
            className="relative text-white/80 transition duration-300 hover:text-red-500 group "
          >
            <span>Experience</span>
            <span
              className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500
            transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
          <a
            href="#contact"
            className="relative text-white/80 transition duration-300 hover:text-red-500 group "
          >
            <span>Contact</span>
            <span
              className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500
            transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
          <div className="md:hidden">
            <FaBars />
            <FaXmark />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
