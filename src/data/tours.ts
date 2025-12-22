export interface TourPackage {
  id: string;
  title: string;
  slug: string;
  duration: string;
  days: number;
  nights: number;
  price: number;
  destinations: string[];
  description: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities: string[];
  }[];
  inclusions: string[];
  exclusions: string[];
  category: 'one-day' | 'multi-day' | 'weekend' | 'pilgrimage' | 'adventure';
  image?: string;
}

export const tourPackages: TourPackage[] = [
  {
    id: 'mysore-one-day',
    title: 'Mysore City One Day Tour',
    slug: 'mysore-one-day-tour',
    duration: '1 Day',
    days: 1,
    nights: 0,
    price: 2500,
    image: '/Images/1.jpg',
    destinations: ['Mysore Palace', 'Chamundi Hills', 'St. Philomena\'s Church', 'Brindavan Gardens'],
    description: 'Experience the royal heritage of Mysore in a comprehensive one-day tour covering all major attractions including Mysore Palace, Chamundi Hills, and Brindavan Gardens.',
    highlights: [
      'Visit the magnificent Mysore Palace',
      'Panoramic views from Chamundi Hills',
      'St. Philomena\'s Church architecture',
      'Musical fountain at Brindavan Gardens',
      'Professional guide included',
      'All entrance fees covered'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Mysore City Sightseeing',
        description: 'Full day tour of Mysore\'s iconic landmarks',
        activities: [
          '08:00 AM - Pickup from your location/railway station',
          '09:00 AM - Mysore Palace visit (2 hours)',
          '11:30 AM - Chamundi Hills & Temple',
          '01:00 PM - Lunch break',
          '02:30 PM - St. Philomena\'s Church',
          '04:00 PM - Brindavan Gardens',
          '07:00 PM - Return to your location'
        ]
      }
    ],
    inclusions: [
      'Comfortable AC sedan/SUV',
      'Professional driver',
      'Fuel charges',
      'Parking fees',
      'All toll charges',
      'Driver allowance'
    ],
    exclusions: [
      'Hotel/accommodation bookings',
      'Entry tickets to monuments',
      'Meals and refreshments', 
      'Guide charges',
      'Personal expenses',
      'Any activities or tours',
      'GST (5%)'
    ],
    category: 'one-day'
  },
  {
    id: 'mysore-ooty-one-day',
    title: 'Mysore to Ooty One Day Trip',
    slug: 'mysore-ooty-one-day',
    duration: '1 Day',
    days: 1,
    nights: 0,
    price: 4200,
    image: '/Images/2.jpg',
    destinations: ['Ooty', 'Botanical Gardens', 'Ooty Lake', 'Doddabetta Peak'],
    description: 'Scenic one-day trip from Mysore to Ooty covering major tourist spots including Botanical Gardens, Ooty Lake, and Doddabetta Peak.',
    highlights: [
      'Scenic drive through Nilgiri Hills',
      'Ooty Botanical Gardens',
      'Boating at Ooty Lake',
      'Doddabetta Peak viewpoint',
      '180 km journey (3 hours each way)',
      'Same day return to Mysore'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Mysore to Ooty Day Trip',
        description: 'Early morning departure to Ooty',
        activities: [
          '06:00 AM - Pickup from Mysore',
          '09:00 AM - Arrival at Ooty',
          '09:30 AM - Botanical Gardens',
          '11:00 AM - Ooty Lake (boating)',
          '01:00 PM - Lunch',
          '02:30 PM - Doddabetta Peak',
          '04:00 PM - Tea factory visit',
          '05:00 PM - Departure to Mysore',
          '08:00 PM - Drop at Mysore'
        ]
      }
    ],
    inclusions: [
      'AC sedan/SUV (Swift Dzire/Ertiga)',
      'Fuel & driver charges',
      'Parking & tolls',
      'Hill station permit',
      'Driver allowance'
    ],
    exclusions: [
      'Hotel/accommodation bookings',
      'Entry tickets',
      'Boating charges',
      'Meals and snacks',
      'Guide charges',
      'Any activities or tours',
      'Personal expenses',
      'GST (5%)'
    ],
    category: 'one-day'
  },
  {
    id: 'mysore-coorg-one-day',
    title: 'Mysore to Coorg One Day Trip',
    slug: 'mysore-coorg-one-day',
    duration: '1 Day',
    days: 1,
    nights: 0,
    image: '/Images/3.jpg',
    price: 3800,
    destinations: ['Madikeri', 'Abbey Falls', 'Raja\'s Seat', 'Omkareshwara Temple'],
    description: 'Explore the Scotland of India - Coorg, with visits to Abbey Falls, Raja\'s Seat, and coffee plantations in a single day trip from Mysore.',
    highlights: [
      'Abbey Falls waterfall',
      'Raja\'s Seat viewpoint',
      'Coffee plantation tour',
      'Omkareshwara Temple',
      '120 km from Mysore',
      'Scenic Western Ghats drive'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Mysore to Coorg Excursion',
        description: 'Day trip to Coorg (Madikeri)',
        activities: [
          '06:30 AM - Pickup from Mysore',
          '09:00 AM - Arrival at Madikeri',
          '09:30 AM - Abbey Falls',
          '11:00 AM - Raja\'s Seat',
          '12:30 PM - Omkareshwara Temple',
          '01:00 PM - Lunch',
          '02:30 PM - Coffee plantation visit',
          '04:30 PM - Departure to Mysore',
          '07:00 PM - Drop at Mysore'
        ]
      }
    ],
    inclusions: [
      'AC vehicle (Sedan/SUV)',
      'Fuel and driver charges',
      'All parking fees',
      'Toll charges',
      'Driver allowance'
    ],
    exclusions: [
      'Hotel/accommodation bookings',
      'Entry fees',
      'Meals and refreshments',
      'Guide charges',
      'Any activities or tours',
      'Personal expenses',
      'GST (5%)'
    ],
    category: 'one-day'
  },
  {
    id: 'mysore-wayanad-one-day',
    title: 'Mysore to Wayanad One Day Package',
    slug: 'mysore-wayanad-one-day',
    duration: '1 Day',
    days: 1,
    nights: 0,
    image: '/Images/4.jpg',
    price: 5700,
    destinations: ['Wayanad', 'Edakkal Caves', 'Soochipara Falls', 'Pookode Lake'],
    description: 'Discover the natural beauty of Wayanad, Kerala with Edakkal Caves, Soochipara Falls, and Pookode Lake in a memorable one-day tour.',
    highlights: [
      'Ancient Edakkal Caves',
      'Soochipara waterfalls',
      'Pookode Lake boating',
      '140 km from Mysore',
      'Kerala-Karnataka border crossing',
      'Tribal heritage exploration'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Mysore to Wayanad Day Tour',
        description: 'Explore Wayanad\'s natural attractions',
        activities: [
          '06:00 AM - Pickup from Mysore',
          '09:00 AM - Arrival at Wayanad',
          '09:30 AM - Edakkal Caves trek',
          '12:00 PM - Lunch break',
          '01:30 PM - Soochipara Falls',
          '03:30 PM - Pookode Lake',
          '05:00 PM - Departure to Mysore',
          '08:00 PM - Drop at Mysore'
        ]
      }
    ],
    inclusions: [
      'AC SUV/Sedan',
      'Fuel & driver charges',
      'Interstate permit',
      'Parking fees',
      'Driver allowance'
    ],
    exclusions: [
      'Hotel/accommodation bookings',
      'Entry tickets',
      'Guide for Edakkal Caves',
      'Meals and refreshments',
      'Boating charges',
      'Any activities or tours',
      'Personal expenses',
      'GST (5%)'
    ],
    category: 'one-day'
  },
  {
    id: 'bangalore-mysore-one-day',
    title: 'Bangalore to Mysore One Day Trip',
    slug: 'bangalore-mysore-one-day',
    duration: '1 Day',
    days: 1,
    nights: 0,
    image: '/Images/5.jpg',
    price: 5200,
    destinations: ['Mysore Palace', 'Chamundi Hills', 'Brindavan Gardens'],
    description: 'Perfect day trip from Bangalore to explore the royal city of Mysore, covering Mysore Palace, Chamundi Hills, and the musical fountain at Brindavan Gardens.',
    highlights: [
      'Round trip from Bangalore',
      'Mysore Palace darshan',
      'Chamundi Hills temple',
      'Brindavan Gardens evening show',
      '145 km from Bangalore',
      'Same day return'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Bangalore to Mysore Same Day',
        description: 'Day excursion to Mysore',
        activities: [
          '06:00 AM - Pickup from Bangalore',
          '09:00 AM - Arrival at Mysore',
          '09:30 AM - Mysore Palace',
          '12:00 PM - Chamundi Hills',
          '01:30 PM - Lunch',
          '03:00 PM - Shopping at Devaraja Market',
          '05:00 PM - Brindavan Gardens',
          '07:30 PM - Return to Bangalore',
          '10:30 PM - Drop at Bangalore'
        ]
      }
    ],
    inclusions: [
      'AC sedan/SUV',
      'Fuel charges',
      'Driver allowance',
      'Parking & tolls',
      'Brindavan Gardens entry'
    ],
    exclusions: [
      'Hotel/accommodation bookings',
      'Mysore Palace ticket',
      'Lunch and meals',
      'Shopping expenses',
      'Guide charges',
      'Any activities or tours',
      'Personal expenses',
      'GST (5%)'
    ],
    category: 'one-day'
  },
  {
    id: 'mysore-ooty-coorg-4days',
    title: 'Mysore Ooty Coorg 4 Days 3 Nights',
    slug: 'mysore-ooty-coorg-package',
    duration: '4 Days 3 Nights',
    days: 4,
    image: '/Images/6.jpg',
    nights: 3,
    price: 17500,
    destinations: ['Mysore', 'Ooty', 'Coonoor', 'Coorg'],
    description: 'Comprehensive tour package covering the best of South India hill stations - Mysore, Ooty, Coonoor, and Coorg with comfortable stays.',
    highlights: [
      'Mysore Palace & Brindavan Gardens',
      'Ooty hill station sightseeing',
      'Coonoor tea gardens',
      'Coorg coffee plantations',
      'Professional experienced drivers',
      'Well-maintained AC vehicles'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival Mysore',
        description: 'Mysore sightseeing and transfer to Ooty',
        activities: [
          'Pickup from Bangalore/Mysore',
          'Mysore Palace visit',
          'Chamundi Hills',
          'Drive to Ooty (180 km, 4 hours)',
          'Arrive in Ooty',
          'Overnight at Ooty'
        ]
      },
      {
        day: 2,
        title: 'Ooty Sightseeing',
        description: 'Full day Ooty and Coonoor tour',
        activities: [
          'Botanical Gardens',
          'Ooty Lake boating',
          'Doddabetta Peak',
          'Coonoor Sim\'s Park',
          'Tea factory visit',
          'Overnight at Ooty'
        ]
      },
      {
        day: 3,
        title: 'Ooty to Coorg',
        description: 'Transfer to Coorg with enroute sightseeing',
        activities: [
          'Depart from Ooty',
          'Drive to Coorg (170 km)',
          'Arrive in Coorg',
          'Abbey Falls visit',
          'Raja\'s Seat sunset',
          'Overnight at Coorg'
        ]
      },
      {
        day: 4,
        title: 'Coorg Sightseeing & Departure',
        description: 'Coorg tour and return journey',
        activities: [
          'Coffee plantation tour',
          'Talacauvery (optional)',
          'Golden Temple (Namdroling)',
          'Shopping for coffee & spices',
          'Drive back to Mysore/Bangalore',
          'Drop at destination'
        ]
      }
    ],
    inclusions: [
      'AC vehicle for entire tour',
      'All fuel & driver charges',
      'Parking & toll fees',
      'Driver allowance'
    ],
    exclusions: [
      'Hotel/accommodation bookings (not arranged by us)',
      'All meals (breakfast, lunch, dinner)',
      'Entry tickets to attractions',
      'Guide charges',
      'Any activities or tours',
      'Personal expenses',
      'GST (5%)'
    ],
    category: 'multi-day'
  },
  {
    id: 'mysore-coorg-wayanad-4days',
    title: 'Mysore Coorg Wayanad 4 Days 3 Nights',
    slug: 'mysore-coorg-wayanad-package',
    duration: '4 Days 3 Nights',
    days: 4,
    nights: 3,
    price: 18500,
    image: '/Images/7.jpg',
    destinations: ['Mysore', 'Coorg', 'Wayanad'],
    description: 'Explore the coffee plantations of Coorg and the lush greenery of Wayanad along with Mysore\'s royal heritage in this 4-day tour package.',
    highlights: [
      'Mysore royal heritage',
      'Coorg coffee estates',
      'Wayanad wildlife & waterfalls',
      'Comfortable resort stays',
      'Scenic Western Ghats',
      'Local cuisine experience'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Mysore Arrival & Local Sightseeing',
        description: 'Mysore city tour',
        activities: [
          'Pickup from airport/station',
          'Mysore Palace',
          'Chamundi Hills temple',
          'Brindavan Gardens',
          'Arrive in Mysore',
          'Overnight at Mysore'
        ]
      },
      {
        day: 2,
        title: 'Mysore to Coorg',
        description: 'Transfer to Coorg with sightseeing',
        activities: [
          'Drive to Coorg (120 km)',
          'Arrive in Coorg',
          'Abbey Falls',
          'Raja\'s Seat',
          'Coffee plantation walk',
          'Overnight at Coorg'
        ]
      },
      {
        day: 3,
        title: 'Coorg to Wayanad',
        description: 'Coorg to Wayanad transfer',
        activities: [
          'Golden Temple visit',
          'Drive to Wayanad (90 km)',
          'Arrive in Wayanad',
          'Pookode Lake',
          'Evening at leisure',
          'Overnight at Wayanad'
        ]
      },
      {
        day: 4,
        title: 'Wayanad Sightseeing & Departure',
        description: 'Wayanad tour and return',
        activities: [
          'Edakkal Caves',
          'Soochipara Falls',
          'Bamboo village',
          'Spice plantation',
          'Return to Mysore/Bangalore',
          'Drop at destination'
        ]
      }
    ],
    inclusions: [
      'AC SUV for entire tour',
      'All transfers',
      'Fuel, parking, tolls',
      'Driver charges'
    ],
    exclusions: [
      'Hotel/accommodation bookings (not arranged by us)',
      'All meals (breakfast, lunch, dinner)',
      'Monument entry fees',
      'Adventure activities',
      'Guide charges',
      'Any tours or activities',
      'Personal expenses',
      'GST (5%)'
    ],
    category: 'multi-day'
  },
  {
    id: 'tirupati-package-2days',
    title: 'Tirupati Package from Mysore (2 Days)',
    slug: 'tirupati-package-from-mysore',
    duration: '2 Days 1 Night',
    days: 2,
    nights: 1,
    price: 14500,
    image: '/Images/8.jpg',
    destinations: ['Tirupati', 'Tirumala'],
    description: 'Spiritual journey to Lord Venkateswara Temple at Tirumala from Mysore with comfortable travel and darshan arrangements.',
    highlights: [
      'Tirumala Venkateswara Temple darshan',
      '600 km journey from Mysore',
      'Accommodation near temple',
      'Special darshan tickets assistance',
      'Experienced drivers',
      'Early morning departure'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Mysore to Tirupati',
        description: 'Journey to Tirupati',
        activities: [
          '04:00 AM - Departure from Mysore',
          '02:00 PM - Arrival at Tirupati',
          'Arrive at accommodation area',
          'Rest and freshen up',
          'Visit local temples',
          'Overnight at Tirupati'
        ]
      },
      {
        day: 2,
        title: 'Tirumala Darshan & Return',
        description: 'Temple visit and return journey',
        activities: [
          '03:00 AM - Leave for Tirumala',
          '05:00 AM - Darshan at Venkateswara Temple',
          '10:00 AM - Return to your location',
          '11:00 AM - Checkout',
          '12:00 PM - Departure to Mysore',
          '10:00 PM - Arrival at Mysore'
        ]
      }
    ],
    inclusions: [
      'AC sedan/SUV (Dzire/Ertiga)',
      'Fuel & driver charges',
      'Parking & tolls',
      'Driver accommodation',
      'Interstate permits'
    ],
    exclusions: [
      'Hotel/accommodation bookings (not arranged by us)',
      'Darshan tickets',
      'Special darshan charges',
      'All meals',
      'Laddu prasadam',
      'Donations',
      'Personal expenses',
      'GST (5%)'
    ],
    category: 'pilgrimage'
  },
  {
    id: 'chikmagalur-weekend',
    title: 'Chikmagalur Weekend Getaway',
    slug: 'chikmagalur-weekend-package',
    duration: '2 Days 1 Night',
    days: 2,
    nights: 1,
    price: 8500,
    image: '/Images/9.jpg',
    destinations: ['Chikmagalur', 'Mullayanagiri', 'Baba Budangiri'],
    description: 'Weekend escape to the coffee land of Karnataka - Chikmagalur, featuring Mullayanagiri peak, coffee estates, and serene landscapes.',
    highlights: [
      'Mullayanagiri - Karnataka\'s highest peak',
      'Coffee plantation trekking',
      'Baba Budangiri hills',
      'Hebbe Falls',
      '240 km from Mysore',
      'Adventure & nature'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Mysore to Chikmagalur',
        description: 'Journey and local sightseeing',
        activities: [
          '07:00 AM - Departure from Mysore',
          '11:00 AM - Arrival at Chikmagalur',
          'Arrive at accommodation area',
          '02:00 PM - Coffee plantation tour',
          '04:00 PM - Hebbe Falls visit',
          '07:00 PM - Overnight at resort'
        ]
      },
      {
        day: 2,
        title: 'Chikmagalur Sightseeing',
        description: 'Peak trek and return',
        activities: [
          '06:00 AM - Mullayanagiri peak trek',
          '09:00 AM - Return to resort',
          '10:00 AM - Checkout',
          '11:00 AM - Baba Budangiri',
          '01:00 PM - Lunch',
          '02:00 PM - Return to Mysore',
          '06:00 PM - Arrival at Mysore'
        ]
      }
    ],
    inclusions: [
      'AC SUV transport',
      'Fuel & driver charges',
      'Parking fees'
    ],
    exclusions: [
      'Hotel/resort bookings (not arranged by us)',
      'All meals (breakfast, lunch, dinner)',
      'Trekking guide',
      'Entry fees',
      'Adventure activities',
      'Any tours or activities',
      'Personal expenses',
      'GST (5%)'
    ],
    category: 'weekend'
  },
  {
    id: 'kabini-wildlife-2days',
    title: 'Kabini Wildlife Weekend Package',
    slug: 'kabini-wildlife-package',
    duration: '2 Days 1 Night',
    days: 2,
    nights: 1,
    price: 9500,
    image: '/Images/10.jpg',
    destinations: ['Kabini', 'Nagarhole National Park'],
    description: 'Wildlife safari experience at Kabini backwaters and Nagarhole National Park with jungle safari and boat ride.',
    highlights: [
      'Jungle safari in Nagarhole',
      'Kabini river boat safari',
      'Elephant spotting',
      'Bird watching',
      '80 km from Mysore',
      'Nature & wildlife photography'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Mysore to Kabini',
        description: 'Transfer and evening safari',
        activities: [
          '08:00 AM - Pickup from Mysore',
          '10:00 AM - Arrival at Kabini',
          'Arrive at accommodation area',
          '12:00 PM - Lunch',
          '03:30 PM - Jeep safari in Nagarhole',
          '06:30 PM - Return to resort',
          'Overnight at Kabini resort'
        ]
      },
      {
        day: 2,
        title: 'Kabini Boat Safari & Return',
        description: 'Morning boat ride and departure',
        activities: [
          '06:00 AM - Kabini river boat safari',
          '08:00 AM - Breakfast at resort',
          '09:30 AM - Checkout',
          '10:00 AM - Departure to Mysore',
          '12:00 PM - Arrival at Mysore'
        ]
      }
    ],
    inclusions: [
      'AC vehicle transfers',
      'Fuel & driver charges',
      'Parking fees'
    ],
    exclusions: [
      'Hotel/resort bookings (not arranged by us)',
      'Safari bookings (jeep/boat - not arranged by us)',
      'All meals (breakfast, lunch, dinner)',
      'Camera charges',
      'Entry fees to wildlife sanctuary',
      'Any tours or activities',
      'Personal expenses',
      'GST (5%)'
    ],
    category: 'weekend'
  }
];

export const tourCategories = [
  {
    id: 'one-day',
    title: 'One Day Tours',
    description: 'Perfect day trips from Mysore to nearby destinations',
    icon: '🌅'
  },
  {
    id: 'multi-day',
    title: 'Multi-Day Packages',
    description: '3-5 day tour packages covering multiple destinations',
    icon: '🏔️'
  },
  {
    id: 'weekend',
    title: 'Weekend Getaways',
    description: '2-day weekend packages for quick escapes',
    icon: '🌴'
  },
  {
    id: 'pilgrimage',
    title: 'Pilgrimage Tours',
    description: 'Spiritual journeys to temples and holy places',
    icon: '🙏'
  },
  {
    id: 'adventure',
    title: 'Adventure Tours',
    description: 'Trekking, wildlife, and adventure activities',
    icon: '🏕️'
  }
];
