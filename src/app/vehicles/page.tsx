import { vehicles } from '@/data/vehicles';
import { BUSINESS_INFO } from '@/data/constants';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Fleet - Premium Sedan, SUV, Tempo Traveller | Cab Rental Mysore',
  description: 'Choose from our well-maintained fleet: Swift Dzire, Etios, Innova, Ertiga, Tempo Traveller. Clean AC vehicles with professional drivers. Starting ₹11/km. Book now!',
  keywords: 'mysore taxi fleet, car rental mysore, sedan mysore, suv hire mysore, tempo traveller mysore, swift dzire mysore, innova mysore, ertiga mysore',
};

export default function VehiclesPage() {
  const categories = {
    sedan: vehicles.filter(v => v.category === 'sedan'),
    suv: vehicles.filter(v => v.category === 'suv'),
    luxury: vehicles.filter(v => v.category === 'luxury'),
    tempo: vehicles.filter(v => v.category === 'tempo'),
  };

  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12 md:py-16 overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: "url('/Images/img (23).jpg')" }}
          aria-hidden="true"
        />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Fleet of Well-Maintained Vehicles
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Choose from our extensive range of clean, comfortable AC vehicles. From sedans for quick city trips to tempo travellers for group tours, we have the perfect ride for every journey.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary">
                📞 Call {BUSINESS_INFO.phone}
              </a>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`} className="btn-secondary">
                💬 Book on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Fleet */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Our Fleet?</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-amber-50 rounded-xl">
                <div className="text-4xl mb-3">✅</div>
                <h3 className="font-bold text-gray-900 mb-2">Regular Maintenance</h3>
                <p className="text-gray-700 text-sm">All vehicles undergo regular servicing and safety inspections</p>
              </div>
              <div className="text-center p-6 bg-amber-50 rounded-xl">
                <div className="text-4xl mb-3">❄️</div>
                <h3 className="font-bold text-gray-900 mb-2">AC & Comfort</h3>
                <p className="text-gray-700 text-sm">Clean interiors with working AC for a pleasant journey</p>
              </div>
              <div className="text-center p-6 bg-amber-50 rounded-xl">
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className="font-bold text-gray-900 mb-2">Fully Insured</h3>
                <p className="text-gray-700 text-sm">All vehicles are fully insured for your peace of mind</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom space-y-16">
          {/* Sedans */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Sedans
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.sedan.map((vehicle) => (
                <div key={vehicle.id} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                  {/* Vehicle Image */}
                  <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                    {vehicle.image ? (
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        width={400}
                        height={280}
                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
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
                      <span className="text-xs font-bold text-gray-900 uppercase">Sedan</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {vehicle.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
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
                    <ul className="space-y-2 mb-4">
                      {vehicle.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Starting from</div>
                          <div className="text-2xl font-bold text-gray-900">
                            {vehicle.pricePerKm}
                            <span className="text-sm text-gray-600 font-normal">/km</span>
                          </div>
                        </div>
                        <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg text-sm">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SUVs */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              SUVs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.suv.map((vehicle) => (
                <div key={vehicle.id} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                  {/* Vehicle Image */}
                  <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                    {vehicle.image ? (
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        width={400}
                        height={280}
                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
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
                      <span className="text-xs font-bold text-gray-900 uppercase">SUV</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {vehicle.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
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
                    <ul className="space-y-2 mb-4">
                      {vehicle.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Starting from</div>
                          <div className="text-2xl font-bold text-gray-900">
                            {vehicle.pricePerKm}
                            <span className="text-sm text-gray-600 font-normal">/km</span>
                          </div>
                        </div>
                        <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg text-sm">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Luxury */}
          {categories.luxury.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Luxury Vehicles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.luxury.map((vehicle) => (
                  <div key={vehicle.id} className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-amber-200">
                    {/* Vehicle Image */}
                    <div className="relative h-56 bg-gradient-to-br from-gray-50 to-amber-50 overflow-hidden">
                      {vehicle.image ? (
                        <Image
                          src={vehicle.image}
                          alt={vehicle.name}
                          width={400}
                          height={280}
                          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-32 h-32 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                      
                      {/* Premium Badge */}
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-1.5 rounded-full shadow-lg">
                        <span className="text-xs font-bold uppercase flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Luxury
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                        {vehicle.name}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-4">
                        <div className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-semibold">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                          </svg>
                          <span>{vehicle.seating} Seats</span>
                        </div>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {vehicle.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="border-t pt-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Starting from</div>
                            <div className="text-2xl font-bold text-gray-900">
                              {vehicle.pricePerKm}
                              <span className="text-sm text-gray-600 font-normal">/km</span>
                            </div>
                          </div>
                          <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg text-sm">
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tempo Travellers */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Tempo Travellers - Group Transport
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.tempo.map((vehicle) => (
                <div key={vehicle.id} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                  {/* Vehicle Image */}
                  <div className="relative h-56 bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden">
                    {vehicle.image ? (
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        width={400}
                        height={280}
                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-40 h-40 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1.5 rounded-full shadow-lg">
                      <span className="text-xs font-bold uppercase">Tempo</span>
                    </div>
                    
                    {/* Seating Badge - Prominent */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-xl">
                      <div className="flex items-center gap-2 text-gray-900">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        <span className="font-bold text-lg">{vehicle.seating} Seater</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                      {vehicle.name}
                    </h3>
                    <ul className="space-y-2 mb-4">
                      {vehicle.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Starting from</div>
                          <div className="text-2xl font-bold text-gray-900">
                            {vehicle.pricePerKm}
                            <span className="text-sm text-gray-600 font-normal">/km</span>
                          </div>
                        </div>
                        <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg text-sm">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
