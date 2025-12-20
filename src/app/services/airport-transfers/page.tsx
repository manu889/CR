import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import { BUSINESS_INFO } from '@/data/constants';
import BookingForm from '@/components/BookingForm';

const service = services.find((s) => s.slug === 'airport-transfers');

if (!service) {
  notFound();
}

export const metadata: Metadata = {
  title: 'Mysore Airport Taxi | Bangalore Airport Transfer | ₹2,499 One Way',
  description: 'Reliable Mysore to Bangalore Airport cab service. Door-to-door pickup, flight tracking, 24/7 service. Sedan ₹2,499, SUV ₹3,499. Book now: +91 96327 22100',
  keywords: ['mysore airport taxi', 'bangalore airport cab mysore', 'kempegowda airport transfer', 'mysore to airport cab', 'airport drop mysore']
};

export default function AirportTransfersPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {service.icon} {service.title}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mysore Airport Taxi - Bangalore Airport Transfer Service
            </h1>
            <p className="text-base md:text-lg text-blue-50 mb-8">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all text-lg">
                📞 Call {BUSINESS_INFO.phone}
              </a>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`} className="bg-blue-700 text-white hover:bg-blue-800 font-bold py-4 px-8 rounded-lg transition-all text-lg">
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
              <h2 className="text-3xl font-bold mb-6">24/7 Airport Transfer Service</h2>
              
              <div className="bg-blue-50 p-6 rounded-xl mb-8 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Why Choose Our Airport Taxi?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Flight Tracking:</strong> We monitor your flight status and adjust pickup time accordingly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>24/7 Availability:</strong> Early morning and late night airport drops/pickups available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Door-to-Door Service:</strong> Pickup from your location in Mysore, drop at terminal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Luggage Assistance:</strong> Help with loading/unloading baggage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Fixed Pricing:</strong> No surge pricing or hidden charges</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mb-4">Pricing</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Sedan (Dzire/Etios)</h4>
                  <p className="text-3xl font-bold text-amber-600 mb-2">₹2,499</p>
                  <p className="text-gray-600">One-way Mysore ↔ Airport</p>
                  <p className="text-sm text-gray-500 mt-2">145 km • 3-4 passengers</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">SUV (Innova/Ertiga)</h4>
                  <p className="text-3xl font-bold text-amber-600 mb-2">₹3,499</p>
                  <p className="text-gray-600">One-way Mysore ↔ Airport</p>
                  <p className="text-sm text-gray-500 mt-2">145 km • 6-7 passengers</p>
                </div>
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
