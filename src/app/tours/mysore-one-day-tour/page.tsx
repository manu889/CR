import { Metadata } from 'next';
import { tourPackages } from '@/data/tours';
import { BUSINESS_INFO } from '@/data/constants';
import BookingForm from '@/components/BookingForm';
import TourServiceDisclaimer from '@/components/TourServiceDisclaimer';
import Image from 'next/image';

const tour = tourPackages.find(t => t.slug === 'mysore-one-day-tour');

if (!tour) {
  throw new Error('Tour not found');
}

export const metadata: Metadata = {
  title: 'Mysore One Day Tour Package | City Sightseeing | ₹2,500 | Cab Rental Mysore',
  description: 'Book Mysore city one day tour covering Palace, Chamundi Hills, St. Philomena Church, Brindavan Gardens. AC cab with guide. All-inclusive package ₹2,500. Call +91 96327 22100',
  keywords: ['mysore one day tour', 'mysore darshan package', 'mysore city tour', 'mysore sightseeing cab', 'mysore palace tour', 'chamundi hills tour', 'brindavan gardens mysore', 'mysore local tour package'],
  openGraph: {
    title: 'Mysore One Day Tour Package - ₹2,500 All Inclusive',
    description: 'Complete Mysore city tour with AC cab, guide, and entry fees included.',
    type: 'website',
    images: [tour.image || '']
  }
};

export default function MysoreOneDayTourPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-amber-600 text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🏛️ {tour.category.toUpperCase()} TOUR
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Mysore One Day Tour Package
              </h1>
              <p className="text-base md:text-lg text-amber-50 mb-6">
                Experience the royal heritage and cultural splendor of Mysore in one comprehensive day. Visit Mysore Palace, Chamundi Hills, St. Philomena's Church, Brindavan Gardens with a professional guide.
              </p>
              <div className="flex flex-wrap gap-4 items-center mb-6">
                <div className="bg-white text-amber-600 px-6 py-3 rounded-lg">
                  <div className="text-xs text-gray-600">Starting from</div>
                  <div className="text-2xl font-bold">₹11/km</div>
                  <div className="text-xs text-gray-600">Sedan</div>
                </div>
                <div className="text-white">
                  <div className="text-sm opacity-90">Duration</div>
                  <div className="text-lg font-bold">{tour.duration}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-secondary text-base px-8 py-3">
                  📞 Call {BUSINESS_INFO.phone}
                </a>
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`} className="bg-white text-amber-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all">
                  💬 WhatsApp
                </a>
              </div>
            </div>
            {tour.image && (
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tour Details */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mysore City Darshan - Complete One Day Sightseeing</h2>
              <p className="text-lg text-gray-700 mb-8">
                Discover the City of Palaces with our expertly crafted Mysore one day tour package. This comprehensive sightseeing tour covers all major attractions including the magnificent Mysore Palace, serene Chamundi Hills temple, Gothic-style St. Philomena's Cathedral, and the enchanting Brindavan Gardens with its musical fountain show.
              </p>

              {/* Service Disclaimer */}
              <TourServiceDisclaimer />

              {/* Highlights */}
              <div className="bg-amber-50 p-6 rounded-xl mb-8 border-2 border-amber-200">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Tour Highlights</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {tour.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detailed Itinerary */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary</h3>
              <div className="space-y-6 mb-8">
                {tour.itinerary.map((item) => (
                  <div key={item.day} className="border-l-4 border-amber-600 pl-6 py-2">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-700 mb-3">{item.description}</p>
                    <ul className="space-y-2">
                      {item.activities.map((activity, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <svg className="w-4 h-4 text-amber-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200">
                  <h4 className="text-lg font-bold text-emerald-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Inclusions
                  </h4>
                  <ul className="space-y-2">
                    {tour.inclusions.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-emerald-600 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                  <h4 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Exclusions
                  </h4>
                  <ul className="space-y-2">
                    {tour.exclusions.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-red-600 mt-0.5">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* SEO Content */}
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Mysore One Day Tour Package?</h3>
                <p className="text-gray-700 mb-4">
                  Our Mysore city sightseeing tour is designed for travelers who want to explore the best of Mysore in a single day. Whether you're on a business trip, weekend getaway, or part of a longer South India itinerary, this one-day Mysore darshan package offers the perfect introduction to the royal city.
                </p>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">What Makes This Tour Special?</h4>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-700">✓ <strong>Professional Local Guide:</strong> Knowledgeable guide shares fascinating history and stories</li>
                  <li className="text-gray-700">✓ <strong>Comfortable AC Vehicle:</strong> Well-maintained sedan or SUV based on group size</li>
                  <li className="text-gray-700">✓ <strong>All Entry Fees Included:</strong> No hidden costs - palace, temples, gardens all covered</li>
                  <li className="text-gray-700">✓ <strong>Flexible Pickup:</strong> Hotel, railway station, or anywhere in Mysore city</li>
                  <li className="text-gray-700">✓ <strong>Photo Stops:</strong> Ample time for photography at each location</li>
                </ul>

                <h4 className="text-xl font-bold text-gray-900 mb-3">Best Time for Mysore Local Sightseeing</h4>
                <p className="text-gray-700 mb-4">
                  October to March is ideal for Mysore tourism with pleasant weather. However, if you're visiting during Dasara festival (September-October), witness the grand illumination of Mysore Palace - a once-in-a-lifetime experience! Book your Mysore one day tour package in advance during peak season.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3">Destinations Covered in Detail</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-gray-900">Mysore Palace (Amba Vilas)</h5>
                    <p className="text-gray-700">The crown jewel of Mysore - an Indo-Saracenic masterpiece with intricate carvings, stained glass ceilings, and royal artifacts. Marvel at the Durbar Hall and the Golden Throne.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Chamundi Hills Temple</h5>
                    <p className="text-gray-700">Perched atop 1000 feet, this ancient temple offers panoramic city views. Visit the massive Nandi statue carved from a single granite rock.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">St. Philomena's Cathedral</h5>
                    <p className="text-gray-700">Asia's second-tallest church with stunning Neo-Gothic architecture, beautiful stained glass windows, and peaceful ambiance.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Brindavan Gardens</h5>
                    <p className="text-gray-700">Terraced gardens with symmetrical flowerbeds and the famous musical fountain show (timings: 7:00 PM - 7:45 PM on weekdays, 7:00 PM - 8:15 PM on weekends).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <BookingForm />
                
                {/* Quick Info */}
                <div className="mt-6 bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-4">Vehicle Options & Pricing</h4>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Sedan (Dzire/Etios):</dt>
                      <dd className="font-semibold text-amber-600">₹11/km</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">SUV (Innova/Ertiga):</dt>
                      <dd className="font-semibold text-amber-600">₹14/km</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Tempo (12-seater):</dt>
                      <dd className="font-semibold text-amber-600">₹18/km</dd>
                    </div>
                    <div className="flex justify-between pt-3 border-t">
                      <dt className="text-gray-600">Duration:</dt>
                      <dd className="font-semibold text-gray-900">{tour.duration}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Pickup:</dt>
                      <dd className="font-semibold text-gray-900">Flexible</dd>
                    </div>
                  </dl>
                </div>

                {/* Trust Badge */}
                <div className="mt-6 bg-emerald-50 p-6 rounded-xl border border-emerald-200">
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-bold text-gray-900">100% Trusted</div>
                      <div className="text-sm text-gray-600">15+ Years Experience</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">Thousands of satisfied customers. Licensed and insured taxi service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
