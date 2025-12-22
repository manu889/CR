export interface VehicleData {
  id: string;
  name: string;
  category: 'sedan' | 'suv' | 'luxury' | 'tempo';
  seating: number;
  image: string;
  features: string[];
  idealFor: string;
  pricePerKm: string;
}

export const vehicles: VehicleData[] = [
  {
    id: '1',
    name: 'Swift Dzire',
    category: 'sedan',
    seating: 4,
    image: '/Images/Vehicles/Dzire.png',
    features: ['AC', 'Music System', 'Comfortable Seats', 'Ample Boot Space'],
    idealFor: 'Couples, Small families, Airport transfers',
    pricePerKm: '₹11 - ₹13'
  },
  {
    id: '2',
    name: 'Toyota Etios',
    category: 'sedan',
    seating: 4,
    image: '/Images/Vehicles/Etios.png',
    features: ['AC', 'Spacious Interior', 'Fuel Efficient', 'Smooth Ride'],
    idealFor: 'Outstation trips, Business travel',
    pricePerKm: '₹11 - ₹13'
  },
  {
    id: '3',
    name: 'Toyota Innova',
    category: 'suv',
    seating: 7,
    image: '/Images/Vehicles/Innova.png',
    features: ['AC', 'Spacious', '7-Seater', 'Large Boot', 'Captain Seats'],
    idealFor: 'Family trips, Group travel, Outstation tours',
    pricePerKm: '₹14 - ₹16'
  },
  {
    id: '4',
    name: 'Maruti Ertiga',
    category: 'suv',
    seating: 7,
    image: '/Images/Vehicles/Ertiga.png',
    features: ['AC', '7-Seater', 'Comfortable', 'Good Mileage'],
    idealFor: 'Family outings, Weekend trips',
    pricePerKm: '₹13 - ₹15'
  },
  {
    id: '5',
    name: 'Toyota Innova Crysta',
    category: 'luxury',
    seating: 7,
    image: '/Images/Vehicles/Crysta.webp',
    features: ['Premium AC', 'Luxury Seats', 'Advanced Safety', 'Premium Audio'],
    idealFor: 'Corporate travel, VIP guests, Luxury tours',
    pricePerKm: '₹16 - ₹18'
  },
  {
    id: '6',
    name: 'Tempo Traveller 12-Seater',
    category: 'tempo',
    seating: 12,
    image: '/Images/Vehicles/Tempo-Traveller.png',
    features: ['AC', 'Push-back Seats', 'Music System', 'Large Luggage Space'],
    idealFor: 'Group tours, Pilgrimages, Corporate outings',
    pricePerKm: '₹18 - ₹20'
  },
  {
    id: '7',
    name: 'Tempo Traveller 17-Seater',
    category: 'tempo',
    seating: 17,
    image: '/Images/Vehicles/Tempo-Traveller.png',
    features: ['AC', 'Comfortable Seating', 'Entertainment System', 'Spacious'],
    idealFor: 'Large groups, Family functions, College trips',
    pricePerKm: '₹20 - ₹22'
  }
];
