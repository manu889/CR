import Link from 'next/link';
import Image from 'next/image';
import { tourPackages } from '@/data/tours';

export default function PopularTours() {
  // Get 6 featured tours - mix of categories
  const featuredTours = tourPackages.filter(tour => 
    ['mysore-one-day', 'mysore-ooty-one-day', 'mysore-coorg-one-day', 'mysore-ooty-coorg-4days', 'tirupati-package-2days', 'kabini-wildlife-2days'].includes(tour.id)
  ).slice(0, 6);

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Tour Packages from Mysore
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore top destinations with our curated tour packages. One-day trips to multi-day adventures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map((tour) => (
            <Link 
              href={`/tours/${tour.slug}`}
              key={tour.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Tour Image */}
              <div className="relative h-48 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 flex items-center justify-center overflow-hidden group/image">
                {tour.image ? (
                  <>
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      width={400}
                      height={200}
                      className="absolute inset-0 w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-300"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover/image:bg-black/30 transition-all duration-300"></div>
                  </>
                ) : null}
                
                <div className="relative z-10 text-white text-center p-4">
                  <div className="text-4xl mb-2">
                    {tour.category === 'pilgrimage' ? '🕉️' : 
                     tour.category === 'adventure' ? '⛰️' :
                     tour.category === 'one-day' ? '🌄' : '🏞️'}
                  </div>
                  <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                    {tour.duration}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  ₹{tour.price.toLocaleString()}
                </div>
              </div>

              {/* Tour Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {tour.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {tour.description}
                </p>

                {/* Destinations */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {tour.destinations.slice(0, 3).map((dest, index) => (
                      <span 
                        key={index}
                        className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {dest}
                      </span>
                    ))}
                    {tour.destinations.length > 3 && (
                      <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{tour.destinations.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-4">
                  {tour.highlights.slice(0, 3).map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="line-clamp-1">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-600 capitalize">{tour.category} Tour</span>
                  <span className="text-amber-600 font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/tours"
            className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
          >
            Explore All Tour Packages
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
