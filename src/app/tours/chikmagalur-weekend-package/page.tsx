import { Metadata } from 'next';
import { tourPackages } from '@/data/tours';
import { BUSINESS_INFO } from '@/data/constants';
import BookingForm from '@/components/BookingForm';
import Image from 'next/image';

const tourData = tourPackages.find(t => t.slug === 'chikmagalur-weekend-package');

if (!tourData) {
  throw new Error('Tour not found');
}

const tour = tourData;

export const metadata: Metadata = {
  title: 'Chikmagalur Weekend Package 2D/1N | Coffee Land Tour | ₹8,500 | Cab Rental Mysore',
  description: 'Book Chikmagalur weekend getaway from Mysore. 2 days package covering Mullayanagiri peak, coffee plantations, Hebbe Falls. Resort stay + AC cab ₹8,500. Call +91 96327 22100',
  keywords: ['chikmagalur weekend package', 'mysore to chikmagalur tour', 'mullayanagiri trek package', 'coffee plantation tour chikmagalur', 'baba budangiri tour', 'chikmagalur 2 days package', 'weekend getaway from mysore', 'hebbe falls package', 'chikmagalur resort package', 'karnataka highest peak tour'],
  openGraph: {
    title: 'Chikmagalur Weekend Package - 2 Days 1 Night ₹8,500',
    description: 'Escape to Karnataka\'s coffee land with trekking, plantations, and waterfalls.',
    type: 'website',
    images: [tour.image || '']
  }
};

export default function ChikmagalurWeekendPackagePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 to-cyan-600 text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ☕ {tour.category.toUpperCase()} TOUR
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Chikmagalur Weekend Getaway
              </h1>
              <p className="text-base md:text-lg text-teal-50 mb-6">
                Escape to the coffee land of Karnataka for a refreshing weekend. Trek to Mullayanagiri, Karnataka's highest peak at 1,930m, explore aromatic coffee plantations, visit scenic Baba Budangiri hills, and experience the beauty of Hebbe Falls. Perfect 2 days 1 night package with resort stay amidst nature.
              </p>
              <div className="flex flex-wrap gap-4 items-center mb-6">
                <div className="bg-white text-green-600 px-6 py-3 rounded-lg">
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
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`} className="bg-white text-teal-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Chikmagalur Weekend Package - Coffee, Mountains & Waterfalls</h2>
              <p className="text-lg text-gray-700 mb-8">
                Discover Chikmagalur, the land where coffee was first cultivated in India, on this exciting weekend getaway from Mysore. Located 240 km away in the Western Ghats, Chikmagalur offers the perfect blend of adventure and relaxation. Trek to Mullayanagiri peak for sunrise views, walk through aromatic coffee estates learning about bean-to-cup process, explore the mystical Baba Budangiri hills, and enjoy the pristine Hebbe Falls. This 2 days 1 night package includes comfortable resort accommodation and all transfers.
              </p>

              {/* Highlights */}
              <div className="bg-teal-50 p-6 rounded-xl mb-8 border-2 border-teal-200">
                <h3 className="text-2xl font-bold text-teal-900 mb-4">Tour Highlights</h3>
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
                  <div key={item.day} className="border-l-4 border-teal-600 pl-6 py-2">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Day {item.day}: {item.title}</h4>
                    <p className="text-gray-700 mb-3">{item.description}</p>
                    <ul className="space-y-2">
                      {item.activities.map((activity, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <svg className="w-4 h-4 text-teal-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Chikmagalur Weekend Package?</h3>
                <p className="text-gray-700 mb-4">
                  Our Chikmagalur weekend getaway from Mysore is perfect for those seeking a quick escape into nature. The 240 km journey (approximately 4 hours) takes you from the plains to the misty mountains of the Western Ghats. This package balances adventure (trekking), relaxation (coffee plantations), and natural beauty (waterfalls), making it ideal for families, couples, and adventure enthusiasts alike.
                </p>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">What Makes This Package Special?</h4>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-700">✓ <strong>Karnataka's Highest Peak:</strong> Trek to Mullayanagiri summit at 1,930 meters</li>
                  <li className="text-gray-700">✓ <strong>Coffee Plantation Experience:</strong> Learn about coffee cultivation from bean to cup</li>
                  <li className="text-gray-700">✓ <strong>Resort Accommodation:</strong> Stay amidst coffee estates with mountain views</li>
                  <li className="text-gray-700">✓ <strong>Adventure & Nature:</strong> Perfect mix of trekking, sightseeing, and relaxation</li>
                  <li className="text-gray-700">✓ <strong>Fresh Mountain Air:</strong> Escape pollution and enjoy cool climate</li>
                  <li className="text-gray-700">✓ <strong>Fresh Coffee:</strong> Buy directly from estates at wholesale prices</li>
                </ul>

                <h4 className="text-xl font-bold text-gray-900 mb-3">Best Time for Chikmagalur Weekend Trip</h4>
                <p className="text-gray-700 mb-4">
                  October to February is the best period with pleasant weather (15-25°C) perfect for trekking and sightseeing. Post-monsoon (September-October) offers lush greenery and full-flowing waterfalls. March-May is summer but still cooler than plains. Monsoon (June-August) brings heavy rainfall making treks slippery, though the landscape is stunning. Avoid peak season weekends (November-January) if you prefer fewer crowds.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3">What to Expect Each Day</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-gray-900">Day 1: Journey & Coffee Experience</h5>
                    <p className="text-gray-700">Depart Mysore at 7 AM, arrive Chikmagalur by 11 AM. Check into your coffee estate resort. After lunch, visit a working coffee plantation where you'll learn about arabica and robusta varieties, see the entire cultivation process, and walk through aromatic estates. Visit the spectacular Hebbe Falls (100 feet high) cascading through dense forest. Evening at leisure to enjoy resort amenities.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Day 2: Mountain Trek & Return</h5>
                    <p className="text-gray-700">Early morning (6 AM) start for Mullayanagiri peak trek. The 3 km trek takes about 2 hours with breathtaking sunrise views from Karnataka's highest point. Visit Baba Budangiri hills, named after the Sufi saint who introduced coffee to India. Explore the scenic viewpoints and ancient caves. Return to Mysore by 6 PM with wonderful memories and fresh coffee purchases.</p>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">Shopping & Local Specialties</h4>
                <p className="text-gray-700">
                  Chikmagalur is famous for coffee - buy fresh arabica and robusta beans at estate prices. Also look for honey (especially wild honey), black pepper, cardamom, and other spices. Many estates offer homemade coffee powder freshly ground. Prices are significantly lower than retail stores in cities.
                </p>
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
                      <dd className="font-semibold text-teal-600">₹{tour.price.toLocaleString('en-IN')}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Distance:</dt>
                      <dd className="font-semibold text-gray-900">240 km</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Altitude:</dt>
                      <dd className="font-semibold text-gray-900">1,930 m</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Accommodation:</dt>
                      <dd className="font-semibold text-gray-900">Resort</dd>
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
