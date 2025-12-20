import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cancellation Policy - Aditya Hotel Mysore',
  description: 'Read our cancellation policy for bookings at Aditya Hotel Mysore.',
}

export default function CancellationPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-28 pb-16 bg-gradient-to-br from-neutral-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="page-title">
              Cancellation Policy
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Please review our cancellation terms and conditions before making your reservation
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Standard Cancellation Policy</h2>
            <p>
              At Aditya Hotel Mysore, we understand that travel plans can change. 
              Our cancellation policy is designed to be fair and flexible while ensuring 
              the best service for all our guests.
            </p>

            <h3>Cancellation Timeline</h3>
            <ul>
              <li><strong>48 hours or more before check-in:</strong> Full refund</li>
              <li><strong>24-48 hours before check-in:</strong> 50% cancellation fee</li>
              <li><strong>Less than 24 hours:</strong> 100% cancellation fee</li>
              <li><strong>No-show:</strong> Full charge for the first night</li>
            </ul>

            <h3>Special Circumstances</h3>
            <p>
              We may waive cancellation fees in cases of:
            </p>
            <ul>
              <li>Medical emergencies (with valid documentation)</li>
              <li>Natural disasters or force majeure events</li>
              <li>Government travel restrictions</li>
            </ul>

            <h3>Group Bookings</h3>
            <p>
              Group bookings (5+ rooms) may have different cancellation terms. 
              Please contact our reservations team for group-specific policies.
            </p>

            <h3>Peak Season Policy</h3>
            <p>
              During peak seasons and special events, stricter cancellation policies 
              may apply. These will be clearly communicated at the time of booking.
            </p>

            <h3>How to Cancel</h3>
            <ul>
              <li>Call us at: 098450 92115</li>
              <li>Email: info@adityahotelmysore.com</li>
              <li>Visit our front desk</li>
            </ul>

            <div className="bg-gold-50 p-6 rounded-lg border-l-4 border-gold-400">
              <h4 className="text-gold-800 font-semibold mb-2">Important Note</h4>
              <p className="text-gold-700 mb-0">
                All cancellations must be confirmed in writing. Refunds will be processed 
                within 7-10 business days to the original payment method.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
