import { Metadata } from 'next';
import { tourPackages } from '@/data/tours';
import { BUSINESS_INFO } from '@/data/constants';
import BookingForm from '@/components/BookingForm';
import Image from 'next/image';

const tourData = tourPackages.find(t => t.slug === 'mysore-ooty-coorg-package');

if (!tourData) {
  throw new Error('Tour not found');
}

const tour = tourData;

export const metadata: Metadata = {
  title: 'Mysore Ooty Coorg Package 4D/3N | Hill Station Tour | ₹17,500 | Cab Rental Mysore',
  description: 'Book Mysore Ooty Coorg 4 days 3 nights taxi package covering palace, hill stations, tea gardens, coffee plantations. AC cab service ₹17,500. Call +91 96327 22100',
  keywords: ['mysore ooty coorg package', '4 days 3 nights tour', 'mysore ooty coorg tour', 'hill station package karnataka', 'ooty coorg tour from mysore', 'south india hill station tour', 'mysore palace ooty coorg', 'tea garden tour package', 'coffee plantation tour', 'western ghats tour package'],
  openGraph: {
    title: 'Mysore Ooty Coorg Package - 4 Days 3 Nights ₹17,500',
    description: 'Complete hill station tour covering Mysore, Ooty, Coonoor, and Coorg with comfortable stays.',
    type: 'website',
    images: [tour.image || '']
  }
};

export default function MysoreOotyCoorgPackagePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-pink-600 text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🏔️ {tour.category.toUpperCase()} TOUR
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Mysore Ooty Coorg Package
              </h1>
              <p className="text-base md:text-lg text-purple-50 mb-6">
                Comprehensive 4 days 3 nights taxi tour covering the best of South India's hill stations - Mysore's royal heritage, Ooty's Nilgiri beauty, Coonoor's tea gardens, and Coorg's coffee plantations. Comfortable taxi service with all transfers. (Note: Accommodation not included - taxi service only)
              </p>
              <div className="flex flex-wrap gap-4 items-center mb-6">
                <div className="bg-white text-green-700 px-6 py-3 rounded-lg">
                  <div className="text-xs text-gray-600">Starting from</div>
                  <div className="text-2xl font-bold">₹11/km</div>
                  <div className="text-xs text-gray-600">Sedan • Multi-day</div>
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
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`} className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mysore Ooty Coorg 4 Days 3 Nights - Complete Hill Station Experience</h2>
              <p className="text-lg text-gray-700 mb-8">
                Discover the perfect blend of royal heritage and hill station beauty with our comprehensive 4 days 3 nights Mysore-Ooty-Coorg taxi package. Begin with the grandeur of Mysore Palace and Brindavan Gardens, experience the cool climate of Ooty's botanical gardens and Doddabetta Peak, enjoy Coonoor's tea estates, and conclude with Coorg's aromatic coffee plantations and stunning waterfalls. This taxi service includes private AC vehicle throughout. (Please note: Accommodation and meals must be arranged separately by you.)
              </p>

              {/* Highlights */}
              <div className="bg-purple-50 p-6 rounded-xl mb-8 border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Tour Highlights</h3>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Detailed Day-wise Itinerary</h3>
              <div className="space-y-6 mb-8">
                {tour.itinerary.map((item) => (
                  <div key={item.day} className="border-l-4 border-purple-600 pl-6 py-2">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Day {item.day}: {item.title}</h4>
                    <p className="text-gray-700 mb-3">{item.description}</p>
                    <ul className="space-y-2">
                      {item.activities.map((activity, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <svg className="w-4 h-4 text-purple-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Mysore Ooty Coorg 4 Days Package?</h3>
                <p className="text-gray-700 mb-4">
                  Our Mysore Ooty Coorg 4 days 3 nights tour package is the most popular multi-day tour from Karnataka, offering a perfect blend of cultural heritage, hill station beauty, and plantation experiences. This well-planned itinerary covers four distinct destinations without rushing, allowing you to truly experience the essence of each place. Ideal for families, couples, and groups looking for a memorable vacation in South India's most beautiful regions.
                </p>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">What Makes This Package Special?</h4>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-700">✓ <strong>Comprehensive Coverage:</strong> Four amazing destinations in one package</li>
                  <li className="text-gray-700">✓ <strong>Multi-Day Service:</strong> 3 nights of taxi availability for your journey</li>
                  <li className="text-gray-700">✓ <strong>Driver Accommodation:</strong> All driver expenses covered by us</li>
                  <li className="text-gray-700">✓ <strong>Private Vehicle:</strong> Dedicated AC sedan/SUV for your group throughout</li>
                  <li className="text-gray-700">✓ <strong>Flexible Itinerary:</strong> Customize based on your preferences and interests</li>
                  <li className="text-gray-700">✓ <strong>Expert Planning:</strong> Optimized routes to maximize sightseeing time</li>
                </ul>

                <h4 className="text-xl font-bold text-gray-900 mb-3">Best Time for Mysore Ooty Coorg Tour</h4>
                <p className="text-gray-700 mb-4">
                  October to March is ideal for this tour when all three hill stations enjoy pleasant weather (10-20°C). April-May can be warm in Mysore but comfortable in Ooty and Coorg. Monsoon (June-September) brings lush greenery and fewer tourists, though some viewpoints may have limited visibility. Peak season is December-January when advance booking is essential. Avoid April-May if you prefer cooler temperatures.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3">What to Expect Each Day</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-gray-900">Day 1: Mysore Heritage</h5>
                    <p className="text-gray-700">Start with the architectural marvel of Mysore Palace, visit the sacred Chamundi Hills temple with city views, and conclude with the spectacular musical fountain at Brindavan Gardens. Stay overnight in Ooty.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Day 2: Ooty & Coonoor Hill Stations</h5>
                    <p className="text-gray-700">Explore the Government Botanical Gardens with rare plants, enjoy boating at Ooty Lake, trek to Karnataka's viewpoint at Doddabetta Peak (2,623m), visit Coonoor's Sim's Park and tea factory. Overnight in Ooty.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Day 3: Journey to Coorg</h5>
                    <p className="text-gray-700">Travel through scenic Western Ghats to Coorg. Check into your resort, visit the stunning Abbey Falls cascading through coffee estates, and enjoy sunset at Raja's Seat with valley views. Overnight in Coorg.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Day 4: Coorg Experience & Return</h5>
                    <p className="text-gray-700">Walk through aromatic coffee plantations learning about cultivation, visit the sacred Talacauvery (optional), explore the magnificent Golden Temple (Namdroling Monastery), shop for fresh coffee and spices before returning.</p>
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
                  <h4 className="font-bold text-gray-900 mb-4">Quick Information</h4>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Duration:</dt>
                      <dd className="font-semibold text-gray-900">{tour.duration}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Price:</dt>
                      <dd className="font-semibold text-purple-600">₹{tour.price.toLocaleString('en-IN')}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Destinations:</dt>
                      <dd className="font-semibold text-gray-900">4 Places</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Service Duration:</dt>
                      <dd className="font-semibold text-gray-900">3 Nights 4 Days</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Accommodation:</dt>
                      <dd className="font-semibold text-gray-900">NOT Included</dd>
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
