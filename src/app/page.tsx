'use client'

import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import BackgroundParticles from '@/components/BackgroundParticles'
import ClientOnly from '@/components/ClientOnly'
import Favicon from '@/components/Favicon'
import {
  Linkedin,
  Github,
  Instagram,
  Twitter,
} from 'lucide-react'
import Image from 'next/image'
import PhotoModal from '@/components/PhotoModal'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const photoData = [
  { src: '/photos/IMG_3998.jpg', description: 'Pulteney Bridge, Bath' },
  { src: '/photos/IMG_4026.jpg', description: 'City of Bath from Alexandria Park' },
  { src: '/photos/IMG_4505.jpg', description: 'Canary Wharf Skyline from Greenwich Park' },
  { src: '/photos/IMG_4536.jpg', description: 'Canary Wharf... Trash cans...' },
  { src: '/photos/IMG_4538.jpg', description: 'One of Canary Wharf underground station entrances' },
  { src: '/photos/IMG_4605.jpg', description: "Regent Street on a Chrismas Night, 2024" },
  { src: '/photos/IMG_4721.jpg', description: 'Edinburgh, Scotland' },
  { src: '/photos/IMG_4752.jpg', description: 'A random street in Edinburgh' },
  { src: '/photos/IMG_4784.jpg', description: 'Edinburgh Skyline' },
  { src: '/photos/IMG_4817.jpg', description: 'On top of a hill in Edinburgh' },
  { src: '/photos/IMG_4841.jpg', description: 'Again Edinburgh Skyline' },
  { src: '/photos/IMG_4852.jpg', description: 'Urban Edinburgh' },
  { src: '/photos/IMG_4888.jpg', description: 'Bath Train Station, Christmas 2024' },
  { src: '/photos/IMG_4974.jpg', description: 'North Parade Junction' },
  { src: '/photos/IMG_5259.jpg', description: 'Christ Church College, Oxford' },
  { src: '/photos/IMG_5738.jpg', description: 'Bath Half Marathon' },
  { src: '/photos/IMG_5758.jpg', description: 'River Avon and countryside hills' },
  { src: '/photos/IMG_6013.jpg', description: 'Clifton Suspension Bridge, Bristol' },
  { src: '/photos/IMG_6021.jpg', description: 'Cabot Circus, Bristol' },
  { src: '/photos/IMG_6279.jpg', description: 'Bath Uni 10 West Building' },
  { src: '/photos/IMG_6399.jpg', description: 'Unique Fudge Vendor' },
  { src: '/photos/IMG_6484.jpg', description: 'Somewhere in Bath' },
  { src: '/photos/IMG_6489.jpg', description: 'Pulteney Bridge, one of the very few Palladian bridges in the world with stores on it.' },
  { src: '/photos/IMG_7327.jpg', description: "Las Iguanas Restaurant (I don't recommend the tacos) in Bath" },
]

const PHOTOS_PER_PAGE = 6

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [selectedPhoto, setSelectedPhoto] = useState<null | { src: string; description: string }>(null)
  const [currentPage, setCurrentPage] = useState(1)


  useEffect(() => {
    const root = document.documentElement
    root.classList.remove(theme === 'dark' ? 'light' : 'dark')
    root.classList.add(theme)
  }, [theme])

  return (
    <div className="bg-gradient-to-br from-blue-100/50 via-purple-100/50 to-pink-100/50 dark:from-neutral-900/40 dark:via-zinc-800/40 dark:to-neutral-950/40 text-black dark:text-white transition-all relative">
      <Favicon />
      <ClientOnly>
        <BackgroundParticles />
      </ClientOnly>

      {/* NAV */}
      <Navbar />

      {/* HERO */}
      <header className="relative h-screen flex items-center justify-center text-center overflow-hidden px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Hi, I&apos;m Rasyid Gatrawijaya
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            MSc CS @ Bath | Versatile Software Engineer | Ex-Shopee
          </p>
        </motion.div>

        <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-sm z-0" />
      </header>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I&apos;m a software engineer passionate about modern frontends, infrastructure, and machine learning.
            Previously worked at Shopee. Currently finishing my MSc in Computer Science at the University of Bath.
          </p>
        </motion.div>
      </section>

      {/* FRONTEND PORTFOLIO */}
      <section id="portfolio" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">Frontend Portfolio</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ['DeskChat', 'Desktop Browser Chat', '/projects/deskchat.png', 'https://scale-cds-public-us-west-2.s3.amazonaws.com/65cbc42b32ffab95dd54b864/hXkUaIivfS9Fg2d'],
              ['EnviroTrends', 'Environmental Analytics Tool', '/projects/envirotrends.png', 'https://scale-cds-public-us-west-2.s3.amazonaws.com/65cbc42b32ffab95dd54b864/jrSAYUJ-Al0BdP7'],
              ['Maxwell 3D', "Maxwell Equation's Simulations", '/projects/maxwell3d.png', 'https://scale-cds-public-us-west-2.s3.amazonaws.com/65cbc42b32ffab95dd54b864/r8cCwT8UVZapWZ3'],
              ['WaveSim', 'Wave Interference Simulator', '/projects/wavesim.png', 'https://scale-cds-public-us-west-2.s3.amazonaws.com/65cbc42b32ffab95dd54b864/wO2Lav0hWYnihxa'],
              ['VoiceBoard', 'Voice Commanded Task Board', '/projects/voiceboard.png', 'https://scale-cds-public-us-west-2.s3.amazonaws.com/65cbc42b32ffab95dd54b864/y_B9crRobORi13S'],
              ['Chrono', 'Interactive Schedule Manager', '/projects/chrono.png', 'https://scale-cds-public-us-west-2.s3.amazonaws.com/65cbc42b32ffab95dd54b864/7Zww6d3wgCKcRFI']
            ].map(([title, desc, img, url], i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer bg-white/40 dark:bg-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md border border-white/20 hover:bg-white/60 dark:hover:bg-white/20 transition"
              >
                <Image
                  src={img}
                  alt={title}
                  width={500}
                  height={300}
                  className="h-40 w-full object-cover rounded-xl mb-4"
                />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* WRITINGS */}
      <section id="writings" className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold mb-6">Writings</h2>
          <ul className="pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex items-center gap-2">
            <a
              href="/writings/SlateQLitSurveyRasyidG.pdf"
              download
              className="text-purple-600 hover:underline flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-purple-600" viewBox="0 0 24 24">
                <path d="M12 16.5l4.5-4.5h-3v-6h-3v6h-3l4.5 4.5zM5 18v2h14v-2H5z" />
              </svg>
              (In Progress) SlateQ for Slate-Based E-Commerce Recommender Systems
            </a>
          </li>
          </ul>
        </motion.div>
      </section>

      {/* PHOTOGRAPHY */}
      <section id="photography" className="pt-20 pb-16 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold mb-2">Photography</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Not high-res shards of my time, studying in England.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
            {photoData
              .slice((currentPage - 1) * PHOTOS_PER_PAGE, currentPage * PHOTOS_PER_PAGE)
              .map((photo, idx) => (
                <div key={idx} className="cursor-pointer" onClick={() => setSelectedPhoto(photo)}>
                  <img
                    src={photo.src}
                    alt={`Photo ${idx + 1}`}
                    className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
          </div>

          <div className="flex justify-center gap-2 mb-4">
            {Array.from({ length: Math.ceil(photoData.length / PHOTOS_PER_PAGE) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-full text-sm ${
                  currentPage === i + 1
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-200 dark:bg-zinc-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {selectedPhoto && (
            <PhotoModal
              src={selectedPhoto.src}
              description={selectedPhoto.description}
              onClose={() => setSelectedPhoto(null)}
            />
          )}
        </motion.div>
      </section>


      {/* FOOTER */}
      <Footer />
    </div>
  )
}
