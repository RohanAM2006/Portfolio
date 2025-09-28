'use client'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 text-center py-4">
      <p className="text-sm text-gray-700 dark:text-gray-300">
        © {new Date().getFullYear()} Rohan A M. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
