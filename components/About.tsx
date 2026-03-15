"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-28 bg-gray-950 text-white">

      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left side text */}

          {/* <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <p className="text-gray-300 leading-relaxed mb-6">
              I am a Software Engineering student and Full Stack Developer passionate about building scalable web applications and solving real-world problems through technology. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and enjoy developing complete systems from backend architecture to user-facing interfaces.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              I have built several full-stack applications including a movie ticket booking platform, a food delivery system with Stripe payments, and a secure authentication system with OTP-based login and JWT authentication.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
             I am also interested in the intersection of Machine Learning and Full Stack Development, where data-driven insights can improve user experience and business decisions. My recent project on OTT churn prediction using XGBoost demonstrates how machine learning can help platforms retain users through predictive analytics.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
                I enjoy designing systems that combine strong backend architecture with intuitive user experiences, building reliable and scalable products that create real impact for users.
            </p>

          </motion.div> */}


          <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-lg"
>

  {/* <p className="text-gray-300 leading-relaxed mb-6 text-lg">
    I am a <span className="text-blue-400 font-semibold">Software Engineering student</span> and 
    <span className="text-blue-400 font-semibold"> Full Stack Developer</span> passionate about building scalable web applications and solving real-world problems through technology. 
    I specialize in the <span className="text-blue-400 font-semibold">MERN stack (MongoDB, Express, React, Node.js)</span> and enjoy developing complete systems from backend architecture to user-facing interfaces.
  </p>

  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
    I have built several full-stack applications including a 
    <span className="text-blue-400"> movie ticket booking platform</span>, 
    a <span className="text-blue-400"> food delivery system with Stripe payments</span>, 
    and a <span className="text-blue-400"> secure authentication system with OTP-based login and JWT authentication</span>.
  </p>

  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
    I am also interested in the intersection of 
    <span className="text-blue-400 font-semibold"> Machine Learning</span> and 
    <span className="text-blue-400 font-semibold"> Full Stack Development</span>, 
    where data-driven insights can improve user experience and business decisions. 
    My recent project on 
    <span className="text-blue-400"> OTT churn prediction using XGBoost</span> 
    demonstrates how machine learning can help platforms retain users through predictive analytics.
  </p>

  <p className="text-gray-300 leading-relaxed text-lg">
    I enjoy designing systems that combine strong backend architecture with intuitive user experiences, building reliable and scalable products that create real impact for users.
  </p> */}

  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
  I am a <span className="text-blue-400 font-semibold">Computer Science student</span> and 
  <span className="text-blue-400 font-semibold"> Full Stack Developer</span> focused on building scalable and reliable web applications. 
  My core expertise lies in the 
  <span className="text-blue-400 font-semibold"> MERN stack (MongoDB, Express, React, Node.js)</span>, 
  where I design and develop complete systems from backend APIs and database architecture to responsive user interfaces.
</p>

<p className="text-gray-300 leading-relaxed mb-6 text-lg">
  I have developed multiple real-world projects including a 
  <span className="text-blue-400"> movie ticket booking platform with seat management</span>, 
  a <span className="text-blue-400"> food delivery application with Stripe payment integration</span>, 
  and a <span className="text-blue-400"> secure authentication system implementing email verification, OTP-based login, and JWT authentication</span>. 
  Through these projects, I gained experience building scalable backend services, handling authentication and payments, and designing clean user experiences.
</p>

<p className="text-gray-300 leading-relaxed mb-6 text-lg">
  I am also interested in combining 
  <span className="text-blue-400 font-semibold"> Machine Learning</span> with 
  <span className="text-blue-400 font-semibold"> Full Stack Development</span> to create intelligent applications. 
  My recent work includes an 
  <span className="text-blue-400"> OTT churn prediction system using XGBoost</span> 
  and an 
  <span className="text-blue-400"> AI-based spam detection system built with TensorFlow</span>, 
  demonstrating how data-driven insights can improve user engagement and decision making.
</p>

<p className="text-gray-300 leading-relaxed text-lg">
  I enjoy solving complex problems, designing scalable architectures, and continuously learning new technologies. 
  My goal is to contribute to impactful products at technology-driven companies while growing as a software engineer who builds efficient, reliable, and user-focused systems.
</p>

</motion.div>
          {/* Right side stats */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
              <h3 className="text-3xl font-bold text-blue-400">6+</h3>
              <p className="text-gray-400 mt-2">Projects Built</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
              <h3 className="text-3xl font-bold text-blue-400">13+</h3>
              <p className="text-gray-400 mt-2">Technologies</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
              <h3 className="text-3xl font-bold text-blue-400">3+</h3>
              <p className="text-gray-400 mt-2">Full Stack Apps</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
              <h3 className="text-3xl font-bold text-blue-400">3+</h3>
              <p className="text-gray-400 mt-2">ML Projects</p>
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}