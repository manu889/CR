'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, ChevronDown, MapPin, Star, Calendar, Camera, Bed, Coffee, Car } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { animateNavbar } from '@/lib/animations'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
      animateNavbar(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (href: string, isExternal: boolean) => {
    if (isExternal) {
      // Handle hash navigation for sections on home page
      if (window.location.pathname !== '/') {
        router.push('/' + href)
      } else {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    } else {
      // Handle regular page navigation
      router.push(href)
    }
    setIsOpen(false)
    setActiveDropdown(null)
  }

  const megaMenuData = {
    rooms: {
      title: 'Rooms & Accommodation',
      sections: [
        {
          title: 'Room Types',
          links: [
            { href: '/rooms', label: 'All Rooms', icon: <Bed size={16} /> },
            { href: '/rooms', label: 'Superior Room', icon: <Star size={16} /> },
            { href: '/rooms', label: 'Suite Room', icon: <Coffee size={16} /> },
            { href: '/rooms', label: '3-Bed Room', icon: <Star size={16} /> },
            { href: '/rooms', label: 'Standard Room', icon: <Bed size={16} /> }
          ]
        },
        {
          title: 'Amenities',
          links: [
            { href: '/rooms', label: 'Room Features', icon: <Coffee size={16} /> },
            { href: '/gallery?filter=facilities', label: 'Hotel Facilities', icon: <Star size={16} /> },
            { href: '/contact', label: 'Special Requests', icon: <Phone size={16} /> }
          ]
        }
      ],
      featured: {
        image: '/Images/Rooms/1.avif',
        title: 'Superior Room',
        description: 'Experience luxury with premium amenities',
        price: '₹8,500/night',
        link: '/rooms'
      }
    },
    experiences: {
      title: 'Experiences & Gallery',
      sections: [
        {
          title: 'Explore',
          links: [
            { href: '/gallery', label: 'Photo Gallery', icon: <Camera size={16} /> },
            { href: '/gallery?filter=rooms', label: 'Room Gallery', icon: <Bed size={16} /> },
            { href: '/gallery?filter=facilities', label: 'Facilities', icon: <Star size={16} /> },
            { href: '/gallery?filter=exterior', label: 'Hotel Exterior', icon: <MapPin size={16} /> }
          ]
        },
        {
          title: 'Services',
          links: [
            { href: '/about', label: 'Heritage Story', icon: <MapPin size={16} /> },
            { href: '/contact', label: 'Concierge Service', icon: <Phone size={16} /> },
            { href: '/contact', label: 'Book Direct', icon: <Calendar size={16} /> }
          ]
        }
      ],
      featured: {
        image: '/Images/Common Area/1.avif',
        title: 'Explore Our Gallery',
        description: 'Discover the beauty of Aditya Hotel',
        price: 'View Gallery',
        link: '/gallery'
      }
    }
  }

  const navItems = [
    { href: '/', label: 'Home', isExternal: false, hasDropdown: false },
    { href: '/about', label: 'About', isExternal: false, hasDropdown: false },
    { href: '/rooms', label: 'Rooms', isExternal: false, hasDropdown: true, dropdownKey: 'rooms' },
    { href: '/gallery', label: 'Gallery', isExternal: false, hasDropdown: true, dropdownKey: 'experiences' },
    { href: '/contact', label: 'Contact', isExternal: false, hasDropdown: false }
  ]

  return (
    <>
      {/* Top bar with contact info */}
      <div className="fixed w-full top-0 z-40 bg-neutral-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-6">
            <div className="flex items-center gap-1 md:gap-2">
              <Phone size={12} className="md:w-[14px] md:h-[14px]" />
              <span className="text-xs md:text-sm">098450 92115</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 md:gap-2">
              <Mail size={12} className="md:w-[14px] md:h-[14px]" />
              <span className="text-xs md:text-sm">hoteladityamysore@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-xs md:text-sm">Welcome to Aditya Hotel Mysore</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="fixed w-full top-[40px] z-50 transition-all duration-300 bg-white/95 backdrop-blur-lg border-b border-neutral-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 md:h-16">{/* Logo */}
            <div className="flex-shrink-0">
              <Link 
                href="/"
                className="flex items-center hover:opacity-90 transition-opacity"
              >
                <Image
                  src="/logo.png"
                  alt="Aditya Hotel Mysore"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <div 
                    key={item.href}
                    className="relative group"
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.dropdownKey || null)}
                    onMouseLeave={() => item.hasDropdown && setTimeout(() => setActiveDropdown(null), 300)}
                  >
                    <button
                      onClick={() => handleNavigation(item.href, item.isExternal)}
                      className="flex items-center gap-1 text-neutral-800 hover:text-gold-600 px-3 py-2 text-sm font-semibold transition-colors duration-200 relative"
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${
                            activeDropdown === item.dropdownKey ? 'rotate-180' : ''
                          }`} 
                        />
                      )}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full"></span>
                    </button>

                    {/* Mega Menu Dropdown */}
                    {item.hasDropdown && activeDropdown === item.dropdownKey && (
                      <div 
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-screen max-w-5xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-50"
                        onMouseEnter={() => setActiveDropdown(item.dropdownKey || null)}
                        onMouseLeave={() => setTimeout(() => setActiveDropdown(null), 200)}
                      >
                        <div className="p-8">
                          <h3 className="text-2xl font-serif font-bold text-neutral-800 mb-6">
                            {megaMenuData[item.dropdownKey as keyof typeof megaMenuData].title}
                          </h3>
                          
                          <div className="grid grid-cols-4 gap-8">
                            {/* Menu Sections */}
                            {megaMenuData[item.dropdownKey as keyof typeof megaMenuData].sections.map((section, index) => (
                              <div key={index} className="space-y-4">
                                <h4 className="font-semibold text-neutral-800 text-sm uppercase tracking-wider border-b border-neutral-200 pb-2">
                                  {section.title}
                                </h4>
                                <ul className="space-y-3">
                                  {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                      <button
                                        onClick={() => handleNavigation(link.href, false)}
                                        className="flex items-center gap-3 text-neutral-600 hover:text-gold-600 transition-colors text-sm group w-full text-left py-2 px-3 rounded-lg hover:bg-gold-50"
                                      >
                                        <span className="text-gold-500 group-hover:text-gold-600 transition-colors">
                                          {link.icon}
                                        </span>
                                        {link.label}
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}

                            {/* Featured Section */}
                            <div className="bg-gradient-to-br from-neutral-50 to-gold-50 rounded-xl p-6">
                              <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                                <Image
                                  src={megaMenuData[item.dropdownKey as keyof typeof megaMenuData].featured.image}
                                  alt={megaMenuData[item.dropdownKey as keyof typeof megaMenuData].featured.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <h5 className="font-semibold text-neutral-800 mb-2">
                                {megaMenuData[item.dropdownKey as keyof typeof megaMenuData].featured.title}
                              </h5>
                              <p className="text-neutral-600 text-sm mb-3">
                                {megaMenuData[item.dropdownKey as keyof typeof megaMenuData].featured.description}
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-gold-600 font-semibold">
                                  {megaMenuData[item.dropdownKey as keyof typeof megaMenuData].featured.price}
                                </span>
                                <button
                                  onClick={() => handleNavigation(megaMenuData[item.dropdownKey as keyof typeof megaMenuData].featured.link, false)}
                                  className="text-xs bg-gold-600 text-white px-3 py-1 rounded-full hover:bg-gold-700 transition-colors"
                                >
                                  View
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Book Now Button */}
            <div className="hidden md:block">
              <Link 
                href="/contact"
                className="btn-primary flex items-center gap-2"
              >
                <Calendar size={16} />
                Book Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-neutral-700 hover:text-gold-600 transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-neutral-200 max-h-screen overflow-y-auto">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.href} className="space-y-2">
                  <button
                    onClick={() => handleNavigation(item.href, item.isExternal)}
                    className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-neutral-700 hover:text-gold-600 hover:bg-neutral-50 rounded-md transition-colors"
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && <ChevronDown size={16} />}
                  </button>

                  {/* Mobile Mega Menu */}
                  {item.hasDropdown && (
                    <div className="pl-6 space-y-3 bg-neutral-50 rounded-lg p-4">
                      {megaMenuData[item.dropdownKey as keyof typeof megaMenuData].sections.map((section, index) => (
                        <div key={index}>
                          <h4 className="font-semibold text-neutral-800 text-sm mb-2">{section.title}</h4>
                          <div className="space-y-2">
                            {section.links.map((link, linkIndex) => (
                              <button
                                key={linkIndex}
                                onClick={() => handleNavigation(link.href, false)}
                                className="flex items-center gap-2 text-neutral-600 hover:text-gold-600 transition-colors text-sm w-full text-left"
                              >
                                {link.icon}
                                {link.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <Link 
                href="/contact"
                className="w-full mt-6 btn-primary flex items-center justify-center gap-2"
              >
                <Calendar size={16} />
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
