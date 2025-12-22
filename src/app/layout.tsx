import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyMobileCTA from '@/components/StickyMobileCTA'

export const metadata: Metadata = {
  metadataBase: new URL('https://cabrentalmysore.in'),
  title: 'Cab Rental Mysore - Trusted Taxi Service | Mysore Cab Booking',
  description: 'Book reliable taxi service in Mysore. Outstation cabs, airport transfers, tour packages. Professional drivers, well-maintained vehicles. Call +91 96327 22100',
  keywords: 'Cab Rental Mysore, Mysore taxi, car rental Mysore, outstation cabs, airport taxi, tour packages, Mysore cab booking, local taxi service',
  authors: [{ name: 'Cab Rental Mysore' }],
  openGraph: {
    title: 'Cab Rental Mysore - Trusted Taxi Service',
    description: 'Book reliable taxi service in Mysore for outstation trips, airport transfers, and tour packages. Professional drivers and well-maintained vehicles.',
    url: 'https://cabrentalmysore.in',
    siteName: 'Cab Rental Mysore',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cab Rental Mysore - Taxi Service',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cab Rental Mysore - Trusted Taxi Service',
    description: 'Book reliable taxi service in Mysore for outstation trips, airport transfers, and tour packages.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
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
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://cabrentalmysore.in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TaxiService",
              "name": "Cab Rental Mysore",
              "description": "Reliable taxi and cab rental service in Mysore. Outstation cabs, airport transfers, tour packages with professional drivers and well-maintained vehicles.",
              "url": "https://cabrentalmysore.in",
              "telephone": "+91-96327-22100",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Nazarbad",
                "addressLocality": "Mysore",
                "addressRegion": "Karnataka",
                "postalCode": "570001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "12.2958",
                "longitude": "76.6394"
              },
              "priceRange": "₹₹",
              "areaServed": [
                "Mysore",
                "Bangalore",
                "Ooty",
                "Coorg",
                "Wayanad",
                "Karnataka"
              ],
              "serviceType": [
                "Outstation Taxi",
                "Local Cab Service",
                "Airport Transfer",
                "Tour Packages",
                "Tempo Traveller",
                "Employee Transport"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  )
}
