import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import { BUSINESS_INFO } from '@/data/constants';
import BookingForm from '@/components/BookingForm';

const serviceData = services.find((s) => s.slug === 'tempo-traveller');

if (!serviceData) {
  notFound();
}

const service = serviceData;

export const metadata: Metadata = {
  title: 'Tempo Traveller on Rent in Mysore | 12-17 Seater | ₹18/km',
  description: 'Hire 12/14/17 seater Tempo Traveller in Mysore for group tours, family trips, corporate events. AC pushback seats, clean vehicles. Starting ₹18/km. Call +91 96327 22100',
  keywords: ['tempo traveller mysore', '12 seater tempo mysore', 'tempo on rent mysore', 'force traveller mysore', 'group travel mysore']
};

export default function TempoTravellerPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-purple-600 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {service.icon} {service.title}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tempo Traveller on Rent in Mysore - 12/14/17 Seater
            </h1>
            <p className="text-base md:text-lg text-purple-50 mb-8">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all text-lg">
                📞 Call {BUSINESS_INFO.phone}
              </a>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`} className="bg-purple-700 text-white hover:bg-purple-800 font-bold py-4 px-8 rounded-lg transition-all text-lg">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Comfortable Group Travel Solution</h2>
              
              <div className="bg-purple-50 p-6 rounded-xl mb-8 border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Perfect For</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Family Trips:</strong> Extended family outings to Ooty, Coorg, Wayanad</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Corporate Events:</strong> Team outings, conferences, workshops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>School/College Trips:</strong> Educational tours, picnics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Pilgrimage Groups:</strong> Temple tours, religious trips</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mb-4">Vehicle Options</h3>
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">12 Seater Tempo Traveller</h4>
                  <p className="text-2xl font-bold text-amber-600 mb-2">₹18/km</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ AC with pushback seats</li>
                    <li>✓ Music system</li>
                    <li>✓ Ample luggage space</li>
                    <li>✓ Ideal for 8-10 passengers with luggage</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">17 Seater Tempo Traveller</h4>
                  <p className="text-2xl font-bold text-amber-600 mb-2">₹22/km</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ AC with pushback seats</li>
                    <li>✓ Music system</li>
                    <li>✓ Large luggage carrier</li>
                    <li>✓ Ideal for 13-15 passengers with luggage</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl border-2 border-amber-200">
                <h3 className="text-xl font-bold text-amber-900 mb-3">What's Included</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Experienced and courteous driver</li>
                  <li>✓ Driver allowance for outstation trips</li>
                  <li>✓ Toll charges and parking fees included</li>
                  <li>✓ Clean and well-maintained vehicle</li>
                  <li>✓ 24/7 customer support</li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
