import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Utensils, Car, Briefcase, MapPin, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Room Service - Aditya Hotel Mysore',
  description: 'Enjoy 24/7 room service at Aditya Hotel Mysore with delicious local and international cuisine.',
}

export default function RoomServicePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-28 pb-16 bg-gradient-to-br from-neutral-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Utensils className="w-16 h-16 text-gold-600 mx-auto mb-6" />
            <h1 className="page-title">
              Room Service
            </h1>
            <p className="page-subtitle">
              Enjoy delicious meals in the comfort of your room with our 24/7 room service
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-3xl font-bold text-neutral-800 mb-6">Available 24/7</h2>
                <p className="text-neutral-600 mb-4">
                  Our room service is available round the clock to cater to your food needs. 
                  Whether it's a late-night snack or an early morning breakfast, we're here to serve you.
                </p>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Local Karnataka specialties</li>
                  <li>• North & South Indian cuisine</li>
                  <li>• Continental dishes</li>
                  <li>• Fresh beverages & snacks</li>
                  <li>• Special dietary requirements</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-gold-50 to-neutral-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-neutral-800 mb-4">Service Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gold-600" />
                    <span>24 Hours - Every Day</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-gold-600" />
                    <span>Hygienic Food Preparation</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <p className="text-sm text-neutral-600 mb-4">Contact for Room Service:</p>
                  <p className="font-semibold text-neutral-800">Call Extension: 101</p>
                  <p className="font-semibold text-neutral-800">Direct: 098450 92115</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
