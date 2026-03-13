"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "CineBook – Movie Ticket Booking",
    description:
"A scalable movie ticket booking application built with the MERN stack that enables users to browse movies, select seats, and complete secure bookings. Features include JWT-based authentication, dynamic seat selection, protected routes, and automated booking confirmation via email notifications.",
    tech: "React • Node.js • Express • MongoDB • JWT • Nodemailer • Stripe",
    github: "https://github.com/MeghanaPonna/CineBook",
    live: "#"
  },
  {
    title: "Food Delivery Platform",
    description:
"A full-stack MERN food delivery application with dynamic cart management, coupon-based discounts, secure Stripe payment integration, and an admin dashboard for managing products, orders, and user activity.",
    tech: "React • Node.js • MongoDB • Stripe • JWT • Express",
    github: "https://github.com/MeghanaPonna/Food-Delivery",
    live: "#"
  },
  {
    title: "2-Factor-Authentication System",
    description:
"A backend authentication platform featuring email verification during signup, OTP-based login for two-factor authentication, JWT-based authentication for secure sessions, and password reset functionality via email.",
    tech: "Node.js • Express • JWT • Nodemailer",
    github: "https://github.com/MeghanaPonna/2-Factor-Authentication",
    live: "#"
  },
  {
title: "OTT Churn Prediction System",
description:
"A full-stack machine learning platform that predicts OTT customer churn using XGBoost with SMOTE-balanced data. Includes an admin analytics dashboard, churn risk classification, retention offer management, and movie browsing via TMDB API.",
tech: "React • Node.js • FastAPI • MongoDB • Python • XGBoost",
github: "#",
live: "#"
},
{
  title: "AI Spam Detection System",
  description:
"A machine learning web application that classifies SMS messages as spam or not spam using Natural Language Processing and a TensorFlow-based neural network model. The system includes text preprocessing, tokenization, and a Streamlit interface for real-time message prediction with confidence scores.",
  tech: "Python • TensorFlow • NLP • Streamlit • Scikit-learn",
  github: "https://github.com/MeghanaPonna/spam-detection-system",
  live: "#"
},

]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-gradient-to-b from-black to-gray-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative p-[1px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            >

              <div className="bg-gray-900 rounded-xl p-6 h-full">

                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <p className="text-blue-400 text-sm mb-6">
                  {project.tech}
                </p>

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    className="text-sm border px-4 py-2 rounded hover:bg-white hover:text-black transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="text-sm bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  )
}