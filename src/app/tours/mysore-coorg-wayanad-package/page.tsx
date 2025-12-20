import { Metadata } from 'next';
import { tourPackages } from '@/data/tours';
import { BUSINESS_INFO } from '@/data/constants';
import BookingForm from '@/components/BookingForm';
import Image from 'next/image';

const tour = tourPackages.find(t => t.slug === 'mysore-coorg-wayanad-package');

if (!tour) {
  throw new Error('Tour not found');
}

export const metadata: Metadata = {
  title: 'Mysore Coorg Wayanad Package 4D/3N | Coffee & Wildlife Tour | ₹18,500 | Cab Rental',
  description: 'Book Mysore Coorg Wayanad 4 days package covering palace, coffee plantations, waterfalls, wildlife. 3-star resorts + AC vehicle ₹18,500. Call +91 96327 22100',
  keywords: ['mysore coorg wayanad package', 'coorg wayanad tour', '4 days 3 nights tour', 'coffee plantation tour', 'wayanad wildlife package', 'mysore coorg wayanad itinerary', 'western ghats tour', 'south india nature tour', 'abbey falls tour package', 'edakkal caves package'],
  openGraph: {
    title: 'Mysore Coorg Wayanad Package - 4 Days 3 Nights ₹18,500',
    description: 'Explore coffee estates, waterfalls, and wildlife across Mysore, Coorg, and Wayanad.',
    type: 'website',
    images: [tour.image || '']
  }
};

export default function MysoreCoorgWayanadPackagePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-emerald-700 text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🌲 {tour.category.toUpperCase()} TOUR
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Mysore Coorg Wayanad Package
              </h1>
              <p className="text-base md:text-lg text-green-50 mb-6">
                Experience the natural splendor of Western Ghats with our 4 days 3 nights Mysore-Coorg-Wayanad tour. Discover Mysore's royal heritage, Coorg's aromatic coffee plantations and waterfalls, and Wayanad's pristine wildlife and ancient caves. Complete package with comfortable resort stays and all transfers.
              </p>
              <div className="flex flex-wrap gap-4 items-center mb-6">
                <div className="bg-white text-emerald-700 px-6 py-3 rounded-lg">
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
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`} className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mysore Coorg Wayanad 4 Days - Nature & Wildlife Expedition</h2>
              <p className="text-lg text-gray-700 mb-8">
                Embark on an unforgettable journey through three of South India's most beautiful destinations. Start with Mysore's magnificent palace and gardens, explore Coorg's coffee estates, Abbey Falls, and Golden Temple, then venture into Wayanad's wilderness with Edakkal Caves, Soochipara Falls, and lush spice plantations. This comprehensive tour includes 3 nights in comfortable resorts, daily breakfast, private AC vehicle, and covers the best of Karnataka and Kerala's natural treasures.
              </p>

              {/* Highlights */}
              <div className="bg-green-50 p-6 rounded-xl mb-8 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-green-900 mb-4">Tour Highlights</h3>
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
                  <div key={item.day} className="border-l-4 border-green-600 pl-6 py-2">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Day {item.day}: {item.title}</h4>
                    <p className="text-gray-700 mb-3">{item.description}</p>
                    <ul className="space-y-2">
                      {item.activities.map((activity, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <svg className="w-4 h-4 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Mysore Coorg Wayanad Tour Package?</h3>
                <p className="text-gray-700 mb-4">
                  Our Mysore Coorg Wayanad 4 days 3 nights package is perfect for nature enthusiasts, adventure seekers, and families wanting to experience the diverse beauty of Western Ghats. This tour combines cultural heritage, coffee plantation experiences, waterfall visits, wildlife exploration, and Kerala's natural landscapes. The itinerary is carefully planned to avoid long drives and maximize sightseeing time at each destination.
                </p>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">What Makes This Package Special?</h4>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-700">✓ <strong>Nature & Heritage Combo:</strong> Royal palaces, coffee estates, waterfalls, and caves</li>
                  <li className="text-gray-700">✓ <strong>Resort Stays:</strong> Comfortable accommodation amidst plantations and forests</li>
                  <li className="text-gray-700">✓ <strong>Interstate Experience:</strong> Karnataka and Kerala in one seamless journey</li>
                  <li className="text-gray-700">✓ <strong>Adventure Activities:</strong> Trekking to Edakkal Caves and waterfall visits</li>
                  <li className="text-gray-700">✓ <strong>Local Cuisine:</strong> Opportunities to taste Kodava and Kerala specialties</li>
                  <li className="text-gray-700">✓ <strong>Shopping:</strong> Fresh coffee, spices, honey, and traditional handicrafts</li>
                </ul>

                <h4 className="text-xl font-bold text-gray-900 mb-3">Best Time for Mysore Coorg Wayanad Package</h4>
                <p className="text-gray-700 mb-4">
                  October to March is the best period for this tour with pleasant weather (15-25°C) ideal for sightseeing and trekking. Post-monsoon (October-November) offers lush greenery and full-flowing waterfalls. December-January is peak tourist season with vibrant landscapes. Summer (April-May) can be warm in Mysore but comfortable in Coorg and Wayanad. Monsoon (June-September) brings heavy rainfall - scenic but some attractions may be inaccessible.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3">What to Expect Each Day</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-gray-900">Day 1: Mysore City Tour</h5>
                    <p className="text-gray-700">Begin with the magnificent Mysore Palace showcasing Indo-Saracenic architecture, ascend Chamundi Hills for temple visit and city views, and witness the illuminated musical fountain at Brindavan Gardens. Overnight in Mysore.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Day 2: Mysore to Coorg (120 km)</h5>
                    <p className="text-gray-700">Travel through Western Ghats to Coorg, the Scotland of India. Visit the stunning Abbey Falls cascading through coffee and spice plantations, enjoy sunset at Raja's Seat overlooking valleys, and take a coffee plantation walk. Overnight in Coorg.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Day 3: Coorg to Wayanad (90 km)</h5>
                    <p className="text-gray-700">Visit the impressive Golden Temple (Namdroling Monastery) housing giant Buddha statues, drive to Wayanad crossing into Kerala, explore serene Pookode Lake surrounded by evergreen forests. Overnight in Wayanad.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Day 4: Wayanad Sightseeing & Return</h5>
                    <p className="text-gray-700">Trek to ancient Edakkal Caves with 6000-year-old petroglyphs, visit the magnificent three-tiered Soochipara Falls, explore spice plantations, and return to Mysore/Bangalore with wonderful memories.</p>
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
                      <dd className="font-semibold text-green-600">₹{tour.price.toLocaleString('en-IN')}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Destinations:</dt>
                      <dd className="font-semibold text-gray-900">3 Places</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Accommodation:</dt>
                      <dd className="font-semibold text-gray-900">3 Nights</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Meals:</dt>
                      <dd className="font-semibold text-gray-900">Breakfast</dd>
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
