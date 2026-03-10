// "use client"

// import { motion } from "framer-motion"

// const skills = [
//   "Java",
//   "JavaScript",
//   "React.js",
//   "Node.js",
//   "Express.js",
//   "MongoDB",
//   "Python",
//   "FastAPI",
//   "JWT Authentication",
//   "Stripe Integration",
//   "REST APIs",
//   "Git & GitHub"
// ]

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="py-28 bg-black text-white"
//     >
//       <div className="max-w-6xl mx-auto px-6">

//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold text-center mb-16"
//         >
//           Skills
//         </motion.h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

//           {skills.map((skill, index) => (

//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.05 }}
//               whileHover={{ scale: 1.05 }}
//               className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:border-blue-500 transition"
//             >

//               <p className="font-medium">{skill}</p>

//             </motion.div>

//           ))}

//         </div>

//       </div>
//     </section>
//   )
// }


"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "Python", "C++"]
  },
  {
    title: "Frontend",
    skills: ["React.js", "HTML", "CSS", "Tailwind CSS","Responsive Design"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication","OTP Authentication",
      "Microservices Basics"]
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git",
      "GitHub",
      "Postman",
      "Vercel",
      "Render",
      "Stripe API"]
  },
  {
    title: "Machine Learning & Data",
    skills: [
      "Python",
      "XGBoost",
      "SMOTE",
      "Scikit-learn",
      "Data Preprocessing",
      "Model Evaluation"
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-black text-white">

      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {skillCategories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition"
            >

              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill, i) => (

                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-gray-800 rounded-md"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}