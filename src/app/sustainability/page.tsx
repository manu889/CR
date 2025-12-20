import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Sustainability - Aditya Hotel Mysore',
  description: 'Learn about our environmental sustainability initiatives and eco-friendly practices at Aditya Hotel Mysore.',
}

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-green-800 via-green-700 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="page-title">Sustainability</h1>
          <p className="text-xl opacity-90">Committed to environmental responsibility and sustainable hospitality</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <p className="text-green-800 mb-2">
                <strong>Our Environmental Commitment</strong>
              </p>
              <p className="text-green-700 mb-0">
                At Aditya Hotel Mysore, we believe that luxury and environmental responsibility go hand in hand. 
                We are dedicated to minimizing our environmental impact while providing exceptional hospitality.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Our Sustainability Mission</h2>
            <p className="text-neutral-600 mb-6">
              We strive to be a leader in sustainable hospitality by implementing comprehensive environmental 
              practices that protect our beautiful city of Mysore and contribute to a more sustainable future 
              for tourism in Karnataka.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Energy Conservation</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Energy Efficiency</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• LED lighting throughout the property</li>
                  <li>• Energy-efficient HVAC systems</li>
                  <li>• Motion sensor lighting in corridors</li>
                  <li>• Smart thermostats in guest rooms</li>
                  <li>• Regular energy audits and monitoring</li>
                  <li>• Energy-efficient appliances and equipment</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-4">Renewable Energy</h3>
                <ul className="text-yellow-700 space-y-2">
                  <li>• Solar panels for hot water heating</li>
                  <li>• Natural lighting optimization</li>
                  <li>• Energy recovery systems</li>
                  <li>• Power management systems</li>
                  <li>• Gradual transition to renewable sources</li>
                  <li>• Carbon footprint reduction initiatives</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Water Conservation</h2>
            
            <h3 className="text-xl font-semibold text-neutral-700 mb-4">Water Management</h3>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• Low-flow showerheads and faucets in all rooms</li>
              <li>• Dual-flush toilets for water efficiency</li>
              <li>• Rainwater harvesting system</li>
              <li>• Greywater recycling for landscaping</li>
              <li>• Regular leak detection and maintenance</li>
              <li>• Guest education on water conservation</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-700 mb-4">Laundry & Housekeeping</h3>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• High-efficiency washing machines</li>
              <li>• Cold water washing when possible</li>
              <li>• Towel and linen reuse programs</li>
              <li>• Eco-friendly cleaning products</li>
              <li>• Optimized housekeeping schedules</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Waste Management</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-green-600 text-3xl font-bold mb-2">REDUCE</div>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Minimize packaging</li>
                  <li>• Digital receipts and bills</li>
                  <li>• Bulk dispensers for amenities</li>
                  <li>• Reduce single-use items</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                <div className="text-blue-600 text-3xl font-bold mb-2">REUSE</div>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Repurpose furniture and decor</li>
                  <li>• Donate usable items</li>
                  <li>• Refillable amenity dispensers</li>
                  <li>• Creative upcycling projects</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
                <div className="text-orange-600 text-3xl font-bold mb-2">RECYCLE</div>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Comprehensive recycling program</li>
                  <li>• Electronic waste collection</li>
                  <li>• Paper and cardboard recycling</li>
                  <li>• Glass and plastic separation</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-neutral-700 mb-4">Organic Waste Management</h3>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• On-site composting for organic waste</li>
              <li>• Food waste reduction programs</li>
              <li>• Collaboration with local farmers for organic waste</li>
              <li>• Kitchen efficiency training for staff</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Sustainable Food & Beverage</h2>
            
            <h3 className="text-xl font-semibold text-neutral-700 mb-4">Local Sourcing</h3>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• Partnerships with local restaurants and suppliers</li>
              <li>• Support for sustainable food service partners</li>
              <li>• Support for organic farming initiatives</li>
              <li>• Reduced transportation emissions</li>
              <li>• Fresh, quality ingredients from Karnataka</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-700 mb-4">Responsible Food Service</h3>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• Elimination of single-use plastics in room service</li>
              <li>• Biodegradable packaging for food delivery</li>
              <li>• Coordination with eco-friendly local restaurants</li>
              <li>• Reusable containers and utensils when possible</li>
              <li>• Water served in glass bottles or jugs</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Green Building & Operations</h2>
            
            <div className="bg-neutral-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-neutral-800 mb-4">Eco-Friendly Materials</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-neutral-600 space-y-2">
                  <li>• Sustainable construction materials</li>
                  <li>• Low-VOC paints and finishes</li>
                  <li>• Locally sourced stone and wood</li>
                  <li>• Recycled and recyclable furnishings</li>
                </ul>
                <ul className="text-neutral-600 space-y-2">
                  <li>• Natural ventilation where possible</li>
                  <li>• Green landscaping with native plants</li>
                  <li>• Permeable surfaces for water absorption</li>
                  <li>• Chemical-free cleaning products</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Community & Local Impact</h2>
            
            <h3 className="text-xl font-semibold text-neutral-700 mb-4">Community Engagement</h3>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• Employment opportunities for local residents</li>
              <li>• Support for local artisans and craftspeople</li>
              <li>• Promotion of Mysore's cultural heritage</li>
              <li>• Educational programs on sustainability</li>
              <li>• Partnerships with local environmental organizations</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-700 mb-4">Cultural Preservation</h3>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• Showcase of traditional Karnataka arts and crafts</li>
              <li>• Support for local festivals and events</li>
              <li>• Preservation of architectural heritage</li>
              <li>• Promotion of sustainable tourism practices</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Guest Participation</h2>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">How You Can Help</h3>
              <p className="text-green-700 mb-4">
                We encourage our guests to join us in our sustainability efforts:
              </p>
              <ul className="text-green-700 space-y-2">
                <li>• Participate in our towel and linen reuse program</li>
                <li>• Use water and energy responsibly</li>
                <li>• Proper waste separation in rooms</li>
                <li>• Support local restaurants and sustainable food options</li>
                <li>• Use public transportation or walk when exploring Mysore</li>
                <li>• Support local businesses and artisans</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Certifications & Recognition</h2>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• Member of sustainable tourism initiatives</li>
              <li>• Compliance with environmental regulations</li>
              <li>• Regular environmental impact assessments</li>
              <li>• Recognition from local environmental groups</li>
              <li>• Continuous improvement programs</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Future Goals</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Short-term Goals (2024-2025)</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• Achieve 30% reduction in energy consumption</li>
                  <li>• Implement zero-waste-to-landfill program</li>
                  <li>• Expand solar energy installation</li>
                  <li>• Launch guest sustainability app</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Long-term Vision (2025-2030)</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• Carbon neutral operations</li>
                  <li>• 100% renewable energy usage</li>
                  <li>• Lead sustainable tourism in Karnataka</li>
                  <li>• Create model for eco-friendly hotels</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Transparency & Reporting</h2>
            <p className="text-neutral-600 mb-6">
              We believe in transparency and regularly report on our sustainability progress. 
              Our annual sustainability report is available upon request, detailing our 
              environmental impact, achievements, and future plans.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Contact & Feedback</h2>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <p className="text-neutral-600 mb-4">
                We welcome your suggestions and feedback on our sustainability initiatives:
              </p>
              <div className="space-y-2 text-neutral-700">
                <p><strong>Sustainability Coordinator:</strong> hoteladityamysore@gmail.com</p>
                <p><strong>Phone:</strong> +91 82177 71771</p>
                <p><strong>Guest Services:</strong> Available 24/7 for sustainability questions</p>
                <p><strong>Online Feedback:</strong> Contact form on our website</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Together for a Sustainable Future</h3>
              <p className="text-green-700 mb-0">
                By choosing Aditya Hotel Mysore, you're supporting sustainable tourism and 
                environmental conservation. Together, we can make a positive impact while 
                enjoying the beauty and culture of Mysore.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
