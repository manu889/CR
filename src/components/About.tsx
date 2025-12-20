'use client'

import { Heart, MapPin, Star, Shield } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  const features = [
    {
      icon: <MapPin className="w-8 h-8 text-gold-500" />,
      title: "Unbeatable Location",
      description: "Just 2-minute walk from Mysore Railway Station, Mysore Palace, and Jagan Mohan Palace."
    },
    {
      icon: <Star className="w-8 h-8 text-gold-500" />,
      title: "Luxury Comfort",
      description: "Premium accommodations with modern amenities and elegant traditional design."
    },
    {
      icon: <Heart className="w-8 h-8 text-gold-500" />,
      title: "Warm Hospitality",
      description: "Genuine care and personalized service that makes every guest feel like family."
    },
    {
      icon: <Shield className="w-8 h-8 text-gold-500" />,
      title: "Trusted Excellence",
      description: "15+ years of consistent quality and guest satisfaction in Mysore's hospitality."
    }
  ]

  return (
    <>
      {/* Hero Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="reveal-section">
              <div className="mb-6 md:mb-8">
                <span className="caption-large bg-gold-100 text-gold-800 rounded-full px-4 py-2 mb-4 inline-block">
                  Since 2008
                </span>
                <h2 className="heading-1 text-left mb-4 md:mb-6">
                  A Legacy of Exceptional Hospitality
                </h2>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                <p className="body-medium">
                  Aditya Hotel was born from a vision to create something extraordinary in the heart of Mysore. 
                  What started as a dream to offer authentic Karnataka hospitality has grown into one of the 
                  city's most beloved hotels.
                </p>
                <p className="body-medium">
                  Located just minutes from the iconic Mysore Palace, we've been welcoming travelers from 
                  around the world, each time striving to exceed expectations with our blend of traditional 
                  warmth and modern luxury.
                </p>
                <p className="body-medium">
                  Today, we're proud to be a part of countless memorable journeys, celebrations, and business 
                  successes, continuing our commitment to making every stay extraordinary.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8">
                <button className="btn-primary button-medium">
                  Explore Our Rooms
                </button>
                <button className="btn-secondary button-medium">
                  View Gallery
                </button>
              </div>
            </div>

            {/* Four Images Grid */}
            <div className="reveal-section">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-3 md:space-y-4">
                  <div className="aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/Images/Reception/1.avif"
                      alt="Hotel Reception"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/Images/Common Area/2.avif"
                      alt="Hotel Lounge"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4 mt-6 md:mt-8">
                  <div className="aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/Images/Rooms/1.avif"
                      alt="Luxury Room"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/Images/Enterance/Outdoor.avif"
                      alt="Hotel Exterior"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Highlights Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gold-50 to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal-section">
            <h2 className="heading-1 mb-6">
              Perfect Location in the Heart of Mysore
            </h2>
            <p className="body-medium text-neutral-600 max-w-3xl mx-auto">
              Located at No. 1458/1, NS Road, Devaraja Mohalla, near Sapna Book House, our hotel offers unmatched convenience with everything within walking distance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 reveal-section">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="heading-4 mb-3">Mysore Railway Station</h3>
              <p className="caption-medium text-neutral-600">Just 2-minute walk to the main railway station for convenient arrivals and departures</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="heading-4 mb-3">Mysore Palace</h3>
              <p className="caption-medium text-neutral-600">2-minute walk to the iconic Mysore Palace, the crown jewel of Karnataka's heritage</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="heading-4 mb-3">Jagan Mohan Palace</h3>
              <p className="caption-medium text-neutral-600">2-minute walk to the historic Jagan Mohan Palace and art gallery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Why Choose Us - Redesigned */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 reveal-section">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-neutral-800 mb-6">
              Why Choose Aditya Hotel
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of tradition, luxury, and modern convenience
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-white to-neutral-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 reveal-section border border-neutral-100 overflow-hidden"
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full -translate-y-10 translate-x-10 opacity-50 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Icon */}
                <div className="relative z-10 flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-bold text-neutral-800 mb-4 group-hover:text-gold-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-gold-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Additional CTA Section */}
          <div className="text-center mt-12 reveal-section">
            <div className="inline-flex items-center gap-2 text-gold-600 font-medium">
              <Star className="w-5 h-5 fill-gold-400" />
              <span>Rated 4.8/5 by our guests</span>
              <Star className="w-5 h-5 fill-gold-400" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-section">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-neutral-800 mb-6">
            Ready to Experience Aditya Hotel?
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied guests who have made Aditya Hotel their home in Mysore
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              Book Your Stay
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Contact Us
            </button>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default About
