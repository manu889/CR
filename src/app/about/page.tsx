import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Us - Aditya Hotel Mysore',
  description: 'Learn about Aditya Hotel Mysore\'s rich heritage, our story, and what makes us a premier destination in Mysore. Discover our commitment to exceptional hospitality.',
  keywords: 'Aditya Hotel history, Mysore hotel heritage, luxury accommodation, hotel story, hospitality',
  openGraph: {
    title: 'About Us - Aditya Hotel Mysore',
    description: 'Learn about our rich heritage and commitment to exceptional hospitality in the heart of Mysore.',
    url: 'https://adityahotelmysore.com/about',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-neutral-900 via-neutral-800 to-gold-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 hero-title">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed hero-subtitle">
              Where heritage meets hospitality in the heart of Karnataka's cultural capital
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-gold-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-20 w-4 h-4 bg-gold-500 rounded-full animate-bounce opacity-30"></div>
      </section>

      <About />
      <Footer />
    </main>
  )
}
