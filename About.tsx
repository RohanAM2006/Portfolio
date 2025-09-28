'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-white px-6 py-20 flex flex-col justify-center items-center text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-indigo-700 mb-6"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg max-w-2xl text-gray-700 leading-relaxed"
      >
        👋Hi, I&apos;m <span className="text-indigo-500">Rohan A M</span>,
        currently pursuing 
        <span className="font-semibold text-indigo-600"> B.Tech in Computer Science at SRM IST</span>.
        I&apos;m passionate about building seamless user experiences and diving deep into all things tech.
        <br /><br />
        I&apos;m currently working on <strong>HealSense</strong> — a decentralized, AI-integrated healthcare platform focused on consent-based medical data sharing, multilingual diagnostics, and smart analytics.
        <br /><br />
        Always curious and driven, I&apos;m exploring <span className="font-medium">machine learning</span>, <span className="font-medium"></span>, and <span className="font-medium">cloud deployment</span> to push the boundaries of what I can create.
        <br /><br />
        Let&apos;s connect and build something impactful together! 🚀
      </motion.p>
    </section>
  )
}

export default About
