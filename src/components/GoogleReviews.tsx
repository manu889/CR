'use client';

import { useState } from 'react';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
  avatar?: string;
}

// Sample reviews - Replace with actual Google reviews from your GMB profile
const reviews: Review[] = [
  {
    id: 1,
    author: 'Rajesh Kumar',
    rating: 5,
    date: '2 weeks ago',
    text: 'Excellent service! The driver was very professional and the car was clean. Used their service for Mysore to Ooty trip. Highly recommended for outstation travel.',
  },
  {
    id: 2,
    author: 'Priya Sharma',
    rating: 5,
    date: '1 month ago',
    text: 'Best taxi service in Mysore! Booked a cab for airport transfer to Bangalore. Driver was on time and very courteous. Fair pricing with no hidden charges.',
  },
  {
    id: 3,
    author: 'Arun Patel',
    rating: 5,
    date: '1 month ago',
    text: 'Used their tempo traveller for family trip to Coorg. Spacious vehicle, experienced driver, and reasonable rates. Will definitely use again for our next trip.',
  },
  {
    id: 4,
    author: 'Lakshmi Devi',
    rating: 4,
    date: '2 months ago',
    text: 'Good service for local sightseeing. Driver knew all the tourist spots well and gave useful suggestions. Overall a pleasant experience.',
  },
  {
    id: 5,
    author: 'Suresh Reddy',
    rating: 5,
    date: '2 months ago',
    text: 'Professional drivers and well-maintained vehicles. Used for Bangalore to Mysore one day trip. The Innova was comfortable and service was top-notch.',
  },
  {
    id: 6,
    author: 'Deepak Singh',
    rating: 5,
    date: '3 months ago',
    text: 'Reliable and trustworthy service. Booked for Tirupati package from Mysore. Everything was well organized. Driver was helpful throughout the journey.',
  }
];

export default function GoogleReviews() {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md mb-4">
            <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
            <span className="font-semibold text-gray-900">Google Reviews</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from satisfied customers who chose our taxi services in Mysore
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{review.author}</h3>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {reviews.length > 3 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary"
            >
              {showAll ? 'Show Less Reviews' : 'Show All Reviews'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
