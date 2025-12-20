import { Metadata } from 'next';
import { tourPackages } from '@/data/tours';
import { BUSINESS_INFO } from '@/data/constants';
import BookingForm from '@/components/BookingForm';
import Image from 'next/image';

const tour = tourPackages.find(t => t.slug === 'kabini-wildlife-package');

if (!tour) {
  throw new Error('Tour not found');
}

export const metadata: Metadata = {
  title: 'Kabini Wildlife Package 2D/1N | Jungle Safari | ₹9,500 | Cab Rental Mysore',
  description: 'Book Kabini wildlife weekend package from Mysore. 2 days safari tour at Nagarhole National Park, boat safari, elephant spotting. Forest resort + AC cab ₹9,500. Call +91 96327 22100',
  keywords: ['kabini wildlife package', 'nagarhole safari package', 'kabini jungle safari', 'mysore to kabini tour', 'elephant safari kabini', 'kabini boat safari', 'weekend wildlife package', 'kabini forest resort', 'tiger safari nagarhole', 'bird watching kabini'],
  openGraph: {
    title: 'Kabini Wildlife Weekend Package - 2 Days 1 Night ₹9,500',
    description: 'Experience wildlife safari at Kabini with jungle safari, boat ride, and elephant spotting.',
    type: 'website',
    images: [tour.image || '']
  }
};

export default function KabiniWildlifePackagePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-lime-600 to-green-700 text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🐘 {tour.category.toUpperCase()} TOUR
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Kabini Wildlife Weekend Package
              </h1>
              <p className="text-base md:text-lg text-lime-50 mb-6">
                Experience the thrill of wildlife safari at Kabini backwaters and Nagarhole National Park. This exciting weekend getaway includes jeep safari through dense forests, boat safari on Kabini river for elephant sightings, bird watching, and comfortable stay at a forest resort. Just 80 km from Mysore, perfect for nature lovers.
              </p>
              <div className="flex flex-wrap gap-4 items-center mb-6">
                <div className="bg-white text-teal-700 px-6 py-3 rounded-lg">
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
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`} className="bg-white text-lime-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kabini Wildlife Safari - Jungle & River Adventure</h2>
              <p className="text-lg text-gray-700 mb-8">
                Discover the wilderness of Kabini, where the Kabini River forms a natural boundary with Nagarhole National Park, one of India's premier tiger reserves. This weekend wildlife package offers thrilling jeep safari through deciduous forests home to elephants, tigers, leopards, gaur, and deer. Experience the unique boat safari on Kabini backwaters where herds of elephants come to drink, especially during evening hours. Stay at a comfortable forest resort surrounded by nature's symphony.
              </p>

              {/* Highlights */}
              <div className="bg-lime-50 p-6 rounded-xl mb-8 border-2 border-lime-200">
                <h3 className="text-2xl font-bold text-lime-900 mb-4">Tour Highlights</h3>
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
                  <div key={item.day} className="border-l-4 border-lime-600 pl-6 py-2">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Day {item.day}: {item.title}</h4>
                    <p className="text-gray-700 mb-3">{item.description}</p>
                    <ul className="space-y-2">
                      {item.activities.map((activity, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <svg className="w-4 h-4 text-lime-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Kabini Wildlife Weekend Package?</h3>
                <p className="text-gray-700 mb-4">
                  Our Kabini wildlife package from Mysore offers the perfect weekend escape for wildlife enthusiasts and nature lovers. Located just 80 km from Mysore (2 hours drive), Kabini is renowned for its dense elephant population and excellent wildlife sighting opportunities. The combination of jungle safari and river boat safari provides unique perspectives of forest wildlife. Post-monsoon and winter months offer the best sightings as animals congregate near water sources.
                </p>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">What Makes This Package Special?</h4>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-700">✓ <strong>Dual Safari Experience:</strong> Both jeep safari in forests and boat safari on river</li>
                  <li className="text-gray-700">✓ <strong>Elephant Paradise:</strong> One of the best places to see wild elephants in India</li>
                  <li className="text-gray-700">✓ <strong>Tiger Territory:</strong> Part of Nagarhole Tiger Reserve with good tiger sighting records</li>
                  <li className="text-gray-700">✓ <strong>Bird Watching Haven:</strong> Over 270 bird species including rare and migratory birds</li>
                  <li className="text-gray-700">✓ <strong>Forest Resort Stay:</strong> Eco-friendly accommodation in the lap of nature</li>
                  <li className="text-gray-700">✓ <strong>Photography Opportunities:</strong> Excellent for wildlife and nature photography</li>
                </ul>

                <h4 className="text-xl font-bold text-gray-900 mb-3">Best Time for Kabini Wildlife Safari</h4>
                <p className="text-gray-700 mb-4">
                  October to May is the best period for wildlife safaris at Kabini. Post-monsoon (October-November) brings lush greenery with excellent bird watching. Winter (December-February) offers pleasant weather and good sightings. Summer (March-May) is peak season for wildlife viewing as animals gather near water bodies, though it can be hot. The park is closed during monsoon (June-September) for conservation.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3">Wildlife You Can Expect to See</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-gray-900">Elephants</h5>
                    <p className="text-gray-700">Kabini is famous for its large elephant population. During summer, herds of 50-100 elephants can be seen along the riverbank. The boat safari offers unique opportunities to watch elephants bathing, playing, and crossing the river.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Tigers & Leopards</h5>
                    <p className="text-gray-700">Nagarhole has a healthy tiger and leopard population. While sightings are not guaranteed, early morning and late evening safaris offer the best chances. Pugmarks, alarm calls, and fresh kills are often encountered.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Other Mammals</h5>
                    <p className="text-gray-700">Indian gaur (bison), sambar deer, spotted deer, barking deer, wild boar, and occasionally sloth bears. Otters and crocodiles can be spotted during boat safari. Lucky visitors might see wild dogs (dholes) hunting in packs.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Birds</h5>
                    <p className="text-gray-700">Malabar pied hornbill, Indian pitta, grey-headed fish eagle, crested serpent eagle, kingfishers, cormorants, and numerous migratory species during winter months. Bring binoculars for bird watching.</p>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">Safari Timings & Important Information</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Jeep Safari:</strong> Morning (6:30-9:30 AM) and Evening (3:30-6:30 PM). Safaris last 3 hours. Maximum 6 persons per jeep. Prior booking recommended.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Boat Safari:</strong> Early morning (6:00-8:00 AM) offers best elephant sightings. Duration: 2 hours. Capacity: 20-30 persons per boat.
                </p>
                <p className="text-gray-700">
                  <strong>What to Carry:</strong> Binoculars, camera with zoom lens, sunscreen, hat, insect repellent, comfortable clothing in earth tones (avoid bright colors), and maintain complete silence during safaris for better sightings.
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
                      <dd className="font-semibold text-lime-600">₹{tour.price.toLocaleString('en-IN')}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Distance:</dt>
                      <dd className="font-semibold text-gray-900">80 km</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Safaris:</dt>
                      <dd className="font-semibold text-gray-900">2 Included</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Stay:</dt>
                      <dd className="font-semibold text-gray-900">Forest Resort</dd>
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
