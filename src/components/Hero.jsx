import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_ENDPOINTS, BASE_URL } from "../utils/apiEndpoints";
import toast from "react-hot-toast";
import { LoaderCircle } from "lucide-react";

const Hero = () => {
  const [loading, setLoading] = useState(false);

  const downloadCvPdf = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1.0/export/pdf",
        {
          headers: {
            "Content-Type": "application/pdf",
          },
          responseType: "blob",
        }
      );

      if (!response.status === 200) {
        throw new Error("Error downloading PDF.");
      }

      const blob = await response.data; // PDF dosyasını binary olarak al
      const url = window.URL.createObjectURL(blob); // geçici bir URL oluştur
      const a = document.createElement("a");
      a.href = url;
      a.download = "Orhan_Turkmenoglu_CV.pdf"; // indirilecek dosya adı
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      toast.success("Successfully downloaded CV PDF!"); // Başarı toast
    } catch (error) {
      console.error("Error downloading PDF:", error);
      toast.error("Failed to download CV PDF.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center justify-center pt-24 pb-16 bg-gradient-to-r from-[#141414] via-[#1f1f1f] to-[#141414]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm{" "}
            <span className="text-red-500 font-extrabold">
              Orhan TÜRKMENOĞLU
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl font-semibold mt-4 mb-6 text-blue-400 typewriter"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Full Stack Java Developer
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg mb-8 max-w-md mx-auto md:mx-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experienced in building enterprise-grade backend systems with Java
            and Spring Boot. Skilled in microservices, Clean Architecture, and
            secure authentication with JWT and OAuth2. Passionate about
            developing scalable fintech solutions and crafting modern UIs with
            React.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              onClick={() => {
                setTimeout(() => {
                  downloadCvPdf();
                }, 200);
              }}
              className="px-6 py-3 bg-red-500 rounded-lg font-medium text-white hover:bg-red-600 
              transition duration-300 shadow-md hover:shadow-red-500/40 cursor-pointer"
            >
              {loading ? (
                <>
                  <LoaderCircle size={18} className="animate-spin h-5" />
                  Downloading...
                </>
              ) : (
                <>Download Cv</>
              )}
            </button>

            <a
              href="#contact"
              className="px-6 py-3 border border-blue-500 rounded-lg font-semibold text-blue-400 hover:bg-blue-500/20 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Side Image */}
        <motion.div
          className="md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 blur-2xl opacity-40 animate-pulse"></div>
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-gray-800 shadow-lg"
              src={assets.profileImg}
              alt="profile"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
