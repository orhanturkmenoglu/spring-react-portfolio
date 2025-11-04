import React from "react";
import { motion } from "framer-motion";
import { assets, aboutInfo } from "../assets/assets";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-24 bg-gradient-to-b from-dark-200 via-dark-300 to-dark-200"
    >
      <div className="container mx-auto px-6">
        {/* ===== Heading ===== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-red-500">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer crafting modern, meaningful digital experiences.
          </p>
        </div>

        {/* ===== Content Section ===== */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Left Image */}
          <motion.div
            className="relative md:w-1/3 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Gradient border effect */}
            <div className="relative rounded-2xl p-1 bg-gradient-to-tr from-red-500 via-purple-500 to-blue-500">
              <img
                src={assets.profileImg}
                alt="Profile"
                className="rounded-2xl w-64 h-80 object-cover border-4 border-dark-300 shadow-2xl"
              />
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 blur-3xl opacity-20 bg-red-500 rounded-2xl"></div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="md:w-2/3 backdrop-blur-lg bg-dark-400/40 border border-white/10 rounded-3xl p-10 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              My Journey 🚀
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              I’m a creative software developer focused on building elegant,
              high-performance applications with a great user experience.
            </p>

            <p className="text-gray-300 leading-relaxed mb-12">
              With every project, I aim to write clean code, create delightful
              interfaces, and push the boundaries of modern web development.
            </p>

            {/* ===== Info Cards ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {aboutInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-dark-500/50 border border-white/10 rounded-2xl p-6 text-center 
                    hover:-translate-y-2 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300"
                  >
                    <div
                      className={`flex justify-center items-center w-14 h-14 rounded-xl mx-auto mb-4 
                      bg-gradient-to-br from-dark-200 to-dark-400`}
                    >
                      <Icon className={`text-3xl ${item.color}-500`} />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
