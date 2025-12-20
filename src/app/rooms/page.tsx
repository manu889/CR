import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Rooms from '@/components/Rooms'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Rooms & Suites - Aditya Hotel Mysore',
  description: 'Explore our 21 well-appointed rooms at Aditya Hotel Mysore. Choose from Standard, Superior, Suite, and 3-Bed rooms with modern amenities.',
  keywords: 'Aditya Hotel rooms, Mysore hotel accommodation, superior rooms, suite rooms, 3-bed rooms, standard rooms',
  openGraph: {
    title: 'Rooms & Suites - Aditya Hotel Mysore',
    description: 'Discover our range of 21 comfortable rooms with modern amenities and elegant design.',
    url: 'https://adityahotelmysore.com/rooms',
  },
}

export default function RoomsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-neutral-900 via-neutral-800 to-gold-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="page-title text-white mb-6 hero-title">
              Luxury Rooms & Suites
            </h1>
            <p className="page-subtitle text-white hero-subtitle">
              Choose from our carefully designed accommodations, each offering supreme comfort and elegance
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-gold-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-20 w-4 h-4 bg-gold-500 rounded-full animate-bounce opacity-30"></div>
      </section>

      <Rooms />
      <Footer />
    </main>
  )
}
