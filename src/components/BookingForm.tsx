'use client';

import { useState } from 'react';
import { BUSINESS_INFO } from '@/data/constants';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    bookingType: '',
    name: '',
    phone: '',
    email: '',
    pickup: '',
    drop: '',
    date: '',
    returnDate: '',
    passengers: '4',
    vehicleType: '',
    specialRequests: ''
  });

  const bookingTypes = [
    { value: 'outstation', label: 'Outstation Trip', icon: '🚗' },
    { value: 'local', label: 'Local Sightseeing', icon: '🏛️' },
    { value: 'airport', label: 'Airport Transfer', icon: '✈️' },
    { value: 'tempo', label: 'Tempo Traveller', icon: '🚐' },
    { value: 'tour', label: 'Tour Package', icon: '🗺️' }
  ];

  const vehicleTypes = [
    { value: 'sedan', label: 'Sedan (Swift Dzire)', price: '₹11/km' },
    { value: 'suv', label: 'SUV (Ertiga)', price: '₹13/km' },
    { value: 'innova', label: 'Innova', price: '₹15/km' },
    { value: 'crysta', label: 'Innova Crysta', price: '₹18/km' },
    { value: 'tempo-12', label: 'Tempo 12 Seater', price: '₹25/km' },
    { value: 'tempo-17', label: 'Tempo 17 Seater', price: '₹30/km' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build WhatsApp message
    const message = `🚕 New Booking Request\n\n` +
      `Booking Type: ${formData.bookingType ? bookingTypes.find(t => t.value === formData.bookingType)?.label : 'Not specified'}\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      (formData.email ? `Email: ${formData.email}\n` : '') +
      `Pickup: ${formData.pickup}\n` +
      (formData.drop ? `Drop: ${formData.drop}\n` : '') +
      `Date: ${formData.date}\n` +
      (formData.returnDate ? `Return: ${formData.returnDate}\n` : '') +
      `Passengers: ${formData.passengers}\n` +
      (formData.vehicleType ? `Vehicle: ${vehicleTypes.find(v => v.value === formData.vehicleType)?.label}\n` : '') +
      (formData.specialRequests ? `Special Requests: ${formData.specialRequests}\n` : '');
    
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Step 1: Choose Service Type */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-3">
          1. Choose Service Type *
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {bookingTypes.map((type) => (
            <button
              key={type.value}
              type="button"
              onClick={() => setFormData({ ...formData, bookingType: type.value })}
              className={`p-3 rounded-lg border-2 transition-all text-center ${
                formData.bookingType === type.value
                  ? 'border-amber-600 bg-amber-50'
                  : 'border-gray-200 hover:border-amber-300'
              }`}
            >
              <div className="text-2xl mb-1">{type.icon}</div>
              <div className="text-xs font-medium text-gray-900">{type.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Personal Details */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-3">
          2. Your Details
        </label>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
              placeholder="10-digit mobile number"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
              Email (Optional)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
      </div>

      {/* Step 3: Trip Details */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-3">
          3. Trip Details
        </label>
        <div className="space-y-4">
          <div>
            <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-1.5">
              Pickup Location *
            </label>
            <input
              type="text"
              id="pickup"
              name="pickup"
              required
              value={formData.pickup}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
              placeholder="e.g., Mysore City"
              list="pickup-suggestions"
            />
            <datalist id="pickup-suggestions">
              <option value="Mysore City" />
              <option value="Mysore Railway Station" />
              <option value="Bangalore Airport" />
              <option value="Bangalore City" />
            </datalist>
          </div>

          <div>
            <label htmlFor="drop" className="block text-sm font-medium text-gray-700 mb-1.5">
              Drop Location {formData.bookingType !== 'local' && '*'}
            </label>
            <input
              type="text"
              id="drop"
              name="drop"
              required={formData.bookingType !== 'local'}
              value={formData.drop}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
              placeholder={formData.bookingType === 'local' ? 'Local sightseeing' : 'e.g., Ooty'}
              list="drop-suggestions"
            />
            <datalist id="drop-suggestions">
              <option value="Ooty" />
              <option value="Coorg" />
              <option value="Wayanad" />
              <option value="Bangalore" />
              <option value="Chikmagalur" />
              <option value="Kabini" />
            </datalist>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1.5">
                Travel Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {formData.bookingType === 'outstation' && (
              <div>
                <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Return Date
                </label>
                <input
                  type="date"
                  id="returnDate"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  min={formData.date}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            )}
          </div>

          <div>
            <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-1.5">
              Number of Passengers *
            </label>
            <select
              id="passengers"
              name="passengers"
              required
              value={formData.passengers}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 17].map(num => (
                <option key={num} value={num}>{num} passenger{num > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Step 4: Vehicle Selection */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-3">
          4. Select Vehicle (Optional)
        </label>
        <div className="space-y-2">
          {vehicleTypes.map((vehicle) => (
            <button
              key={vehicle.value}
              type="button"
              onClick={() => setFormData({ ...formData, vehicleType: vehicle.value })}
              className={`w-full p-3 rounded-lg border-2 transition-all text-left flex justify-between items-center ${
                formData.vehicleType === vehicle.value
                  ? 'border-amber-600 bg-amber-50'
                  : 'border-gray-200 hover:border-amber-300'
              }`}
            >
              <span className="text-sm font-medium text-gray-900">{vehicle.label}</span>
              <span className="text-sm font-bold text-amber-600">{vehicle.price}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Special Requests */}
      <div>
        <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1.5">
          Special Requests (Optional)
        </label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
          placeholder="Any special requirements..."
        />
      </div>

      <button
        type="submit"
        className="w-full btn-primary py-4 text-lg font-bold"
      >
        📱 Book via WhatsApp
      </button>

      <p className="text-sm text-gray-500 text-center">
        By submitting, you agree to our terms and privacy policy
      </p>
    </form>
  );
}
