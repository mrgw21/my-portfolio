// src/app/layout.tsx
import './globals.css'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import type { Metadata } from 'next'
import Favicon from '@/components/Favicon'
import ClientOnly from '@/components/ClientOnly'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })

export const metadata: Metadata = {
  title: 'Rasyid G. – Portfolio',
  description: 'Software Engineer | MSc Student | Developer Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} bg-white text-black dark:bg-neutral-900 dark:text-white transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClientOnly>
            <Favicon />
          </ClientOnly>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
