'use client'

import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isClient, setIsClient] = useState(false)

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'rooms', name: 'Rooms' },
    { id: 'facilities', name: 'Facilities' },
    { id: 'exterior', name: 'Exterior' }
  ]

  const galleryImages = [
    {
      id: 1,
      src: '/Images/Enterance/Outdoor.avif',
      alt: 'Hotel Exterior View',
      category: 'exterior',
      title: 'Hotel Exterior'
    },
    {
      id: 2,
      src: '/Images/Rooms/1.avif',
      alt: 'Superior Room Interior',
      category: 'rooms',
      title: 'Superior Room'
    },
    {
      id: 3,
      src: '/Images/Rooms/10.avif',
      alt: 'Suite Room',
      category: 'rooms',
      title: 'Suite Room'
    },
    {
      id: 4,
      src: '/Images/Rooms/20.avif',
      alt: '3-Bed Room',
      category: 'rooms',
      title: '3-Bed Room'
    },
    {
      id: 5,
      src: '/Images/Rooms/5.avif',
      alt: 'Standard Room',
      category: 'rooms',
      title: 'Standard Room'
    },
    {
      id: 6,
      src: '/Images/Rooms/15.avif',
      alt: 'Premium Room',
      category: 'rooms',
      title: 'Premium Room'
    },
    {
      id: 7,
      src: '/Images/Rooms/8.avif',
      alt: 'Family Suite',
      category: 'rooms',
      title: 'Family Suite'
    },
    {
      id: 8,
      src: '/Images/Reception/1.avif',
      alt: 'Hotel Reception',
      category: 'facilities',
      title: 'Reception Area'
    },
    {
      id: 9,
      src: '/Images/Reception/2.avif',
      alt: 'Hotel Lobby',
      category: 'facilities',
      title: 'Lobby Area'
    },
    {
      id: 10,
      src: '/Images/Common Area/1.avif',
      alt: 'Common Area',
      category: 'facilities',
      title: 'Common Area'
    },
    {
      id: 11,
      src: '/Images/Common Area/2.avif',
      alt: 'Lounge Area',
      category: 'facilities',
      title: 'Lounge Area'
    },
    {
      id: 12,
      src: '/Images/Common Area/3.avif',
      alt: 'Relaxation Area',
      category: 'facilities',
      title: 'Relaxation Area'
    },
    {
      id: 13,
      src: '/Images/Enterance/Outdoor-2.avif',
      alt: 'Hotel Entrance',
      category: 'exterior',
      title: 'Hotel Entrance'
    },
    {
      id: 14,
      src: '/Images/Washroom/1.avif',
      alt: 'Premium Washroom',
      category: 'facilities',
      title: 'Premium Washroom'
    },
    {
      id: 15,
      src: '/Images/Washroom/2.avif',
      alt: 'Luxury Bathroom',
      category: 'facilities',
      title: 'Luxury Bathroom'
    },
    {
      id: 16,
      src: '/Images/Rooms/2.avif',
      alt: 'Room Interior',
      category: 'rooms',
      title: 'Room Interior'
    },
    {
      id: 17,
      src: '/Images/Rooms/11.avif',
      alt: 'Suite Living Area',
      category: 'rooms',
      title: 'Suite Living Area'
    },
    {
      id: 18,
      src: '/Images/Rooms/16.avif',
      alt: 'Premium Room View',
      category: 'rooms',
      title: 'Premium Room View'
    },
    {
      id: 19,
      src: '/Images/Washroom/8.jpg',
      alt: 'Elegant Bathroom',
      category: 'facilities',
      title: 'Elegant Bathroom'
    }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    setLightboxOpen(true)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden'
    }
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto'
    }
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % filteredImages.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  }

  // Initialize client state
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Keyboard navigation and escape handling
  useEffect(() => {
    if (!isClient) return
    
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      
      e.preventDefault()
      
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowRight') {
        nextImage()
      } else if (e.key === 'ArrowLeft') {
        prevImage()
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (lightboxOpen && target.classList.contains('lightbox-backdrop')) {
        closeLightbox()
      }
    }

    if (lightboxOpen) {
      document.addEventListener('keydown', handleKeyPress)
      document.addEventListener('click', handleClickOutside)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'auto'
    }
  }, [lightboxOpen, isClient])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'auto'
      }
    }
  }, [])

  return (
    <section id="gallery" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-section">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-800 mb-6">
            <span className="text-reveal">
              <span className="text-reveal-inner">Gallery</span>
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Explore our beautiful spaces and discover what makes Aditya Hotel a special place to stay.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 reveal-section">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gold-500 text-white shadow-lg'
                  : 'bg-white text-neutral-700 hover:bg-gold-100 hover:text-gold-700 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 stagger-item">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="stagger-child group relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <Expand size={32} className="mx-auto mb-2" />
                  <h4 className="font-semibold">{image.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Virtual Tour CTA */}
        <div className="text-center mt-16 reveal-section">
          <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Explore Our Complete Gallery
            </h3>
            <p className="mb-6 opacity-90">
              View all our photos with detailed categories and high-resolution images in our dedicated gallery page.
            </p>
            <Link 
              href="/gallery"
              className="inline-block bg-white text-gold-600 px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="lightbox-backdrop fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeLightbox()
            }
          }}
        >
          <div className="relative max-w-5xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white hover:text-gold-400 transition-colors bg-black/50 rounded-full p-2"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gold-400 transition-colors bg-black/50 rounded-full p-2"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gold-400 transition-colors bg-black/50 rounded-full p-2"
                  aria-label="Next image"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            {/* Image Container */}
            <div className="relative w-full max-w-4xl max-h-[80vh] aspect-video">
              <Image
                src={filteredImages[selectedImage]?.src || ''}
                alt={filteredImages[selectedImage]?.alt || ''}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white bg-black/50 rounded-lg px-4 py-2">
              <h4 className="text-lg font-semibold mb-1">{filteredImages[selectedImage]?.title}</h4>
              <p className="text-sm opacity-75">
                {selectedImage + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
