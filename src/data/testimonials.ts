export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  tripDetails?: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    location: 'Bangalore',
    rating: 5,
    date: 'November 2024',
    service: 'Mysore to Ooty Cab',
    tripDetails: 'Round trip • Swift Dzire',
    comment: 'Excellent service! Driver was very professional and punctual. The car was clean and well-maintained. Made our Ooty trip comfortable and hassle-free. Highly recommended for outstation trips from Mysore.',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    date: 'October 2024',
    service: 'Mysore Local Sightseeing',
    tripDetails: 'Full day package • Toyota Etios',
    comment: 'Best cab service in Mysore! Covered all major tourist spots including Mysore Palace, Chamundi Hills, and Brindavan Gardens. Driver was knowledgeable and acted as a great guide. Very affordable pricing.',
  },
  {
    id: '3',
    name: 'Anand Reddy',
    location: 'Hyderabad',
    rating: 5,
    date: 'December 2024',
    service: 'Airport Transfer',
    tripDetails: 'Mysore to Bangalore Airport • Innova',
    comment: 'Booked for early morning airport drop. Driver arrived 15 minutes before pickup time. Smooth journey and reached airport well in time. Fixed pricing with no hidden charges. Will use again!',
  },
  {
    id: '4',
    name: 'Sunita Menon',
    location: 'Chennai',
    rating: 5,
    date: 'September 2024',
    service: 'Coorg Tour Package',
    tripDetails: '2 Days/1 Night • Toyota Innova',
    comment: 'Amazing Coorg tour package from Mysore! Well-planned itinerary covering Abbey Falls, Raja\'s Seat, and coffee plantations. Driver was courteous and helped us with photography. Great value for money.',
  },
  {
    id: '5',
    name: 'Vikram Patel',
    location: 'Pune',
    rating: 5,
    date: 'November 2024',
    service: 'Tempo Traveller',
    tripDetails: 'Mysore to Ooty group tour • 17 Seater',
    comment: 'Hired 17-seater tempo traveller for our college trip. Vehicle was spacious and comfortable. Driver was experienced and handled mountain roads expertly. Highly recommended for group travels!',
  },
  {
    id: '6',
    name: 'Deepika Iyer',
    location: 'Delhi',
    rating: 5,
    date: 'October 2024',
    service: 'Mysore to Bangalore Cab',
    tripDetails: 'One-way drop • Swift Dzire',
    comment: 'Needed a last-minute cab from Mysore to Bangalore. Booked through WhatsApp and got instant confirmation. Driver was friendly, drove safely. Transparent billing. Excellent service!',
  },
  {
    id: '7',
    name: 'Amit Desai',
    location: 'Ahmedabad',
    rating: 5,
    date: 'August 2024',
    service: 'Pilgrimage Tour',
    tripDetails: 'Tirupati package • Tempo Traveller',
    comment: 'Booked Tirupati package for our family. Everything was well-organized from pickup to drop. Driver was respectful and knew the route well. Darshan arrangements were smooth. Worth every rupee!',
  },
  {
    id: '8',
    name: 'Kavita Nair',
    location: 'Kochi',
    rating: 5,
    date: 'December 2024',
    service: 'Wayanad Weekend Package',
    tripDetails: '2 Days/1 Night • Innova Crysta',
    comment: 'Perfect weekend getaway to Wayanad! Crysta was luxurious and comfortable. Driver suggested great viewpoints and local restaurants. Professional service from start to finish. Highly satisfied!',
  },
  {
    id: '9',
    name: 'Rahul Joshi',
    location: 'Nagpur',
    rating: 5,
    date: 'September 2024',
    service: 'Mysore Darshan',
    tripDetails: 'Half day package • Ertiga',
    comment: 'Quick half-day Mysore darshan covering main attractions. Efficient service, covered everything in time. Driver was polite and gave useful tips. Great for those with limited time in Mysore.',
  },
  {
    id: '10',
    name: 'Neha Gupta',
    location: 'Jaipur',
    rating: 5,
    date: 'November 2024',
    service: 'Ooty-Coorg Multi-Day Tour',
    tripDetails: '4 Days/3 Nights • Toyota Innova',
    comment: 'Best decision to book this 4-day tour covering Ooty, Coonoor, and Coorg! Meticulously planned itinerary. Driver was like a family member - very caring and helpful. Unforgettable experience!',
  },
  {
    id: '11',
    name: 'Sanjay Rao',
    location: 'Vijayawada',
    rating: 5,
    date: 'October 2024',
    service: 'Corporate Employee Transport',
    tripDetails: 'Monthly contract • Multiple vehicles',
    comment: 'Using their employee transport service for our IT office in Mysore. Reliable, punctual, and professional drivers. GPS tracking gives us peace of mind. Best corporate cab service in the city.',
  },
  {
    id: '12',
    name: 'Meera Krishnan',
    location: 'Coimbatore',
    rating: 5,
    date: 'December 2024',
    service: 'Mysore to Chikmagalur',
    tripDetails: 'Round trip • Ertiga',
    comment: 'Wonderful trip to Chikmagalur! Driver knew all the scenic routes and coffee estate locations. Vehicle was clean and well-maintained. Reasonable pricing for outstation travel. Will definitely book again!',
  }
];
