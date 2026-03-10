"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800">

      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Section */}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h2 className="text-white font-semibold text-lg">
            Meghana Ponna
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Full Stack Developer • MERN Stack
          </p>
        </motion.div>


        {/* Navigation Links */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex gap-6 text-sm"
        >
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>

          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>

          <a href="#skills" className="hover:text-blue-400 transition">
            Skills
          </a>

          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </motion.div>


        {/* Social Links */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex gap-5 text-sm"
        >
          <a
            href="https://github.com/MeghanaPonna"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/ponna-meghana"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:meghanaponna234@gmail.com"
            className="hover:text-blue-400 transition"
          >
            Email
          </a>
        </motion.div>

      </div>


      {/* Bottom Copyright */}

      <div className="text-center text-xs text-gray-500 pb-6">
        © {new Date().getFullYear()} Meghana Ponna. All rights reserved.
      </div>

    </footer>
  )
}