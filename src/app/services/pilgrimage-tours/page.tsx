import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import { BUSINESS_INFO } from '@/data/constants';
import BookingForm from '@/components/BookingForm';

const serviceData = services.find((s) => s.slug === 'pilgrimage-tours');

if (!serviceData) {
  notFound();
}

const service = serviceData;

export const metadata: Metadata = {
  title: 'Pilgrimage Tours from Mysore | Temple Tour Packages | Dharmasthala',
  description: 'Book pilgrimage tour packages from Mysore. Dharmasthala, Kukke Subramanya, Kollur, Udupi, Sringeri temple tours. AC cabs, experienced drivers. Call +91 96327 22100',
  keywords: ['pilgrimage tours mysore', 'temple tour mysore', 'dharmasthala tour from mysore', 'kukke subramanya cab', 'religious tour mysore']
};

export default function PilgrimageToursPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12 md:py-16 overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: "url('/Images/halebeedu.jpg')" }}
          aria-hidden="true"
        />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span className="text-xl">{service.icon}</span>
              <span>{service.title}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Pilgrimage Tours from Mysore
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 max-w-3xl">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary">
                📞 Call {BUSINESS_INFO.phone}
              </a>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`} className="btn-secondary">
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
              <h2 className="text-3xl font-bold mb-6">Popular Pilgrimage Destinations</h2>
              
              <div className="space-y-4 mb-8">
                <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200">
                  <h3 className="text-2xl font-bold text-orange-900 mb-2">Dharmasthala Tour</h3>
                  <p className="text-gray-700 mb-3">Visit the famous Manjunatha Temple</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900">Distance: 180 km</p>
                      <p className="text-gray-600">Travel Time: 4 hours</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Package: ₹6,500</p>
                      <p className="text-gray-600">Round trip with driver allowance</p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200">
                  <h3 className="text-2xl font-bold text-orange-900 mb-2">Kukke Subramanya</h3>
                  <p className="text-gray-700 mb-3">Darshan at the sacred serpent temple</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900">Distance: 210 km</p>
                      <p className="text-gray-600">Travel Time: 5 hours</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Package: ₹7,500</p>
                      <p className="text-gray-600">Round trip with driver allowance</p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200">
                  <h3 className="text-2xl font-bold text-orange-900 mb-2">Kollur Mookambika</h3>
                  <p className="text-gray-700 mb-3">Blessings at the Goddess Parvati shrine</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900">Distance: 240 km</p>
                      <p className="text-gray-600">Travel Time: 6 hours</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Package: ₹8,500</p>
                      <p className="text-gray-600">Round trip with driver allowance</p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200">
                  <h3 className="text-2xl font-bold text-orange-900 mb-2">Coastal Temple Circuit</h3>
                  <p className="text-gray-700 mb-3">Udupi Sri Krishna • Dharmasthala • Kollur</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900">Duration: 2 Days / 1 Night</p>
                      <p className="text-gray-600">Multiple temples in one trip</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Package: ₹15,000</p>
                      <p className="text-gray-600">Sedan • All inclusive</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Why Choose Us for Pilgrimage Tours?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Drivers with excellent knowledge of temple routes and timings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Comfortable AC vehicles for long-distance travel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Flexible departure times - early morning starts available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Tempo Travellers available for group pilgrimages</span>
                  </li>
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
