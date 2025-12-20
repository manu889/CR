'use client';

import { useState } from 'react';
import { BUSINESS_INFO } from '@/data/constants';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    pickup: '',
    drop: '',
    date: '',
    phone: '',
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build WhatsApp message
    const message = `Hi, I would like to book a cab:\n\nName: ${formData.name}\nPickup: ${formData.pickup}\nDrop: ${formData.drop}\nDate: ${formData.date}\nPhone: ${formData.phone}`;
    
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
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-6 space-y-4">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Book Your Cab</h3>
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-1">
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
          placeholder="e.g., Mysore"
        />
      </div>

      <div>
        <label htmlFor="drop" className="block text-sm font-medium text-gray-700 mb-1">
          Drop Location *
        </label>
        <input
          type="text"
          id="drop"
          name="drop"
          required
          value={formData.drop}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
          placeholder="e.g., Ooty"
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
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
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
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

      <button
        type="submit"
        className="w-full btn-primary py-4 text-lg font-bold"
      >
        Get Instant Quote
      </button>

      <p className="text-xs text-gray-500 text-center">
        By submitting, you agree to our terms and privacy policy
      </p>
    </form>
  );
}
