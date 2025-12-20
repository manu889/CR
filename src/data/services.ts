export interface ServiceData {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  icon: string;
  description: string;
  features: string[];
  pricing: string;
  image: string;
}

export const services: ServiceData[] = [
  {
    id: '1',
    title: 'Outstation Taxi',
    slug: 'outstation-taxi',
    shortDescription: 'Comfortable intercity travel to Ooty, Coorg, Bangalore, and beyond',
    icon: '🚗',
    description: 'Travel beyond Mysore with our reliable outstation cab service. We cover all major destinations in Karnataka and neighboring states with well-maintained vehicles and experienced drivers.',
    features: [
      'One-way and round trip options',
      'Flexible pickup and drop locations',
      'Multiple vehicle categories',
      'Driver allowance included',
      'Transparent pricing with no hidden charges',
      'Clean and sanitized vehicles'
    ],
    pricing: 'Starting from ₹11/km',
    image: '/images/outstation.jpg'
  },
  {
    id: '2',
    title: 'Local Sightseeing',
    slug: 'local-sightseeing',
    shortDescription: 'Explore Mysore\'s palaces, gardens, and attractions at your own pace',
    icon: '🏛️',
    description: 'Discover the heritage city of Mysore with our local sightseeing packages. Visit Mysore Palace, Chamundi Hills, Brindavan Gardens, and more with a knowledgeable driver.',
    features: [
      'Full-day and half-day packages',
      'Customizable itineraries',
      'Knowledgeable local drivers',
      'All major tourist spots covered',
      'Comfortable AC vehicles',
      'Family-friendly service'
    ],
    pricing: '₹1,500 - ₹2,500 per day',
    image: '/images/sightseeing.jpg'
  },
  {
    id: '3',
    title: 'Airport Transfers',
    slug: 'airport-transfers',
    shortDescription: 'Hassle-free pickup and drop to Bangalore and Mysore airports',
    icon: '✈️',
    description: 'Punctual and reliable airport transfer service from Mysore to Bangalore Airport (Kempegowda International) and Mysore Airport. Flight tracking and meet & greet service available.',
    features: [
      'Bangalore Airport transfers',
      'Mysore Airport pickups',
      'Flight tracking service',
      'Meet and greet at terminal',
      '24/7 availability',
      'Luggage assistance'
    ],
    pricing: 'Starting from ₹2,800',
    image: '/images/airport.jpg'
  },
  {
    id: '4',
    title: 'Tempo Traveller',
    slug: 'tempo-traveller',
    shortDescription: 'Spacious 12-17 seater for group travel and family tours',
    icon: '🚐',
    description: 'Perfect for large groups, family trips, or corporate outings. Our well-maintained Tempo Travellers offer comfortable seating, ample luggage space, and air conditioning.',
    features: [
      '12, 14, and 17 seater options',
      'Push-back reclining seats',
      'Ample luggage space',
      'Music system',
      'Experienced drivers',
      'Ideal for pilgrimages and tours'
    ],
    pricing: '₹18 - ₹22 per km',
    image: '/images/tempo.jpg'
  },
  {
    id: '5',
    title: 'Employee Transport',
    slug: 'employee-transport',
    shortDescription: 'Reliable daily commute solutions for corporate employees',
    icon: '💼',
    description: 'Corporate employee transportation services with monthly contracts. Reliable, punctual, and cost-effective shuttle services for companies in Mysore.',
    features: [
      'Daily pickup and drop',
      'Flexible routes',
      'Monthly contracts',
      'GPS-tracked vehicles',
      'Professional drivers',
      'Corporate invoicing'
    ],
    pricing: 'Custom monthly packages',
    image: '/images/corporate.jpg'
  },
  {
    id: '6',
    title: 'Pilgrimage Tours',
    slug: 'pilgrimage-tours',
    shortDescription: 'Spiritual journeys to temples and holy places across South India',
    icon: '🕉️',
    description: 'Embark on spiritual journeys to famous temples and pilgrimage sites. We organize tours to Tirupati, Dharmasthala, Kukke Subramanya, Mantralaya, and more.',
    features: [
      'Multi-day tour packages',
      'Temple tour itineraries',
      'Experienced pilgrimage drivers',
      'Comfortable vehicles',
      'Accommodation assistance',
      'All-inclusive packages available'
    ],
    pricing: 'Package-based pricing',
    image: '/images/pilgrimage.jpg'
  }
];
