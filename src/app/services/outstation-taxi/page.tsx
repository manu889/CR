import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import { BUSINESS_INFO } from '@/data/constants';
import BookingForm from '@/components/BookingForm';

const serviceData = services.find((s) => s.slug === 'outstation-taxi');

if (!serviceData) {
  notFound();
}

const service = serviceData;

export const metadata: Metadata = {
  title: 'Outstation Taxi Mysore | One Way Drop Taxi | Mysore to Ooty Coorg Bangalore Cab ₹11/km',
  description: 'Book outstation taxi from Mysore. Ooty, Coorg, Bangalore, Wayanad, Chikmagalur cabs. One-way drop & round trip packages. Clean AC sedans, SUVs. ₹11/km. 24/7 Service. Call +91 96327 22100',
  keywords: ['outstation taxi mysore', 'mysore to ooty cab', 'mysore to coorg taxi', 'mysore to bangalore cab', 'one way drop taxi mysore', 'outstation cabs mysore', 'intercity taxi mysore', 'mysore to wayanad cab', 'mysore to chikmagalur taxi', 'round trip cab mysore', 'mysore outstation taxi service', 'cab for outstation from mysore'],
  openGraph: {
    title: 'Outstation Taxi Mysore | Mysore to Ooty, Coorg, Bangalore Cab',
    description: 'Book outstation cabs from Mysore. One-way & round trips to Ooty, Coorg, Bangalore.',
    type: 'website'
  }
};

export default function OutstationTaxiPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-amber-600 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {service.icon} {service.title}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Outstation Taxi Service in Mysore - One Way & Round Trip Cabs
            </h1>
            <p className="text-base md:text-lg text-amber-50 leading-relaxed mb-8">
              Book reliable outstation cabs from Mysore to Ooty, Coorg, Bangalore, Wayanad & more destinations. Professional drivers, clean AC vehicles, transparent pricing.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-secondary text-lg px-8 py-4">
                📞 Call {BUSINESS_INFO.phone}
              </a>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`} className="bg-white text-amber-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all text-lg">
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About {service.title}</h2>
                <p className="text-lg text-gray-700 mb-6">{service.description}</p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Why Choose Our Outstation Taxi Service?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Lowest fare outstation taxi in Mysore starting at ₹11/km</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">One-way drop taxi available for all routes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Round trip packages with driver allowance included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Clean and well-maintained sedans, SUVs, and Innovas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Experienced drivers with excellent route knowledge</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Popular Outstation Routes from Mysore</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900">Mysore to Ooty</h4>
                    <p className="text-sm text-gray-600">125 km • Starting ₹3,500</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900">Mysore to Coorg</h4>
                    <p className="text-sm text-gray-600">120 km • Starting ₹4,200</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900">Mysore to Bangalore</h4>
                    <p className="text-sm text-gray-600">145 km • Starting ₹2,800</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900">Mysore to Wayanad</h4>
                    <p className="text-sm text-gray-600">130 km • Starting ₹3,800</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Additional Popular Routes</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900">Mysore to Chikmagalur</h4>
                  <p className="text-sm text-gray-600">165 km • Starting ₹4,500</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900">Mysore to Kabini</h4>
                  <p className="text-sm text-gray-600">85 km • Starting ₹2,800</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900">Mysore to Mangalore</h4>
                  <p className="text-sm text-gray-600">270 km • Starting ₹7,500</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Frequently Asked Questions</h3>
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">What is the minimum booking for outstation taxi?</h4>
                  <p className="text-gray-700 text-sm">Our minimum booking is 250 km for one-way trips. For round trips, we calculate the entire journey distance.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Do you charge driver allowance?</h4>
                  <p className="text-gray-700 text-sm">For trips exceeding 12 hours or overnight stays, driver allowance of ₹500/day applies. This is included in our package quotes.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Can I book a one-way drop taxi?</h4>
                  <p className="text-gray-700 text-sm">Yes! We offer one-way drop taxi services at competitive rates. You pay only for the distance traveled, not the return journey.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Are tolls and parking charges included?</h4>
                  <p className="text-gray-700 text-sm">Toll charges, parking fees, and interstate permits are included in the package. No hidden costs.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">What vehicles are available for outstation trips?</h4>
                  <p className="text-gray-700 text-sm">We offer Sedans (Dzire, Etios), SUVs (Innova, Ertiga), and Tempo Travellers (12-17 seater) for group travel.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <BookingForm />
                
                <div className="mt-6 bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-3">24/7 Booking Available</h4>
                  <p className="text-sm text-gray-700 mb-4">Call anytime for immediate booking and assistance.</p>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-all">
                    📞 {BUSINESS_INFO.phone}
                  </a>
                </div>

                <div className="mt-6 bg-green-50 p-6 rounded-xl border border-green-200">
                  <h4 className="font-bold text-green-900 mb-3">Why Choose Us?</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>15+ years in taxi service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Licensed & insured vehicles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Verified experienced drivers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Transparent pricing - no hidden charges</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
