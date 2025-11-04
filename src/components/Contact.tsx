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
      className="py-32 bg-gradient-to-b from-[#0b0b0b] via-[#141414] to-[#0b0b0b] relative overflow-hidden"
    >
      {/* 🔥 Arka plan kırmızı glow efekti */}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_right,_#ef4444,_transparent_60%)] blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* ==== Başlık ==== */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let’s <span className="text-red-500">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Have a question, a project idea, or just want to say hi?  
            Feel free to reach out — I’d love to collaborate with you.
          </p>
        </div>

        {/* ==== İçerik ==== */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
          {/* Sol: İletişim Bilgileri */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className=" bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-red-500/40 transition-all duration-300">
              {[
                {
                  icon: <Mail className="text-red-400 w-6 h-6" />,
                  title: "Email",
                  info: "orhan.turkmenoglu@example.com",
                },
                {
                  icon: <Phone className="text-red-400 w-6 h-6" />,
                  title: "Phone",
                  info: "+90 555 123 4567",
                },
                {
                  icon: <MapPin className="text-red-400 w-6 h-6" />,
                  title: "Location",
                  info: "İstanbul, Türkiye",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 mb-6">
                  <div className="bg-red-500/20 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-gray-400">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 🔗 Sosyal Medya Linkleri */}
            <div className="flex gap-6 pt-4">
              {[
                {
                  href: "https://github.com/orhant",
                  icon: <Github className="text-white w-6 h-6" />,
                },
                {
                  href: "https://linkedin.com/in/orhant",
                  icon: <Linkedin className="text-white w-6 h-6" />,
                },
                {
                  href: "mailto:orhan.turkmenoglu@example.com",
                  icon: <Mail className="text-white w-6 h-6" />,
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-red-500/40 hover:bg-red-500/10 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Sağ: İletişim Formu */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl space-y-6"
          >
            {[{ label: "Your Name", type: "text", placeholder: "John Doe" },
              { label: "Email Address", type: "email", placeholder: "you@example.com" }
            ].map((field, index) => (
              <div key={index}>
                <label className="block text-gray-300 mb-2">{field.label}</label>
                <input
                  type={field.type}
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700 focus:outline-none focus:border-red-500 text-white placeholder-gray-500"
                  placeholder={field.placeholder}
                />
              </div>
            ))}

            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700 focus:outline-none focus:border-red-500 text-white placeholder-gray-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg shadow-lg shadow-red-500/30 hover:opacity-90 transition"
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
