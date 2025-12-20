'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How do I book a cab with Cab Rental Mysore?',
    answer: 'You can book a cab by calling us at +91 96327 22100, sending a WhatsApp message, or filling out our online booking form. Our team will confirm your booking within minutes.',
    category: 'Booking'
  },
  {
    question: 'What types of vehicles are available?',
    answer: 'We offer Sedans (Swift Dzire, Etios), SUVs (Innova, Ertiga, Innova Crysta), and Tempo Travellers (12-17 seaters) for different group sizes and preferences.',
    category: 'Vehicles'
  },
  {
    question: 'Are your fares inclusive of all charges?',
    answer: 'Our quoted fares include driver allowance and standard charges. Tolls, parking, and state taxes (if applicable) are charged separately as per actuals.',
    category: 'Pricing'
  },
  {
    question: 'Can I book a cab for outstation trips?',
    answer: 'Yes, we specialize in outstation trips to Ooty, Coorg, Bangalore, Wayanad, and many other destinations. We offer both one-way and round trip options.',
    category: 'Services'
  },
  {
    question: 'Do you provide airport transfer services?',
    answer: 'Yes, we provide reliable airport transfers to/from Bangalore Airport (Kempegowda International Airport) and Mysore Airport with flight tracking service.',
    category: 'Services'
  },
  {
    question: 'Is advance payment required?',
    answer: 'We accept payment after journey completion. For corporate clients and long-distance trips, we may require a small advance to confirm the booking.',
    category: 'Pricing'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made 24 hours before pickup time are free. Cancellations within 24 hours may incur a nominal charge. Please call us for specific details.',
    category: 'Booking'
  },
  {
    question: 'Are your vehicles sanitized and clean?',
    answer: 'Yes, all our vehicles are thoroughly cleaned and sanitized before every trip. We maintain high hygiene standards for your safety and comfort.',
    category: 'Vehicles'
  }
];

const categories = ['All', 'Booking', 'Vehicles', 'Pricing', 'Services'];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredFaqs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers!
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
