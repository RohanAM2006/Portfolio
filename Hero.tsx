'use client'

import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 py-16 bg-black dark:bg-black">

      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-indigo-700 dark:text-indigo-400"
        >
          Hi, I&apos;m <span className="text-indigo-500">Rohan A M</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="text-xl md:text-2xl text-white-700 dark:text-white-300"
        >
          <Typewriter
            words={['Full Stack Developer', 'Tech Enthusiast', 'UI/UX Explorer']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h2>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition"
        >
          B. TECH IN Computer Science At SRM IST
        </motion.a>
      </div>

      {/* Image Section */}
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.05}
        transitionSpeed={1000}
        className="mb-10 md:mb-0 md:w-1/2 flex justify-center"
      >
        <Image
          src="/images/rohan.jpeg"
          alt="Profile Picture"
          width={250}
          height={250}
          className="rounded-full shadow-lg"
        />
      </Tilt>
    </section>
  )
}

export default Hero


