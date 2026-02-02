'use client';

import { useState } from 'react';
import { BUSINESS_INFO } from '@/data/constants';

interface BookingFormProps {
  compact?: boolean;
}

export default function BookingForm({ compact = false }: BookingFormProps) {
  const [formData, setFormData] = useState({
    bookingType: 'outstation',
    pickup: '',
    drop: '',
    date: '',
    time: '',
    vehicleType: 'sedan',
    passengers: '4',
    tripType: 'one-way',
    returnDate: '',
    hours: '4',
    transferType: 'pickup',
    airport: 'Bengaluru (BLR)'
  });

  const bookingTypes = [
    { value: 'outstation', label: 'Outstation', short: 'Outstation' },
    { value: 'local', label: 'Local', short: 'Local' },
    { value: 'airport', label: 'Airport', short: 'Airport' }
  ];

  const vehicleTypes = [
    { value: 'sedan', label: 'Sedan (4 Seater)', seats: 4 },
    { value: 'suv', label: 'SUV (6 Seater)', seats: 6 },
    { value: 'innova', label: 'Innova (7 Seater)', seats: 7 },
    { value: 'crysta', label: 'Innova Crysta (7 Seater)', seats: 7 },
    { value: 'ertiga', label: 'Ertiga (7 Seater)', seats: 7 },
    { value: 'tempo12', label: 'Tempo Traveller (12 Seater)', seats: 12 },
    { value: 'tempo17', label: 'Tempo Traveller (17 Seater)', seats: 17 }
  ];

  const localPackages = [
    { value: '4', label: '4 Hours / 40 km' },
    { value: '8', label: '8 Hours / 80 km' },
    { value: '12', label: '12 Hours / 120 km' }
  ];

  const airports = ['Bengaluru (BLR)', 'Mysuru (MYQ)', 'Chennai (MAA)', 'Hyderabad (HYD)'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let message = `🚕 New Booking Request\n\n` +
      `Service: ${bookingTypes.find(t => t.value === formData.bookingType)?.label}\n`;
    
    if (formData.bookingType === 'outstation') {
      message += `Trip Type: ${formData.tripType === 'one-way' ? 'One Way' : 'Round Trip'}\n` +
        `From: ${formData.pickup}\n` +
        `To: ${formData.drop}\n` +
        `Date: ${formData.date}\n` +
        `Time: ${formData.time}\n`;
      if (formData.tripType === 'round-trip' && formData.returnDate) {
        message += `Return: ${formData.returnDate}\n`;
      }
    } else if (formData.bookingType === 'local') {
      const localPackageLabel = localPackages.find((pack) => pack.value === formData.hours)?.label ?? `${formData.hours} hours`;
      message += `Package: ${localPackageLabel}\n` +
        `Location: ${formData.pickup}\n` +
        `Date: ${formData.date}\n` +
        `Time: ${formData.time}\n`;
    } else if (formData.bookingType === 'airport') {
      message += `Transfer: ${formData.transferType === 'pickup' ? 'Airport Pickup' : 'Airport Drop'}\n` +
        `Airport: ${formData.airport}\n` +
        `${formData.transferType === 'pickup' ? 'Drop at' : 'Pickup from'}: ${formData.transferType === 'pickup' ? formData.drop : formData.pickup}\n` +
        `Date: ${formData.date}\n` +
        `Time: ${formData.time}\n`;
    }
    
    message += `Vehicle: ${vehicleTypes.find(v => v.value === formData.vehicleType)?.label}\n` +
      `Passengers: ${formData.passengers}`;
    
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Auto-update passengers based on vehicle type
    if (name === 'vehicleType') {
      const vehicle = vehicleTypes.find(v => v.value === value);
      if (vehicle) {
        setFormData(prev => ({
          ...prev,
          [name]: value,
          passengers: vehicle.seats.toString()
        }));
      }
    }
  };

  const labelSize = compact ? 'text-xs' : 'text-sm';
  const inputClass = `w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-gray-900 bg-white transition-all ${compact ? 'text-sm' : 'text-sm'}`;

  return (
    <div className="bg-white rounded-xl shadow-2xl p-5 border border-gray-100">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">Quick Booking</h2>
            <p className="text-xs text-gray-600">Instant quote on WhatsApp</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Service Type */}
        <div>
          <label className="block text-xs font-semibold text-gray-900 mb-2">Select Service</label>
          <div className="grid grid-cols-3 gap-2">
            {bookingTypes.map((type) => {
              const getServiceIcon = (value: string) => {
                switch(value) {
                  case 'outstation':
                    return (
                      <svg className={`w-5 h-5 mb-1 ${formData.bookingType === type.value ? 'text-amber-600' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm11 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM5 11l1.5-4.5h11L19 11H5z"/>
                      </svg>
                    );
                  case 'local':
                    return (
                      <svg className={`w-5 h-5 mb-1 ${formData.bookingType === type.value ? 'text-amber-600' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    );
                  case 'airport':
                    return (
                      <svg className={`w-5 h-5 mb-1 ${formData.bookingType === type.value ? 'text-amber-600' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10.5 19h3v2h-3zm6.5-6v-3h-3v-2h3V5h2v4h3v2h-3v3zm-11 0H3V9h3V7H2v10h4v-4z"/>
                      </svg>
                    );
                  default:
                    return (
                      <svg className={`w-5 h-5 mb-1 ${formData.bookingType === type.value ? 'text-amber-600' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                      </svg>
                    );
                }
              };
              
              return (
                <label
                  key={type.value}
                  className={`relative flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer transition-all border-2 ${
                    formData.bookingType === type.value
                      ? 'bg-amber-50 border-amber-500 shadow-sm'
                      : 'bg-white border-gray-200 hover:border-amber-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="bookingType"
                    value={type.value}
                    checked={formData.bookingType === type.value}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  {getServiceIcon(type.value)}
                  <span className={`text-xs font-semibold ${formData.bookingType === type.value ? 'text-amber-700' : 'text-gray-600'}`}>{type.short}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Outstation Trip */}
        {formData.bookingType === 'outstation' && (
          <>
            {/* Trip Type */}
            <div>
              <label className="block text-xs font-semibold text-gray-900 mb-2">Trip Type</label>
              <div className="grid grid-cols-2 gap-2">
                {['one-way', 'round-trip'].map((option) => (
                  <label
                    key={option}
                    className={`relative flex items-center justify-center px-3 py-2 text-xs font-semibold rounded-lg cursor-pointer transition-all border-2 ${
                      formData.tripType === option
                        ? 'bg-amber-50 border-amber-500'
                        : 'bg-white border-gray-200 hover:border-amber-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="tripType"
                      value={option}
                      checked={formData.tripType === option}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className={formData.tripType === option ? 'text-amber-700' : 'text-gray-600'}>
                      {option === 'one-way' ? 'One Way' : 'Round Trip'}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Pickup and Drop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="pickup" className="block text-xs font-semibold text-gray-900 mb-1.5">
                  Pickup
                </label>
                <input
                  type="text"
                  id="pickup"
                  name="pickup"
                  required
                  value={formData.pickup}
                  onChange={handleChange}
                  placeholder="Mysore"
                  className={inputClass}
                  list="from-cities"
                />
                <datalist id="from-cities">
                  <option value="Mysore" />
                  <option value="Bangalore" />
                </datalist>
              </div>
              <div>
                <label htmlFor="drop" className="block text-xs font-semibold text-gray-900 mb-1.5">
                  Drop
                </label>
                <input
                  type="text"
                  id="drop"
                  name="drop"
                  required
                  value={formData.drop}
                  onChange={handleChange}
                  placeholder="Ooty"
                  className={inputClass}
                  list="to-cities"
                />
                <datalist id="to-cities">
                  <option value="Ooty" />
                  <option value="Coorg" />
                  <option value="Wayanad" />
                  <option value="Bangalore" />
                </datalist>
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="date" className="block text-xs font-semibold text-gray-900 mb-1.5">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-xs font-semibold text-gray-900 mb-1.5">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Return Date for Round Trip */}
            {formData.tripType === 'round-trip' && (
              <div>
                <label htmlFor="returnDate" className="block text-sm font-semibold text-gray-900 mb-2">
                  Return Date
                </label>
                <input
                  type="date"
                  id="returnDate"
                  name="returnDate"
                  required
                  value={formData.returnDate}
                  onChange={handleChange}
                  min={formData.date || new Date().toISOString().split('T')[0]}
                  className={inputClass}
                />
              </div>
            )}
          </>
        )}

        {/* Local Sightseeing */}
        {formData.bookingType === 'local' && (
          <>
            {/* Package Selection */}
            <div>
              <label htmlFor="hours" className="block text-sm font-semibold text-gray-900 mb-2">
                Select Package
              </label>
              <select
                id="hours"
                name="hours"
                value={formData.hours}
                onChange={handleChange}
                className={inputClass}
              >
                {localPackages.map((pkg) => (
                  <option key={pkg.value} value={pkg.value}>{pkg.label}</option>
                ))}
              </select>
            </div>

            {/* Pickup Location */}
            <div>
              <label htmlFor="pickup" className="block text-sm font-semibold text-gray-900 mb-2">
                Pickup Location
              </label>
              <input
                type="text"
                id="pickup"
                name="pickup"
                required
                value={formData.pickup}
                onChange={handleChange}
                placeholder="Enter pickup location"
                className={inputClass}
              />
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-gray-900 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-semibold text-gray-900 mb-2">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>
          </>
        )}

        {/* Airport Transfer */}
        {formData.bookingType === 'airport' && (
          <>
            {/* Transfer Type */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Transfer Type</label>
              <div className="grid grid-cols-2 gap-2">
                {['pickup', 'drop'].map((option) => (
                  <label
                    key={option}
                    className={`relative flex items-center justify-center px-4 py-2.5 text-sm font-medium rounded-lg cursor-pointer transition-all ${
                      formData.transferType === option
                        ? 'bg-white text-gray-900 border-2 border-gray-900'
                        : 'bg-white text-gray-600 border border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <input
                      type="radio"
                      name="transferType"
                      value={option}
                      checked={formData.transferType === option}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    {option === 'pickup' ? 'Pickup' : 'Drop'}
                  </label>
                ))}
              </div>
            </div>

            {/* Airport Selection */}
            <div>
              <label htmlFor="airport" className="block text-sm font-medium text-gray-900 mb-1.5">
                Airport *
              </label>
              <select
                id="airport"
                name="airport"
                value={formData.airport}
                onChange={handleChange}
                className={inputClass}
              >
                {airports.map((airport) => (
                  <option key={airport} value={airport}>{airport}</option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label htmlFor={formData.transferType === 'pickup' ? 'drop' : 'pickup'} className="block text-sm font-medium text-gray-900 mb-1.5">
                {formData.transferType === 'pickup' ? 'Drop Location *' : 'Pickup Location *'}
              </label>
              <input
                type="text"
                id={formData.transferType === 'pickup' ? 'drop' : 'pickup'}
                name={formData.transferType === 'pickup' ? 'drop' : 'pickup'}
                required
                value={formData.transferType === 'pickup' ? formData.drop : formData.pickup}
                onChange={handleChange}
                placeholder={formData.transferType === 'pickup' ? 'Drop location' : 'Pickup location'}
                className={inputClass}
              />
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-900 mb-1.5">
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
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-900 mb-1.5">
                  Time *
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>
          </>
        )}

        {/* Vehicle Type and Passengers - Common for all */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-900 mb-1.5">
              Vehicle Type *
            </label>
            <select
              id="vehicleType"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              required
              className={inputClass}
            >
              {vehicleTypes.map((vehicle) => (
                <option key={vehicle.value} value={vehicle.value}>{vehicle.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="passengers" className="block text-xs font-semibold text-gray-900 mb-1.5">
              Passengers *
            </label>
            <div className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 text-sm flex items-center">
              <span className="font-semibold">{formData.passengers}</span>
              <span className="text-gray-600 ml-1">
                {formData.passengers === '1' ? 'passenger' : 'passengers'}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Auto-selected based on vehicle</p>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] text-base flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span>Get Instant Quote on WhatsApp</span>
        </button>

        {/* Call Alternative */}
        <div className="text-center pt-2">
          <p className="text-sm text-gray-600">
            Or call us at{' '}
            <a href={`tel:${BUSINESS_INFO.phone}`} className="text-amber-600 hover:text-amber-700 font-bold hover:underline">
              {BUSINESS_INFO.phone}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
