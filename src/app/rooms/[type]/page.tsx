'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Star, MapPin, Wifi, Car, Coffee, Car as ParkingIcon, Users, Bed, Bath, Square, ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import { useParams } from 'next/navigation'

interface PageProps {
  params: {
    type: string
  }
}

const roomTypes = {
  standard: {
    title: 'Standard Room',
    price: '₹5,300',
    originalPrice: '₹6,200',
    description: 'Comfortable and well-appointed rooms designed for the budget-conscious traveler seeking quality accommodation. AC rooms: ₹5,300/night, Non-AC rooms: ₹4,500/night.',
    area: '250 sq ft',
    occupancy: '2 guests',
    bedType: 'Double bed',
    amenities: [
      'Free Wi-Fi',
      'Air Conditioning',
      '24/7 Room Service',
      'Smart TV',
      'Attached Bathroom',
      'Complimentary Toiletries',
      'Daily Housekeeping',
      'Tea/Coffee Maker'
    ],
    images: [
      '/Images/Rooms/1.avif',
      '/Images/Rooms/2.avif',
      '/Images/Rooms/3.avif',
      '/Images/Rooms/4.avif'
    ],
    features: [
      'Modern furniture and decor',
      'Comfortable seating area',
      'Work desk with chair',
      'Wardrobe with hangers',
      'Safe deposit locker',
      'Blackout curtains'
    ]
  },
  superior: {
    title: 'Superior Room',
    price: '₹8,300',
    originalPrice: '₹9,500',
    description: 'Spacious rooms with premium amenities and elegant furnishings for a comfortable stay. AC rooms: ₹8,300/night, Non-AC rooms: ₹7,500/night.',
    area: '350 sq ft',
    occupancy: '3 guests',
    bedType: 'King size bed',
    amenities: [
      'Free Wi-Fi',
      'Air Conditioning',
      '24/7 Room Service',
      'Smart TV',
      'Premium Bathroom',
      'Luxury Toiletries',
      'Daily Housekeeping',
      'Mini Refrigerator',
      'In-room Dining',
      'Balcony Access'
    ],
    images: [
      '/Images/Rooms/5.avif',
      '/Images/Rooms/6.avif',
      '/Images/Rooms/7.avif',
      '/Images/Rooms/8.avif'
    ],
    features: [
      'Premium interior design',
      'Separate sitting area',
      'Executive work desk',
      'Walk-in wardrobe',
      'Electronic safe',
      'City view balcony',
      'Premium bedding',
      'Marble bathroom'
    ]
  },
  suite: {
    title: 'Deluxe Room',
    price: '₹7,600',
    originalPrice: '₹8,500',
    description: 'Luxurious rooms featuring separate living areas and premium amenities for the discerning traveler. AC rooms: ₹7,600/night, Non-AC rooms: ₹6,800/night.',
    area: '500 sq ft',
    occupancy: '4 guests',
    bedType: 'King size bed + Sofa bed',
    amenities: [
      'Free High-Speed Wi-Fi',
      'Central Air Conditioning',
      '24/7 Butler Service',
      'Smart TV',
      'Luxury Bathroom with Bathtub',
      'Premium Spa Toiletries',
      'Twice Daily Housekeeping',
      'In-room Dining Service',
      'Private Balcony',
      'Business Center Access',
      'Complimentary Breakfast'
    ],
    images: [
      '/Images/Rooms/9.avif',
      '/Images/Rooms/10.avif',
      '/Images/Rooms/11.avif',
      '/Images/Rooms/12.avif'
    ],
    features: [
      'Separate living and bedroom',
      'Executive lounge access',
      'Premium work station',
      'Walk-in closet',
      'Digital safe',
      'Panoramic city views',
      'Egyptian cotton linens',
      'Marble bathroom with jacuzzi',
      'Complimentary airport transfer',
      'Late checkout privileges'
    ]
  },
  '3bed': {
    title: '3-Bed Room',
    price: '₹10,200',
    originalPrice: '₹11,500',
    description: 'The pinnacle of luxury with opulent furnishings, premium services, and exclusive amenities. AC rooms: ₹10,200/night, Non-AC rooms: ₹9,000/night.',
    area: '750 sq ft',
    occupancy: '6 guests',
    bedType: 'King size bed + Queen size bed',
    amenities: [
      'Free Premium Wi-Fi',
      'Climate Control System',
      'Personal Butler Service',
      'Smart TV with Premium Channels',
      'Luxury Spa Bathroom',
      'Designer Toiletries',
      'Personalized Housekeeping',
      'Private Chef Service Available',
      'Large Private Terrace',
      'Business Concierge',
      'Complimentary Gourmet Breakfast'
    ],
    images: [
      '/Images/Rooms/13.avif',
      '/Images/Rooms/14.avif',
      '/Images/Rooms/15.avif',
      '/Images/Rooms/16.avif'
    ],
    features: [
      'Master bedroom with en-suite',
      'Separate guest bedroom',
      'Formal dining area',
      'Premium entertainment center',
      'Walk-in dressing room',
      'Private terrace with garden view',
      'Italian marble flooring',
      'Gold-plated fixtures',
      'Personal concierge service',
      'Exclusive rooftop access',
      'Premium location with best views',
      'Customizable room service menu'
    ]
  }
}

export default function RoomPage() {
  const params = useParams()
  const roomType = params.type as string
  const [selectedImage, setSelectedImage] = useState(0)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const room = roomTypes[roomType as keyof typeof roomTypes]

  if (!room) {
    notFound()
  }

  const handleBooking = () => {
    setIsBookingOpen(true)
    // You can integrate with a booking system here
    window.open(`mailto:hoteladityamysore@gmail.com?subject=Room Booking Inquiry - ${room.title}&body=I would like to book a ${room.title} at Hotel Aditya Mysore. Please provide availability and booking details.`)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-neutral-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/rooms" 
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Rooms
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={room.images[selectedImage]}
                alt={`${room.title} - Image ${selectedImage + 1}`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {selectedImage + 1} / {room.images.length}
              </div>
            </div>
            
            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-2">
              {room.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index 
                      ? 'border-gold-500 ring-2 ring-gold-200' 
                      : 'border-neutral-200 hover:border-gold-300'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${room.title} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Room Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-4">
                {room.title}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <span className="text-neutral-600">Luxury Accommodation</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {room.description}
              </p>
            </div>

            {/* Room Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-neutral-50 rounded-lg">
                <Square className="mx-auto mb-2 text-gold-600" size={24} />
                <div className="text-sm text-neutral-600">Area</div>
                <div className="font-semibold">{room.area}</div>
              </div>
              <div className="text-center p-4 bg-neutral-50 rounded-lg">
                <Users className="mx-auto mb-2 text-gold-600" size={24} />
                <div className="text-sm text-neutral-600">Occupancy</div>
                <div className="font-semibold">{room.occupancy}</div>
              </div>
              <div className="text-center p-4 bg-neutral-50 rounded-lg">
                <Bed className="mx-auto mb-2 text-gold-600" size={24} />
                <div className="text-sm text-neutral-600">Bed Type</div>
                <div className="font-semibold">{room.bedType}</div>
              </div>
              <div className="text-center p-4 bg-neutral-50 rounded-lg">
                <Bath className="mx-auto mb-2 text-gold-600" size={24} />
                <div className="text-sm text-neutral-600">Bathroom</div>
                <div className="font-semibold">En-suite</div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-r from-gold-50 to-gold-100 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-3xl font-bold text-neutral-800">
                    {room.price}
                    <span className="text-lg font-normal text-neutral-600">/night</span>
                  </div>
                  {room.originalPrice && (
                    <div className="text-neutral-500 line-through">
                      {room.originalPrice}
                    </div>
                  )}
                </div>
                <div className="text-sm text-green-700 bg-green-100 px-3 py-1 rounded-full">
                  Best Rate Guaranteed
                </div>
              </div>
              <button
                onClick={handleBooking}
                className="w-full bg-gold-600 hover:bg-gold-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                Book Now
                <ArrowRight size={20} />
              </button>
              <p className="text-xs text-neutral-600 mt-2 text-center">
                Free cancellation • Pay at hotel
              </p>
            </div>
          </div>
        </div>

        {/* Amenities & Features */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Amenities */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-neutral-800 mb-6">
              Room Amenities
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {room.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                  <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                  <span className="text-neutral-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-neutral-800 mb-6">
              Special Features
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {room.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                  <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                  <span className="text-neutral-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hotel Info */}
        <div className="mt-16 bg-neutral-900 text-white p-8 rounded-2xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <MapPin className="text-gold-400" size={32} />
              <div>
                <h3 className="font-semibold mb-1">Unbeatable Location</h3>
                <p className="text-neutral-300 text-sm">2-min walk to Railway Station & Palace</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Wifi className="text-gold-400" size={32} />
              <div>
                <h3 className="font-semibold mb-1">Free Wi-Fi</h3>
                <p className="text-neutral-300 text-sm">High-speed internet throughout</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ParkingIcon className="text-gold-400" size={32} />
              <div>
                <h3 className="font-semibold mb-1">Free Parking</h3>
                <p className="text-neutral-300 text-sm">Secure on-site parking available</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-serif font-bold text-neutral-800 mb-4">
            Ready to Experience Luxury?
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Book your stay at Hotel Aditya Mysore and discover the perfect blend of comfort, luxury, and traditional hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBooking}
              className="bg-gold-600 hover:bg-gold-700 text-white py-3 px-8 rounded-lg font-semibold transition-colors"
            >
              Book This Room
            </button>
            <Link
              href="/contact"
              className="border border-gold-600 text-gold-600 hover:bg-gold-50 py-3 px-8 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
