import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { tourPackages } from '@/data/tours';
import BookingForm from '@/components/BookingForm';
import { BUSINESS_INFO } from '@/data/constants';

export async function generateStaticParams() {
  return tourPackages.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tour = tourPackages.find((t) => t.slug === slug);

  if (!tour) {
    return {
      title: 'Tour Not Found',
    };
  }

  return {
    title: `${tour.title} | ${tour.price.toLocaleString()} | Cab Rental Mysore`,
    description: tour.description,
    keywords: `${tour.title}, ${tour.destinations.join(', ')}, mysore tour packages, ${tour.duration} tour, book ${tour.title.toLowerCase()}`,
    openGraph: {
      title: `${tour.title} - Book Now at ₹${tour.price.toLocaleString()}`,
      description: tour.description,
      type: 'website',
      url: `https://cabrentalmysore.com/tours/${tour.slug}`,
    },
  };
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = tourPackages.find((t) => t.slug === slug);

  if (!tour) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.title,
    description: tour.description,
    touristType: 'Tourist',
    itinerary: tour.itinerary.map((day) => ({
      '@type': 'ItemList',
      name: day.title,
      description: day.description,
      itemListElement: day.activities.map((activity, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: activity,
      })),
    })),
    offers: {
      '@type': 'Offer',
      price: tour.price,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString(),
      seller: {
        '@type': 'LocalBusiness',
        name: BUSINESS_INFO.name,
        telephone: BUSINESS_INFO.phone,
      },
    },
  };

  const whatsappNumber = BUSINESS_INFO.whatsapp.replace(/\D/g, '');
  const website = BUSINESS_INFO.website?.replace(/\/$/, '') ?? 'https://www.cabrentalmysore.com';
  const tourUrl = `${website}/tours/${tour.slug}`;
  const whatsappText = `Hi, I'm interested in ${tour.title}. Please share the best price and itinerary. ${tourUrl}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-600 to-orange-600 text-white py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-2 mb-4">
                {tour.destinations.map((dest, idx) => (
                  <span key={idx} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {dest}
                  </span>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{tour.title}</h1>
              
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-semibold">{tour.duration}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-2xl font-bold">₹{tour.price.toLocaleString()}</span>
                </div>
              </div>

              <p className="text-xl text-amber-50 mb-6">{tour.description}</p>

              <div className="flex flex-wrap gap-3">
                <a href="#booking-form" className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
                  Book This Tour
                </a>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  💬 WhatsApp Enquiry
                </a>
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tour Highlights */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Tour Highlights</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tour.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-amber-50 rounded-lg p-4">
                    <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Itinerary */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Itinerary</h2>
              <div className="space-y-6">
                {tour.itinerary.map((day, idx) => (
                  <div key={day.day} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                          {day.day}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{day.title}</h3>
                          <p className="text-amber-50">{day.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Activities & Timeline:</h4>
                      <div className="space-y-3">
                        {day.activities.map((activity, actIdx) => (
                          <div key={actIdx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700">{activity}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Inclusions & Exclusions */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Inclusions */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <svg className="w-7 h-7 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Package Includes
                  </h2>
                  <div className="space-y-3">
                    {tour.inclusions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-green-50 rounded-lg p-3">
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Exclusions */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <svg className="w-7 h-7 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Not Included
                  </h2>
                  <div className="space-y-3">
                    {tour.exclusions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-red-50 rounded-lg p-3">
                        <span className="text-red-600 font-bold">✗</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing Note */}
              <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Pricing Information:</h3>
                <p className="text-gray-700 mb-2">
                  <strong>₹{tour.price.toLocaleString()}</strong> {tour.category === 'multi-day' ? 'per person' : 'per vehicle'}
                </p>
                <p className="text-sm text-gray-600">
                  * Prices may vary based on vehicle type, season, and group size. GST (5%) applicable on all bookings. Contact us for customized packages and group discounts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section id="booking-form" className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Book {tour.title}
                </h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below or call us directly at <a href={`tel:${BUSINESS_INFO.phone}`} className="text-amber-600 font-semibold hover:underline">{BUSINESS_INFO.phone}</a>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6">
                  <BookingForm />
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Quick Contact</h3>
                    
                    <a 
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="flex items-center gap-3 w-full bg-amber-600 text-white rounded-lg p-4 mb-3 hover:bg-amber-700 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs text-amber-100">Call Now</div>
                        <div className="font-semibold">{BUSINESS_INFO.phone}</div>
                      </div>
                    </a>

                    <a 
                      href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\+/g, '')}?text=Hi, I want to book ${tour.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 w-full bg-green-500 text-white rounded-lg p-4 hover:bg-green-600 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs text-green-100">WhatsApp</div>
                        <div className="font-semibold">Chat with Us</div>
                      </div>
                    </a>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">Why Book With Us?</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        Best price guarantee
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        Instant confirmation
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        24/7 customer support
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        Professional drivers
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        Well-maintained vehicles
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tours */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Other Popular Tours</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {tourPackages
                .filter((t) => t.id !== tour.id && t.category === tour.category)
                .slice(0, 3)
                .map((relatedTour) => (
                  <Link 
                    key={relatedTour.id}
                    href={`/tours/${relatedTour.slug}`}
                    className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
                  >
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4">
                      <h3 className="font-bold text-lg mb-1 group-hover:underline">{relatedTour.title}</h3>
                      <p className="text-sm text-amber-50">{relatedTour.duration}</p>
                    </div>
                    <div className="p-4">
                      <div className="text-2xl font-bold text-amber-600 mb-2">
                        ₹{relatedTour.price.toLocaleString()}
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">{relatedTour.description}</p>
                    </div>
                  </Link>
                ))}
            </div>
            
            <div className="text-center mt-8">
              <Link href="/tours" className="btn-outline inline-block">
                View All Tour Packages
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
