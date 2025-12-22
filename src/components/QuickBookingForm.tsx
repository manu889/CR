'use client';

import { useState } from 'react';
import { BUSINESS_INFO } from '@/data/constants';

export default function QuickBookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `🚕 Quick Booking Request\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Pickup: ${formData.pickup}\n` +
      `Drop: ${formData.drop}\n` +
      `Date: ${formData.date}`;
    
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 border border-gray-100">
      <div className="mb-5">
        <h3 className="text-xl font-bold text-gray-900 mb-1">Book Your Cab</h3>
        <p className="text-sm text-gray-600">Fill details for instant booking</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
            placeholder="Enter your name"
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
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
            placeholder="10-digit mobile"
          />
        </div>

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
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
            placeholder="e.g., Mysore"
          />
        </div>

        <div>
          <label htmlFor="drop" className="block text-sm font-medium text-gray-700 mb-1.5">
            Drop Location *
          </label>
          <input
            type="text"
            id="drop"
            name="drop"
            required
            value={formData.drop}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
            placeholder="e.g., Ooty"
          />
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1.5">
            Journey Date *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
        >
          📱 Book via WhatsApp
        </button>

        <p className="text-xs text-gray-500 text-center">
          Or call us at <a href={`tel:${BUSINESS_INFO.phone}`} className="text-amber-600 font-semibold">{BUSINESS_INFO.phone}</a>
        </p>
      </form>
    </div>
  );
}
