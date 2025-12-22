import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import { BUSINESS_INFO } from '@/data/constants';
import BookingForm from '@/components/BookingForm';

const serviceData = services.find((s) => s.slug === 'local-sightseeing');

if (!serviceData) {
  notFound();
}

const service = serviceData;

export const metadata: Metadata = {
  title: 'Mysore Local Sightseeing Taxi | Full Day ₹2,500 Half Day ₹1,500 | Mysore Darshan Package',
  description: 'Mysore city darshan packages with AC cab and guide. Visit Mysore Palace, Chamundi Hills, Brindavan Gardens, St. Philomena Church. Full day ₹2,500, Half day ₹1,500. Professional drivers. Book: +91 96327 22100',
  keywords: ['mysore local sightseeing', 'mysore city tour package', 'mysore palace tour cab', 'mysore darshan taxi', 'local taxi mysore', 'mysore tourist cab', 'mysore one day tour', 'mysore city darshan', 'chamundi hills taxi', 'brindavan gardens cab', 'mysore sightseeing package', 'mysore local tour']
};

export default function LocalSightseeingPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12 md:py-16 overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: "url('/Images/img (6).jpg')" }}
          aria-hidden="true"
        />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span className="text-xl">{service.icon}</span>
              <span>{service.title}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Mysore Local Sightseeing Taxi
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
              <h2 className="text-3xl font-bold mb-6">Mysore Sightseeing Packages</h2>
              <div className="space-y-6">
                <div className="bg-amber-50 p-6 rounded-xl border-2 border-amber-200">
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">Half Day Package - ₹1,500</h3>
                  <p className="text-gray-700 mb-4">4-5 hours • Visit 3-4 major attractions</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Mysore Palace</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Chamundi Hills Temple</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>St. Philomena's Church</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-50 p-6 rounded-xl border-2 border-emerald-200">
                  <h3 className="text-2xl font-bold text-emerald-900 mb-2">Full Day Package - ₹2,500</h3>
                  <p className="text-gray-700 mb-4">8-10 hours • Visit all major attractions</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>All Half Day attractions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Brindavan Gardens</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Mysore Zoo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Jaganmohan Palace & Art Gallery</span>
                    </li>
                  </ul>
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
