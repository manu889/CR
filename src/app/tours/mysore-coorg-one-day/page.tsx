import { Metadata } from 'next';
import { tourPackages } from '@/data/tours';
import { BUSINESS_INFO } from '@/data/constants';
import BookingForm from '@/components/BookingForm';
import Image from 'next/image';

const tourData = tourPackages.find(t => t.slug === 'mysore-coorg-one-day');

if (!tourData) throw new Error('Tour not found');

const tour = tourData;

export const metadata: Metadata = {
  title: 'Mysore to Coorg One Day Tour | Coffee Land Package | ₹4,800',
  description: 'Book Mysore to Coorg one day tour. Visit Abbey Falls, Raja Seat, Omkareshwara Temple, coffee plantations. AC cab. ₹4,800. Call +91 96327 22100',
  keywords: ['mysore to coorg tour', 'coorg one day trip', 'mysore coorg package', 'abbey falls tour', 'coorg coffee plantation tour', 'raja seat coorg', 'madikeri day trip'],
};

export default function MysoreCoorgOneDayPage() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-emerald-600 text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ☕ {tour.category.toUpperCase()} TOUR
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Mysore to Coorg One Day Tour</h1>
              <p className="text-base md:text-lg text-emerald-50 mb-6">{tour.description}</p>
              <div className="flex flex-wrap gap-4 items-center mb-6">
                <div className="bg-white text-emerald-600 px-6 py-3 rounded-lg">
                  <div className="text-xs text-gray-600">Starting from</div>
                  <div className="text-2xl font-bold">₹11/km</div>
                  <div className="text-xs text-gray-600">Sedan • 120 km</div>
                </div>
                <div className="text-white">
                  <div className="text-sm opacity-90">Duration</div>
                  <div className="text-lg font-bold">{tour.duration}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-emerald-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all text-base">
                  📞 Call Now
                </a>
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`} className="bg-emerald-700 text-white hover:bg-emerald-800 font-bold py-3 px-8 rounded-lg transition-all">
                  💬 WhatsApp
                </a>
              </div>
            </div>
            {tour.image && (
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image src={tour.image} alt={tour.title} fill className="object-cover" />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mysore to Coorg Day Trip - Scotland of India</h2>
              <p className="text-lg text-gray-700 mb-8">{tour.description} Experience the misty hills, aromatic coffee plantations, cascading waterfalls, and rich Kodava culture in this comprehensive one-day Coorg tour from Mysore.</p>

              <div className="bg-emerald-50 p-6 rounded-xl mb-8 border-2 border-emerald-200">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">Tour Highlights</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {tour.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

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

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <h4 className="text-lg font-bold text-green-900 mb-4">✓ Inclusions</h4>
                  <ul className="space-y-2">
                    {tour.inclusions.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-green-600">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                  <h4 className="text-lg font-bold text-red-900 mb-4">✗ Exclusions</h4>
                  <ul className="space-y-2">
                    {tour.exclusions.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-red-600">✗</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold mb-4">Why Book Mysore to Coorg Cab Service?</h3>
                <p className="text-gray-700 mb-4">
                  Coorg (Madikeri) is located 120 km from Mysore through beautiful ghat roads. Our experienced drivers are familiar with the terrain and ensure a safe, comfortable journey. The route passes through coffee estates, spice plantations, and offers stunning valley views.
                </p>
                <h4 className="text-xl font-bold mb-3">Best Season for Coorg Tour</h4>
                <p className="text-gray-700">
                  October to March is perfect for Coorg tourism with pleasant weather. Monsoon season (June-September) brings lush greenery and full-flowing waterfalls but can have heavy rains. Book your Mysore to Coorg one day tour package with us for a hassle-free experience.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <BookingForm />
                <div className="mt-6 bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-4">Trip Details</h4>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Distance:</dt>
                      <dd className="font-semibold">120 km one way</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Duration:</dt>
                      <dd className="font-semibold">{tour.duration}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Price:</dt>
                      <dd className="font-semibold text-emerald-600">₹{tour.price.toLocaleString('en-IN')}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
