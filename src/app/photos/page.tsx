'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackgroundParticles from '@/components/BackgroundParticles'
import PhotoModal from '@/components/PhotoModal'
import photoData from '@/data/photoData'

const PHOTOS_PER_PAGE = 6

export default function PhotosPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedPhoto, setSelectedPhoto] = useState<null | (typeof photoData)[0]>(null)

  const photosToDisplay = photoData.slice(
    (currentPage - 1) * PHOTOS_PER_PAGE,
    currentPage * PHOTOS_PER_PAGE
  )

  const totalPages = Math.ceil(photoData.length / PHOTOS_PER_PAGE)

  return (
    <>
      <Navbar />
      <BackgroundParticles />
      <main className="py-16 px-6 md:px-16 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold mb-2">Photography</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Not high-res photo collection.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
            {photosToDisplay.map((photo, idx) => (
              <div
                key={idx}
                className="cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.src}
                  alt={`Photo ${idx + 1}`}
                  className="rounded-xl shadow-md hover:scale-105 transition"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-full text-sm ${
                  currentPage === i + 1
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-200 dark:bg-zinc-700'
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
      </main>
      <Footer />
    </>
  )
}
