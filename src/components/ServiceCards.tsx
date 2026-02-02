import Link from 'next/link';
import { services } from '@/data/services';

export default function ServiceCards() {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold mb-3">
            OUR SERVICES
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Tailored Taxi & Cab Rental Services in Mysore
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Comprehensive taxi solutions for airport taxi Mysore, outstation cab rentals to Ooty, Coorg, Wayanad, and reliable local sightseeing trips in Mysore.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-amber-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-600 font-semibold text-sm">
                      {service.pricing}
                    </span>
                    <span className="text-amber-600 group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/services" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2 rounded-lg transition-all shadow-md hover:shadow-lg text-sm">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
