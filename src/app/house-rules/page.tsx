import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'House Rules - Aditya Hotel Mysore',
  description: 'Read our house rules and policies for a comfortable stay at Aditya Hotel Mysore.',
}

export default function HouseRulesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-28 pb-16 bg-gradient-to-br from-neutral-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="page-title">
              House Rules
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Please review our house rules to ensure a pleasant stay for all our guests
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Check-in & Check-out</h2>
            <ul>
              <li><strong>Check-in:</strong> 2:00 PM onwards</li>
              <li><strong>Check-out:</strong> 12:00 PM (noon)</li>
              <li><strong>Early check-in/Late check-out:</strong> Subject to availability and may incur additional charges</li>
              <li><strong>Valid ID required:</strong> Government-issued photo ID mandatory for all guests</li>
            </ul>

            <h2>Guest Conduct</h2>
            <ul>
              <li><strong>Noise policy:</strong> Quiet hours from 10:00 PM to 7:00 AM</li>
              <li><strong>Visitors:</strong> All visitors must be registered at the front desk</li>
              <li><strong>Parties/Events:</strong> Not permitted in guest rooms without prior approval</li>
              <li><strong>Dress code:</strong> Appropriate attire required in public areas</li>
            </ul>

            <h2>Safety & Security</h2>
            <ul>
              <li><strong>No smoking:</strong> The hotel is completely smoke-free</li>
              <li><strong>Fire safety:</strong> Tampering with fire safety equipment is prohibited</li>
              <li><strong>Security:</strong> CCTV monitoring in common areas for guest safety</li>
              <li><strong>Lost & found:</strong> Items will be held for 30 days</li>
            </ul>

            <h2>Room Policies</h2>
            <ul>
              <li><strong>Maximum occupancy:</strong> As per room type booking</li>
              <li><strong>Additional guests:</strong> Extra charges apply for additional occupants</li>
              <li><strong>Children:</strong> Children under 12 stay free with parents (max 2 children)</li>
              <li><strong>Pets:</strong> Not permitted (service animals excluded)</li>
            </ul>

            <h2>Property Guidelines</h2>
            <ul>
              <li><strong>Damage policy:</strong> Guests are responsible for any damage to hotel property</li>
              <li><strong>Lost key cards:</strong> ₹500 replacement fee</li>
              <li><strong>Housekeeping:</strong> Daily service between 10:00 AM - 4:00 PM</li>
              <li><strong>Mini bar/amenities:</strong> Consumption charges apply</li>
            </ul>

            <h2>Food & Beverage</h2>
            <ul>
              <li><strong>Outside food:</strong> Permitted in guest rooms only</li>
              <li><strong>Room service:</strong> Available 24/7 through partner restaurants</li>
              <li><strong>Special dietary needs:</strong> Please inform us in advance</li>
            </ul>

            <div className="bg-gold-50 p-6 rounded-lg border-l-4 border-gold-400">
              <h4 className="text-gold-800 font-semibold mb-2">Important Note</h4>
              <p className="text-gold-700 mb-0">
                Violation of house rules may result in immediate termination of stay without refund. 
                For any clarifications, please contact our front desk at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
