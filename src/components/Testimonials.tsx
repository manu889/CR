'use client';

import { useState } from 'react';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const visibleTestimonials = testimonials.slice(
    currentIndex * testimonialsPerPage,
    (currentIndex + 1) * testimonialsPerPage
  );

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevTestimonials = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Travelers Trust Our Taxi Service in Mysore
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from satisfied travelers who relied on Cab Rental Mysore's airport taxi, outstation cab service, and trusted travel agency support.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Service Info */}
              <div className="mb-4 pb-4 border-b border-gray-200">
                <p className="text-sm font-semibold text-amber-600 mb-1">
                  {testimonial.service}
                </p>
                {testimonial.tripDetails && (
                  <p className="text-xs text-gray-500">
                    {testimonial.tripDetails}
                  </p>
                )}
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.location} • {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevTestimonials}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:bg-gray-50"
            aria-label="Previous testimonials"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-amber-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonials}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:bg-gray-50"
            aria-label="Next testimonials"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-gray-200">
          <div className="bg-white rounded-xl p-5 text-center shadow-md">
            <div className="text-3xl font-bold text-amber-600 mb-1.5">10,000+</div>
            <div className="text-xs text-gray-600">Happy Customers</div>
          </div>

          <div className="bg-white rounded-xl p-5 text-center shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-1.5">15+</div>
            <div className="text-xs text-gray-600 font-medium mb-1">Years Experience</div>
          </div>

          <div className="bg-white rounded-xl p-5 text-center shadow-md">
            <div className="text-3xl font-bold text-green-600 mb-1.5">5,000+</div>
            <div className="text-xs text-gray-600 font-medium mb-1">Airport Transfers</div>
            <div className="text-[10px] text-gray-500">Trusted by pilots & travelers</div>
          </div>

          <div className="bg-white rounded-xl p-5 text-center shadow-md">
            <div className="text-3xl font-bold text-purple-600 mb-1.5">4.9/5</div>
            <div className="text-xs text-gray-600 font-medium mb-1">Average Rating</div>
            <div className="text-[10px] text-gray-500">Based on recent reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}
