import BookingForm from '@/components/BookingForm';
import { BUSINESS_INFO } from '@/data/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Your Cab Online | Cab Rental Mysore',
  description: 'Book your taxi online in Mysore. Fill the form or call us directly at +91 96327 22100 for instant confirmation.',
};

export default function BookPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Book Your Cab
            </h1>
            <p className="text-xl text-gray-600">
              Fill the form below or call us for instant booking
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Booking Form */}
            <div>
              <BookingForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Instant Booking
                </h2>
                
                <div className="space-y-4">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="flex items-center gap-4 p-4 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors group"
                  >
                    <div className="bg-amber-600 text-white p-3 rounded-lg group-hover:bg-amber-700 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Call Us Now</div>
                      <div className="text-lg font-bold text-gray-900">{BUSINESS_INFO.phone}</div>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors group"
                  >
                    <div className="bg-emerald-600 text-white p-3 rounded-lg group-hover:bg-emerald-700 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">WhatsApp</div>
                      <div className="text-lg font-bold text-gray-900">Chat with Us</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                  >
                    <div className="bg-gray-600 text-white p-3 rounded-lg group-hover:bg-gray-700 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Email Us</div>
                      <div className="text-lg font-bold text-gray-900">{BUSINESS_INFO.email}</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Why Book With Us */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Why Book With Us?
                </h3>
                <ul className="space-y-3">
                  {BUSINESS_INFO.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
