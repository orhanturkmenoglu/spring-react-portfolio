import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
            Hi, I'm{" "}
            <span className="text-red-500 font-bold">Orhan TÜRKMENOĞLU</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-extrabold mb-6 mt-5 text-gray-200 typewriter">
            Full Stack Developer
          </h2>

          <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto md:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            beatae?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-red-500 rounded-lg font-medium text-white hover:bg-red-600 transition duration-300 shadow-md hover:shadow-red-500/30"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-blue-500 rounded-lg font-semibold text-blue-400 hover:bg-blue-500/20 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
