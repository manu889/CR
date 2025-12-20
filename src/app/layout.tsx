import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://adityahotelmysore.com'),
  title: 'Aditya Hotel Mysore - Premium Heritage Accommodation',
  description: 'Experience luxury and comfort at Aditya Hotel Mysore. Premium rooms and warm hospitality in the heart of Mysore city.',
  keywords: 'Aditya Hotel, Mysore hotel, luxury accommodation, heritage hotel, Mysore tourism, premium rooms, hospitality',
  authors: [{ name: 'Aditya Hotel Mysore' }],
  openGraph: {
    title: 'Aditya Hotel Mysore - Premium Heritage Accommodation',
    description: 'Experience luxury and comfort at Aditya Hotel Mysore. Premium rooms and warm hospitality.',
    url: 'https://adityahotelmysore.com',
    siteName: 'Aditya Hotel Mysore',
    images: [
      {
        url: '/Images/Enterance/Outdoor.avif',
        width: 1200,
        height: 630,
        alt: 'Aditya Hotel Mysore Exterior',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Hotel Mysore - Premium Heritage Accommodation',
    description: 'Experience luxury and comfort at Aditya Hotel Mysore.',
    images: ['/Images/Enterance/Outdoor.avif'],
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
        <link rel="canonical" href="https://adityahotelmysore.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              "name": "Aditya Hotel Mysore",
              "description": "Premium heritage accommodation in Mysore with luxury rooms and warm hospitality.",
              "url": "https://adityahotelmysore.com",
              "telephone": "+91-821-XXXXXXX",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Hotel Address",
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
              "image": [
                "https://adityahotelmysore.com/Images/Enterance/Outdoor.avif"
              ],
              "priceRange": "$$",
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Free WiFi"
                },
                {
                  "@type": "LocationFeatureSpecification", 
                  "name": "Room Service"
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Room Service"
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
