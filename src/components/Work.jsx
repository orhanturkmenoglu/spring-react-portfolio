import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchWorkInfoList } from "../utils/apiEndpoints";

const Experience = () => {
  const [workDataInfo, setWorkDataInfo] = useState([]);

  useEffect(() => {
    const loadWorkData = async () => {
      try {
        const response = await fetchWorkInfoList();
        if (response.status === 200) {
          setWorkDataInfo(response.data);
          localStorage.setItem("WorkDataInfo", JSON.stringify(response.data));
          console.log("Work data fetched successfully:", response.data);
        }
      } catch (error) {
        console.error("Work data fetch failed:", error);
        const cachedData = localStorage.getItem("WorkDataInfo");
        if (cachedData) {
          setWorkDataInfo(JSON.parse(cachedData));
          console.log(
            "Loaded work data from localStorage:",
            JSON.parse(cachedData)
          );
        }
      }
    };
    loadWorkData();
  }, []);
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-24 bg-gradient-to-b from-[#141414] via-[#1a1a1a] to-[#141414]"
    >
      <div className="container mx-auto px-6">
        {/* ===== Heading ===== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-red-500">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A glimpse into my professional journey and growth.
          </p>
        </div>

        {/* ===== Timeline Container ===== */}
        <div className="max-w-3xl mx-auto relative">
          {/* Gradient Line */}
          <div className="absolute left-6 top-0 w-[3px] h-full bg-gradient-to-b from-red-500 via-purple-500 to-blue-500 rounded-full"></div>

          <div className="space-y-12 relative">
            {workDataInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-16"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-[6px] top-6 w-5 h-5 rounded-full bg-${item.color}-500 border-4 border-[#1a1a1a] shadow-md shadow-${item.color}-500/40`}
                ></div>

                {/* Card */}
                <div className="bg-[#1e1e1e]/80 border border-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-md hover:-translate-y-2 transition-all duration-300 hover:shadow-red-500/20">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {item.role}
                  </h3>
                  <p className="text-gray-400 text-sm mb-1">{item.company}</p>
                  <p className="text-gray-500 text-sm mb-3 italic">
                    {item.duration}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
