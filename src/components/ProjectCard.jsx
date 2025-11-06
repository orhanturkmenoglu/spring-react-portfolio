import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, tech,code,demo }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="group bg-gradient-to-b from-[#1c1c1c]/90 to-[#121212]/90 
      rounded-2xl overflow-hidden border border-white/10 
      shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer 
      backdrop-blur-lg"
    >
      {/* ===== Project Image ===== */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover rounded-t-2xl 
          transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent 
        opacity-0 group-hover:opacity-100 transition duration-500 rounded-t-2xl"
        ></div>
      </div>

      {/* ===== Project Content ===== */}
      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2 tracking-wide">
            {title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>

          {/* ===== Tech Tags ===== */}
          <div className="flex flex-wrap gap-2 mb-5">
            {tech.map((t, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs rounded-full bg-[#232323] 
                border border-white/10 text-gray-300 group-hover:border-purple-400/40 
                transition duration-300 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>

          {/* ===== Buttons ===== */}
          <div className="flex gap-3 mt-6">
            {/* ===== Code Button ===== */}
            <a
              href={code}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium
    rounded-lg border border-purple-500/60 text-purple-300 
    bg-gradient-to-r from-purple-900/30 to-purple-800/10 
    hover:from-purple-600/30 hover:to-purple-700/20 
    hover:text-white hover:shadow-lg hover:shadow-purple-500/20 
    transition-all duration-300 backdrop-blur-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                />
              </svg>
              Code
            </a>

            {/* ===== Demo Button ===== */}
            <a
              href={demo}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium 
    rounded-lg border border-pink-500/60 text-pink-300 
    bg-gradient-to-r from-pink-900/30 to-pink-800/10 
    hover:from-pink-600/30 hover:to-pink-700/20 
    hover:text-white hover:shadow-lg hover:shadow-pink-500/20 
    transition-all duration-300 backdrop-blur-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7-7 7M3 12h18"
                />
              </svg>
              Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
