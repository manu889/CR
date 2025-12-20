import Link from 'next/link';
import Image from 'next/image';
import { vehicles } from '@/data/vehicles';

export default function VehicleCards() {
  const featuredVehicles = vehicles.slice(0, 6); // Show first 6 vehicles

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
            🚗 Our Fleet
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Perfect Ride
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Well-maintained, clean vehicles with professional drivers for your comfortable journey
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredVehicles.map((vehicle, index) => (
            <div 
              key={vehicle.id}
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
            >
              {/* Vehicle Image */}
              <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                {vehicle.image ? (
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    width={400}
                    height={280}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    priority={index < 3}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-32 h-32 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                  <span className="text-xs font-bold text-gray-900 uppercase">{vehicle.category}</span>
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {vehicle.name}
                </h3>
                
                {/* Seating & AC Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-semibold">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <span>{vehicle.seating} Seats</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg text-sm font-semibold">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>AC</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 mb-6">
                  {vehicle.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing & CTA */}
                <div className="border-t border-gray-100 pt-5">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Starting from</div>
                      <div className="text-3xl font-bold text-gray-900">
                        {vehicle.pricePerKm}
                        <span className="text-base text-gray-600 font-normal">/km</span>
                      </div>
                    </div>
                    <Link 
                      href="/book" 
                      className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg text-sm"
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
