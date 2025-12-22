import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import { BUSINESS_INFO } from '@/data/constants';
import BookingForm from '@/components/BookingForm';

const serviceData = services.find((s) => s.slug === 'employee-transport');

if (!serviceData) {
  notFound();
}

const service = serviceData;

export const metadata: Metadata = {
  title: 'Corporate Employee Transport Mysore | Staff Shuttle Service',
  description: 'Reliable employee transport services in Mysore. Daily office shuttle, shift cabs, corporate contracts. Sedans, SUVs, Tempo Travellers available. Call +91 96327 22100',
  keywords: ['employee transport mysore', 'corporate cab mysore', 'office shuttle mysore', 'staff transport mysore', 'corporate taxi mysore']
};

export default function EmployeeTransportPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12 md:py-16 overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: "url('/Images/img (8).jpg')" }}
          aria-hidden="true"
        />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span className="text-xl">{service.icon}</span>
              <span>{service.title}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Corporate Employee Transport Services
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
              <h2 className="text-3xl font-bold mb-6">Professional Corporate Transport Solutions</h2>
              
              <div className="bg-blue-50 p-6 rounded-xl mb-8 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Why Businesses Choose Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Punctual Service:</strong> On-time pickup and drop for daily commutes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Flexible Contracts:</strong> Monthly, quarterly, or annual agreements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Professional Drivers:</strong> Background verified, well-trained chauffeurs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>GPS Tracking:</strong> Real-time vehicle tracking for safety</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Backup Vehicles:</strong> Ensure zero downtime</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mb-4">Service Types</h3>
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Daily Office Shuttle</h4>
                  <p className="text-gray-700 mb-3">Regular pickup and drop service for employees</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Fixed routes and timings</li>
                    <li>✓ Multiple pickup points</li>
                    <li>✓ Morning and evening shifts</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Night Shift Cabs</h4>
                  <p className="text-gray-700 mb-3">Safe and reliable transport for late-night workers</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Door-to-door service</li>
                    <li>✓ Female-friendly with safety features</li>
                    <li>✓ 24/7 support team</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Executive Transport</h4>
                  <p className="text-gray-700 mb-3">Premium service for senior management</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Luxury sedans and SUVs</li>
                    <li>✓ Dedicated driver</li>
                    <li>✓ Flexible scheduling</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl border-2 border-amber-200">
                <h3 className="text-xl font-bold text-amber-900 mb-3">Get a Custom Quote</h3>
                <p className="text-gray-700">
                  We understand each organization has unique requirements. Contact us for a customized transport solution and competitive pricing based on your needs - number of employees, routes, timings, and frequency.
                </p>
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
