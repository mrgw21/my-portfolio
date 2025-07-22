import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-white/20">
      <p className="mb-4">© 2025 – Rasyid G.</p>
      <div className="flex justify-center gap-6 text-base">
        <a
          href="https://www.linkedin.com/in/mrasyidg"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors"
        >
          <Linkedin className="w-5 h-5 inline" />
        </a>
        <a
          href="https://github.com/mrasyidgpfl"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Github className="w-5 h-5 inline" />
        </a>
        <a
          href="https://www.instagram.com/mrasyidg"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-colors"
        >
          <Instagram className="w-5 h-5 inline" />
        </a>
        <a
          href="https://x.com/mrasyidg"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <Twitter className="w-5 h-5 inline" />
        </a>
      </div>
    </footer>
  )
}
