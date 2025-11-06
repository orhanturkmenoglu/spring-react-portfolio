import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      setDarkMode(true);
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`relative flex items-center justify-between w-14 h-7 rounded-full transition-all duration-500
        ${darkMode ? "bg-gradient-to-r from-gray-800 to-gray-900 shadow-inner" : "bg-gray-200 shadow-lg"}
        border border-gray-600/40 hover:scale-105 hover:shadow-red-500/30
      `}
    >
      {/* Kaydırma Noktası */}
      <span
        className={`absolute w-6 h-6 rounded-full transform transition-all duration-500 ${
          darkMode
            ? "translate-x-7 bg-gradient-to-r from-red-500 to-red-700 shadow-red-500/40 shadow-md"
            : "translate-x-1 bg-yellow-400 shadow-yellow-300/50"
        }`}
      ></span>

      {/* İkonlar */}
      <Sun
        className={`w-4 h-4 absolute left-1 text-yellow-500 transition-opacity duration-500 ${
          darkMode ? "opacity-0" : "opacity-100"
        }`}
      />
      <Moon
        className={`w-4 h-4 absolute right-1 text-gray-200 transition-opacity duration-500 ${
          darkMode ? "opacity-100" : "opacity-0"
        }`}
      />
    </button>
  );
};

export default DarkModeSwitch;
