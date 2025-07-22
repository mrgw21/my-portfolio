'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Menu, X, SunIcon, MoonIcon } from 'lucide-react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const sections = [
    { name: 'About', href: '/#about' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Writings', href: '/#writings' },
    { name: 'Photography', href: '/#photography' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight">
          RG
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {sections.map(({ name, href }) => (
            <Link key={name} href={href} className="hover:text-purple-500 transition-colors">
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? (
              <SunIcon className="h-5 w-5 text-yellow-300" />
            ) : (
              <MoonIcon className="h-5 w-5 text-purple-700" />
            )}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 flex flex-col gap-3 text-sm font-medium">
          {sections.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="hover:text-purple-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}