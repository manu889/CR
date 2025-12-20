import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms & Conditions - Aditya Hotel Mysore',
  description: 'Read our terms and conditions for staying at Aditya Hotel Mysore.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-neutral-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="page-title">
              Terms & Conditions
            </h1>
            <p className="page-subtitle">
              Please read these terms and conditions carefully before making a reservation.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-blue-800 mb-0">
                <strong>Effective Date:</strong> January 2024
              </p>
            </div>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">1. Reservation & Booking Terms</h2>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• All reservations are subject to availability and confirmation</li>
              <li>• Room rates are subject to change without prior notice</li>
              <li>• Valid government-issued photo ID required at check-in</li>
              <li>• Advance payment or credit card guarantee may be required</li>
              <li>• Special requests cannot be guaranteed but will be accommodated when possible</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">2. Check-in & Check-out</h2>
            <div className="bg-neutral-50 p-6 rounded-lg mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Check-in</h4>
                  <p className="text-neutral-600">2:00 PM onwards</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Check-out</h4>
                  <p className="text-neutral-600">12:00 PM (Noon)</p>
                </div>
              </div>
            </div>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• Early check-in subject to availability (additional charges may apply)</li>
              <li>• Late check-out subject to availability (charges may apply after 2:00 PM)</li>
              <li>• Express check-out available upon request</li>
              <li>• Luggage storage available for early arrivals and late departures</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">3. Cancellation & Refund Policy</h2>
            <div className="space-y-4 text-neutral-600 mb-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-800">Free Cancellation</h4>
                <p>Cancel up to 24 hours before check-in for full refund</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-yellow-800">Late Cancellation</h4>
                <p>24-12 hours before check-in: 50% of first night charged</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-red-800">No-Show Policy</h4>
                <p>No-shows will be charged the full amount of the reservation</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">4. Payment Terms</h2>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• Payment required at check-in or as per booking terms</li>
              <li>• We accept cash, credit cards, debit cards, and UPI payments</li>
              <li>• All rates are inclusive of applicable taxes unless specified</li>
              <li>• Additional services will be charged separately</li>
              <li>• Security deposit may be required for incidentals</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">5. Hotel Policies</h2>
            
            <h3 className="text-xl font-semibold text-neutral-700 mb-4">General Policies</h3>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• Smoking is strictly prohibited inside hotel premises</li>
              <li>• Pets are not allowed (service animals excepted)</li>
              <li>• Quiet hours: 10:00 PM to 7:00 AM</li>
              <li>• Maximum occupancy limits must be respected</li>
              <li>• Outside food and beverages permitted in guest rooms only</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-700 mb-4">Age Policy</h3>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• Children under 5 years stay free with existing bedding</li>
              <li>• Children 5-12 years: 50% of adult rate with extra bed</li>
              <li>• Guests must be 18+ to check-in unless accompanied by adults</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-700 mb-4">Safety & Security</h3>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• CCTV surveillance in common areas for security</li>
              <li>• Safe deposit boxes available at front desk</li>
              <li>• Emergency procedures posted in each room</li>
              <li>• 24-hour security personnel on duty</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">6. Liability & Damages</h2>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• Hotel not responsible for loss/damage to personal belongings</li>
              <li>• Guests liable for damages to hotel property</li>
              <li>• Use of hotel facilities at guest's own risk</li>
              <li>• Hotel reserves right to charge for excessive cleaning</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">7. Force Majeure</h2>
            <p className="text-neutral-600 mb-6">
              The hotel shall not be liable for any failure to perform due to unforeseen circumstances 
              beyond our control, including natural disasters, government actions, or other force majeure events.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">8. Privacy & Data Protection</h2>
            <p className="text-neutral-600 mb-6">
              Guest information is collected and used in accordance with our Privacy Policy. 
              We are committed to protecting your personal data and privacy rights.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">9. Modifications</h2>
            <p className="text-neutral-600 mb-6">
              These terms and conditions may be updated from time to time. 
              Continued use of our services constitutes acceptance of any modifications.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">10. Contact Information</h2>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <p className="text-neutral-600 mb-4">
                For questions about these terms and conditions, please contact us:
              </p>
              <div className="space-y-2 text-neutral-700">
                <p><strong>Email:</strong> hoteladityamysore@gmail.com</p>
                <p><strong>Phone:</strong> +91 82177 71771</p>
                <p><strong>Address:</strong> 1458, Sapna Book House, 1, NS Road, Devaraja Mohalla, Mysuru, Karnataka 570004</p>
                <p><strong>Hours:</strong> 24/7 Front Desk Service</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gold-50 border border-gold-200 rounded-lg">
              <h3 className="text-lg font-semibold text-gold-800 mb-2">Agreement</h3>
              <p className="text-gold-700 mb-0">
                By making a reservation or staying at our hotel, you agree to comply with 
                these terms and conditions in their entirety.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
