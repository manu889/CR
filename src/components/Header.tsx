'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BUSINESS_INFO, NAV_LINKS } from '@/data/constants';
import TopBar from './TopBar';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const headerPositionClass = isScrolled ? 'top-0' : 'top-7';

  const megaMenuConfig = {
    Services: {
      coreServices: [
        { label: 'Outstation Taxi', href: '/services/outstation-taxi', subtitle: 'Transparent outstation pricing' },
        { label: 'Local Sightseeing', href: '/services/local-sightseeing', subtitle: 'Explore Mysore and surrounding cities' },
        { label: 'Airport Transfer', href: '/services/airport-transfers', subtitle: 'On-time pickup to/from airports' },
      ],
      additionalOfferings: [
        { label: 'Employee Transport', href: '/services/employee-transport', subtitle: 'Corporate transport solutions' },
        { label: 'Tempo Traveller', href: '/services/tempo-traveller', subtitle: 'Group travel comfort' },
        { label: 'Pilgrimage Tours', href: '/services/pilgrimage-tours', subtitle: 'Sacred journeys' },
      ],
    },
    'Tour Packages': {
      coreServices: [
        { label: 'Mysore One Day Tour', href: '/tours/mysore-one-day-tour', subtitle: 'Explore the cultural capital' },
        { label: 'Bangalore-Mysore Tour', href: '/tours/bangalore-mysore-one-day', subtitle: 'Day trip from Bangalore' },
        { label: 'Mysore-Coorg Tour', href: '/tours/mysore-coorg-one-day', subtitle: 'Hills and heritage combined' },
      ],
      additionalOfferings: [
        { label: 'Weekend Packages', href: '/tours/chikmagalur-weekend-package', subtitle: '2-3 day getaways' },
        { label: 'Wildlife Tours', href: '/tours/kabini-wildlife-package', subtitle: 'Nature and wildlife' },
        { label: 'Pilgrimage Package', href: '/tours/tirupati-package-from-mysore', subtitle: 'Spiritual journeys' },
      ],
    },
  } as const;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <TopBar />
      
      {/* Main Header */}
      <header
        className={`fixed ${headerPositionClass} left-0 right-0 z-50 transition-all duration-300 bg-[#ecaf53] overflow-visible ${
          isHomePage 
            ? (isScrolled ? 'shadow-md py-2' : 'backdrop-blur-sm py-4')
            : (isScrolled ? 'shadow-md py-2' : 'backdrop-blur-sm py-4')
        }`}
      >
      <nav className="container-custom overflow-visible relative z-50">
        <div className="flex items-center justify-between overflow-visible relative">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img 
              src="/Logo.avif" 
              alt="Cab Rental Mysore Logo"
              className="h-12 w-auto group-hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-xm">
            {NAV_LINKS.map((link) => (
              <div
                key={link.href}
                className="relative group/nav z-50"
              >
                {link.dropdown ? (
                  <>
                    <button className="font-semibold transition-colors py-2 text-sm xl:text-base whitespace-nowrap text-gray-700 hover:text-amber-600">
                      {link.label}
                      <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {/* Simple Dropdown */}
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[220px] opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 ease-in-out z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="font-semibold transition-colors text-sm xl:text-base whitespace-nowrap text-gray-700 hover:text-amber-600"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="hidden xl:flex items-center gap-2 font-semibold transition-colors whitespace-nowrap text-amber-600 hover:text-amber-700"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-sm">+91 96327 22100</span>
            </a>
            <Link href="/book" className={`px-4 xl:px-6 py-2 xl:py-2.5 rounded-lg font-semibold transition-colors text-sm whitespace-nowrap ${
              isHomePage && !isScrolled
                ? 'bg-amber-600 text-white hover:bg-amber-600'
                : 'bg-amber-600 hover:bg-amber-700 text-white'
            }`}>
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-amber-600"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <div key={link.href}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 rounded-lg font-semibold"
                      >
                        {link.label}
                        <svg
                          className={`w-4 h-4 ml-auto transition-transform ${
                            openDropdown === link.label ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === link.label && (
                        <div className="ml-4 mt-1 flex flex-col gap-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="px-4 py-2 text-gray-600 hover:bg-amber-50 hover:text-amber-600 rounded-lg flex items-center gap-2"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-amber-50 rounded-lg font-semibold"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/book"
                className="btn-primary mt-2 mx-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  );
}
