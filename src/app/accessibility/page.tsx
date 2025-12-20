import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Accessibility - Aditya Hotel Mysore',
  description: 'Learn about our accessibility features and accommodations for guests with disabilities at Aditya Hotel Mysore.',
}

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-neutral-900 via-neutral-800 to-gold-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="page-title">Accessibility</h1>
          <p className="text-xl opacity-90">Committed to providing inclusive hospitality for all guests</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-blue-800 mb-2">
                <strong>Our Commitment</strong>
              </p>
              <p className="text-blue-700 mb-0">
                At Aditya Hotel Mysore, we are committed to providing equal access and opportunities to all guests, 
                regardless of their physical abilities. We continuously work to improve our accessibility features.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Accessible Rooms & Accommodations</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Room Features</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• Wheelchair accessible rooms available</li>
                  <li>• Wide doorways (minimum 32 inches)</li>
                  <li>• Lowered closet rods and shelves</li>
                  <li>• Accessible light switches and outlets</li>
                  <li>• Visual and auditory alarm systems</li>
                  <li>• TTY telephone available upon request</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Bathroom Accessibility</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• Roll-in showers with grab bars</li>
                  <li>• Raised toilet seats</li>
                  <li>• Accessible vanity and mirror placement</li>
                  <li>• Emergency pull cords</li>
                  <li>• Non-slip flooring</li>
                  <li>• Shower chairs available upon request</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Hotel Accessibility Features</h2>
            
            <h3 className="text-xl font-semibold text-neutral-700 mb-4">Entrance & Lobby</h3>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• Automatic sliding main entrance doors</li>
              <li>• Ramped access to lobby level</li>
              <li>• Accessible reception desk height</li>
              <li>• Tactile floor indicators for visually impaired guests</li>
              <li>• Clear pathways throughout lobby area</li>
              <li>• Accessible seating areas</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-700 mb-4">Elevators & Navigation</h3>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• Elevators with braille and audio announcements</li>
              <li>• Wide elevator doors and spacious interiors</li>
              <li>• Accessible elevator controls</li>
              <li>• Clear directional signage throughout property</li>
              <li>• Braille room numbers and signage</li>
              <li>• Emergency evacuation procedures for disabled guests</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-700 mb-4">Room Service</h3>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• In-room food service available</li>
              <li>• Room service information available in large print and braille</li>
              <li>• Special dietary accommodations through partner restaurants</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Services & Assistance</h2>
            
            <div className="bg-neutral-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-neutral-800 mb-4">Available Services</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-neutral-600 space-y-2">
                  <li>• 24/7 assistance from trained staff</li>
                  <li>• Luggage assistance</li>
                  <li>• Escort services within the hotel</li>
                  <li>• Sign language interpretation (with advance notice)</li>
                  <li>• Reading assistance</li>
                </ul>
                <ul className="text-neutral-600 space-y-2">
                  <li>• Transportation assistance</li>
                  <li>• Equipment lending (wheelchairs, walkers)</li>
                  <li>• Pet accommodation for service animals</li>
                  <li>• Emergency assistance protocols</li>
                  <li>• Customized check-in/check-out</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Technology & Communication</h2>
            
            <h3 className="text-xl font-semibold text-neutral-700 mb-4">Hearing Impaired Guests</h3>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• TTY phones available upon request</li>
              <li>• Visual fire alarms and door knock indicators</li>
              <li>• Closed captioning on all room televisions</li>
              <li>• Written communication preferred at front desk</li>
              <li>• Vibrating alarm clocks available</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-700 mb-4">Visually Impaired Guests</h3>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• Service animals welcome (no additional charges)</li>
              <li>• Audio descriptions of hotel layout available</li>
              <li>• Braille information available</li>
              <li>• Large print materials</li>
              <li>• Verbal descriptions of room features</li>
              <li>• Tactile markers for room identification</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Parking & Transportation</h2>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• Designated accessible parking spaces</li>
              <li>• Close proximity to main entrance</li>
              <li>• Wider parking spaces for wheelchair access</li>
              <li>• Assistance with vehicle access</li>
              <li>• Coordination with accessible taxi services</li>
              <li>• Airport transfer with accessible vehicles (with advance notice)</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Emergency Procedures</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-4">Emergency Protocols</h3>
              <ul className="text-red-700 space-y-2">
                <li>• Special evacuation procedures for guests with disabilities</li>
                <li>• Designated refuge areas on each floor</li>
                <li>• Emergency communication devices available</li>
                <li>• Trained staff for emergency assistance</li>
                <li>• Alternative evacuation routes identified</li>
                <li>• 24/7 emergency response team</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Booking & Special Requests</h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-4">How to Request Accommodations</h3>
              <p className="text-yellow-700 mb-4">
                To ensure we can provide the best possible accommodations for your stay:
              </p>
              <ul className="text-yellow-700 space-y-2">
                <li>• Contact us at least 48 hours before your arrival</li>
                <li>• Specify your accessibility needs when booking</li>
                <li>• Inform us of any special equipment requirements</li>
                <li>• Let us know if you need assistance during your stay</li>
                <li>• Provide details about service animals</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-neutral-700 mb-4">Room Availability</h3>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• Limited number of accessible rooms available</li>
              <li>• Early booking recommended for peak seasons</li>
              <li>• No additional charges for accessibility features</li>
              <li>• Room modifications may be possible with advance notice</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Continuous Improvement</h2>
            <p className="text-neutral-600 mb-6">
              We are continuously working to improve our accessibility features and services. 
              Your feedback helps us enhance our facilities and better serve all guests. 
              Please share your suggestions with our management team.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Local Accessibility Resources</h2>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• Wheelchair rental services in Mysore</li>
              <li>• Accessible tourist attractions nearby</li>
              <li>• Medical facilities with accessibility features</li>
              <li>• Transportation services for disabled travelers</li>
              <li>• Local disability support organizations</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Contact Information</h2>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <p className="text-neutral-600 mb-4">
                For accessibility questions or to make special accommodation requests:
              </p>
              <div className="space-y-2 text-neutral-700">
                <p><strong>Phone:</strong> +91 82177 71771</p>
                <p><strong>Email:</strong> hoteladityamysore@gmail.com</p>
                <p><strong>WhatsApp:</strong> +91 82177 71771</p>
                <p><strong>Address:</strong> 1458, Sapna Book House, 1, NS Road, Devaraja Mohalla, Mysuru, Karnataka 570004</p>
                <p><strong>Accessibility Coordinator:</strong> Available 24/7 at front desk</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gold-50 border border-gold-200 rounded-lg">
              <h3 className="text-lg font-semibold text-gold-800 mb-2">Our Promise</h3>
              <p className="text-gold-700 mb-0">
                We are committed to providing equal access and exceptional service to all our guests. 
                If you have specific accessibility needs, please don't hesitate to contact us. 
                We're here to ensure your stay is comfortable and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
