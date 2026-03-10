// "use client"

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md text-white z-50">

//       <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

//         <h1 className="text-2xl font-bold tracking-wide">
//           Meghana Ponna
//         </h1>

//         <div className="flex gap-8 text-sm font-medium">

//           <a href="#about" className="hover:text-blue-400 transition">
//             About
//           </a>

//           {/* <a href="#skills" className="hover:text-blue-400 transition">
//             Skills
//           </a> */}

//           <a href="#projects" className="hover:text-blue-400 transition">
//             Projects
//           </a>

//           <a href="#skills" className="hover:text-blue-400 transition">
//             Skills
//           </a>

//           <a href="#contact" className="hover:text-blue-400 transition">
//             Contact
//           </a>

//         </div>

//       </div>

//     </nav>
//   )
// }




"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md text-white z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}

        <h1 className="text-2xl font-bold tracking-wide">
          Meghana Ponna
        </h1>


        {/* Desktop Menu */}

        <div className="hidden md:flex gap-8 text-sm font-medium">

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

        </div>


        {/* Mobile Hamburger Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>

      </div>


      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black border-t border-gray-800"
          >

            <div className="flex flex-col items-center gap-6 py-6 text-lg">

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-400"
              >
                About
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-400"
              >
                Projects
              </a>

              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-400"
              >
                Skills
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-400"
              >
                Contact
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  )
}