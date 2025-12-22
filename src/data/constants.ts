export const BUSINESS_INFO = {
  name: 'Cab Rental Mysore',
  tagline: 'Reliable Taxi Services in Mysore',
  phone: '+91 96327 22100',
  whatsapp: '+91 96327 22100',
  email: 'info@cabrentalmysore.com',
  address: '74, 6th Cross Rd, N R Mohalla, A J Block, Gayathri Puram, Mysuru, Karnataka 570007',
  addressDetails: {
    street: '74, 6th Cross Rd, N R Mohalla, A J Block',
    city: 'Gayathri Puram, Mysuru',
    state: 'Karnataka',
    zipcode: '570007',
    country: 'India'
  },
  googleMapsUrl: 'https://maps.google.com/?q=74+6th+Cross+Rd+NR+Mohalla+Mysuru+570007',
  googleRatings: {
    rating: 4.8,
    reviewCount: 150
  },
  established: '2010',
  website: 'https://www.cabrentalmysore.com',
  
  social: {
    facebook: 'https://facebook.com/cabrentalmysore',
    instagram: 'https://instagram.com/cabrentalmysore',
    twitter: 'https://twitter.com/cabrentalmysore'
  },

  serviceAreas: [
    'Mysore',
    'Bangalore',
    'Ooty',
    'Coorg',
    'Wayanad',
    'Chikmagalur',
    'Hassan',
    'Mangalore'
  ],

  features: [
    '15+ Years of Service',
    '50+ Professional Drivers',
    '100+ Well-Maintained Vehicles',
    '24/7 Customer Support',
    '10,000+ Happy Customers',
    'GPS-Enabled Fleet'
  ]
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { 
    label: 'Services', 
    href: '/services',
    dropdown: [
      { label: 'Outstation Taxi', href: '/services/outstation-taxi' },
      { label: 'Local Sightseeing', href: '/services/local-sightseeing' },
      { label: 'Airport Transfers', href: '/services/airport-transfers' },
      { label: 'Tempo Traveller', href: '/services/tempo-traveller' },
      { label: 'Employee Transport', href: '/services/employee-transport' },
      { label: 'Pilgrimage Tours', href: '/services/pilgrimage-tours' }
    ]
  },
  { 
    label: 'Tour Packages', 
    href: '/tours',
    dropdown: [
      { label: 'All Packages', href: '/tours' },
      { label: 'One Day Tours', href: '/tours#one-day' },
      { label: 'Multi-Day Packages', href: '/tours#multi-day' },
      { label: 'Weekend Getaways', href: '/tours#weekend' },
      { label: 'Pilgrimage Tours', href: '/tours#pilgrimage' }
    ]
  },
  { 
    label: 'Vehicles', 
    href: '/vehicles'
  },
  { 
    label: 'About', 
    href: '/about'
  },
  { label: 'Contact', href: '/contact' }
];
