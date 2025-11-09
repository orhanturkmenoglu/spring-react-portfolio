import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import DarkModeSwitch from "./DarkModeSwitch";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/works" },
    { name: "Contact", href: "/contact" },
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
  ];

  // Scroll olunca navbar opak hale gelsin
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => setShowMenu(!showMenu);

  return (
    <>
      <nav
        className={`fixed w-full z-50 py-4 px-8 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0b0b0b]/90 backdrop-blur-lg shadow-lg shadow-red-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* === Logo === */}
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold text-white tracking-wide"
          >
            <span className="text-white">Orhan</span>
            <span className="text-red-500">Türkmenoğlu</span>
          </Link>

          {/* === Desktop Menü === */}
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link, index) => (
              <Link
                to={link.href}
                key={index}
                className="relative text-gray-300 hover:text-red-500 font-medium transition-all duration-300 group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* === Dark Mode Switch === */}
            <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

          {/* === Mobil Menü Butonu + Switch === */}
          <div className="md:hidden flex items-center space-x-4 text-white text-2xl cursor-pointer">
            <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
            {showMenu ? (
              <FaXmark onClick={handleClick} />
            ) : (
              <FaBars onClick={handleClick} />
            )}
          </div>
        </div>
      </nav>

      {/* === Full Screen Mobil Menü Overlay === */}
      {showMenu && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col justify-center items-center space-y-8 text-3xl md:hidden">
          {navLinks.map((link, index) => (
            <Link
              to={link.href}
              key={index}
              onClick={handleClick}
              className="text-white hover:text-red-500 font-semibold transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
