'use client'

import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Download, Share2, Heart, ZoomIn } from 'lucide-react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Note: Metadata will be handled by layout or moved to separate file for client components

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState('all')
  const [isLoading, setIsLoading] = useState(true)

  const galleryImages = [
    // Rooms Category
    { src: '/Images/Rooms/1.avif', category: 'rooms', title: 'Superior Room', description: 'Luxurious accommodation with premium amenities' },
    { src: '/Images/Rooms/2.avif', category: 'rooms', title: 'Superior Interior', description: 'Elegant room design with modern comfort' },
    { src: '/Images/Rooms/3.avif', category: 'rooms', title: 'Suite Room', description: 'Spacious suite with contemporary furnishing' },
    { src: '/Images/Rooms/10.avif', category: 'rooms', title: 'Suite Room', description: 'Business-class accommodation' },
    { src: '/Images/Rooms/15.avif', category: 'rooms', title: 'Premium Bathroom', description: 'Premium bathroom amenities' },
    { src: '/Images/Rooms/20.avif', category: 'rooms', title: '3-Bed Room', description: 'Enhanced comfort for families' },
    
    // Common Areas
    { src: '/Images/Common Area/1.avif', category: 'common', title: 'Hotel Lobby', description: 'Welcoming reception area' },
    { src: '/Images/Common Area/2.avif', category: 'common', title: 'Lounge Area', description: 'Comfortable seating space' },
    { src: '/Images/Common Area/3.avif', category: 'common', title: 'Reading Corner', description: 'Quiet relaxation zone' },
    
    // Reception
    { src: '/Images/Reception/1.avif', category: 'reception', title: 'Front Desk', description: '24/7 guest services' },
    { src: '/Images/Reception/2.avif', category: 'reception', title: 'Reception Hall', description: 'Grand entrance hall' },
    { src: '/Images/Reception/3.avif', category: 'reception', title: 'Concierge Desk', description: 'Personalized guest assistance' },
    
    // Exterior
    { src: '/Images/Enterance/Outdoor.avif', category: 'exterior', title: 'Hotel Entrance', description: 'Majestic hotel facade' },
    { src: '/Images/Enterance/Outdoor-2.avif', category: 'exterior', title: 'Building Exterior', description: 'Modern architectural design' },
    
    // Facilities
    { src: '/Images/Washroom/1.avif', category: 'facilities', title: 'Premium Washroom', description: 'Luxury bathroom facilities' },
    { src: '/Images/Washroom/2.avif', category: 'facilities', title: 'Modern Bathroom', description: 'Contemporary bathroom design' },
    { src: '/Images/Washroom/3.avif', category: 'facilities', title: 'Spa Bathroom', description: 'Relaxing bathroom amenities' }
  ]

  const categories = [
    { id: 'all', name: 'All Photos', count: galleryImages.length },
    { id: 'rooms', name: 'Rooms & Suites', count: galleryImages.filter(img => img.category === 'rooms').length },
    { id: 'common', name: 'Common Areas', count: galleryImages.filter(img => img.category === 'common').length },
    { id: 'reception', name: 'Reception', count: galleryImages.filter(img => img.category === 'reception').length },
    { id: 'exterior', name: 'Exterior', count: galleryImages.filter(img => img.category === 'exterior').length },
    { id: 'facilities', name: 'Facilities', count: galleryImages.filter(img => img.category === 'facilities').length }
  ]

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'Escape') closeLightbox()
        if (e.key === 'ArrowRight') nextImage()
        if (e.key === 'ArrowLeft') prevImage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, nextImage, prevImage])

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-neutral-900 via-neutral-800 to-gold-900 overflow-hidden mt-[104px]">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Explore the elegance and luxury of Aditya Hotel through our curated collection of images
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-20 w-3 h-3 bg-gold-500 rounded-full animate-bounce opacity-30"></div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === category.id
                      ? 'bg-gold-600 text-white shadow-lg shadow-gold-600/25'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs">({category.count})</span>
                </button>
              ))}
            </div>
            
            {/* Results Count */}
            <div className="text-center text-neutral-600">
              Showing {filteredImages.length} of {galleryImages.length} photos
            </div>
          </div>

          {/* Loading State */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="aspect-square bg-neutral-200 rounded-xl animate-pulse"></div>
              ))}
            </div>
          ) : (
            /* Image Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-neutral-100 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                      <p className="text-xs text-white/80">{image.description}</p>
                    </div>
                    
                    {/* Hover Actions */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                        <ZoomIn size={16} className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
          <div className="relative h-full flex items-center justify-center p-4">
            
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-60 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-6 z-60 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-6 z-60 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* Image Container */}
            <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                fill
                className="object-contain"
                quality={100}
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-6 left-6 right-6 z-60 text-center text-white">
              <h3 className="text-xl font-semibold mb-2">{filteredImages[selectedImage].title}</h3>
              <p className="text-white/80 mb-4">{filteredImages[selectedImage].description}</p>
              
              {/* Action Buttons */}
              <div className="flex justify-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                  <Heart size={16} />
                  Like
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                  <Share2 size={16} />
                  Share
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                  <Download size={16} />
                  Download
                </button>
              </div>
              
              {/* Image Counter */}
              <div className="mt-4 text-sm text-white/60">
                {selectedImage + 1} of {filteredImages.length}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}
