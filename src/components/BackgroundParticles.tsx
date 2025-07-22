'use client'

import { useEffect, useRef } from 'react'

export default function BackgroundParticles() {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/particles.js'
      script.async = true
      script.onload = () => {
        if (window.particlesJS && particlesRef.current) {
          window.particlesJS.load('particles-js', '/particles.json')
        }
      }
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div
      id="particles-js"
      ref={particlesRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  )
}
