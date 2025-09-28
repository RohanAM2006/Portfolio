// components/Timeline.tsx
'use client'

import { motion } from 'framer-motion'

const timeline = [
  {
    title: 'Bachelor of Computer Science',
    institution: 'SRM IST',
    year: '2024 - 2028',
    description: 'Tech enthusiast',
  },
  {
    title: 'Class XII',
    institution: 'Narayana Educational Institutions, Bangalore',
    year: '2024',
  },
  {
    title: 'Class X',
    institution: 'Baldwin Co Education Extension High School, Bangalore',
    year: '2020',
    description: 'ICSE: 95.2%',
  },
]

const Timeline = () => {
  return (
    <section id="timeline" className="px-4 md:px-8 lg:px-16 py-20 bg-white dark:bg-black">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-indigo-700 dark:text-indigo-400 text-center mb-12"
      >
        Education
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-10 relative">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="border-l-4 border-indigo-600 dark:border-indigo-400 pl-6 relative"
          >
            {/* Dot */}
            <div className="absolute -left-2.5 top-1 w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full shadow-md"></div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">
              {item.title}
            </h3>
            <p className="text-sm italic text-gray-600 dark:text-gray-400">
              {item.institution} • {item.year}
            </p>
            {item.description && (
              <p className="text-gray-700 dark:text-gray-300 mt-2">{item.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Timeline
