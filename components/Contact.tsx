// // "use client"

// // import { motion } from "framer-motion"

// // export default function Contact() {
// //   return (
// //     <section id="contact" className="py-28 bg-black text-white">

// //       <div className="max-w-5xl mx-auto px-6">

// //         <motion.h2
// //           initial={{ opacity: 0, y: 40 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="text-4xl font-bold text-center mb-16"
// //         >
// //           Contact
// //         </motion.h2>

// //         <div className="grid md:grid-cols-2 gap-12">

// //           {/* Contact Info */}

// //           <motion.div
// //             initial={{ opacity: 0, x: -40 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6 }}
// //             className="space-y-6"
// //           >

// //             <p className="text-gray-400">
// //               Feel free to reach out if you want to collaborate on a project,
// //               discuss technology, or just say hello.
// //             </p>

// //             <div className="space-y-4">

// //               <p>
// //                 📧 <span className="text-blue-400">meghanaponna234@gmail.com</span>
// //               </p>

// //               <p>
// //                 💻
// //                 <a
// //                   href="https://github.com/MeghanaPonna/"
// //                   target="_blank"
// //                   className="text-blue-400 ml-2 hover:underline"
// //                 >
// //                   GitHub
// //                 </a>
// //               </p>

// //               <p>
// //                 🔗
// //                 <a
// //                   href="https://linkedin.com/in/ponna-meghana"
// //                   target="_blank"
// //                   className="text-blue-400 ml-2 hover:underline"
// //                 >
// //                   LinkedIn
// //                 </a>
// //               </p>

// //             </div>

// //           </motion.div>

// //           {/* Contact Form */}

// //           <motion.form
// //             initial={{ opacity: 0, x: 40 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6 }}
// //             className="space-y-6"
// //           >

// //             <input
// //               type="text"
// //               placeholder="Your Name"
// //               className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none"
// //             />

// //             <input
// //               type="email"
// //               placeholder="Your Email"
// //               className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none"
// //             />

// //             <textarea
// //               placeholder="Your Message"
// //               rows={5}
// //               className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none"
// //             />

// //             <button
// //               type="submit"
// //               className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
// //             >
// //               Send Message
// //             </button>

// //           </motion.form>

// //         </div>

// //       </div>

// //     </section>
// //   )
// // }

// "use client"

// import { motion } from "framer-motion"
// import emailjs from "@emailjs/browser"
// import { useRef } from "react"

// export default function Contact() {

//   const form = useRef<HTMLFormElement>(null)

//   const sendEmail = (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!form.current) return

//     emailjs
//       .sendForm(
//         "YOUR_SERVICE_ID",
//         "YOUR_TEMPLATE_ID",
//         form.current,
//         "YOUR_PUBLIC_KEY"
//       )
//       .then(() => {
//         alert("Message sent successfully!")
//         form.current?.reset()
//       })
//       .catch(() => {
//         alert("Failed to send message. Please try again.")
//       })
//   }

//   return (
//     <section id="contact" className="py-28 bg-black text-white">

//       <div className="max-w-6xl mx-auto px-6">

//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold text-center mb-16"
//         >
//           Get In Touch
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-12">

//           {/* Contact Info */}

//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-6"
//           >

//             <p className="text-gray-400 text-lg">
//               I'm always open to discussing new opportunities,
//               collaborations, or interesting projects. Feel free to
//               reach out anytime.
//             </p>

//             <div className="space-y-5">

//               <div className="flex items-center gap-3">
//                 <span className="text-xl">📧</span>
//                 <span className="text-blue-400">
//                   meghanaponna234@gmail.com
//                 </span>
//               </div>

//               <div className="flex items-center gap-3">
//                 <span className="text-xl">💻</span>
//                 <a
//                   href="https://github.com/MeghanaPonna"
//                   target="_blank"
//                   className="text-blue-400 hover:underline"
//                 >
//                   github.com/MeghanaPonna
//                 </a>
//               </div>

//               <div className="flex items-center gap-3">
//                 <span className="text-xl">🔗</span>
//                 <a
//                   href="https://linkedin.com/in/ponna-meghana"
//                   target="_blank"
//                   className="text-blue-400 hover:underline"
//                 >
//                   linkedin.com/in/ponna-meghana
//                 </a>
//               </div>

//             </div>

//           </motion.div>

//           {/* Contact Form */}

//           <motion.form
//             ref={form}
//             onSubmit={sendEmail}
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-6 bg-gray-900 p-8 rounded-xl border border-gray-800"
//           >

//             <input
//               type="text"
//               name="user_name"
//               placeholder="Your Name"
//               required
//               className="w-full p-3 rounded-lg bg-gray-950 border border-gray-700 focus:border-blue-500 outline-none"
//             />

//             <input
//               type="email"
//               name="user_email"
//               placeholder="Your Email"
//               required
//               className="w-full p-3 rounded-lg bg-gray-950 border border-gray-700 focus:border-blue-500 outline-none"
//             />

//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows={5}
//               required
//               className="w-full p-3 rounded-lg bg-gray-950 border border-gray-700 focus:border-blue-500 outline-none"
//             />

//             <button
//               type="submit"
//               className="w-full bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
//             >
//               Send Message
//             </button>

//           </motion.form>

//         </div>

//       </div>

//     </section>
//   )
// }




"use client"

import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"

export default function Contact() {

  const form = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState("")

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    emailjs
      .sendForm(
        "service_9ekwa72",      // replace
        "template_278u2qr",     // replace
        form.current,
        "TJTZkzy5QVCbaTRNf"       // replace
      )
      .then(
        () => {
          setStatus("Message sent successfully!")
          form.current?.reset()
        },
        () => {
          setStatus("Failed to send message. Try again.")
        }
      )
  }

  return (
    <section id="contact" className="py-28 bg-black text-white">

      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >

            <p className="text-gray-400 text-lg">
              I'm always open to discussing new opportunities,
              collaborations, or interesting projects.
              Feel free to reach out.
            </p>

            <div className="space-y-4">

              <p className="flex items-center gap-3">
                📧
                <span className="text-blue-400">
                  meghanaponna234@gmail.com
                </span>
              </p>

              <p className="flex items-center gap-3">
                💻
                <a
                  href="https://github.com/MeghanaPonna"
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  github.com/MeghanaPonna
                </a>
              </p>

              <p className="flex items-center gap-3">
                🔗
                <a
                  href="https://linkedin.com/in/ponna-meghana"
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  linkedin.com/in/ponna-meghana
                </a>
              </p>

            </div>

          </motion.div>


          {/* Contact Form */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 p-8 rounded-xl border border-gray-800 space-y-6"
          >

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-gray-950 border border-gray-700 focus:border-blue-500 outline-none"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-gray-950 border border-gray-700 focus:border-blue-500 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full p-3 rounded-lg bg-gray-950 border border-gray-700 focus:border-blue-500 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Send Message
            </button>

            {status && (
              <p className="text-green-400 text-center">
                {status}
              </p>
            )}

          </motion.form>

        </div>

      </div>

    </section>
  )
}