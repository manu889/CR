import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/data/constants';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Taxi Services in Mysore | Best Cabs & Travels | Cab Rental Mysore',
  description: 'Experience reliable taxi services in Mysore with 15+ years expertise. Professional cab rental & travel agency services. Outstation cabs, airport transfers, local travels. 10,000+ satisfied customers. Book now: +91 96327 22100',
  keywords: [
    'taxi services mysore',
    'cabs in mysore',
    'travels mysore',
    'travel agency mysore',
    'cab rental mysore',
    'best taxi service mysore',
    'reliable cab service mysore',
    'professional taxi drivers mysore',
    'outstation cabs mysore',
    'airport taxi service mysore',
    'local sightseeing taxi mysore',
    'mysore taxi booking',
    'mysore cab service 24/7'
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-600 to-orange-600 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              🚕 Best Taxi Services Since 2010
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Mysore's Most Trusted Taxi Service & Travel Agency
            </h1>
            <p className="text-xl md:text-2xl text-amber-50 leading-relaxed">
              Your reliable travel partner for cabs, outstation travels & sightseeing across Karnataka
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block bg-amber-100 text-amber-800 px-5 py-2 rounded-full text-sm font-bold mb-6">
                  ⭐ Mysore's Preferred Taxi Service Since 2010
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Premium Taxi Services & Travel Agency in Mysore
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  For over <strong className="text-amber-600">15 years</strong>, we have been Mysore's leading taxi service provider and travel agency, offering reliable cabs and professional travel solutions. Whether you need outstation cabs, airport transfers, or local sightseeing, we are your trusted partner.
                </p>
                <p className="text-base text-gray-600 mb-4 leading-relaxed">
                  Our commitment to quality taxi services in Mysore has made us the preferred choice for travelers seeking comfortable, safe, and affordable transportation across South India.
                </p>
                <p className="text-base text-gray-600 mb-8 leading-relaxed">
                  From a small taxi operation to a trusted travel brand, we continue to set benchmarks in cab rental services and travel excellence in Mysore with safety-first operations, reliable support, and clean AC rides.
                </p>
                <Link 
                  href="/book" 
                  className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl"
                >
                  Book Your Cab Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl text-center border-2 border-amber-100 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold text-amber-600 mb-2">15+</div>
                  <div className="text-gray-700 font-medium">Years in Taxi Service</div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl text-center border-2 border-amber-100 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold text-orange-600 mb-2">10k+</div>
                  <div className="text-gray-700 font-medium">Happy Travel Customers</div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl text-center border-2 border-amber-100 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold text-amber-600 mb-2">24/7</div>
                  <div className="text-gray-700 font-medium">Customer Support</div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl text-center border-2 border-amber-100 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-5xl font-bold text-orange-600 mb-2">4.8★</div>
                  <div className="text-gray-700 font-medium">Google Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Fleet & Services Gallery
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the comfort and quality of our well-maintained taxi fleet serving Mysore and beyond
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="relative h-48 rounded-xl overflow-hidden group">
                <img 
                  src="/Images/img (1).jpg" 
                  alt="Professional taxi service in Mysore - Clean and comfortable cab interior for outstation trips"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-semibold">Premium Fleet</span>
                </div>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden group">
                <img 
                  src="/Images/img (3).jpg" 
                  alt="Mysore taxi service - Spacious SUV for family travel and group tours to Ooty and Coorg"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-semibold">Family Travel</span>
                </div>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden group">
                <img 
                  src="/Images/img (5).jpg" 
                  alt="Best cab rental Mysore - Professional drivers with 15+ years experience for safe journeys"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-semibold">Expert Drivers</span>
                </div>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden group">
                <img 
                  src="/Images/img (8).jpg" 
                  alt="Outstation taxi from Mysore - Comfortable sedans for Bangalore, Ooty, and Coorg trips"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-semibold">Outstation</span>
                </div>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden group">
                <img 
                  src="/Images/img (12).jpg" 
                  alt="Airport taxi Mysore - Reliable airport transfer service with punctual pick-up and drop"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-semibold">Airport Transfer</span>
                </div>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden group">
                <img 
                  src="/Images/img (14).jpg" 
                  alt="Tempo traveller Mysore - 12-17 seater AC tempo for group travel and pilgrimage tours"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-semibold">Tempo Traveller</span>
                </div>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden group">
                <img 
                  src="/Images/img (18).jpg" 
                  alt="Local sightseeing Mysore - Explore Mysore Palace, Chamundi Hills with our tour packages"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-semibold">Sightseeing</span>
                </div>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden group">
                <img 
                  src="/Images/halebeedu.jpg" 
                  alt="Tour packages from Mysore - Heritage tours to Halebeedu, Belur, and historic temples"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-semibold">Heritage Tours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide safe, comfortable, and affordable taxi services to every traveler in Mysore, 
                  ensuring punctuality, professionalism, and customer satisfaction in every journey.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be South India's most trusted taxi service provider and premier travel agency, recognized for exceptional cab rental services, innovative travel solutions, and unwavering commitment to customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Taxi Services in Mysore?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We stand out as Mysore's best travel agency and cab rental service with proven quality, safety, and customer satisfaction
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "👨‍✈️",
                  title: "Professional Drivers",
                  description: "Experienced, licensed, and courteous drivers with excellent local knowledge"
                },
                {
                  icon: "💵",
                  title: "Transparent Pricing",
                  description: "No hidden charges. Clear pricing with detailed breakdown of all costs"
                },
                {
                  icon: "🕐",
                  title: "24/7 Availability",
                  description: "Round-the-clock service for emergencies, early flights, or late arrivals"
                },
                {
                  icon: "🚗",
                  title: "Well-Maintained Fleet",
                  description: "Clean, sanitized AC vehicles serviced regularly for your comfort"
                },
                {
                  icon: "⭐",
                  title: "Customer Satisfaction",
                  description: "4.8/5 rating from 10,000+ satisfied customers across South India"
                },
                {
                  icon: "🗺️",
                  title: "Local Expertise",
                  description: "Deep knowledge of routes, tourist spots, and local destinations"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Fleet */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Fleet
              </h2>
              <p className="text-lg text-gray-600">
                Wide range of vehicles to suit every need and budget
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { category: "Sedans", models: "Dzire, Etios", price: "₹11/km", color: "amber" },
                { category: "SUVs", models: "Innova, Ertiga", price: "₹14/km", color: "blue" },
                { category: "Luxury", models: "Innova Crysta", price: "₹25/km", color: "purple" },
                { category: "Tempo", models: "12-17 Seater", price: "₹18/km", color: "green" }
              ].map((vehicle, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.category}</h3>
                  <p className="text-gray-600 text-sm mb-4">{vehicle.models}</p>
                  <div className={`text-2xl font-bold text-${vehicle.color}-600`}>{vehicle.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Taxi & Travel Services in Mysore
              </h2>
              <p className="text-lg text-gray-600">Complete travel solutions from professional cab rental to tour packages</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Outstation Taxi", link: "/services/outstation-taxi" },
                { name: "Local Sightseeing", link: "/services/local-sightseeing" },
                { name: "Airport Transfers", link: "/services/airport-transfers" },
                { name: "Tempo Traveller", link: "/services/tempo-traveller" },
                { name: "Employee Transport", link: "/services/employee-transport" },
                { name: "Pilgrimage Tours", link: "/services/pilgrimage-tours" }
              ].map((service, index) => (
                <Link
                  key={index}
                  href={service.link}
                  className="bg-amber-50 hover:bg-amber-100 p-6 rounded-xl transition-colors text-center group"
                >
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                    {service.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Book Your Ride?
            </h2>
            <p className="text-xl mb-8 text-amber-50">
              Experience the best taxi service in Mysore. Available 24/7 for all your travel needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-white text-amber-600 hover:bg-amber-50 font-bold px-8 py-4 rounded-lg transition-all shadow-xl text-lg"
              >
                📞 Call {BUSINESS_INFO.phone}
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-xl text-lg"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
