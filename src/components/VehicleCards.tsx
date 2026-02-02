import Link from 'next/link';
import Image from 'next/image';
import { vehicles } from '@/data/vehicles';

export default function VehicleCards() {
  const featuredVehicles = vehicles.slice(0, 6); // Show first 6 vehicles

  return (
    <section className="py-12 bg-white">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold mb-3">
            OUR FLEET
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Premium Vehicles for Taxi Service in Mysore
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Well-maintained AC cab rentals and tempo traveller options that power our Mysore taxi service for outstation trips, airport transfers, and corporate or leisure travels.
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {featuredVehicles.map((vehicle, index) => (
            <div 
              key={vehicle.id}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
            >
              {/* Vehicle Image */}
              <div className="relative h-40 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                {vehicle.image ? (
                  <Image
                    src={vehicle.image}
                    alt={`${vehicle.name} - ${vehicle.seating} seater ${vehicle.category} car for rent in Mysore | Starting from ${vehicle.pricePerKm}/km | AC cab rental for ${vehicle.idealFor}`}
                    width={400}
                    height={280}
                    className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                    priority={index < 3}
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-24 h-24 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full shadow-md">
                  <span className="text-[10px] font-bold text-gray-900 uppercase">{vehicle.category}</span>
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="p-4">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {vehicle.name}
                </h3>
                
                {/* Seating & AC Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-semibold">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <span>{vehicle.seating} Seats</span>
                  </div>
                  <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs font-semibold">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>AC</span>
                  </div>
                </div>

                {/* Features List - Compact version showing only 2 */}
                <ul className="space-y-1.5 mb-3">
                  {vehicle.features.slice(0, 2).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-xs text-gray-700">
                      <svg className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing & CTA */}
                <div className="border-t border-gray-100 pt-3">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wide mb-0.5">Starting from</div>
                      <div className="text-xl font-bold text-gray-900">
                        {vehicle.pricePerKm}
                        <span className="text-sm text-gray-600 font-normal">/km</span>
                      </div>
                    </div>
                    <Link 
                      href="/book" 
                      className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-3 py-2 rounded-lg transition-all shadow-md hover:shadow-lg text-xs"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link 
            href="/vehicles" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl group"
          >
            <span>View All Vehicles</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
