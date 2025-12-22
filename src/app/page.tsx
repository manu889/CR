import Hero from '@/components/Hero';
import ServiceCards from '@/components/ServiceCards';
import VehicleCards from '@/components/VehicleCards';
import PopularRoutes from '@/components/PopularRoutes';
import PopularTours from '@/components/PopularTours';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import { BUSINESS_INFO } from '@/data/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mysore Cab Booking | Taxi Service Mysore ₹11/km | Outstation & Airport Cabs',
  description: 'Book verified taxi service in Mysore. Outstation cabs to Ooty, Coorg, Bangalore from ₹11/km. Airport transfers ₹2,800. Local sightseeing ₹1,500. Innova, Crysta, Tempo Traveller available. 4.8★ rated. 24/7 service. Call +91 96327 22100 for instant booking.',
  keywords: [
    // Core Mysore taxi keywords (10)
    'mysore cab booking',
    'taxi service in mysore',
    'mysore taxi service 24/7',
    'best cab service in mysore',
    'mysore cabs ₹11 per km',
    'mysore local sightseeing cab',
    'mysore city one day taxi',
    'mysore taxi for outstation',
    'mysore cab booking phone number',
    'mysore taxi service near me',
    
    // Outstation & route keywords (11)
    'mysore to ooty cab booking',
    'mysore to coorg taxi service',
    'mysore to wayanad cab',
    'bangalore to mysore taxi',
    'mysore to bangalore airport taxi',
    'bangalore airport to mysore cab',
    'mysore to kabini taxi',
    'mysore to chikmagalur cab',
    'mysore to coastal karnataka taxi',
    'mysore ooty coorg tour package cab',
    'tirupati package from mysore by car',
    
    // Airport, tempo & corporate (10)
    'mysore to bangalore airport drop taxi',
    'mysore airport pickup and drop',
    'tempo traveller rental in mysore',
    '12 seater tempo traveller mysore',
    '17 seater tempo traveller mysore',
    'employee transport service in mysore',
    'corporate cab service in mysore',
    'mysore cab for office commute',
    'group tour tempo traveller mysore',
    'airport transfer mysore',
    
    // Vehicle / package intent keywords (10)
    'innova taxi in mysore',
    'ertiga cab in mysore',
    'swift dzire taxi in mysore',
    'innova crysta rental mysore',
    'ac cab in mysore for outstation',
    'family cab booking in mysore',
    'mysore one day tour by car',
    'mysore to ooty one day trip by cab',
    'mysore to coorg one day trip taxi',
    'mysore tour packages with cab',
    
    // Additional high-intent keywords (20)
    'cab rental mysore',
    'outstation cab mysore',
    'airport taxi mysore',
    'mysore taxi rates',
    'mysore taxi fare',
    'cheap cab service mysore',
    'reliable taxi mysore',
    'mysore weekend getaway',
    'mysore tour packages',
    'pilgrimage tour mysore',
    'car rental mysore',
    'mysore travels',
    '8 seater cab mysore',
    'ac taxi mysore',
    'mysore to hassan cab',
    'wedding transportation mysore',
    'hotel cab pickup mysore',
    'coorg cab booking',
    'wayanad taxi from mysore',
    'mysore sightseeing taxi',
    
    // Trust & quality keywords
    'verified cab service mysore',
    'trusted taxi mysore',
    'best taxi in mysore',
    '24 hour taxi mysore',
    'call taxi mysore',
    'book cab mysore online',
    'mysore cab booking online',
    'mysore taxi near me'
  ],
  openGraph: {
    title: 'Mysore Cab Booking | #1 Taxi Service in Mysore | ₹11/km',
    description: 'Book trusted taxi service in Mysore. Outstation trips, airport transfers, local tours. 4.8★ rating, 10,000+ happy customers. Professional drivers, GPS-enabled fleet. Call +91 96327 22100',
    type: 'website',
    url: 'https://cabrentalmysore.in',
    images: [
      {
        url: 'https://cabrentalmysore.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cab Rental Mysore - Premium Taxi Services',
      },
    ],
  },
  alternates: {
    canonical: 'https://cabrentalmysore.in',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Services Section */}
      <ServiceCards />
      
      {/* Your Trusted Travel Partner Section */}
      <section className="relative py-12 bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: "url('/Images/img (10).jpg')" }}
          aria-hidden="true"
        />
        <div className="container-custom relative z-10">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1.5 bg-amber-600 text-white rounded-full text-xs font-semibold mb-3">
              WHY CHOOSE US
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Best Cab Service in Mysore - Your Trusted Travel Partner
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              With <strong>15+ years of experience</strong>, we are the <strong>leading taxi service in Mysore</strong> committed to delivering safe, comfortable rides. Whether it's <strong>cab booking for airport transfers</strong>, <strong>outstation trips to Ooty</strong>, <strong>Coorg taxi service</strong>, or <strong>local sightseeing in Mysore</strong>, we offer reliable cab rental services at competitive rates starting ₹11/km.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1.5">Licensed & Insured</h3>
              <p className="text-gray-600 text-sm">All vehicles in our <strong>Mysore taxi fleet</strong> are fully licensed and insured - perfect for <strong>airport transfers</strong>, <strong>outstation cab service</strong>, and <strong>local sightseeing</strong></p>
            </div>
            
            <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1.5">Experienced Drivers</h3>
              <p className="text-gray-600 text-sm">Professional drivers with 10+ years experience in <strong>outstation cab services</strong> including <strong>Mysore to Ooty</strong>, <strong>Mysore to Coorg</strong>, <strong>Bangalore to Mysore</strong>, and <strong>local sightseeing tours</strong></p>
            </div>
            
            <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1.5">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm">No hidden charges for <strong>cab rental in Mysore</strong>. Starting at just ₹11/km, our <strong>cab booking service</strong> offers upfront pricing for all <strong>taxi services</strong> including <strong>tempo traveller rentals</strong></p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5 text-center">
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-3xl mb-1.5">🏆</div>
              <div className="text-2xl font-bold text-amber-600 mb-0.5">15+</div>
              <div className="text-gray-600 font-medium text-sm">Years in Service</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-3xl mb-1.5">👥</div>
              <div className="text-2xl font-bold text-amber-600 mb-0.5">50+</div>
              <div className="text-gray-600 font-medium text-sm">Professional Drivers</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-3xl mb-1.5">😊</div>
              <div className="text-2xl font-bold text-amber-600 mb-0.5">10,000+</div>
              <div className="text-gray-600 font-medium text-sm">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vehicles */}
      <VehicleCards />
      
      {/* Popular Routes */}
      <PopularRoutes />
      
      {/* Experience Gallery Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1.5 bg-amber-600 text-white rounded-full text-xs font-semibold mb-3">
              OUR EXPERIENCE
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Premium Taxi Service in Mysore - Explore Karnataka
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              <strong>Book cabs for Mysore to Ooty</strong>, <strong>Coorg</strong>, <strong>Wayanad</strong>, and <strong>Bangalore tours</strong>. Our <strong>outstation cab service</strong> covers all major destinations with comfortable <strong>Innova</strong>, <strong>Etios</strong>, and <strong>Tempo Traveller</strong> options.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="relative h-48 md:h-56 rounded-xl overflow-hidden group">
              <img 
                src="/Images/img (9).jpg" 
                alt="Mysore local taxi - One day tour packages with cab booking for Palace, Chamundi Hills, Zoo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-4">
                <div className="text-white">
                  <p className="font-bold text-sm md:text-base">Mysore Local Taxi</p>
                  <p className="text-xs opacity-90">Sightseeing & One Day Tours</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-48 md:h-56 rounded-xl overflow-hidden group">
              <img 
                src="/Images/img (11).jpg" 
                alt="Mysore to Ooty cab booking - Hill station taxi service with one way & round trip options"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-4">
                <div className="text-white">
                  <p className="font-bold text-sm md:text-base">Mysore to Ooty Cab</p>
                  <p className="text-xs opacity-90">Hill Station Taxi Service</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-48 md:h-56 rounded-xl overflow-hidden group">
              <img 
                src="/Images/img (13).jpg" 
                alt="Mysore to Coorg taxi - Weekend tour packages with Innova & SUV cab rental"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-4">
                <div className="text-white">
                  <p className="font-bold text-sm md:text-base">Mysore to Coorg Taxi</p>
                  <p className="text-xs opacity-90">Weekend Tour Packages</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-48 md:h-56 rounded-xl overflow-hidden group">
              <img 
                src="/Images/img (16).jpg" 
                alt="Beach tours from Mysore - Coastal Karnataka trips with reliable cab service"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-4">
                <div className="text-white">
                  <p className="font-bold text-sm md:text-base">Beaches</p>
                  <p className="text-xs opacity-90">Coastal Karnataka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tour Packages */}
      <PopularTours />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Ratings Section */}
      <section className="relative py-12 bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: "url('/Images/img (15).jpg')" }}
          aria-hidden="true"
        />
        <div className="container-custom relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Rated #1 Taxi Service in Mysore
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              10,000+ happy customers trust our <strong>cab booking service</strong> for <strong>outstation trips</strong>, <strong>airport transfers</strong>, and <strong>local sightseeing</strong> across Karnataka
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-5">
            <div className="bg-white rounded-xl p-5 text-center shadow-md">
              <div className="text-3xl font-bold text-amber-600 mb-1.5">4.8</div>
              <div className="flex justify-center gap-1 mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-xs text-gray-600">Overall Rating</div>
            </div>
            
            <div className="bg-white rounded-xl p-5 text-center shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-1.5">98%</div>
              <div className="text-xs text-gray-600 font-medium mb-1">Customer Satisfaction</div>
              <div className="text-[10px] text-gray-500">Based on 500+ reviews</div>
            </div>
            
            <div className="bg-white rounded-xl p-5 text-center shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-1.5">100%</div>
              <div className="text-xs text-gray-600 font-medium mb-1">On-Time Service</div>
              <div className="text-[10px] text-gray-500">Always punctual</div>
            </div>
            
            <div className="bg-white rounded-xl p-5 text-center shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-1.5">24/7</div>
              <div className="text-xs text-gray-600 font-medium mb-1">Available Service</div>
              <div className="text-[10px] text-gray-500">Round the clock</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <FAQ />
      
      {/* Compact CTA Section */}
      <section className="relative py-16 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/Images/img (7).jpg')" }}
          aria-hidden="true"
        />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Book Best Taxi Service in Mysore <br /> Today
            </h2>
            <p className="text-md md:text-xl font-semibold mb-3 text-white">
              Reliable Cab Rental for Outstation, Local & Airport Transfers
            </p>
            <p className="text-base md:text-lg mb-8 text-white/95">
              Professional drivers • Clean AC vehicles • Transparent pricing • 24/7 availability<br />
              Serving Mysore to Ooty, Coorg, Bangalore, Wayanad & all major destinations
            </p>
            
            {/* Keyword Badges */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="bg-white/20 text-white px-2.5 py-1 rounded-full text-xs font-medium">Mysore Taxi</span>
              <span className="bg-white/20 text-white px-2.5 py-1 rounded-full text-xs font-medium">Cab Booking Mysore</span>
              <span className="bg-white/20 text-white px-2.5 py-1 rounded-full text-xs font-medium">Outstation Cabs</span>
              <span className="bg-white/20 text-white px-2.5 py-1 rounded-full text-xs font-medium">Airport Taxi</span>
              <span className="bg-white/20 text-white px-2.5 py-1 rounded-full text-xs font-medium">Tempo Traveller</span>
              <span className="bg-white/20 text-white px-2.5 py-1 rounded-full text-xs font-medium">Tour Packages</span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 hover:bg-gray-50 font-bold px-6 py-2.5 rounded-lg transition-all shadow-lg text-base"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Now: {BUSINESS_INFO.phone}
              </a>
              
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I want to book a taxi in Mysore`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2.5 rounded-lg transition-all shadow-lg text-base"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp: Book Cab Now
              </a>
            </div>
            
            {/* Why Choose Section */}
            <div className="text-center">
              <h3 className="text-lg font-bold mb-4">Why Choose Cab Rental Mysore?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-xs">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">10,000+</div>
                  <div className="text-xs">Happy Customers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">4.8★</div>
                  <div className="text-xs">Google Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-xs">Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
