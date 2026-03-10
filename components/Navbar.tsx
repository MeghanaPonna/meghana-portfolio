// // "use client"

// // export default function Navbar() {
// //   return (
// //     <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md text-white z-50">

// //       <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

// //         <h1 className="text-2xl font-bold tracking-wide">
// //           Meghana Ponna
// //         </h1>

// //         <div className="flex gap-8 text-sm font-medium">

// //           <a href="#about" className="hover:text-blue-400 transition">
// //             About
// //           </a>

// //           {/* <a href="#skills" className="hover:text-blue-400 transition">
// //             Skills
// //           </a> */}

// //           <a href="#projects" className="hover:text-blue-400 transition">
// //             Projects
// //           </a>

// //           <a href="#skills" className="hover:text-blue-400 transition">
// //             Skills
// //           </a>

// //           <a href="#contact" className="hover:text-blue-400 transition">
// //             Contact
// //           </a>

// //         </div>

// //       </div>

// //     </nav>
// //   )
// // }




// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"

// export default function Navbar() {

//   const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md text-white z-50">

//       <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

//         {/* Logo */}

//         <h1 className="text-2xl font-bold tracking-wide">
//           Meghana Ponna
//         </h1>


//         {/* Desktop Menu */}

//         <div className="hidden md:flex gap-8 text-sm font-medium">

//             <a href="/" className="hover:text-blue-400 transition">
//                 Home
//             </a>

//           <a href="/about" className="hover:text-blue-400 transition">
//             About
//           </a>

//           <a href="/projects" className="hover:text-blue-400 transition">
//             Projects
//           </a>

//           <a href="/skills" className="hover:text-blue-400 transition">
//             Skills
//           </a>

//           <a href="/#contact" className="hover:text-blue-400 transition">
//             Contact
//           </a>

//         </div>


//         {/* Mobile Hamburger Button */}

//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden text-white text-2xl"
//         >
//           ☰
//         </button>

//       </div>


//       {/* Mobile Menu */}

//       <AnimatePresence>

//         {menuOpen && (

//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="md:hidden bg-black border-t border-gray-800"
//           >

//             <div className="flex flex-col items-center gap-6 py-6 text-lg">
                

//               <a
//                 href="/about"
//                 onClick={() => setMenuOpen(false)}
//                 className="hover:text-blue-400"
//               >
//                 About
//               </a>

//               <a
//                 href="/projects"
//                 onClick={() => setMenuOpen(false)}
//                 className="hover:text-blue-400"
//               >
//                 Projects
//               </a>

//               <a
//                 href="/skills"
//                 onClick={() => setMenuOpen(false)}
//                 className="hover:text-blue-400"
//               >
//                 Skills
//               </a>

//               <a
//                 href="/#contact"
//                 onClick={() => setMenuOpen(false)}
//                 className="hover:text-blue-400"
//               >
//                 Contact
//               </a>

//             </div>

//           </motion.div>

//         )}

//       </AnimatePresence>

//     </nav>
//   )
// }





"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const linkStyle = (path: string) =>
    `transition hover:text-blue-400 ${
      pathname === path ? "text-blue-400 font-semibold" : "text-white"
    }`

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md text-white z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}

        <Link href="/" className="text-2xl font-bold tracking-wide">
          Meghana Ponna
        </Link>


        {/* Desktop Menu */}

        <div className="hidden md:flex gap-8 text-sm font-medium">

          <Link href="/" className={linkStyle("/")}>
            Home
          </Link>

          <Link href="/about" className={linkStyle("/about")}>
            About
          </Link>

          <Link href="/projects" className={linkStyle("/projects")}>
            Projects
          </Link>

          <Link href="/skills" className={linkStyle("/skills")}>
            Skills
          </Link>

          <Link href="/#contact" className="hover:text-blue-400 transition">
            Contact
          </Link>

        </div>


        {/* Mobile Hamburger */}

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

              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={linkStyle("/")}
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className={linkStyle("/about")}
              >
                About
              </Link>

              <Link
                href="/projects"
                onClick={() => setMenuOpen(false)}
                className={linkStyle("/projects")}
              >
                Projects
              </Link>

              <Link
                href="/skills"
                onClick={() => setMenuOpen(false)}
                className={linkStyle("/skills")}
              >
                Skills
              </Link>

              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-400"
              >
                Contact
              </Link>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  )
}