'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <Link href="/">
        <span className="text-2xl font-bold text-indigo-700 dark:text-white cursor-pointer">
          Rohan A M
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-white transition"
          >
            {link.name}
          </Link>
        ))}

        <a
          href="/resume.pdf"
          download
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Resume
        </a>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-xl">
          <a
            href="https://github.com/RohanAM2006"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-800 dark:hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rohan-a-m-0382a2324/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-800 dark:hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:rohan02aug@gmail.com"
            aria-label="Email"
            className="hover:text-indigo-800 dark:hover:text-white transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-2xl text-indigo-700 dark:text-indigo-300">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col items-center gap-4 py-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Resume
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-xl">
            <a
              href="https://github.com/RohanAM2006"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-indigo-800 dark:hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-a-m-0382a2324/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-indigo-800 dark:hover:text-white transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:rohan02aug@gmail.com"
              aria-label="Email"
              className="hover:text-indigo-800 dark:hover:text-white transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
