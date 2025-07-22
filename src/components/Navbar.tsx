'use client'

import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight">
            RG
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {['About', 'Portfolio', 'Writings', 'Photography'].map(section => (
            <a
              key={section}
              href={`/${'#' + section.toLowerCase()}`} // Ensures links go to homepage + anchor
              className="hover:text-purple-500 transition-colors"
            >
              {section}
            </a>
          ))}
        </div>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? (
            <SunIcon className="h-6 w-6 text-yellow-300" />
          ) : (
            <MoonIcon className="h-6 w-6 text-purple-700" />
          )}
        </button>
      </div>
    </nav>
  )
}