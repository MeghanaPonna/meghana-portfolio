// // // "use client"

// // // import { motion } from "framer-motion"

// // // export default function Hero() {
// // //   return (

// // //     <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-950 to-black text-white px-6">

// // //       <motion.h1
// // //         initial={{ opacity:0 , y:20 }}
// // //         animate={{ opacity:1 , y:0 }}
// // //         transition={{ duration:1 }}
// // //         className="text-6xl font-bold leading-tight"
// // //       >
// // //         Hi, I'm
// // //         <span className="text-blue-500"> Meghana Ponna</span>
// // //       </motion.h1>


// // //       <motion.p
// // //         initial={{ opacity:0 }}
// // //         animate={{ opacity:1 }}
// // //         transition={{ delay:0.5 }}
// // //         className="mt-6 text-xl text-gray-300"
// // //       >
// // //         Full Stack Developer | MERN Stack
// // //       </motion.p>


// // //       <p className="mt-6 max-w-2xl text-gray-400">

// // //         I build scalable and secure full-stack web applications using
// // //         modern technologies like React, Node.js, Express, and MongoDB.
// // //         Passionate about backend engineering, problem solving,
// // //         and building production-ready systems.

// // //       </p>


// // //       {/* <div className="mt-10 flex gap-6">

// // //         <a
// // //           href="#projects"
// // //           className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
// // //         >
// // //           View Projects
// // //         </a>

// // //         <a
// // //           href="/23211A12D2-P.Meghana.pdf"
// // //           className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-white hover:text-black transition"
// // //         >
// // //           Download Resume
// // //         </a>
       
// // //       </div> */}
       
// // //        <div className="mt-10 flex gap-6">

// // //   <a
// // //     href="#projects"
// // //     className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
// // //   >
// // //     View Projects
// // //   </a>

// // //   <a
// // //     href="/23211A12D2-P.Meghana.pdf"
// // //     target="_blank"
// // //     rel="noopener noreferrer"
// // //     className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-blue-600 hover:text-white transition"
// // //   >
// // //     View Resume
// // //   </a>

// // // </div>



// // //     </section>
// // //   )
// // // }






// // "use client"

// // import { motion } from "framer-motion"

// // const container = {
// //   hidden: { opacity: 0 },
// //   show: {
// //     opacity: 1,
// //     transition: {
// //       staggerChildren: 0.2
// //     }
// //   }
// // }

// // const item = {
// //   hidden: { opacity: 0, y: 20 },
// //   show: {
// //     opacity: 1,
// //     y: 0,
// //     transition: { duration: 0.6 }
// //   }
// // }

// // export default function Hero() {
// //   return (

// //     <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-950 to-black text-white px-6">

// //       <motion.div
// //         variants={container}
// //         initial="hidden"
// //         animate="show"
// //         className="flex flex-col items-center"
// //       >

// //         {/* Heading */}

// //         <motion.h1
// //           variants={item}
// //           className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
// //         >
// //           Hi, I'm
// //           <span className="text-blue-500"> Meghana Ponna</span>
// //         </motion.h1>

// //         {/* Role */}

// //         <motion.p
// //           variants={item}
// //           className="mt-6 text-lg md:text-xl text-gray-300"
// //         >
// //           Full Stack Developer • MERN Stack
// //         </motion.p>

// //         {/* Description */}

// //         <motion.p
// //           variants={item}
// //           className="mt-6 max-w-2xl text-gray-400 text-base md:text-lg leading-relaxed"
// //         >
// //           {/* I build scalable and secure full-stack applications using modern
// //           technologies like React, Node.js, Express, and MongoDB.
// //           Passionate about backend engineering, problem solving,
// //           and building reliable production-ready systems. */}
// //           I build scalable web applications using the MERN stack, focusing on clean backend architecture, secure authentication systems, and real-world problem solving.
// //         </motion.p>

// //         {/* Buttons */}

// //         <motion.div
// //           variants={item}
// //           className="mt-10 flex flex-col sm:flex-row gap-4"
// //         >

// //           <a
// //             href="#projects"
// //             className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition font-medium shadow-lg"
// //           >
// //             View Projects
// //           </a>

// //           <a
// //             href="/23211A12D2-P.Meghana.pdf"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-blue-600 hover:text-white transition font-medium"
// //           >
// //             View Resume
// //           </a>

// //         </motion.div>

// //         {/* Social Links */}

// //         <motion.div
// //           variants={item}
// //           className="flex gap-6 mt-10 text-gray-400"
// //         >

// //           <a
// //             href="https://github.com/MeghanaPonna"
// //             target="_blank"
// //             className="hover:text-blue-400 transition"
// //           >
// //             GitHub
// //           </a>

// //           <a
// //             href="https://linkedin.com/in/ponna-meghana"
// //             target="_blank"
// //             className="hover:text-blue-400 transition"
// //           >
// //             LinkedIn
// //           </a>

// //         </motion.div>

// //       </motion.div>

// //     </section>
// //   )
// // }







// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2
//     }
//   }
// }

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6 }
//   }
// }

// export default function Hero() {
//   return (

//     <section className="min-h-screen flex items-center bg-gradient-to-b from-gray-950 to-black text-white px-6">

//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

//         {/* LEFT SIDE TEXT */}

//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="flex flex-col"
//         >

//           <motion.h1
//             variants={item}
//             className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
//           >
//             Hi, I'm
//             <span className="text-blue-500"> Meghana Ponna</span>
//           </motion.h1>

//           <motion.p
//             variants={item}
//             className="mt-6 text-lg md:text-xl text-gray-300"
//           >
//             Full Stack Developer • MERN Stack
//           </motion.p>

//           <motion.p
//             variants={item}
//             className="mt-6 max-w-xl text-gray-400 text-base md:text-lg leading-relaxed"
//           >
//             I build scalable web applications using the MERN stack,
//             focusing on clean backend architecture, secure authentication
//             systems, and real-world problem solving.
//           </motion.p>

//           {/* Buttons */}

//           <motion.div
//             variants={item}
//             className="mt-10 flex flex-col sm:flex-row gap-4"
//           >

//             <a
//               href="#projects"
//               className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition font-medium shadow-lg"
//             >
//               View Projects
//             </a>

//             <a
//               href="/23211A12D2-P.Meghana.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-blue-600 hover:text-white transition font-medium"
//             >
//               View Resume
//             </a>

//           </motion.div>

//           {/* Social Links */}

//           <motion.div
//             variants={item}
//             className="flex gap-6 mt-8 text-gray-400"
//           >

//             <a
//               href="https://github.com/MeghanaPonna"
//               target="_blank"
//               className="hover:text-blue-400 transition"
//             >
//               GitHub
//             </a>

//             <a
//               href="https://linkedin.com/in/ponna-meghana"
//               target="_blank"
//               className="hover:text-blue-400 transition"
//             >
//               LinkedIn
//             </a>

//           </motion.div>

//         </motion.div>


//         {/* RIGHT SIDE IMAGE */}

//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex justify-center"
//         >

//           <Image
//             src="/portfolio-image2.png"
//             alt="Developer illustration"
//             width={420}
//             height={420}
//             className="rounded-xl shadow-2xl"
//           />

//         </motion.div>

//       </div>

//     </section>
//   )
// }





"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

export default function Hero() {
  return (
    // <section className="min-h-screen flex items-center bg-gradient-to-b from-gray-950 to-black text-white px-6">

    <section className="min-h-[100dvh] flex items-center bg-gradient-to-b from-gray-950 to-black text-white px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE TEXT */}

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col"
        >

          {/* <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            Hi, I'm
            <span className="text-blue-500"> Meghana Ponna</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg md:text-xl text-gray-300"
          >
            Full Stack Developer • MERN Stack
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-gray-400 text-base md:text-lg leading-relaxed"
          >
            I build scalable web applications using the MERN stack,
            focusing on clean backend architecture, secure authentication
            systems, and real-world problem solving.
          </motion.p> */}

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            Hi, I'm
            <span className="text-blue-500"> Meghana Ponna</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg md:text-xl text-gray-300"
          >
            Full Stack Developer • ML Enthusiast • Problem Solver
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-gray-400 text-base md:text-lg leading-relaxed"
          >
            I build scalable web applications using the MERN stack and enjoy solving
            real-world problems through technology. I am passionate about backend
            architecture, secure authentication systems, and exploring machine learning
            to build intelligent applications.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-800 text-blue-400 rounded-full text-sm">
              MERN Stack
            </span>
            <span className="px-4 py-2 bg-gray-800 text-blue-400 rounded-full text-sm">
              Backend Systems
            </span>
            <span className="px-4 py-2 bg-gray-800 text-blue-400 rounded-full text-sm">
              Authentication & Security
            </span>
            <span className="px-4 py-2 bg-gray-800 text-blue-400 rounded-full text-sm">
              Machine Learning
            </span>
          </div>

          {/* Buttons */}

          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >

            <a
              href="/projects"
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition font-medium shadow-lg"
            >
              View Projects
            </a>

            <a
              href="/23211A12D2-P.Meghana.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-blue-600 hover:text-white transition font-medium"
            >
              View Resume
            </a>

          </motion.div>

          {/* Social Links */}

          <motion.div
            variants={item}
            className="flex gap-6 mt-8 text-gray-400"
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

          </motion.div>

        </motion.div>


        {/* RIGHT SIDE IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >

          {/* Glow Effect */}

          <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

          {/* Floating Animation */}

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >

            <Image
              src="/portfolio-image2.png"
              alt="Developer Illustration"
              width={420}
              height={420}
              className="relative rounded-xl shadow-2xl"
            />

          </motion.div>

        </motion.div>

      </div>

    </section>
  )
}