import BookingForm from '@/components/BookingForm';
import { BUSINESS_INFO } from '@/data/constants';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 pt-32 lg:pt-40 pb-12 lg:pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          {/* Left Column - Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
              <span>⭐</span>
              15+ Years of Trusted Service
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Reliable Taxi Services <span className="text-amber-600">in Mysore</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-lg mb-3 font-semibold text-gray-700">
              Local, Airport & Outstation Cabs
            </p>

            {/* Description */}
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              Professional drivers • Well-maintained vehicles • Transparent pricing<br />
              Book your comfortable ride to Ooty, Coorg, Bangalore & beyond.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6">
              <div className="text-center bg-white rounded-lg p-3 sm:p-3.5 shadow-md border border-gray-100">
                <div className="text-lg sm:text-xl font-bold text-amber-600">50+</div>
                <div className="text-[11px] sm:text-xs text-gray-600 mt-1">Expert Drivers</div>
              </div>
              <div className="text-center bg-white rounded-lg p-3 sm:p-3.5 shadow-md border border-gray-100">
                <div className="text-lg sm:text-xl font-bold text-amber-600">100+</div>
                <div className="text-[11px] sm:text-xs text-gray-600 mt-1">Vehicles</div>
              </div>
              <div className="text-center bg-white rounded-lg p-3 sm:p-3.5 shadow-md border border-gray-100">
                <div className="text-lg sm:text-xl font-bold text-amber-600">10k+</div>
                <div className="text-[11px] sm:text-xs text-gray-600 mt-1">Happy Customers</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-lg text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call: {BUSINESS_INFO.phone}
              </a>
              
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-lg text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-gray-700">24/7 Available</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Expert Drivers</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Clean Vehicles</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Best Rates</span>
              </div>
            </div>
          </div>

          {/* Right Column - Compact Booking Form */}
          <div className="lg:sticky lg:top-24">
            <BookingForm compact={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
