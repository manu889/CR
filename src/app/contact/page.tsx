import { Metadata } from 'next'
import Header from '@/components/Header'
import BookingForm from '@/components/BookingForm'
import GoogleRatings from '@/components/GoogleRatings'
import GoogleReviews from '@/components/GoogleReviews'
import { BUSINESS_INFO } from '@/data/constants'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Contact Cab Rental Mysore | Book Taxi +91 96327 22100 | 24/7 Customer Support',
  description: 'Contact Cab Rental Mysore for taxi booking. Call/WhatsApp +91 96327 22100. Email: cabrental@example.com. Office: Mysore City. 24/7 customer support. Instant booking confirmation.',
  keywords: ['contact cab rental mysore', 'mysore taxi booking number', 'cab rental mysore phone number', 'book taxi mysore', 'mysore cab contact', 'taxi service mysore contact', 'cab booking mysore whatsapp', 'mysore taxi customer support', 'call taxi mysore', 'mysore cab service number'],
  openGraph: {
    title: 'Contact Us - Cab Rental Mysore',
    description: 'Get in touch with us for taxi bookings and inquiries. Available 24/7 to serve you.',
    url: 'https://cabrentalmysore.in/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 md:py-28 overflow-hidden">
          {/* Background Image Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: "url('/Images/img (22).jpg')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container-custom text-center relative z-10">
            <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              📞 24/7 Available
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Contact Us</h1>
            <p className="text-xl md:text-2xl text-teal-50 max-w-2xl mx-auto leading-relaxed">
              Get in touch for taxi bookings, inquiries, or assistance. We're here to help!
            </p>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            {/* Google Ratings */}
            <div className="mb-16">
              <GoogleRatings />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Get In Touch</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-5 p-5 bg-amber-50 rounded-xl border-l-4 border-amber-500">
                    <PhoneIcon className="w-7 h-7 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">Phone</h3>
                      <a href={`tel:${BUSINESS_INFO.phone}`} className="text-amber-600 hover:text-amber-700 font-semibold text-lg block mb-1">
                        {BUSINESS_INFO.phone}
                      </a>
                      <p className="text-sm text-gray-600">Available 24/7 for bookings</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 p-5 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                    <EnvelopeIcon className="w-7 h-7 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">Email</h3>
                      <a href={`mailto:${BUSINESS_INFO.email}`} className="text-blue-600 hover:text-blue-700 font-semibold block">
                        {BUSINESS_INFO.email}
                      </a>
                      <p className="text-sm text-gray-600 mt-1">For inquiries and support</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 p-5 bg-purple-50 rounded-xl border-l-4 border-purple-500">
                    <MapPinIcon className="w-7 h-7 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">Address</h3>
                      <p className="text-gray-700 leading-relaxed">{BUSINESS_INFO.address}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <h3 className="font-bold text-2xl text-white">WhatsApp Booking</h3>
                  </div>
                  <p className="text-white/90 mb-6 leading-relaxed text-lg">Get instant responses and quick booking confirmations via WhatsApp!</p>
                  <a 
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-emerald-600 px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all font-bold text-lg shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat on WhatsApp Now
                  </a>
                </div>
              </div>

              {/* Booking Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Quick Booking</h2>
                <BookingForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="inline-block px-6 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-bold mb-4">
                📍 Location
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Find Us on Map</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Visit our office or track our location for easy meet-up
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.962347890265!2d76.64343731482215!3d12.308290991393468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDE4JzI5LjgiTiA3NsKwMzgnNDMuOCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cab Rental Mysore Location"
              />
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
            <GoogleReviews />
          </div>
        </section>
      </main>
    </>
  )
}
