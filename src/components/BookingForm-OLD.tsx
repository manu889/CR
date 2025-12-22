'use client';

import { useState } from 'react';
import { BUSINESS_INFO } from '@/data/constants';

interface BookingFormProps {
  compact?: boolean;
}

export default function BookingForm({ compact = false }: BookingFormProps) {
  const [formData, setFormData] = useState({
    bookingType: 'outstation',
    name: '',
    phone: '',
    email: '',
    pickup: '',
    drop: '',
    date: '',
    returnDate: '',
    passengers: '4',
    vehicleType: '',
    tripType: 'one-way', // for outstation
    hours: '4', // for local
    transferType: 'pickup', // for airport
    tourPackage: '', // for tour
    specialRequests: ''
  });

  const bookingTypes = [
    { value: 'outstation', label: 'Outstation Trip', icon: '🚗', desc: 'Inter-city travel' },
    { value: 'local', label: 'Local Sightseeing', icon: '🏛️', desc: 'Within city' },
    { value: 'airport', label: 'Airport Transfer', icon: '✈️', desc: 'Airport pickup/drop' },
    { value: 'tempo', label: 'Tempo Traveller', icon: '🚐', desc: 'Group travel' },
    { value: 'tour', label: 'Tour Package', icon: '🗺️', desc: 'Pre-planned tours' }
  ];

  const vehicleTypes = [
    { value: 'sedan', label: 'Sedan (Swift Dzire) - ₹11/km', category: 'small' },
    { value: 'suv', label: 'SUV (Ertiga) - ₹13/km', category: 'small' },
    { value: 'innova', label: 'Innova - ₹15/km', category: 'medium' },
    { value: 'crysta', label: 'Innova Crysta - ₹18/km', category: 'medium' },
    { value: 'tempo-12', label: 'Tempo 12 Seater - ₹25/km', category: 'large' },
    { value: 'tempo-17', label: 'Tempo 17 Seater - ₹30/km', category: 'large' }
  ];

  const tourPackages = [
    'Mysore One Day Tour',
    'Mysore-Ooty One Day',
    'Mysore-Coorg One Day',
    'Mysore-Wayanad One Day',
    'Bangalore-Mysore One Day',
    'Chikmagalur Weekend Package',
    'Mysore-Ooty-Coorg Package',
    'Mysore-Coorg-Wayanad Package',
    'Kabini Wildlife Package',
    'Tirupati Package from Mysore'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build WhatsApp message based on booking type
    let message = `🚕 New Booking Request\n\n` +
      `Service: ${bookingTypes.find(t => t.value === formData.bookingType)?.label}\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n`;
    
    if (formData.email) message += `Email: ${formData.email}\n`;
    
    // Type-specific details
    if (formData.bookingType === 'outstation') {
      message += `\nTrip Type: ${formData.tripType === 'one-way' ? 'One Way' : 'Round Trip'}\n` +
        `From: ${formData.pickup}\n` +
        `To: ${formData.drop}\n` +
        `Date: ${formData.date}\n`;
      if (formData.returnDate) message += `Return: ${formData.returnDate}\n`;
    } else if (formData.bookingType === 'local') {
      message += `\nLocation: ${formData.pickup}\n` +
        `Date: ${formData.date}\n` +
        `Duration: ${formData.hours} hours\n`;
    } else if (formData.bookingType === 'airport') {
      message += `\nTransfer: ${formData.transferType === 'pickup' ? 'Airport Pickup' : 'Airport Drop'}\n` +
        `${formData.transferType === 'pickup' ? 'From' : 'To'}: ${formData.transferType === 'pickup' ? formData.pickup : formData.drop}\n` +
        `Date: ${formData.date}\n`;
    } else if (formData.bookingType === 'tempo') {
      message += `\nFrom: ${formData.pickup}\n` +
        `To: ${formData.drop}\n` +
        `Date: ${formData.date}\n`;
      if (formData.returnDate) message += `Return: ${formData.returnDate}\n`;
    } else if (formData.bookingType === 'tour') {
      message += `\nTour Package: ${formData.tourPackage}\n` +
        `Date: ${formData.date}\n`;
    }
    
    message += `Passengers: ${formData.passengers}\n`;
    
    if (formData.vehicleType) {
      message += `Vehicle: ${vehicleTypes.find(v => v.value === formData.vehicleType)?.label}\n`;
    }
    
    if (formData.specialRequests) {
      message += `\nSpecial Requests: ${formData.specialRequests}`;
    }
    
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Compact mode styling
  const spacing = compact ? 'space-y-4' : 'space-y-6';
  const inputPadding = compact ? 'px-3 py-2' : 'px-3 py-2.5';
  const sectionPadding = compact ? 'p-4' : 'p-6';
  const headingSize = compact ? 'text-sm' : 'text-base';
  const labelSize = compact ? 'text-xs' : 'text-sm';

  return (
    <form onSubmit={handleSubmit} className={`${spacing} bg-white ${sectionPadding} rounded-xl shadow-lg ${compact ? 'max-h-[calc(100vh-200px)] overflow-y-auto' : ''}`}>
      {/* Booking Type Selection - Radio Buttons */}
      <div className={`bg-gray-50 ${compact ? 'p-3' : 'p-4'} rounded-lg`}>
        <label className={`block ${headingSize} font-bold text-gray-900 ${compact ? 'mb-2' : 'mb-3'}`}>
          Select Service Type *
        </label>
        <div className={compact ? 'space-y-1.5' : 'space-y-2'}>
          {bookingTypes.map((type) => (
            <label
              key={type.value}
              className={`flex items-center ${compact ? 'p-2' : 'p-3'} rounded-lg border-2 cursor-pointer transition-all ${
                formData.bookingType === type.value
                  ? 'border-amber-600 bg-white shadow-sm'
                  : 'border-gray-200 hover:border-amber-300 bg-white'
              }`}
            >
              <input
                type="radio"
                name="bookingType"
                value={type.value}
                checked={formData.bookingType === type.value}
                onChange={handleChange}
                className="w-4 h-4 text-amber-600 focus:ring-amber-500"
              />
              <span className="ml-3 flex-1">
                <span className={compact ? 'text-base mr-1.5' : 'text-xl mr-2'}>{type.icon}</span>
                <span className={`font-semibold text-gray-900 ${compact ? 'text-xs' : 'text-sm'}`}>{type.label}</span>
                {!compact && <span className="text-xs text-gray-500 ml-2">({type.desc})</span>}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Personal Details */}
      <div>
        <h3 className={`${headingSize} font-bold text-gray-900 ${compact ? 'mb-2' : 'mb-3'}`}>Your Details</h3>
        <div className={compact ? 'space-y-2' : 'space-y-3'}>
          <div>
            <label htmlFor="name" className={`block ${labelSize} font-medium text-gray-700 mb-1`}>
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={`w-full ${inputPadding} border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-gray-900 ${compact ? 'text-sm' : ''}`}
              placeholder="Enter your full name"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="phone" className={`block ${labelSize} font-medium text-gray-700 mb-1`}>
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
                className={`w-full ${inputPadding} border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-gray-900 ${compact ? 'text-sm' : ''}`}
                placeholder="10-digit number"
              />
            </div>

            <div>
              <label htmlFor="email" className={`block ${labelSize} font-medium text-gray-700 mb-1`}>
                Email {compact ? '' : '(Optional)'}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full ${inputPadding} border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-gray-900 ${compact ? 'text-sm' : ''}`}
                placeholder="email@example.com"
              />
            </div>
          </div>
        </div>
      </div>


      {/* Conditional Fields Based on Booking Type */}
      <div>
        <h3 className="text-base font-bold text-gray-900 mb-3">Trip Details</h3>
        
        {/* OUTSTATION TRIP */}
        {formData.bookingType === 'outstation' && (
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Trip Type *
              </label>
              <div className="flex gap-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="tripType"
                    value="one-way"
                    checked={formData.tripType === 'one-way'}
                    onChange={handleChange}
                    className="w-4 h-4 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">One Way</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="tripType"
                    value="round-trip"
                    checked={formData.tripType === 'round-trip'}
                    onChange={handleChange}
                    className="w-4 h-4 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Round Trip</span>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-1">
                From City *
              </label>
              <input
                type="text"
                id="pickup"
                name="pickup"
                required
                value={formData.pickup}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                placeholder="e.g., Mysore"
                list="from-cities"
              />
              <datalist id="from-cities">
                <option value="Mysore" />
                <option value="Bangalore" />
                <option value="Mandya" />
              </datalist>
            </div>

            <div>
              <label htmlFor="drop" className="block text-sm font-medium text-gray-700 mb-1">
                To City *
              </label>
              <input
                type="text"
                id="drop"
                name="drop"
                required
                value={formData.drop}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                placeholder="e.g., Ooty"
                list="to-cities"
              />
              <datalist id="to-cities">
                <option value="Ooty" />
                <option value="Coorg" />
                <option value="Wayanad" />
                <option value="Bangalore" />
                <option value="Chikmagalur" />
                <option value="Kabini" />
                <option value="Hassan" />
              </datalist>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Departure Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                />
              </div>

              {formData.tripType === 'round-trip' && (
                <div>
                  <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Return Date *
                  </label>
                  <input
                    type="date"
                    id="returnDate"
                    name="returnDate"
                    required={formData.tripType === 'round-trip'}
                    value={formData.returnDate}
                    onChange={handleChange}
                    min={formData.date}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* LOCAL SIGHTSEEING */}
        {formData.bookingType === 'local' && (
          <div className="space-y-3">
            <div>
              <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-1">
                City/Location *
              </label>
              <input
                type="text"
                id="pickup"
                name="pickup"
                required
                value={formData.pickup}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                placeholder="e.g., Mysore"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="hours" className="block text-sm font-medium text-gray-700 mb-1">
                  Duration *
                </label>
                <select
                  id="hours"
                  name="hours"
                  required
                  value={formData.hours}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                >
                  <option value="4">4 Hours</option>
                  <option value="8">8 Hours</option>
                  <option value="12">12 Hours</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* AIRPORT TRANSFER */}
        {formData.bookingType === 'airport' && (
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Transfer Type *
              </label>
              <div className="flex gap-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="transferType"
                    value="pickup"
                    checked={formData.transferType === 'pickup'}
                    onChange={handleChange}
                    className="w-4 h-4 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Airport Pickup</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="transferType"
                    value="drop"
                    checked={formData.transferType === 'drop'}
                    onChange={handleChange}
                    className="w-4 h-4 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Airport Drop</span>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor={formData.transferType === 'pickup' ? 'pickup' : 'drop'} className="block text-sm font-medium text-gray-700 mb-1">
                {formData.transferType === 'pickup' ? 'Airport Name *' : 'Your Location *'}
              </label>
              <input
                type="text"
                id={formData.transferType === 'pickup' ? 'pickup' : 'drop'}
                name={formData.transferType === 'pickup' ? 'pickup' : 'drop'}
                required
                value={formData.transferType === 'pickup' ? formData.pickup : formData.drop}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                placeholder={formData.transferType === 'pickup' ? 'e.g., Bangalore Airport' : 'e.g., Mysore City'}
                list="airport-locations"
              />
              <datalist id="airport-locations">
                <option value="Bangalore Airport (Kempegowda)" />
                <option value="Mysore Airport" />
                <option value="Coimbatore Airport" />
              </datalist>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Date & Time *
              </label>
              <input
                type="datetime-local"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().slice(0, 16)}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
        )}

        {/* TEMPO TRAVELLER */}
        {formData.bookingType === 'tempo' && (
          <div className="space-y-3">
            <div>
              <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-1">
                From *
              </label>
              <input
                type="text"
                id="pickup"
                name="pickup"
                required
                value={formData.pickup}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                placeholder="Starting location"
              />
            </div>

            <div>
              <label htmlFor="drop" className="block text-sm font-medium text-gray-700 mb-1">
                To *
              </label>
              <input
                type="text"
                id="drop"
                name="drop"
                required
                value={formData.drop}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                placeholder="Destination"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700 mb-1">
                  End Date (Optional)
                </label>
                <input
                  type="date"
                  id="returnDate"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  min={formData.date}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            <p className="text-sm text-gray-600 bg-blue-50 p-2 rounded">
              💡 Select 12 or 17 seater below based on your group size
            </p>
          </div>
        )}

        {/* TOUR PACKAGE */}
        {formData.bookingType === 'tour' && (
          <div className="space-y-3">
            <div>
              <label htmlFor="tourPackage" className="block text-sm font-medium text-gray-700 mb-1">
                Select Tour Package *
              </label>
              <select
                id="tourPackage"
                name="tourPackage"
                required
                value={formData.tourPackage}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              >
                <option value="">Choose a package</option>
                {tourPackages.map((pkg) => (
                  <option key={pkg} value={pkg}>{pkg}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Start Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              />
            </div>

            <p className="text-sm text-gray-600 bg-blue-50 p-2 rounded">
              ℹ️ Package duration and itinerary will be shared via WhatsApp
            </p>
          </div>
        )}
      </div>

      {/* Passengers & Vehicle Selection */}
      <div>
        <h3 className="text-base font-bold text-gray-900 mb-3">
          {formData.bookingType === 'tempo' ? 'Group Size & Vehicle' : 'Passengers & Vehicle'}
        </h3>
        <div className="space-y-3">
          <div>
            <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-1">
              Number of Passengers *
            </label>
            <select
              id="passengers"
              name="passengers"
              required
              value={formData.passengers}
              onChange={handleChange}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
            >
              {formData.bookingType === 'tempo' ? (
                <>
                  <option value="8">8 passengers</option>
                  <option value="10">10 passengers</option>
                  <option value="12">12 passengers</option>
                  <option value="15">15 passengers</option>
                  <option value="17">17 passengers</option>
                </>
              ) : (
                <>
                  <option value="1">1 passenger</option>
                  <option value="2">2 passengers</option>
                  <option value="3">3 passengers</option>
                  <option value="4">4 passengers</option>
                  <option value="5">5 passengers</option>
                  <option value="6">6 passengers</option>
                  <option value="7">7 passengers</option>
                </>
              )}
            </select>
          </div>

          <div>
            <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Vehicle (Optional)
            </label>
            <select
              id="vehicleType"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
            >
              <option value="">We'll suggest based on passengers</option>
              {formData.bookingType === 'tempo' ? (
                <>
                  <option value="tempo-12">Tempo 12 Seater - ₹25/km</option>
                  <option value="tempo-17">Tempo 17 Seater - ₹30/km</option>
                </>
              ) : (
                <>
                  <option value="sedan">Sedan (Swift Dzire) - ₹11/km</option>
                  <option value="suv">SUV (Ertiga) - ₹13/km</option>
                  <option value="innova">Innova - ₹15/km</option>
                  <option value="crysta">Innova Crysta - ₹18/km</option>
                </>
              )}
            </select>
          </div>
        </div>
      </div>

      {/* Special Requests */}
      <div>
        <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
          Special Requests (Optional)
        </label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          rows={3}
          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none resize-none"
          placeholder="Child seat, extra luggage space, specific route preferences..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3.5 px-6 rounded-lg font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Book via WhatsApp
      </button>

      <p className="text-xs text-gray-500 text-center">
        By submitting, you agree to our <a href="/terms" className="text-amber-600 hover:underline">terms</a> and <a href="/privacy" className="text-amber-600 hover:underline">privacy policy</a>
      </p>
    </form>
  );
}
