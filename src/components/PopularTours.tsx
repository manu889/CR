import Link from 'next/link';
import Image from 'next/image';
import { tourPackages } from '@/data/tours';

export default function PopularTours() {
  // Get 6 featured tours - mix of categories
  const featuredTours = tourPackages.filter(tour => 
    ['mysore-one-day', 'mysore-ooty-one-day', 'mysore-coorg-one-day', 'mysore-ooty-coorg-4days', 'tirupati-package-2days', 'kabini-wildlife-2days'].includes(tour.id)
  ).slice(0, 6);

  // Map tour images for visual appeal
  const tourImages: { [key: string]: string } = {
    'mysore-one-day': '/Images/img (9).jpg',
    'mysore-ooty-one-day': '/Images/img (11).jpg',
    'mysore-coorg-one-day': '/Images/img (13).jpg',
    'mysore-ooty-coorg-4days': '/Images/img (16).jpg',
    'tirupati-package-2days': '/Images/img (19).jpg',
    'kabini-wildlife-2days': '/Images/img (21).jpg'
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
            TOUR PACKAGES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Tour Packages with Cab Rental from Mysore
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore Mysore one-day taxi trips, pilgrimage tours, and multi-day adventures with dedicated cab rental services for Ooty, Coorg, Kabini, and Tirupati.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTours.map((tour) => (
            <Link 
              href={`/tours/${tour.slug}`}
              key={tour.id}
              className="group bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all border border-gray-200"
            >
              {/* Tour Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={tourImages[tour.id] || '/Images/img (1).jpg'}
                  alt={`${tour.title} - Tour package from Mysore with professional cab service and guide`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/40 to-transparent" />
                
                {/* Duration Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-block bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-teal-700">
                    {tour.duration}
                  </span>
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full">
                    <span className="text-2xl">
                      {tour.category === 'pilgrimage' ? '🕉️' : 
                       tour.category === 'adventure' ? '⛰️' :
                       tour.category === 'one-day' ? '🌄' : '🏞️'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tour Details */}
              <div className="p-6 bg-gradient-to-br from-teal-600 to-teal-700">
                <h3 className="text-lg font-bold text-white mb-3">
                  {tour.title}
                </h3>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {tour.highlights.slice(0, 3).map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-white/90">
                      <svg className="w-4 h-4 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* View Details Button */}
                <button className="w-full bg-white text-teal-600 font-semibold py-2.5 rounded-lg hover:bg-gray-100 transition-colors">
                  View Details →
                </button>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/tours" className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            View All Tour Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
