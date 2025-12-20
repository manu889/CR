'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronDown, Star, MapPin, Calendar, Users, Phone } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isClient, setIsClient] = useState(false)
  
  const heroImages = [
    {
      src: '/Images/Enterance/Outdoor.avif',
      alt: 'Aditya Hotel Mysore Exterior',
      title: 'Welcome to Luxury'
    },
    {
      src: '/Images/Reception/1.avif', 
      alt: 'Elegant Hotel Lobby',
      title: 'Elegant Interiors'
    },
    {
      src: '/Images/Common Area/1.avif',
      alt: 'Beautiful Hotel Common Area',
      title: 'Premium Comfort'
    }
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }, [heroImages.length])

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return
    
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide, isClient])

  const scrollToNext = () => {
    if (typeof window === 'undefined') return
    
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative overflow-hidden min-h-screen md:h-[calc(100vh-96px)] md:mt-24 mt-16 pt-8 md:pt-0">
      {/* Background Images with Enhanced Animation */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-center"
              priority={index === 0}
              quality={90}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
            {/* Dynamic Gradient Overlay - Significantly increased opacity for better visibility */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/75" />
          </div>
        ))}
      </div>

      {/* Floating Elements - Hidden on mobile for cleaner look */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-gold-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-16 w-1 h-1 bg-white rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-gold-500 rounded-full animate-bounce opacity-30"></div>
      </div>

      {/* Main Hero Content - Mobile Optimized */}
      <div className="relative z-20 h-full flex items-center py-8 md:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[85vh] md:min-h-[80vh]">
            
            {/* Left Column - Content - Mobile Optimized */}
            <div className="text-white text-center lg:text-left order-1 lg:order-1">
              {/* Animated Badge - Mobile Responsive */}
              <div className={`mb-6 md:mb-8 transform transition-all duration-1000 ${
                isClient ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="inline-flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-xl rounded-full px-4 md:px-6 py-2 md:py-3 border border-white/20 text-xs md:text-sm">
                  <MapPin size={16} className="text-gold-400 md:w-[18px] md:h-[18px]" />
                  <span className="font-medium">Heritage City • Mysore</span>
                  <div className="flex items-center gap-1">
                    <Star size={12} className="fill-gold-400 text-gold-400 md:w-[14px] md:h-[14px]" />
                    <span className="text-xs">4.8/5</span>
                  </div>
                </div>
              </div>

              {/* Main Title - Mobile Optimized Font Sizes */}
              <div className={`mb-6 md:mb-8 transform transition-all duration-1200 delay-300 ${
                isClient ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <h1 className="display-2">
                  <span className="block text-white/90 mb-2">Experience</span>
                  <span className="block text-gold-gradient">
                    Aditya Hotel
                  </span>
                  <span className="block heading-2 mt-3 md:mt-4 text-white/80 font-light">
                    Mysore
                  </span>
                </h1>
              </div>

              {/* Subtitle - Mobile Optimized */}
              <div className={`mb-6 md:mb-8 transform transition-all duration-1400 delay-500 ${
                isClient ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <p className="body-medium text-white/90 max-w-xl mx-auto lg:mx-0 font-light">
                  Where royal heritage meets contemporary luxury in the heart of Karnataka's cultural capital. Experience unmatched hospitality and comfort.
                </p>
              </div>

              {/* CTA Buttons - Mobile Optimized */}
              <div className={`mb-6 md:mb-8 transform transition-all duration-1600 delay-700 ${
                isClient ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-6 justify-center lg:justify-start">
                  <button 
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/25 transform hover:scale-105 button-medium"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Calendar size={18} className="md:w-5 md:h-5" />
                      Reserve Your Stay
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <button 
                    onClick={() => document.querySelector('#rooms')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group px-6 md:px-8 py-3 md:py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    <Users size={18} className="md:w-5 md:h-5" />
                    Explore Rooms
                  </button>
                </div>

                {/* Quick Contact - Mobile Optimized */}
                <div className="flex items-center gap-3 md:gap-4 justify-center lg:justify-start">
                  <a 
                    href="tel:09845092115"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-gold-400 transition-colors group text-sm md:text-base"
                  >
                    <Phone size={16} className="group-hover:animate-bounce md:w-[18px] md:h-[18px]" />
                    <span className="font-medium">098450 92115</span>
                  </a>
                  <span className="text-white/50">|</span>
                  <span className="text-xs md:text-sm text-white/70">24/7 Front Desk</span>
                </div>
              </div>
            </div>

            {/* Right Column - Features & Info - Mobile Optimized */}
            <div className={`transform transition-all duration-1800 delay-900 order-2 lg:order-2 ${
              isClient ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/20">
                <h3 className="heading-3 text-white mb-4 md:mb-6 text-center lg:text-left">Why Choose Aditya Hotel?</h3>
                
                <div className="space-y-4 md:space-y-6">
                  {/* Feature 1 */}
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Star size={20} className="text-white md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="feature-title text-white">Premium Accommodation</h4>
                      <p className="caption-medium text-white/70">Luxurious rooms with modern amenities and elegant furnishing</p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-white md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="feature-title text-white">Prime Location</h4>
                      <p className="caption-medium text-white/70">2-minute walk from Railway Station, Palace & Jagan Mohan Palace</p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-white md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm md:text-base">24/7 Service</h4>
                      <p className="text-white/70 text-xs md:text-sm">Round-the-clock concierge and room service available</p>
                    </div>
                  </div>
                </div>

                {/* Quick Stats - Mobile Optimized */}
                <div className="grid grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-lg md:text-xl font-bold text-gold-400 mb-1">21</div>
                    <div className="text-xs text-white/70 uppercase tracking-wider">Rooms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg md:text-xl font-bold text-gold-400 mb-1">4.8★</div>
                    <div className="text-xs text-white/70 uppercase tracking-wider">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg md:text-xl font-bold text-gold-400 mb-1">24/7</div>
                    <div className="text-xs text-white/70 uppercase tracking-wider">Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - Mobile Optimized */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/60 text-xs uppercase tracking-wider mb-2 hidden md:block">Discover More</span>
        <button 
          onClick={scrollToNext}
          className="text-white hover:text-gold-400 transition-colors animate-bounce group"
        >
          <ChevronDown size={24} className="group-hover:scale-125 transition-transform md:w-8 md:h-8" />
        </button>
      </div>

      {/* Modern Slide Indicators - Mobile Optimized */}
      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 flex flex-col gap-2 md:gap-3">
        {heroImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1 h-6 md:h-8 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'bg-gold-400 shadow-lg shadow-gold-400/50' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
        <div className="mt-1 md:mt-2 text-white/60 text-xs text-center">
          {currentSlide + 1}/{heroImages.length}
        </div>
      </div>

      {/* Current Slide Title - Hidden on mobile */}
      <div className="absolute top-1/4 left-4 md:left-8 transform -rotate-90 origin-left hidden md:block">
        <span className="text-white/40 text-xs uppercase tracking-[0.3em] font-light">
          {heroImages[currentSlide]?.title}
        </span>
      </div>
    </section>
  )
}

export default Hero
