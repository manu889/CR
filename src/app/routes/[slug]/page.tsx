import { notFound } from 'next/navigation';
import { popularRoutes } from '@/data/routes';
import { BUSINESS_INFO } from '@/data/constants';
import BookingForm from '@/components/BookingForm';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return popularRoutes.map((route) => ({
    slug: route.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const route = popularRoutes.find((r) => r.slug === slug);
  
  if (!route) {
    return {
      title: 'Route Not Found',
    };
  }

  return {
    title: `${route.from} to ${route.to} Cab | Taxi Fare ₹${route.price} | ${BUSINESS_INFO.name}`,
    description: `Book ${route.from} to ${route.to} cab. Distance: ${route.distance}, Duration: ${route.duration}, Fare: ${route.price}. Clean vehicles, professional drivers. Call ${BUSINESS_INFO.phone}`,
    keywords: [`${route.from} to ${route.to}`, 'cab', 'taxi', 'fare', route.from, route.to, 'outstation'],
  };
}

export default async function RoutePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = popularRoutes.find((r) => r.slug === slug);

  if (!route) {
    notFound();
  }

  // JSON-LD Schema for Route
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": `${route.from} to ${route.to} Taxi Service`,
    "provider": {
      "@type": "Organization",
      "name": BUSINESS_INFO.name,
      "telephone": BUSINESS_INFO.phone,
      "url": BUSINESS_INFO.website
    },
    "serviceArea": [
      {
        "@type": "City",
        "name": route.from
      },
      {
        "@type": "City",
        "name": route.to
      }
    ],
    "description": route.description,
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "INR",
        "price": route.price
      }
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": route.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-16">
          <div className="container-custom">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 text-amber-600 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-lg font-semibold">Route Information</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {route.from} to {route.to} Cab
              </h1>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg p-4 border-2 border-amber-100">
                  <div className="text-gray-600 text-sm mb-1">Distance</div>
                  <div className="text-2xl font-bold text-gray-900">{route.distance}</div>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-amber-100">
                  <div className="text-gray-600 text-sm mb-1">Duration</div>
                  <div className="text-2xl font-bold text-gray-900">{route.duration}</div>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-amber-100">
                  <div className="text-gray-600 text-sm mb-1">Fare Range</div>
                  <div className="text-2xl font-bold text-amber-600">{route.price}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now
                </a>
                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I need a cab from ${route.from} to ${route.to}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    About {route.from} to {route.to} Taxi Service
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {route.description}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Why Choose Us?
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {route.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3 bg-emerald-50 p-4 rounded-lg">
                        <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-800 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQs */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {route.faqs.map((faq, index) => (
                      <div key={index} className="bg-white border-2 border-gray-100 rounded-lg p-6">
                        <h3 className="font-bold text-gray-900 mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-gray-700">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar - Booking Form */}
              <div className="lg:sticky lg:top-24 h-fit">
                <BookingForm />
                
                {/* Quick Contact */}
                <div className="mt-6 bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Need Immediate Assistance?</h3>
                  <a 
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="block text-center bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-lg transition-colors mb-3"
                  >
                    📞 {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-sm text-gray-600 text-center">
                    Available 24/7 for booking and support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
