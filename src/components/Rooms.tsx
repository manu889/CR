'use client'

import { useState } from 'react'
import { Wifi, Car, Coffee, Tv, Bath, Bed, Users, Star, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Rooms = () => {
  const [activeRoom, setActiveRoom] = useState(0)

  const rooms = [
    {
      id: 'superior',
      name: "Superior Room",
      price: "₹8,300",
      originalPrice: "₹9,500",
      image: "/Images/Rooms/1.avif",
      images: [
        "/Images/Rooms/1.avif",
        "/Images/Rooms/2.avif",
        "/Images/Rooms/3.avif"
      ],
      capacity: "6 Guests",
      size: "750 sq ft",
      description: "The pinnacle of luxury with opulent furnishings, premium services, and exclusive amenities. AC rooms: ₹8,300/night, Non-AC rooms: ₹7,500/night.",
      amenities: ["Butler Service", "Premium Wi-Fi", "Smart TV", "Terrace"],
      features: [
        { icon: <Wifi size={20} />, text: "Premium Wi-Fi" },
        { icon: <Tv size={20} />, text: "Smart TV" },
        { icon: <Coffee size={20} />, text: "Mini Fridge" },
        { icon: <Bath size={20} />, text: "Premium Bath" }
      ]
    },
    {
      id: 'suite',
      name: "Deluxe Room",
      price: "₹7,600",
      originalPrice: "₹8,500",
      image: "/Images/Rooms/2.avif",
      images: [
        "/Images/Rooms/10.avif",
        "/Images/Rooms/11.avif",
        "/Images/Rooms/12.avif"
      ],
      capacity: "4 Guests",
      size: "500 sq ft",
      description: "Luxurious rooms featuring separate living areas and premium amenities for the discerning traveler. AC rooms: ₹7,600/night, Non-AC rooms: ₹6,800/night.",
      amenities: ["Butler Service", "High-Speed Wi-Fi", "Smart TV", "Business Center", "Balcony"],
      features: [
        { icon: <Wifi size={20} />, text: "High-Speed Wi-Fi" },
        { icon: <Tv size={20} />, text: "Smart TV" },
        { icon: <Coffee size={20} />, text: "Mini Fridge" },
        { icon: <Bath size={20} />, text: "Luxury Bath" }
      ]
    },
    {
      id: '3bed',
      name: "3-Bed Room",
      price: "₹10,200",
      originalPrice: "₹11,500",
      image: "/Images/Rooms/20.avif",
      images: [
        "/Images/Rooms/20.avif",
        "/Images/Rooms/21.avif",
        "/Images/Rooms/22.avif"
      ],
      capacity: "3 Guests",
      size: "350 sq ft",
      description: "Spacious rooms with premium amenities and elegant furnishings for a comfortable stay. AC rooms: ₹10,200/night, Non-AC rooms: ₹9,000/night.",
      amenities: ["Free Wi-Fi", "AC", "Smart TV", "Mini Fridge", "Room Service", "Premium Bathroom", "Balcony"],
      features: [
        { icon: <Wifi size={20} />, text: "Free Wi-Fi" },
        { icon: <Tv size={20} />, text: "Smart TV" },
        { icon: <Coffee size={20} />, text: "Mini Fridge" },
        { icon: <Bath size={20} />, text: "Premium Bath" }
      ]
    },
    {
      id: 'standard',
      name: "Standard Room",
      price: "₹5,300",
      originalPrice: "₹6,200",
      image: "/Images/Rooms/4.avif",
      images: [
        "/Images/Rooms/5.avif",
        "/Images/Rooms/6.avif",
        "/Images/Rooms/7.avif"
      ],
      capacity: "2 Guests",
      size: "250 sq ft",
      description: "Comfortable and well-appointed rooms designed for the budget-conscious traveler seeking quality accommodation. AC rooms: ₹5,300/night, Non-AC rooms: ₹4,500/night.",
      amenities: ["Free Wi-Fi", "AC", "Smart TV", "Room Service", "Daily Housekeeping"],
      features: [
        { icon: <Wifi size={20} />, text: "Free Wi-Fi" },
        { icon: <Tv size={20} />, text: "Smart TV" },
        { icon: <Car size={20} />, text: "Parking" },
        { icon: <Bath size={20} />, text: "Private Bath" }
      ]
    }
  ]

  return (
    <section id="rooms" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-section">
          <h2 className="section-title">
            <span className="text-reveal">
              <span className="text-reveal-inner">Rooms & Suites</span>
            </span>
          </h2>
          <p className="section-subtitle">
            Choose from our 21 carefully designed accommodations, each offering comfort, elegance, and modern amenities.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start stagger-item">
          {rooms.map((room, index) => (
            <div 
              key={room.id}
              id={`room-${room.id}`}
              className="stagger-child bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Room Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                
                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save 16%
                </div>
                
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star size={16} className="fill-gold-400 text-gold-400" />
                  <span className="text-sm font-semibold">4.8</span>
                </div>
              </div>

              {/* Room Content */}
              <div className="p-6">
                {/* Room Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="card-title">{room.name}</h3>
                    <div className="flex items-center gap-4 caption-medium">
                      <span className="flex items-center gap-1">
                        <Users size={16} />
                        {room.capacity}
                      </span>
                      <span className="flex items-center gap-1">
                        <Bed size={16} />
                        {room.size}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="heading-3 text-gold-600">{room.price}</div>
                    <div className="caption-small text-neutral-500 line-through">{room.originalPrice}</div>
                    <div className="caption-small">per night</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-neutral-600 mb-4 leading-relaxed">{room.description}</p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="text-gold-500">{feature.icon}</span>
                      {feature.text}
                    </div>
                  ))}
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-800 mb-2">Amenities</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity, idx) => (
                      <span key={idx} className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-xs">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex-1 btn-primary text-center"
                  >
                    Book Now
                  </button>
                  <Link 
                    href={`/rooms/${room.id}`}
                    className="flex-1 btn-secondary text-center inline-flex items-center justify-center gap-2"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 reveal-section">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-neutral-800 mb-4">
              Can't Find the Perfect Room?
            </h3>
            <p className="text-neutral-600 mb-6">
              Our team is here to help you find the ideal accommodation for your stay. 
              Contact us for personalized recommendations and special packages.
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rooms
