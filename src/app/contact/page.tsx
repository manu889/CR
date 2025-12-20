import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact & Reservations - Aditya Hotel Mysore',
  description: 'Get in touch with Aditya Hotel Mysore for reservations, inquiries, and assistance. Contact us via phone, email, or our online booking form.',
  keywords: 'Aditya Hotel contact, Mysore hotel reservations, hotel booking, contact information, hotel phone number',
  openGraph: {
    title: 'Contact & Reservations - Aditya Hotel Mysore',
    description: 'Contact us for reservations and inquiries. We\'re here to help make your stay memorable.',
    url: 'https://adityahotelmysore.com/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-neutral-900 via-neutral-800 to-gold-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 hero-title">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed hero-subtitle">
              Ready to experience luxury at Aditya Hotel? We're here to make your stay extraordinary
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-gold-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-20 w-4 h-4 bg-gold-500 rounded-full animate-bounce opacity-30"></div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}
