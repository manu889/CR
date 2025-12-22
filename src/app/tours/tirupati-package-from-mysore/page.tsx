import { Metadata } from 'next';
import { tourPackages } from '@/data/tours';
import { BUSINESS_INFO } from '@/data/constants';
import BookingForm from '@/components/BookingForm';
import Image from 'next/image';

const tourData = tourPackages.find(t => t.slug === 'tirupati-package-from-mysore');

if (!tourData) {
  throw new Error('Tour not found');
}

const tour = tourData;

export const metadata: Metadata = {
  title: 'Tirupati Package from Mysore 2D/1N | Venkateswara Temple | ₹14,500 | Cab Rental',
  description: 'Book Tirupati taxi package from Mysore. 2 days 1 night trip to Tirumala Venkateswara Temple with AC cab service ₹14,500. Call +91 96327 22100',
  keywords: ['tirupati package from mysore', 'mysore to tirupati tour', 'tirumala darshan from mysore', 'venkateswara temple mysore', 'tirupati 2 days package', 'mysore tirupati cab', 'balaji darshan mysore', 'tirupati temple tour package', 'tirumala mysore package', 'tirupati pilgrimage from mysore'],
  openGraph: {
    title: 'Tirupati Package from Mysore - 2 Days 1 Night ₹14,500',
    description: 'Spiritual journey to Tirumala Venkateswara Temple from Mysore with comfortable travel.',
    type: 'website',
    images: [tour.image || '']
  }
};

export default function TirupatiPackageFromMysorePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-orange-600 text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🙏 {tour.category.toUpperCase()} TOUR
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Tirupati Package from Mysore
              </h1>
              <p className="text-base md:text-lg text-orange-50 mb-6">
                Embark on a blessed spiritual journey to Lord Venkateswara's abode at Tirumala from Mysore. Our 2 days 1 night Tirupati taxi service includes comfortable AC transportation and flexible timings for your darshan. Experience divine blessings at one of the world's most visited pilgrimage sites. (Note: Hotel accommodation not included - taxi service only)
              </p>
              <div className="flex flex-wrap gap-4 items-center mb-6">
                <div className="bg-white text-orange-600 px-6 py-3 rounded-lg">
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
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`} className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mysore to Tirupati Pilgrimage - Divine Darshan Package</h2>
              <p className="text-lg text-gray-700 mb-8">
                Undertake a sacred pilgrimage to Tirumala, the abode of Lord Sri Venkateswara Swamy, from Mysore. This taxi service package covers the 600 km journey in comfortable AC vehicles with experienced drivers who know the route well. We ensure a safe, comfortable journey through Karnataka and Andhra Pradesh. (Please note: This is a taxi-only service. Hotel accommodation and darshan tickets must be arranged separately by you.)
              </p>

              {/* Highlights */}
              <div className="bg-orange-50 p-6 rounded-xl mb-8 border-2 border-orange-200">
                <h3 className="text-2xl font-bold text-orange-900 mb-4">Tour Highlights</h3>
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
                  <div key={item.day} className="border-l-4 border-orange-600 pl-6 py-2">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Day {item.day}: {item.title}</h4>
                    <p className="text-gray-700 mb-3">{item.description}</p>
                    <ul className="space-y-2">
                      {item.activities.map((activity, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <svg className="w-4 h-4 text-orange-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Tirupati Package from Mysore?</h3>
                <p className="text-gray-700 mb-4">
                  Our Mysore to Tirupati package is designed for devotees seeking a hassle-free pilgrimage to Lord Venkateswara. The 600 km journey is covered comfortably with rest stops, experienced drivers familiar with the route, and flexible timing to suit your preferences. We assist with darshan arrangements and recommend the best times to visit based on crowd levels and special occasions.
                </p>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">What Makes This Package Special?</h4>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-700">✓ <strong>Early Morning Departure:</strong> Start at 4 AM to reach Tirupati by afternoon</li>
                  <li className="text-gray-700">✓ <strong>Interstate Travel:</strong> Seamless journey through Karnataka and Andhra Pradesh</li>
                  <li className="text-gray-700">✓ <strong>Flexible Timing:</strong> We wait for you to complete your darshan</li>
                  <li className="text-gray-700">✓ <strong>Darshan Assistance:</strong> Guidance on ticket booking and temple procedures</li>
                  <li className="text-gray-700">✓ <strong>Experienced Drivers:</strong> Well-versed with Tirupati routes and timings</li>
                  <li className="text-gray-700">✓ <strong>Flexible Return:</strong> Depart based on your darshan completion time</li>
                </ul>

                <h4 className="text-xl font-bold text-gray-900 mb-3">Best Time to Visit Tirupati from Mysore</h4>
                <p className="text-gray-700 mb-4">
                  Tirupati can be visited year-round, though October to March offers pleasant weather. Major festivals like Brahmotsavam (September-October) attract huge crowds - book months in advance if visiting during this period. Weekdays generally have shorter wait times compared to weekends. Early morning darshan (3-5 AM) typically has fewer devotees. Avoid peak summer (April-May) when temperatures can exceed 40°C.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3">Important Information for Pilgrims</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-gray-900">Darshan Options</h5>
                    <p className="text-gray-700">Sarva Darshan (free, 4-8 hours wait), Special Entry Darshan (₹300, 2-3 hours), Seegra Darshan (₹500, 1-2 hours), Break Darshan (₹1000+, minimal wait). We can guide you on booking online tickets in advance through TTD website.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Temple Timings & Dress Code</h5>
                    <p className="text-gray-700">Temple open daily 2:30 AM - 1:00 AM next day. Traditional dress mandatory - dhoti/kurta for men, saree/churidar for women. Avoid jeans, shorts, modern attire. Mobile phones and cameras not allowed inside sanctum.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">About Hotel Accommodation</h5>
                    <p className="text-gray-700">We provide taxi service only. You must arrange your own hotel accommodation in Tirupati city (22 km from temple) or Tirumala. Our driver can recommend good hotels and will be available for temple drops/pickups during your stay.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Laddu Prasadam</h5>
                    <p className="text-gray-700">The famous Tirupati laddu (GI tagged) is available at designated counters. Each darshan ticket includes 1 free laddu. Additional laddus can be purchased (₹50 per piece, limit 2 per person).</p>
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
                      <dd className="font-semibold text-orange-600">₹{tour.price.toLocaleString('en-IN')}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Distance:</dt>
                      <dd className="font-semibold text-gray-900">600 km</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Travel Time:</dt>
                      <dd className="font-semibold text-gray-900">10 hours</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Accommodation:</dt>
                      <dd className="font-semibold text-gray-900">1 Night</dd>
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
