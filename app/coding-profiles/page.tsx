// // "use client"

// // import { motion } from "framer-motion"

// // const profiles = [
// //   {
// //     platform: "LeetCode",
// //     username: "meghanaponna234",
// //     stats: [
// //       "302+ Problems Solved",
// //       "Contest Rating: 1758",
// //       "Top 10% Globally",
// //       "58 Contests Participated",
// //     ],
// //     link: "https://leetcode.com/u/meghanaponna234/",
// //     color: "from-yellow-500 to-orange-500",
// //   },

// //   {
// //     platform: "HackerRank",
// //     username: "meghanaponna234",
// //     stats: [
// //       "5★ Problem Solving",
// //       "5★ C++",
// //       "Verified Python",
// //       "Verified SQL",
// //     ],
// //     link: "https://www.hackerrank.com/profile/meghanaponna234",
// //     color: "from-green-500 to-emerald-500",
// //   },

// //   {
// //     platform: "CodeChef",
// //     username: "meghanaponna1",
// //     stats: [
// //       "Division 4",
// //       "Rating: 1283",
// //       "31+ Contests",
// //       "93% C++ Skill Test",
// //     ],
// //     link: "https://www.codechef.com/users/meghanaponna1",
// //     color: "from-amber-500 to-yellow-600",
// //   },
// // ]

// // export default function CodingProfiles() {
// //   return (
// //     <section className="min-h-screen bg-black text-white py-28 px-6">

// //       <div className="max-w-7xl mx-auto">

// //         {/* Heading */}

// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //         >

// //           <h1 className="text-5xl font-bold text-center mb-4">
// //             Coding Profiles
// //           </h1>

// //           <p className="text-center text-gray-400 max-w-3xl mx-auto mb-20">
// //             I actively practice Data Structures & Algorithms, participate in
// //             coding contests, and continuously improve my problem-solving skills
// //             through competitive programming and technical challenges.
// //           </p>

// //         </motion.div>

// //         {/* Overview Cards */}

// //         <div className="grid md:grid-cols-3 gap-8 mb-20">

// //           <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
// //             <h2 className="text-4xl font-bold text-blue-400">300+</h2>
// //             <p className="text-gray-400 mt-2">Problems Solved</p>
// //           </div>

// //           <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
// //             <h2 className="text-4xl font-bold text-blue-400">1758</h2>
// //             <p className="text-gray-400 mt-2">Highest Contest Rating</p>
// //           </div>

// //           <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
// //             <h2 className="text-4xl font-bold text-blue-400">80+</h2>
// //             <p className="text-gray-400 mt-2">Contest Participations</p>
// //           </div>

// //         </div>

// //         {/* Profile Cards */}

// //         <div className="grid lg:grid-cols-3 gap-8">

// //           {profiles.map((profile, index) => (

// //             <motion.div
// //               key={profile.platform}
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ delay: index * 0.2 }}
// //               viewport={{ once: true }}
// //               className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-blue-500 transition duration-300"
// //             >

// //               {/* Top Gradient */}

// //               <div
// //                 className={`h-3 bg-gradient-to-r ${profile.color}`}
// //               />

// //               <div className="p-8">

// //                 <h2 className="text-3xl font-bold mb-2">
// //                   {profile.platform}
// //                 </h2>

// //                 <p className="text-blue-400 mb-6">
// //                   @{profile.username}
// //                 </p>

// //                 <div className="space-y-3 mb-8">

// //                   {profile.stats.map((stat) => (

// //                     <div
// //                       key={stat}
// //                       className="flex items-center gap-3 text-gray-300"
// //                     >
// //                       <span className="text-green-400">✓</span>
// //                       {stat}
// //                     </div>

// //                   ))}

// //                 </div>

// //                 <a
// //                   href={profile.link}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium transition"
// //                 >
// //                   View Profile →
// //                 </a>

// //               </div>

// //             </motion.div>

// //           ))}

// //         </div>

// //         {/* Competitive Programming Journey */}

// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           className="mt-24 bg-gray-900 border border-gray-800 rounded-3xl p-10"
// //         >

// //           <h2 className="text-3xl font-bold mb-6 text-center">
// //             Competitive Programming Journey
// //           </h2>

// //           <p className="text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
// //             My journey in competitive programming has strengthened my
// //             problem-solving mindset, algorithmic thinking, and coding
// //             efficiency. Through regular participation in coding contests and
// //             consistent DSA practice, I have developed strong skills in data
// //             structures, algorithms, debugging, and writing optimized solutions
// //             under time constraints.
// //           </p>

// //         </motion.div>

// //       </div>

// //     </section>
// //   )
// // }


// "use client"

// import { motion } from "framer-motion"
// import {
//   SiLeetcode,
//   SiHackerrank,
//   SiCodechef,
// } from "react-icons/si"

// const profiles = [
//   {
//     name: "LeetCode",
//     icon: <SiLeetcode size={40} />,
//     username: "meghanaponna234",
//     description:
//       "Regularly solve algorithmic and interview-focused problems while participating in weekly contests to improve analytical thinking and coding efficiency.",
//     highlights: [
//       "Contest Rating: 1758",
//       "Top 10% Globally",
//       "302+ Problems Solved",
//     ],
//     link: "https://leetcode.com/u/meghanaponna234/",
//   },

// //   {
// //     name: "HackerRank",
// //     icon: <SiHackerrank size={40} />,
// //     username: "meghanaponna234",
// //     description:
// //       "Demonstrated proficiency through certifications and technical assessments in programming, databases, and problem solving.",
// //     highlights: [
// //       "5★ Problem Solving",
// //       "5★ C++",
// //       "Verified Python",
// //       "Verified SQL",
// //     ],
// //     link: "https://www.hackerrank.com/profile/meghanaponna234",
// //   },


// {
//   name: "HackerRank",
//   icon: <SiHackerrank size={40} />,
//   username: "meghanaponna234",
//   description:
//     "Earned skill certifications and demonstrated proficiency in programming, databases, and problem solving through HackerRank assessments.",

//   highlights: [
//     "5★ Problem Solving",
//     "5★ C++",
//     "Verified Python Certification",
//     "Verified SQL Certification",
//     "Software Engineer Role Certification",
//   ],

//   link: "https://www.hackerrank.com/profile/meghanaponna234",
// },

//   {
//     name: "CodeChef",
//     icon: <SiCodechef size={40} />,
//     username: "meghanaponna1",
//     description:
//       "Participate in coding contests to strengthen competitive programming skills, speed, and accuracy under time constraints.",
//     highlights: [
//       "Division 4",
//       "Rating: 1283",
//       "31+ Contests",
//     ],
//     link: "https://www.codechef.com/users/meghanaponna1",
//   },
// ]

// export default function CodingProfiles() {
//   return (
//     <section className="min-h-screen bg-black text-white py-28 px-6">

//       <div className="max-w-7xl mx-auto">

//         {/* Header */}

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-20"
//         >

//           <h1 className="text-5xl md:text-6xl font-bold mb-6">
//             Coding Profiles
//           </h1>

//           <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
//             I actively practice Data Structures & Algorithms and participate in
//             coding challenges to improve problem-solving abilities, algorithmic
//             thinking, and software engineering skills.
//           </p>

//         </motion.div>

//         {/* Profile Cards */}

//         <div className="grid lg:grid-cols-3 gap-8">

//           {profiles.map((profile, index) => (

//             <motion.div
//               key={profile.name}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.15 }}
//               viewport={{ once: true }}
//               className="
//                 group
//                 bg-gradient-to-br
//                 from-gray-900
//                 to-black
//                 border
//                 border-gray-800
//                 hover:border-blue-500
//                 rounded-3xl
//                 p-8
//                 transition-all
//                 duration-500
//                 hover:-translate-y-2
//                 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
//               "
//             >

//               <div className="text-blue-400 mb-6">
//                 {profile.icon}
//               </div>

//               <h2 className="text-3xl font-bold mb-2">
//                 {profile.name}
//               </h2>

//               <p className="text-blue-400 mb-5">
//                 @{profile.username}
//               </p>

//               <p className="text-gray-400 leading-relaxed mb-8">
//                 {profile.description}
//               </p>

//               <div className="space-y-3 mb-8">

//                 {profile.highlights.map((item) => (

//                   <div
//                     key={item}
//                     className="flex items-center gap-3"
//                   >
//                     <span className="text-green-400">✓</span>
//                     <span className="text-gray-300">
//                       {item}
//                     </span>
//                   </div>

//                 ))}

//               </div>

//               <a
//                 href={profile.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="
//                   inline-flex
//                   items-center
//                   justify-center
//                   w-full
//                   py-3
//                   rounded-xl
//                   bg-blue-600
//                   hover:bg-blue-700
//                   transition
//                   font-medium
//                 "
//               >
//                 View Profile →
//               </a>

//             </motion.div>

//           ))}

//         </div>

//         {/* Coding Journey */}

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="
//             mt-24
//             bg-gray-900/60
//             backdrop-blur-md
//             border
//             border-gray-800
//             rounded-3xl
//             p-10
//           "
//         >

//           <h2 className="text-3xl font-bold text-center mb-6">
//             Problem Solving Mindset
//           </h2>

//           <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed text-lg">
//             Consistent practice in Data Structures, Algorithms, and competitive
//             programming has helped me develop strong analytical thinking,
//             debugging skills, and the ability to write optimized solutions.
//             These experiences directly contribute to building scalable software
//             systems and solving real-world engineering challenges.
//           </p>

//         </motion.div>

//       </div>

//     </section>
//   )
// }



"use client"

import { motion } from "framer-motion"
import {
  SiLeetcode,
  SiHackerrank,
  SiCodechef,
} from "react-icons/si"

const profiles = [
  {
    name: "LeetCode",
    icon: <SiLeetcode size={42} />,
    username: "meghanaponna234",
    description:
      "Practicing Data Structures & Algorithms through coding challenges, interview-focused problems, and weekly contests.",

    highlights: [
      "Contest Rating 1758",
      "Top 10% Globally",
      "302+ Problems Solved",
    ],

    link: "https://leetcode.com/u/meghanaponna234/",
  },

  {
    name: "HackerRank",
    icon: <SiHackerrank size={42} />,
    username: "meghanaponna234",
    description:
      "Demonstrated programming proficiency through verified certifications and skill assessments.",

    highlights: [
      "5★ Problem Solving",
      "5★ C++",
      "Python Certified",
      "SQL Certified",
      "Software Engineer Certified",
    ],

    link: "https://www.hackerrank.com/profile/meghanaponna234",
  },

  {
    name: "CodeChef",
    icon: <SiCodechef size={42} />,
    username: "meghanaponna1",
    description:
      "Participating in competitive programming contests to improve speed, accuracy, and algorithmic thinking.",

    highlights: [
      "Division 4",
      "Rating 1283",
      "31+ Contests",
    ],

    link: "https://www.codechef.com/users/meghanaponna1",
  },
]

export default function CodingProfiles() {
  return (
    <section className="min-h-screen bg-black text-white py-28 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Coding Profiles
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            I actively practice Data Structures & Algorithms and participate in
            coding challenges to strengthen problem-solving skills,
            algorithmic thinking, and software engineering fundamentals.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {profiles.map((profile, index) => (

            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                bg-gray-900/50
                backdrop-blur-xl
                border
                border-gray-800
                hover:border-blue-500
                rounded-3xl
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]
              "
            >

              {/* Glow */}

              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Icon */}

              <div className="flex items-center justify-between mb-6">

                <div className="text-blue-400">
                  {profile.icon}
                </div>

                <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Active
                </span>

              </div>

              {/* Title */}

              <h2 className="text-3xl font-bold mb-2">
                {profile.name}
              </h2>

              {/* Username */}

              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm mb-6">
                @{profile.username}
              </div>

              {/* Description */}

              <p className="text-gray-400 leading-relaxed mb-8">
                {profile.description}
              </p>

              {/* Skills */}

              <div className="flex flex-wrap gap-3 mb-8">

                {profile.highlights.map((item) => (

                  <span
                    key={item}
                    className="
                      px-3
                      py-2
                      rounded-full
                      bg-blue-500/10
                      border
                      border-blue-500/20
                      text-blue-300
                      text-sm
                    "
                  >
                    {item}
                  </span>

                ))}

              </div>

              {/* Button */}

              <a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  w-full
                  py-3
                  rounded-xl
                  bg-blue-600
                  hover:bg-blue-700
                  transition-all
                  duration-300
                  font-medium
                "
              >
                View Profile →
              </a>

            </motion.div>

          ))}

        </div>

        {/* Bottom Section */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mt-24
            rounded-3xl
            border
            border-gray-800
            bg-gradient-to-r
            from-blue-900/10
            via-gray-900
            to-purple-900/10
            p-12
          "
        >

          <h2 className="text-4xl font-bold text-center mb-6">
            Problem Solving Mindset
          </h2>

          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed text-lg">
            Consistent practice in Data Structures, Algorithms, and
            competitive programming has strengthened my analytical thinking,
            debugging skills, and ability to write optimized solutions.
            These experiences directly influence how I design scalable
            applications, optimize backend systems, and approach real-world
            software engineering challenges.
          </p>

        </motion.div>

      </div>

    </section>
  )
}