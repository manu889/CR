import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photo Gallery | Aditya Hotel Mysore - Luxury Accommodation',
  description: 'Explore our stunning photo gallery showcasing the elegance and luxury of Aditya Hotel Mysore. View rooms, facilities, and beautiful spaces.',
  keywords: 'Aditya Hotel gallery, Mysore hotel photos, luxury accommodation images, hotel rooms gallery',
  openGraph: {
    title: 'Photo Gallery - Aditya Hotel Mysore',
    description: 'Discover the beauty and elegance of Aditya Hotel through our comprehensive photo gallery.',
    images: ['/Images/Enterance/Outdoor.avif']
  }
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
