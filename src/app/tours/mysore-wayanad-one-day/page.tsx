import { Metadata } from 'next';
import { tourPackages } from '@/data/tours';
import { BUSINESS_INFO } from '@/data/constants';
import BookingForm from '@/components/BookingForm';
import Image from 'next/image';

const tour = tourPackages.find(t => t.slug === 'mysore-wayanad-one-day');

if (!tour) {
  throw new Error('Tour not found');
}

export const metadata: Metadata = {
  title: 'Mysore to Wayanad One Day Tour | Edakkal Caves | ₹5,700 | Cab Rental Mysore',
  description: 'Book Mysore to Wayanad one day trip covering Edakkal Caves, Soochipara Falls, Pookode Lake. AC cab with experienced driver. All-inclusive package ₹5,700. Call +91 96327 22100',
  keywords: ['mysore to wayanad one day tour', 'wayanad day trip from mysore', 'edakkal caves tour', 'soochipara falls mysore', 'pookode lake wayanad', 'mysore wayanad package', 'wayanad sightseeing from mysore', 'kerala tour from mysore', 'wayanad tribal heritage tour', 'mysore to kerala day trip'],
  openGraph: {
    title: 'Mysore to Wayanad One Day Tour - ₹5,700 All Inclusive',
    description: 'Explore Wayanad\'s natural beauty with Edakkal Caves, Soochipara Falls, and Pookode Lake in one day.',
    type: 'website',
    images: [tour.image || '']
  }
};

export default function MysoreWayanadOneDayPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 to-teal-600 text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🌿 {tour.category.toUpperCase()} TOUR
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Mysore to Wayanad One Day Package
              </h1>
              <p className="text-base md:text-lg text-emerald-50 mb-6">
                Discover the pristine natural beauty of Wayanad, Kerala in a memorable day trip from Mysore. Explore ancient Edakkal Caves with prehistoric rock art, stunning Soochipara waterfalls, and serene Pookode Lake amidst lush greenery.
              </p>
              <div className="flex flex-wrap gap-4 items-center mb-6">
                <div className="bg-white text-teal-600 px-6 py-3 rounded-lg">
                  <div className="text-xs text-gray-600">Starting from</div>
                  <div className="text-2xl font-bold">₹11/km</div>
                  <div className="text-xs text-gray-600">Sedan • 140 km</div>
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
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`} className="bg-white text-emerald-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mysore to Wayanad Day Tour - Explore Kerala's Natural Paradise</h2>
              <p className="text-lg text-gray-700 mb-8">
                Embark on an exciting journey from Mysore to Wayanad, Kerala's emerald green paradise located in the Western Ghats. This comprehensive one-day tour covers the region's top attractions including the ancient Edakkal Caves with 6000-year-old petroglyphs, the magnificent three-tiered Soochipara Falls, and the beautiful freshwater Pookode Lake surrounded by dense forests. Experience the tribal heritage and natural wonders just 140 km from Mysore.
              </p>

              {/* Highlights */}
              <div className="bg-emerald-50 p-6 rounded-xl mb-8 border-2 border-emerald-200">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">Tour Highlights</h3>
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
                  <div key={item.day} className="border-l-4 border-emerald-600 pl-6 py-2">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-700 mb-3">{item.description}</p>
                    <ul className="space-y-2">
                      {item.activities.map((activity, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <svg className="w-4 h-4 text-emerald-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Mysore to Wayanad Day Tour?</h3>
                <p className="text-gray-700 mb-4">
                  Our Mysore to Wayanad one day tour package is perfect for nature lovers and adventure seekers wanting to experience Kerala's beauty from Mysore. The 140 km journey takes approximately 3 hours through scenic Western Ghats, crossing the Karnataka-Kerala border into a land of mist-covered mountains, waterfalls, and tribal heritage.
                </p>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">What Makes This Tour Special?</h4>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-700">✓ <strong>Interstate Travel Experience:</strong> Seamless crossing from Karnataka to Kerala with all permits</li>
                  <li className="text-gray-700">✓ <strong>Comfortable AC SUV:</strong> Suitable for hilly terrain and long-distance travel</li>
                  <li className="text-gray-700">✓ <strong>Experienced Drivers:</strong> Familiar with Wayanad routes and local attractions</li>
                  <li className="text-gray-700">✓ <strong>Flexible Timing:</strong> Customize your itinerary based on preferences</li>
                  <li className="text-gray-700">✓ <strong>Photo Opportunities:</strong> Stunning viewpoints throughout the journey</li>
                </ul>

                <h4 className="text-xl font-bold text-gray-900 mb-3">Best Time to Visit Wayanad from Mysore</h4>
                <p className="text-gray-700 mb-4">
                  October to May is the best period for this tour with pleasant weather and accessible waterfalls. Monsoon season (June-September) transforms Wayanad into a lush green paradise but some attractions may have restricted access. Early morning departure is recommended to maximize sightseeing time and avoid afternoon heat.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3">Destinations Covered in Detail</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-gray-900">Edakkal Caves</h5>
                    <p className="text-gray-700">Ancient caves featuring prehistoric rock engravings dating back to 6000 BCE. A 45-minute trek leads to these natural caves offering historical insights and panoramic views of Wayanad.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Soochipara Falls (Sentinel Rock Waterfall)</h5>
                    <p className="text-gray-700">A spectacular three-tiered waterfall cascading from 200 meters height. The pool at the base is ideal for swimming. A 15-minute walk through forest leads to the falls.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Pookode Lake</h5>
                    <p className="text-gray-700">A serene freshwater lake nestled among evergreen forests at 770m altitude. Enjoy boating, nature walks, and spot various birds and butterflies in this peaceful setting.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Western Ghats Scenery</h5>
                    <p className="text-gray-700">The journey itself is a highlight with winding roads, coffee and spice plantations, tribal settlements, and breathtaking mountain vistas throughout the route.</p>
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
                      <dd className="font-semibold text-emerald-600">₹{tour.price.toLocaleString('en-IN')}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Distance:</dt>
                      <dd className="font-semibold text-gray-900">140 km</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Travel Time:</dt>
                      <dd className="font-semibold text-gray-900">3 hours</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Pickup:</dt>
                      <dd className="font-semibold text-gray-900">Mysore</dd>
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
