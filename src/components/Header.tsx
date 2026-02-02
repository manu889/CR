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
      subtitle: 'Outstation, airport, local sightseeing & more',
      popular: ['Airport Transfers', 'Outstation Taxi', 'Local Sightseeing'],
    },
    'Tour Packages': {
      subtitle: 'One day trips, weekend getaways & pilgrimage tours',
      popular: ['One Day Tours', 'Weekend Getaways', 'Pilgrimage Tours', 'Multi-Day Packages'],
    },
  } as const;

  const getMenuEmoji = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes('airport')) return '✈️';
    if (l.includes('outstation')) return '🛣️';
    if (l.includes('local')) return '🏙️';
    if (l.includes('tempo')) return '🚐';
    if (l.includes('employee')) return '🏢';
    if (l.includes('pilgrimage')) return '🙏';
    if (l.includes('weekend')) return '🌴';
    if (l.includes('multi')) return '🏔️';
    if (l.includes('one day')) return '🌅';
    return '✨';
  };

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
        className={`fixed ${headerPositionClass} left-0 right-0 z-50 transition-all duration-300 bg-[#ecaf53] ${
          isHomePage 
            ? (isScrolled ? 'shadow-md py-2' : 'backdrop-blur-sm py-4')
            : (isScrolled ? 'shadow-md py-2' : 'backdrop-blur-sm py-4')
        }`}
      >
      <nav className="container-custom overflow-visible">
        <div className="flex items-center justify-between overflow-visible">
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
                className="relative group/nav"
              >
                {link.dropdown ? (
                  <>
                    <button className="font-semibold transition-colors py-2 text-sm xl:text-base whitespace-nowrap text-gray-700 hover:text-amber-600">
                      {link.label}
                      <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {/* Modern Professional Mega Menu */}
                    {(link.label === 'Services' || link.label === 'Tour Packages') ? (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-5xl -mx-8 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 ease-in-out" style={{ zIndex: 9999 }}>
                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 backdrop-blur-sm">
                          {/* Header with clean design */}
                          <div className="px-8 py-6 border-b border-gray-100">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-lg font-bold text-gray-900">{link.label}</h3>
                                <p className="text-sm text-gray-600 mt-1">
                                  {megaMenuConfig[link.label as keyof typeof megaMenuConfig].subtitle}
                                </p>
                              </div>
                              <Link
                                href={link.href}
                                className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold text-sm transition-colors"
                              >
                                View all
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                              </Link>
                            </div>
                          </div>

                          {/* Content Grid */}
                          {(() => {
                            const config = megaMenuConfig[link.label as keyof typeof megaMenuConfig];
                            const popularLabels = config.popular as readonly string[];
                            const popular = link.dropdown.filter((i) => popularLabels.includes(i.label));
                            const others = link.dropdown.filter((i) => !popularLabels.includes(i.label));

                            return (
                              <div className="grid grid-cols-3 gap-0">
                                {/* Featured/Popular Section */}
                                <div className="col-span-1 px-8 py-6 border-r border-gray-100">
                                  <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-4">Featured</p>
                                  <div className="space-y-3">
                                    {popular.map((item) => (
                                      <Link
                                        key={item.href}
                                        href={item.href}
                                        className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-amber-50 transition-all"
                                      >
                                        <div className="mt-1 text-xl group-hover/item:scale-110 transition-transform">{getMenuEmoji(item.label)}</div>
                                        <div className="flex-1">
                                          <div className="font-semibold text-gray-900 text-sm group-hover/item:text-amber-700">{item.label}</div>
                                          <div className="text-xs text-gray-500 mt-0.5">Premium service</div>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>

                                {/* All Services Grid */}
                                <div className="col-span-2 px-8 py-6">
                                  <p className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-4">All {link.label.toLowerCase()}</p>
                                  <div className="grid grid-cols-3 gap-3">
                                    {others.map((item) => (
                                      <Link
                                        key={item.href}
                                        href={item.href}
                                        className="group/card p-3 rounded-lg border border-gray-200 hover:border-amber-200 hover:bg-amber-50/30 transition-all text-center"
                                      >
                                        <div className="text-2xl mb-2 group-hover/card:scale-110 transition-transform">{getMenuEmoji(item.label)}</div>
                                        <div className="text-sm font-medium text-gray-900 group-hover/card:text-amber-700">{item.label}</div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                      </div>
                    ) : (
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
                    )}
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
