'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

// Load components without SSR to prevent hydration issues
const About = dynamic(() => import('@/components/About'), { 
  ssr: false,
  loading: () => (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-neutral-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-neutral-200 rounded w-2/3 mx-auto"></div>
        </div>
      </div>
    </div>
  )
})

const Rooms = dynamic(() => import('@/components/Rooms'), { 
  ssr: false,
  loading: () => (
    <div className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-neutral-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-neutral-100 rounded-xl h-80"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
})

const Gallery = dynamic(() => import('@/components/Gallery'), { 
  ssr: false,
  loading: () => (
    <div className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-neutral-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-neutral-200 rounded-lg aspect-square"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
})

const Contact = dynamic(() => import('@/components/Contact'), { 
  ssr: false,
  loading: () => (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-neutral-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-neutral-200 rounded w-2/3 mx-auto"></div>
        </div>
      </div>
    </div>
  )
})

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Initialize animations only after hydration
    const initAnimations = async () => {
      try {
        const { initializeAnimations } = await import('@/lib/animations')
        initializeAnimations()
      } catch (error) {
        console.log('Animations skipped')
      }
    }
    
    initAnimations()
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {isClient && (
        <>
          <About />
          <Rooms />
          <Gallery />
          <Contact />
        </>
      )}
      <Footer />
    </main>
  )
}
