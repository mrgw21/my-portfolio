'use client'

import { useEffect } from 'react'

export default function Favicon() {
  useEffect(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 64
    canvas.height = 64
    const ctx = canvas.getContext('2d')!
    
    // Transparent background (skip fillRect)

    // Create linear gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
    gradient.addColorStop(0, '#a855f7') // from-purple-500
    gradient.addColorStop(1, '#ec4899') // to-pink-500

    ctx.font = 'bold 32px Poppins, sans-serif'
    ctx.fillStyle = gradient
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('RG', canvas.width / 2, canvas.height / 2)

    const favicon = document.createElement('link')
    favicon.rel = 'icon'
    favicon.href = canvas.toDataURL('image/png')
    document.head.appendChild(favicon)

    return () => {
      document.head.removeChild(favicon)
    }
  }, [])

  return null
}
