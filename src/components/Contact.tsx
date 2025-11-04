import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-28 bg-gradient-to-b from-[#0b0b0b] via-[#141414] to-[#0b0b0b] relative overflow-hidden"
    >
      {/* Arka plan glow efekti */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#9333ea,_transparent_50%)] blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* ==== Heading ==== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let’s <span className="text-purple-500">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question, a project, or just want to say hi? I’d love to hear
            from you. Let’s build something amazing together!
          </p>
        </div>

        {/* ==== Main Content ==== */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <Mail className="text-purple-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-400">
                    orhan.turkmenoglu@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <Phone className="text-purple-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-gray-400">+90 555 123 4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <MapPin className="text-purple-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-gray-400">İstanbul, Türkiye</p>
                </div>
              </div>
            </div>

            {/* ==== Social Links ==== */}
            <div className="flex gap-5 pt-6">
              <a
                href="https://github.com/orhant"
                target="_blank"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300"
              >
                <Github className="text-white w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/orhant"
                target="_blank"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300"
              >
                <Linkedin className="text-white w-6 h-6" />
              </a>
              <a
                href="mailto:orhan.turkmenoglu@example.com"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300"
              >
                <Mail className="text-white w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl space-y-6"
          >
            <div>
              <label className="block text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700 focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700 focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700 focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/30 hover:opacity-90 transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
