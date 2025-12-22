import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { tourPackages, tourCategories } from '@/data/tours';
import BookingForm from '@/components/BookingForm';
import { BUSINESS_INFO } from '@/data/constants';

export const metadata: Metadata = {
  title: 'Tour Packages from Mysore | 1 Day to 4 Day Tours | Cab Rental Mysore',
  description: 'Explore our curated tour packages from Mysore including one-day trips to Ooty, Coorg, Wayanad, multi-day packages to hill stations, and pilgrimage tours. Book affordable tour packages with expert drivers.',
  keywords: 'mysore tour packages, mysore to ooty package, mysore coorg wayanad package, mysore one day tour, tirupati package from mysore, tour operators in mysore, holiday packages mysore',
  openGraph: {
    title: 'Best Tour Packages from Mysore | One Day & Multi-Day Tours',
    description: 'Book the best tour packages from Mysore. One-day trips, weekend getaways, multi-day packages covering Ooty, Coorg, Wayanad, and more.',
    url: 'https://cabrentalmysore.com/tours',
    images: ['/og-tours.jpg']
  }
};

export default function ToursPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/img (1).jfif"
            alt="Mysore Tour Packages"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />

        {/* Content */}
        <div className="relative z-20 container-custom text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Mysore Tour Packages
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
            Discover the best of South India with our curated tour packages from Mysore
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              📞 Call to Book
            </a>
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[\s\+]/g, '')}?text=Hi, I'm interested in your tour packages`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white rounded-lg font-semibold transition-all duration-300"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Tour Categories */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {tourCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-amber-100"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* One Day Tours */}
      <section id="one-day" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🌅 One Day Tour Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Perfect for travelers with limited time. Explore nearby destinations in comfortable day trips from Mysore.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourPackages
              .filter((tour) => tour.category === 'one-day')
              .map((tour) => (
                <div key={tour.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{tour.title}</h3>
                        <p className="text-sm text-amber-50">{tour.duration}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">₹{tour.price.toLocaleString()}</div>
                        <div className="text-xs text-amber-50">Per vehicle</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 text-sm">{tour.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Highlights:</h4>
                      <ul className="space-y-1">
                        {tour.highlights.slice(0, 4).map((highlight, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link 
                        href={`/tours/${tour.slug}`}
                        className="flex-1 btn-outline text-center text-sm py-2"
                      >
                        View Details
                      </Link>
                      <Link 
                        href="/book"
                        className="flex-1 btn-primary text-center text-sm py-2"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Multi-Day Packages */}
      <section id="multi-day" className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🏔️ Multi-Day Tour Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Extended taxi tours covering multiple destinations. Comfortable transportation for comprehensive sightseeing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {tourPackages
              .filter((tour) => tour.category === 'multi-day')
              .map((tour) => (
                <div key={tour.id} className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{tour.title}</h3>
                        <p className="text-emerald-50">{tour.duration}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold">₹{tour.price.toLocaleString()}</div>
                        <div className="text-xs text-emerald-50">Per person</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tour.destinations.map((dest, idx) => (
                        <span key={idx} className="bg-white/20 px-3 py-1 rounded-full text-xs">
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{tour.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Itinerary:</h4>
                      <div className="space-y-3">
                        {tour.itinerary.map((day) => (
                          <div key={day.day} className="flex gap-3">
                            <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center font-bold text-amber-700">
                              {day.day}
                            </div>
                            <div className="flex-1">
                              <h5 className="font-semibold text-gray-900 text-sm">{day.title}</h5>
                              <p className="text-sm text-gray-600">{day.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Included:</h5>
                        <ul className="space-y-1">
                          {tour.inclusions.slice(0, 3).map((item, idx) => (
                            <li key={idx} className="text-gray-600 flex items-start gap-1">
                              <span className="text-green-500">✓</span>
                              <span className="text-xs">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Excluded:</h5>
                        <ul className="space-y-1">
                          {tour.exclusions.slice(0, 3).map((item, idx) => (
                            <li key={idx} className="text-gray-600 flex items-start gap-1">
                              <span className="text-red-500">✗</span>
                              <span className="text-xs">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Link 
                        href={`/tours/${tour.slug}`}
                        className="flex-1 btn-outline text-center"
                      >
                        Full Itinerary
                      </Link>
                      <Link 
                        href="/book"
                        className="flex-1 btn-primary text-center"
                      >
                        Book Package
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Weekend Getaways */}
      <section id="weekend" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🌴 Weekend Getaway Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Perfect 2-day escapes for weekends. Relax, rejuvenate, and explore nearby destinations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {tourPackages
              .filter((tour) => tour.category === 'weekend')
              .map((tour) => (
                <div key={tour.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{tour.title}</h3>
                        <p className="text-sm text-purple-50">{tour.duration}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">₹{tour.price.toLocaleString()}</div>
                        <div className="text-xs text-purple-50">Package cost</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{tour.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Package Highlights:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {tour.highlights.slice(0, 6).map((highlight, idx) => (
                          <div key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link 
                        href={`/tours/${tour.slug}`}
                        className="flex-1 btn-outline text-center"
                      >
                        Details
                      </Link>
                      <Link 
                        href="/book"
                        className="flex-1 btn-primary text-center"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Pilgrimage Tours */}
      <section id="pilgrimage" className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🙏 Pilgrimage Tour Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Spiritual journeys to famous temples with comfortable taxi service and flexible timings.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            {tourPackages
              .filter((tour) => tour.category === 'pilgrimage')
              .map((tour) => (
                <div key={tour.id} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl shadow-lg overflow-hidden border border-orange-200">
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{tour.title}</h3>
                        <p className="text-orange-50">{tour.duration}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold">₹{tour.price.toLocaleString()}</div>
                        <div className="text-sm text-orange-50">Complete package</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-700 mb-6">{tour.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Tour Highlights:</h4>
                        <ul className="space-y-2">
                          {tour.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-gray-600 flex items-start gap-2">
                              <svg className="w-5 h-5 text-orange-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Package Includes:</h4>
                        <ul className="space-y-2">
                          {tour.inclusions.slice(0, 6).map((item, idx) => (
                            <li key={idx} className="text-gray-600 flex items-start gap-2 text-sm">
                              <span className="text-green-500">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                      <p className="text-sm text-gray-700">
                        <strong>Note:</strong> Darshan tickets and special entry passes need to be booked separately. We can assist you with the booking process.
                      </p>
                    </div>
                    
                    <div className="flex gap-3">
                      <Link 
                        href={`/tours/${tour.slug}`}
                        className="flex-1 btn-outline text-center"
                      >
                        View Itinerary
                      </Link>
                      <Link 
                        href="/book"
                        className="flex-1 btn-primary text-center"
                      >
                        Book Tour
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Why Book Tours With Us */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Book Tour Packages With Us?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-gray-900 mb-2">Best Price Guarantee</h3>
              <p className="text-sm text-gray-600">Competitive pricing with no hidden charges. What you see is what you pay.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-3">🚗</div>
              <h3 className="font-bold text-gray-900 mb-2">Well-Maintained Fleet</h3>
              <p className="text-sm text-gray-600">Clean, comfortable vehicles with AC and experienced drivers.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="font-bold text-gray-900 mb-2">Customizable Itineraries</h3>
              <p className="text-sm text-gray-600">Modify packages as per your preferences and travel style.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-3">👨‍✈️</div>
              <h3 className="font-bold text-gray-900 mb-2">Professional Drivers</h3>
              <p className="text-sm text-gray-600">Experienced drivers with excellent route knowledge and customer service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl mb-8 text-amber-50">
                Book your tour package now or speak with our travel experts for customized itineraries
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
                  📞 Call {BUSINESS_INFO.phone}
                </a>
                <Link href="/book" className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                  Book Online
                </Link>
                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\+/g, '')}?text=Hi, I want to book a tour package from Mysore`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
