import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import { BUSINESS_INFO } from '@/data/constants';
import BookingForm from '@/components/BookingForm';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  // High-intent keyword mapping per service
  const seoConfig: Record<string, { title: string; description: string; keywords: string[] }> = {
    'outstation-taxi': {
      title: 'Outstation Taxi Mysore | Mysore to Ooty, Coorg, Bangalore Cab | ₹11/km',
      description: 'Book outstation cabs from Mysore to Ooty, Coorg, Bangalore, Wayanad. One-way & round trips. Clean AC cars, experienced drivers. Starting ₹11/km. Call +91 96327 22100',
      keywords: ['outstation taxi mysore', 'mysore to ooty cab', 'mysore to coorg taxi', 'mysore to bangalore cab', 'outstation cabs mysore', 'intercity taxi mysore', 'one way cab mysore']
    },
    'local-sightseeing': {
      title: 'Mysore Local Sightseeing Taxi | Full Day & Half Day Packages | ₹1,500',
      description: 'Mysore city tour packages. Visit Mysore Palace, Chamundi Hills, Brindavan Gardens. Full day ₹2,500, Half day ₹1,500. Professional drivers. Book now: +91 96327 22100',
      keywords: ['mysore local sightseeing', 'mysore city tour package', 'mysore palace tour cab', 'mysore darshan taxi', 'local taxi mysore', 'mysore tourist cab']
    },
    'airport-transfers': {
      title: 'Airport Taxi Mysore | Bangalore Airport Transfer | Mysore Airport Cab',
      description: 'Mysore to Bangalore Airport taxi (₹2,800). 24/7 airport pickup & drop. Flight tracking, meet & greet. Clean AC cars. Book now: +91 96327 22100',
      keywords: ['airport taxi mysore', 'mysore to bangalore airport cab', 'bangalore airport transfer mysore', 'airport pickup mysore', 'kempegowda airport taxi mysore']
    },
    'tempo-traveller': {
      title: 'Tempo Traveller in Mysore | 12, 14, 17 Seater on Rent | ₹18/km',
      description: 'Hire Tempo Traveller in Mysore for group tours. 12, 14, 17 seater AC tempo. Family tours, pilgrimages, outstation trips. Starting ₹18/km. Call +91 96327 22100',
      keywords: ['tempo traveller mysore', 'tempo traveller hire mysore', '17 seater tempo mysore', 'tempo on rent mysore', 'mini bus mysore', 'group tour vehicle mysore']
    },
    'employee-transport': {
      title: 'Employee Transport Mysore | Corporate Cab Service | Monthly Contracts',
      description: 'Corporate employee transport solutions in Mysore. Daily office shuttle, monthly contracts, GPS tracking. Reliable & punctual. Request quote: +91 96327 22100',
      keywords: ['employee transport mysore', 'corporate cab service mysore', 'office shuttle mysore', 'staff transport mysore', 'company cab mysore']
    },
    'pilgrimage-tours': {
      title: 'Pilgrimage Tour Packages from Mysore | Tirupati, Shirdi, Mantralaya Cabs',
      description: 'Book pilgrimage tours from Mysore to Tirupati, Shirdi, Mantralaya, Dharmasthala. AC cabs, experienced drivers, affordable packages. Call +91 96327 22100',
      keywords: ['pilgrimage tours mysore', 'tirupati package from mysore', 'shirdi tour mysore', 'dharmasthala cab mysore', 'religious tour mysore']
    }
  };

  const config = seoConfig[slug] || {
    title: `${service.title} Mysore | ${BUSINESS_INFO.name}`,
    description: `${service.description} Starting from ${service.pricing}. Book now! Call ${BUSINESS_INFO.phone}`,
    keywords: [service.title, 'mysore', 'taxi', 'cab service', service.slug]
  };

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.title,
      description: config.description,
      type: 'website'
    }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // High-intent keyword content per service
  const seoContent: Record<string, { h1: string; subtitle: string; whyChoose: string[] }> = {
    'outstation-taxi': {
      h1: 'Outstation Taxi Service in Mysore - One Way & Round Trip Cabs',
      subtitle: 'Book reliable outstation cabs from Mysore to Ooty, Coorg, Bangalore, Wayanad & more destinations. Professional drivers, clean AC vehicles, transparent pricing.',
      whyChoose: [
        'Lowest fare outstation taxi in Mysore starting at ₹11/km',
        'One-way drop taxi available for all routes',
        'Round trip packages with driver allowance included',
        'Popular routes: Mysore to Ooty (₹3,500), Mysore to Coorg (₹4,200), Mysore to Bangalore (₹2,800)',
        'Clean and well-maintained sedans, SUVs, and Innovas',
        'Experienced drivers with excellent route knowledge'
      ]
    },
    'local-sightseeing': {
      h1: 'Mysore Local Sightseeing Taxi - Full Day & Half Day Packages',
      subtitle: 'Explore Mysore\'s top tourist attractions with our local cab service. Mysore Palace, Chamundi Hills, Brindavan Gardens, Zoo, and more.',
      whyChoose: [
        'Best Mysore darshan packages: Half day ₹1,500, Full day ₹2,500',
        'Covers all major attractions: Mysore Palace, Chamundi Hills, Brindavan Gardens',
        'Professional guides/drivers with local knowledge',
        'Flexible itineraries customized to your preference',
        'AC cars for comfortable Mysore city tour',
        'Family-friendly service with child seats available'
      ]
    },
    'airport-transfers': {
      h1: 'Mysore to Bangalore Airport Taxi - Reliable Airport Transfer Service',
      subtitle: '24/7 airport cab service from Mysore to Kempegowda International Airport Bangalore. Punctual pickups, flight tracking, meet & greet service.',
      whyChoose: [
        'Mysore to Bangalore Airport: Fixed fare ₹2,800 (150 km)',
        'Early morning and late night airport drops available',
        'Flight tracking to adjust pickup time for delays',
        'Meet & greet service at airport terminal',
        'Clean sedans: Swift Dzire, Etios, Honda Amaze',
        'Luggage assistance and professional chauffeurs'
      ]
    },
    'tempo-traveller': {
      h1: 'Tempo Traveller on Rent in Mysore - 12, 14, 17 Seater AC Tempo',
      subtitle: 'Hire Tempo Traveller for group tours, family trips, corporate outings from Mysore. Spacious, comfortable, and affordable.',
      whyChoose: [
        'Multiple seater options: 12, 14, 17 seater Tempo Traveller',
        'Starting from ₹18/km with driver allowance',
        'Push-back reclining seats for comfortable long journeys',
        'Ample luggage space for group travel',
        'Perfect for pilgrimage tours (Tirupati, Shirdi, Mantralaya)',
        'Ideal for college trips, family reunions, corporate events'
      ]
    },
    'employee-transport': {
      h1: 'Corporate Employee Transport Service in Mysore - Monthly Cab Contracts',
      subtitle: 'Reliable employee shuttle service for companies in Mysore. Daily pickup & drop, GPS tracking, professional drivers, monthly billing.',
      whyChoose: [
        'Customized routes for your office locations',
        'Fixed monthly contracts with transparent pricing',
        'GPS-enabled vehicles for real-time tracking',
        'Professional and verified drivers',
        'Corporate invoicing and GST billing',
        'Suitable for IT companies, manufacturing units, BPOs'
      ]
    },
    'pilgrimage-tours': {
      h1: 'Pilgrimage Tour Packages from Mysore - Tirupati, Shirdi, Mantralaya Cabs',
      subtitle: 'Book spiritual tour packages from Mysore to famous temples. Tirupati, Shirdi, Mantralaya, Dharmasthala, Kollur with comfortable AC cabs.',
      whyChoose: [
        'Popular packages: Tirupati (2D/1N ₹12,000), Shirdi (3D/2N ₹18,000)',
        'Experienced drivers familiar with pilgrimage routes',
        'Tempo Traveller available for group pilgrimages',
        'Flexible departure dates and customizable itineraries',
        'Darshan assistance and hotel recommendations',
        'Comfortable AC vehicles for long-distance spiritual journeys'
      ]
    }
  };

  const content = seoContent[slug] || {
    h1: service.title,
    subtitle: service.shortDescription,
    whyChoose: service.features
  };

  // JSON-LD Schema for Service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "TaxiService",
      "name": BUSINESS_INFO.name,
      "telephone": BUSINESS_INFO.phone,
      "url": BUSINESS_INFO.website
    },
    "areaServed": {
      "@type": "City",
      "name": "Mysore"
    },
    "description": service.description,
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": service.pricing
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-4xl">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {content.h1}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                {content.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call: {BUSINESS_INFO.phone}
                </a>
                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`}
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
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    About This Service
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Why Choose Our {service.title}?
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {content.whyChoose.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Pricing
                  </h3>
                  <p className="text-3xl font-bold text-amber-600">
                    {service.pricing}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    *Prices may vary based on vehicle type and distance. Contact us for exact quote.
                  </p>
                </div>
              </div>

              {/* Sidebar - Booking Form */}
              <div className="lg:sticky lg:top-24 h-fit">
                <BookingForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
