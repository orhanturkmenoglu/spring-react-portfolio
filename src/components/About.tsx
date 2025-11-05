import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { assets /* aboutInfo */ } from "../assets/assets";
import axios from "axios";
import * as FaIcons from "react-icons/fa";

const About = () => {
  const [aboutInfoData, setAboutInfoData] = useState([]);
  console.log("About Info :", aboutInfoData);

  const fetchAboutInfoList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1.0/abouts");
      if (response.status === 200) {
        setAboutInfoData(response.data);
        localStorage.setItem("aboutInfoData", JSON.stringify(response.data));
        console.log("response data :", response.data);
      }
    } catch (error) {
      console.log("Error fetching about data", error);
      const cachedData = localStorage.getItem("aboutInfoData");
      if (cachedData) {
        setAboutInfoData(JSON.parse(cachedData));
      } else {
        console.warn("No cached aboutInfoData found in localStorage");
      }
    }
  };

  useEffect(() => {
    fetchAboutInfoList();
  }, []);

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-24 bg-gradient-to-b from-[#141414] via-[#1d1d1d] to-[#141414]"
    >
      <div className="container mx-auto px-6">
        {/* ===== Heading ===== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-red-500">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building scalable, secure, and impactful software with purpose.
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
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-tr from-red-500 via-purple-500 to-blue-500 shadow-lg shadow-red-500/10">
              <img
                src={assets.profileImg}
                alt="Profile"
                className="rounded-2xl w-64 h-80 object-cover border-4 border-[#1d1d1d]"
              />
            </div>
            <div className="absolute inset-0 blur-3xl opacity-25 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-2xl"></div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="md:w-2/3 backdrop-blur-xl bg-[#1f1f1f]/60 border border-white/10 rounded-3xl p-10 shadow-lg shadow-black/40"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              My Journey 🚀
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              I’m a passionate Java & Spring Boot developer specialized in
              building enterprise-grade backend systems using microservices,
              Clean Architecture, and Domain-Driven Design principles.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              I design secure authentication and authorization flows using JWT,
              OAuth2, and Keycloak — deploying scalable cloud solutions with
              Docker, AWS, and Spring Cloud. My focus is on writing clean,
              maintainable, and production-ready code.
            </p>

            <p className="text-gray-300 leading-relaxed mb-12">
              I also develop modern frontend experiences with React and
              TailwindCSS, manage full-stack projects from backend logic to UI,
              and share my technical insights on Medium and GitHub to help the
              community grow.
            </p>

            {/* ===== Info Cards ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {aboutInfoData.data?.map((item, index) => {
                const IconComponent = FaIcons[item.icon]; // 👈 stringi bileşene dönüştür
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#1b1b1b]/70 border border-white/10 rounded-2xl p-6 text-center 
        hover:shadow-md hover:shadow-red-500/20 transition-all duration-300"
                  >
                    <div
                      className={`flex justify-center items-center w-14 h-14 rounded-xl mx-auto mb-4
          bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]`}
                    >
                      {IconComponent ? (
                        <IconComponent
                          className={`text-3xl text-${item.color}-400`}
                        />
                      ) : (
                        <FaIcons.FaQuestionCircle className="text-3xl text-gray-400" /> // fallback
                      )}
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </motion.div>
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
