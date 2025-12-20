export interface RouteData {
  slug: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  price: string;
  description: string;
  highlights: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const popularRoutes: RouteData[] = [
  {
    slug: 'mysore-to-ooty',
    from: 'Mysore',
    to: 'Ooty',
    distance: '125 km',
    duration: '3.5 hours',
    price: '₹2,800 - ₹4,500',
    description: 'Enjoy a scenic drive from Mysore to Ooty through winding roads and lush tea estates. Our professional drivers ensure a comfortable journey to the Queen of Hill Stations.',
    highlights: [
      'Comfortable AC vehicles',
      'Experienced drivers familiar with hill routes',
      'Flexible pickup times',
      'Clean and well-maintained cars',
      ' 24/7 customer support'
    ],
    faqs: [
      {
        question: 'How long does it take from Mysore to Ooty?',
        answer: 'The journey takes approximately 3.5 to 4 hours depending on traffic and road conditions.'
      },
      {
        question: 'What is the fare for Mysore to Ooty cab?',
        answer: 'Fares range from ₹2,800 to ₹4,500 depending on vehicle type. Sedan starts at ₹2,800, SUV at ₹3,500.'
      },
      {
        question: 'Can I book for same-day travel?',
        answer: 'Yes, we accept same-day bookings subject to vehicle availability. Call us at +91 96327 22100 for instant booking.'
      },
      {
        question: 'Are tolls and parking included?',
        answer: 'Tolls and parking charges are additional and will be charged as per actuals.'
      }
    ]
  },
  {
    slug: 'mysore-to-coorg',
    from: 'Mysore',
    to: 'Coorg',
    distance: '120 km',
    duration: '3 hours',
    price: '₹2,500 - ₹4,200',
    description: 'Travel from Mysore to Coorg, the Scotland of India. Experience coffee plantations, waterfalls, and misty hills with our reliable taxi service.',
    highlights: [
      'Direct pickup from anywhere in Mysore',
      'Professional and courteous drivers',
      'Well-maintained fleet',
      'Flexible stopover options',
      'Affordable pricing'
    ],
    faqs: [
      {
        question: 'What is the distance from Mysore to Coorg?',
        answer: 'The distance is approximately 120 km via the Mysore-Madikeri route.'
      },
      {
        question: 'Can we make stops during the journey?',
        answer: 'Yes, you can request stops at viewpoints, restaurants, or other locations during your journey.'
      },
      {
        question: 'What types of vehicles are available?',
        answer: 'We offer Sedan (Swift Dzire, Etios), SUV (Innova, Ertiga), and Tempo Traveller for groups.'
      }
    ]
  },
  {
    slug: 'bangalore-to-mysore',
    from: 'Bangalore',
    to: 'Mysore',
    distance: '145 km',
    duration: '3 hours',
    price: '₹2,200 - ₹3,800',
    description: 'Book a comfortable cab from Bangalore to Mysore. Enjoy the smooth ride on the Bangalore-Mysore expressway with experienced drivers.',
    highlights: [
      'Pickup from any location in Bangalore',
      'Express highway route',
      'Transparent pricing',
      'GPS-enabled vehicles',
      'Multiple payment options'
    ],
    faqs: [
      {
        question: 'How much does a Bangalore to Mysore cab cost?',
        answer: 'Prices start from ₹2,200 for sedan and go up to ₹3,800 for SUVs depending on the vehicle type.'
      },
      {
        question: 'Is pickup available from Bangalore Airport?',
        answer: 'Yes, we provide pickup from Bangalore Airport (Kempegowda International Airport) to Mysore.'
      },
      {
        question: 'How do I book a cab?',
        answer: 'You can book by calling +91 96327 22100, WhatsApp, or filling our online booking form.'
      }
    ]
  },
  {
    slug: 'mysore-to-wayanad',
    from: 'Mysore',
    to: 'Wayanad',
    distance: '130 km',
    duration: '3.5 hours',
    price: '₹3,000 - ₹4,800',
    description: 'Plan your trip from Mysore to Wayanad with our reliable cab service. Explore the natural beauty of Kerala\'s hill station.',
    highlights: [
      'Interstate travel expertise',
      'Experienced hill route drivers',
      'Well-serviced vehicles',
      'Competitive rates',
      'On-time service'
    ],
    faqs: [
      {
        question: 'Do you provide round trip service?',
        answer: 'Yes, we offer both one-way and round trip packages at competitive rates.'
      },
      {
        question: 'Is driver allowance included?',
        answer: 'Yes, driver allowance is included in the quoted price for outstation trips.'
      }
    ]
  },
  {
    slug: 'mysore-to-bangalore',
    from: 'Mysore',
    to: 'Bangalore',
    distance: '145 km',
    duration: '3 hours',
    price: '₹2,200 - ₹3,800',
    description: 'Convenient and affordable taxi service from Mysore to Bangalore. Perfect for business trips, airport transfers, or leisure travel.',
    highlights: [
      'Early morning departures available',
      'Airport drop service',
      'Corporate billing available',
      'Safety and hygiene maintained',
      'Verified drivers'
    ],
    faqs: [
      {
        question: 'What is the best time to travel from Mysore to Bangalore?',
        answer: 'Early morning (6-7 AM) is ideal to avoid traffic. We offer flexible pickup times as per your requirement.'
      },
      {
        question: 'Do you provide invoice for corporate bookings?',
        answer: 'Yes, we provide detailed invoices for corporate clients and business travelers.'
      }
    ]
  },
  {
    slug: 'mysore-airport-transfer',
    from: 'Mysore',
    to: 'Bangalore Airport',
    distance: '170 km',
    duration: '3.5 hours',
    price: '₹2,800 - ₹4,200',
    description: 'Reliable airport transfer service from Mysore to Bangalore Airport (Kempegowda International Airport). Never miss your flight with our punctual service.',
    highlights: [
      'Flight tracking service',
      'Punctual pickups',
      'Luggage assistance',
      'Meet and greet service',
      '24/7 availability'
    ],
    faqs: [
      {
        question: 'How early should I book for airport pickup?',
        answer: 'We recommend booking at least 24 hours in advance, though same-day bookings are accepted based on availability.'
      },
      {
        question: 'Do you track flight timings?',
        answer: 'Yes, for airport transfers, we monitor flight schedules to ensure timely pickup and drop.'
      }
    ]
  }
];
