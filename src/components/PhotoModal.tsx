'use client'

import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

export default function PhotoModal({
  src,
  onClose,
  description,
}: {
  src: string
  onClose: () => void
  description: string
}) {
  const backdropRef = useRef<HTMLDivElement>(null)

  // Close on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  // Close when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) onClose()
  }

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
    >
      <div className="relative bg-white dark:bg-neutral-900 p-4 rounded-xl shadow-2xl max-w-3xl w-full animate-fade-in">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
        >
          <X className="w-5 h-5" />
        </button>
        <img
          src={src}
          alt="Expanded"
          className="w-full h-auto rounded-lg mb-4 object-contain"
        />
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  )
}
