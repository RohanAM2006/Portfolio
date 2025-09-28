'use client'

import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs,  } from 'react-icons/si'

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white dark:text-gray-300" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },

]

const Skills = () => {
  return (
    <section id="skills" className="w-screen min-h-screen bg-gray-100 dark:bg-black py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-indigo-700 dark:text-indigo-400 mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white dark:bg-gray-900 shadow-md hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
