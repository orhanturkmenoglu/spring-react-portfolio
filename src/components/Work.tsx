import React from "react";
import { motion } from "framer-motion";
import { workData } from "../assets/assets";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="experience"
      className="py-24 my-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        {/* Başlık */}
        <h2 className="text-3xl font-semibold text-center mb-4">
          <span className="text-red-500">Experience</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          My professional journey so far
        </p>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative">
          {/* Dikey Çizgi */}
          <div className="absolute left-5 top-0 w-[2px] h-full bg-gray-700"></div>

          <div className="space-y-12">
            {workData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                {/* Nokta */}
                <div
                  className={`absolute left-[6px] top-2 w-4 h-4 rounded-full bg-${item.color}-500 border-2 border-white`}
                ></div>

                {/* İçerik */}
                <div className="bg-dark-200 p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white">
                    {item.role}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.company}</p>
                  <p className="text-gray-500 text-sm mb-3">{item.duration}</p>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
