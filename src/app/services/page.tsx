import Link from 'next/link';
import { services } from '@/data/services';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Taxi Services in Mysore - Outstation, Local, Airport Cabs | Best Rates',
  description: 'Complete range of taxi services in Mysore. Best cabs in Mysore for outstation trips, local sightseeing, airport transfers, tempo traveller, employee transport & pilgrimage tours. Call +91 96327 22100',
  keywords: ['taxi services in mysore', 'cabs in mysore', 'cab services mysore', 'taxi booking mysore', 'car hire mysore', 'mysore taxi', 'best taxi in mysore'],
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive taxi solutions for all your travel needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-amber-500"
              >
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-gray-600">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <h3 className="font-semibold text-gray-900">Key Features:</h3>
                    <ul className="grid gap-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div>
                      <div className="text-sm text-gray-600">Starting from</div>
                      <div className="text-2xl font-bold text-amber-600">{service.pricing}</div>
                    </div>
                    <div className="flex items-center gap-2 text-amber-600 font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Learn More</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
