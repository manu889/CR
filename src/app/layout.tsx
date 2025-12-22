import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyMobileCTA from '@/components/StickyMobileCTA'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  metadataBase: new URL('https://cabrentalmysore.in'),
  title: {
    default: 'Mysore Cab Booking | #1 Taxi Service in Mysore ₹11/km | 24/7 Available',
    template: '%s | Cab Rental Mysore'
  },
  description: 'Book India\'s most trusted taxi service in Mysore. Outstation cabs, airport transfers, local tours from ₹11/km. 4.8★ rated with 10,000+ satisfied customers. GPS-enabled fleet, professional drivers. Instant booking: +91 96327 22100',
  keywords: 'taxi service mysore, cab booking mysore, mysore taxi, outstation cab mysore, airport taxi mysore, car rental mysore, mysore cab service, tempo traveller mysore, local taxi mysore, mysore to ooty cab, mysore to bangalore taxi',
  authors: [{ name: 'Cab Rental Mysore', url: 'https://cabrentalmysore.in' }],
  creator: 'Cab Rental Mysore',
  publisher: 'Cab Rental Mysore',
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    title: 'Mysore Cab Booking | #1 Taxi Service in Mysore',
    description: 'Book verified taxi service in Mysore for outstation trips, airport transfers, and local tours. 4.8★ rating, professional drivers, well-maintained vehicles.',
    url: 'https://cabrentalmysore.in',
    siteName: 'Cab Rental Mysore',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cab Rental Mysore - Professional Taxi Service',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mysore Cab Booking | #1 Taxi Service in Mysore',
    description: 'Book verified taxi service in Mysore. Outstation trips, airport transfers, local tours. 4.8★ rating. Call +91 96327 22100',
    images: ['/og-image.jpg'],
    creator: '@cabrentalmysore',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // Add other verification codes when available
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'Travel and Transportation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="canonical" href="https://cabrentalmysore.in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://cabrentalmysore.in/#organization",
              "name": "Cab Rental Mysore",
              "alternateName": "Mysore Cab Service",
              "description": "Premier taxi and cab rental service in Mysore offering outstation trips, airport transfers, local sightseeing, and tour packages with professional drivers and well-maintained vehicles.",
              "url": "https://cabrentalmysore.in",
              "telephone": "+91-96327-22100",
              "email": "info@cabrentalmysore.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "74, 6th Cross Rd, N R Mohalla, A J Block",
                "addressLocality": "Gayathri Puram, Mysuru",
                "addressRegion": "Karnataka",
                "postalCode": "570007",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "12.2958",
                "longitude": "76.6394"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "00:00",
                  "closes": "23:59"
                }
              ],
              "priceRange": "₹₹",
              "image": "https://cabrentalmysore.in/og-image.jpg",
              "logo": {
                "@type": "ImageObject",
                "url": "https://cabrentalmysore.in/logo.png",
                "width": 250,
                "height": 60
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Mysore",
                  "containedIn": "Karnataka, India"
                },
                {
                  "@type": "City",
                  "name": "Bangalore"
                },
                {
                  "@type": "City",
                  "name": "Ooty"
                },
                {
                  "@type": "City",
                  "name": "Coorg"
                },
                {
                  "@type": "City",
                  "name": "Wayanad"
                },
                {
                  "@type": "City",
                  "name": "Chikmagalur"
                },
                {
                  "@type": "City",
                  "name": "Kabini"
                },
                {
                  "@type": "City",
                  "name": "Hassan"
                },
                {
                  "@type": "City",
                  "name": "Mangalore"
                },
                {
                  "@type": "City",
                  "name": "Tirupati"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Taxi Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Outstation Taxi Service",
                      "description": "Long-distance cab service from Mysore to Ooty, Coorg, Wayanad, Bangalore, Chikmagalur, and Kabini at ₹11/km"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Airport Transfer Service",
                      "description": "Bangalore airport pickup and drop from Mysore at ₹2,800 flat rate"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Local Sightseeing",
                      "description": "Mysore city one day tour covering all major attractions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tempo Traveller Rental",
                      "description": "12 seater and 17 seater tempo traveller for group tours and family trips"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Corporate Transportation",
                      "description": "Employee transport service and office commute solutions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tour Packages",
                      "description": "Mysore to Ooty, Coorg, Wayanad one day trips and multi-day tour packages"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150",
                "bestRating": "5",
                "worstRating": "1"
              },
              "sameAs": [
                "https://facebook.com/cabrentalmysore",
                "https://instagram.com/cabrentalmysore",
                "https://twitter.com/cabrentalmysore"
              ],
              "paymentAccepted": "Cash, UPI, Credit Card, Debit Card",
              "currenciesAccepted": "INR"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://cabrentalmysore.in/#website",
              "url": "https://cabrentalmysore.in",
              "name": "Cab Rental Mysore",
              "description": "Book taxi services in Mysore for outstation trips, airport transfers, and local tours",
              "publisher": {
                "@id": "https://cabrentalmysore.in/#organization"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://cabrentalmysore.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://cabrentalmysore.in"
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <StickyMobileCTA />
        <ScrollToTop />
      </body>
    </html>
  )
}
