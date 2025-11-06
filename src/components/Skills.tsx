import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchSkillInfoList } from "../utils/apiEndpoints";
import { FaIcons } from "react-icons/fa";

const Skills = () => {
  const [skillDataInfo, setSkillDataInfo] = useState([]);

  useEffect(() => {
    const loadSkillData = async () => {
      try {
        const data = await fetchSkillInfoList();
        setSkillDataInfo(data);
        localStorage.setItem("skillDataInfo", JSON.stringify(data));
        console.log("Skill data fetched successfully:", data);
      } catch (error) {
        console.error("Error fetching skill data:", error);
        const cachedData = localStorage.getItem("skillDataInfo");
        if (cachedData) {
          setSkillDataInfo(JSON.parse(cachedData));
          console.log("Loaded cached skill data");
        }
      }
    };
    loadSkillData();
  }, []);

  return (
    <motion.section
      id="skills"
      className="py-24 bg-gradient-to-b from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        {/* ===== Heading ===== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-red-500">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to turn ideas into clean, functional
            and scalable solutions.
          </p>
        </div>

        {/* ===== Skills Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {skillDataInfo.data?.map((skill, index) => {
            const IconComponent = FaIcons[skill.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: index * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.04 }}
                className="group relative bg-[#1c1c1c]/80 border border-white/10 rounded-2xl 
                p-8 shadow-md hover:shadow-purple-500/10 transition-all duration-300
                backdrop-blur-lg overflow-hidden"
              >
                {/* Gradient Hover Effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-transparent opacity-0 
                group-hover:opacity-100 transition duration-500 rounded-2xl"
                ></div>

                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-900/10">
                    {IconComponent ? (
                      <IconComponent className="text-3xl text-red-500" />
                    ) : (
                      <span className="text-red-500 text-2xl">⚙️</span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {skill.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                  {skill.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6 relative z-10">
                  {skill.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#2a2a2a] rounded-full text-gray-300 text-xs 
                      border border-white/10 group-hover:border-purple-500/30 transition duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
