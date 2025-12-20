'use client'

import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Rooms & Suites', href: '/rooms' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'Book Now', href: '/contact' }
  ]

  const services = [
    { name: 'Room Service', href: '/services/room-service' },
    { name: 'Concierge', href: '/contact' },
    { name: 'Laundry Service', href: '/contact' },
    { name: 'Airport Transfer', href: '/contact' },
    { name: 'Tour Packages', href: '/contact' },
    { name: 'Business Center', href: '/contact' }
  ]

  const policies = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Cancellation Policy', href: '/cancellation-policy' },
    { name: 'House Rules', href: '/house-rules' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Sustainability', href: '/sustainability' }
  ]

  const socialLinks = [
    { icon: <Facebook size={20} />, href: 'https://www.facebook.com/share/1BEV6gYQ32/', name: 'Facebook' },
    { icon: <Instagram size={20} />, href: '#', name: 'Instagram' },
    { icon: <Twitter size={20} />, href: '#', name: 'Twitter' },
    { icon: <Youtube size={20} />, href: '#', name: 'Youtube' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Hotel Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.jpg"
                alt="Aditya Hotel Mysore"
                width={160}
                height={53}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Experience luxury and comfort in the heart of Mysore. Where heritage meets modern hospitality 
              for an unforgettable stay.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold-400" />
                <span className="text-sm">098450 92115</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold-400" />
                <span className="text-sm">hoteladityamysore@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-400 mt-1" />
                <span className="text-sm">1458, Sapna Book House, 1, NS Road<br />Devaraja Mohalla, Mysuru, Karnataka 570004</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-neutral-300 hover:text-gold-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Information</h4>
            <ul className="space-y-2 mb-6">
              {policies.map((policy, index) => (
                <li key={index}>
                  <Link href={policy.href} className="text-neutral-300 hover:text-gold-400 transition-colors text-sm">
                    {policy.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div>
              <h5 className="font-semibold mb-3">Stay Updated</h5>
              <p className="text-neutral-400 text-sm mb-3">
                Subscribe to get special offers and updates.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-l-lg text-sm focus:outline-none focus:border-gold-400"
                />
                <button className="bg-gold-500 hover:bg-gold-600 px-4 py-2 rounded-r-lg transition-colors">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-neutral-400">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-neutral-400 hover:text-gold-400 transition-colors p-2 hover:bg-neutral-800 rounded-full"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Awards & Certifications */}
            <div className="flex items-center gap-6 text-sm text-neutral-400">
              <span>★★★★★ Rated Hotel</span>
              <span>•</span>
              <span>Premium Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-neutral-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
            <div className="flex items-center gap-1">
              <span>© {currentYear} Aditya Hotel Mysore. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <Heart size={14} className="text-red-500 fill-red-500" />
                <span>for our guests</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <span>Credits:</span>
                <a 
                  href="https://hffglobal.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gold-400 hover:text-gold-300 transition-colors font-medium"
                >
                  HFFglobal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
