"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative py-8 px-4 md:px-16 lg:px-24 text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent" />

      <motion.div
        className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left: Name / Copyright */}
        <p className="text-sm md:text-base text-center md:text-left">
          <span className="font-semibold text-cyan-400">&copy;</span>{" "}
          {new Date().getFullYear()}{" "}
          <span className="text-gray-300">
            Saddam Ansari. All rights reserved.
          </span>
        </p>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://www.linkedin.com/in/saddam-ansari/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 rounded-full hover:bg-blue-500/30 hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:saddammalik498@gmail.com?subject=Hello%20Saddam&body=Hi%20Saddam,%20I%20would%20like%20to%20get%20in%20touch%20regarding..."
            className="p-3 bg-white/5 rounded-full hover:bg-blue-500/30 hover:scale-110 transition-all duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>

      {/* Optional: small bottom text */}
      <motion.div
        className="relative z-10 text-center text-xs text-gray-500 mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="text-cyan-500">✦</span> Designed & Built by Saddam
        Ansari <span className="text-cyan-500">✦</span>
      </motion.div>
    </footer>
  );
}
