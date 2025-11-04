import React from "react";
import { motion } from "framer-motion";
import { projects } from "../assets/assets";
import ProjectCard from "./ProjectCard";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-24 bg-gradient-to-b from-[#0b0b0b] via-[#141414] to-[#0b0b0b] relative z-20 overflow-visible"
    >
      <div className="container mx-auto px-6">
        {/* ===== Heading ===== */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            My <span className="text-purple-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of projects where{" "}
            <span className="text-white/90">design</span> meets{" "}
            <span className="text-white/90">clean, scalable code</span>. Built
            with passion and precision.
          </p>
        </div>

        {/* ===== Projects Grid ===== */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* ===== View More Button ===== */}
        <div className="flex justify-center mt-20">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full 
              bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
              text-white font-semibold tracking-wide text-sm 
              shadow-lg shadow-purple-500/40 hover:shadow-pink-500/50 
              transition-all duration-300 hover:translate-x-1"
          >
            View More Projects
            <FaArrowRight className="text-sm" />
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
