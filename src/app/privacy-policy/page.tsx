import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - Aditya Hotel Mysore',
  description: 'Read our privacy policy to understand how we collect, use, and protect your personal information at Aditya Hotel Mysore.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-neutral-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="page-title">
              Privacy Policy
            </h1>
            <p className="page-subtitle">
              Your privacy is important to us. Learn how we protect and use your information.
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
                <strong>Last updated:</strong> January 2024
              </p>
            </div>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-neutral-700 mb-4">Personal Information</h3>
            <p className="text-neutral-600 mb-4">
              When you make a reservation or contact us, we may collect:
            </p>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• Full name and contact information</li>
              <li>• Email address and phone number</li>
              <li>• Payment and billing information</li>
              <li>• Identification documents as required by law</li>
              <li>• Special requests and preferences</li>
              <li>• Communication records and feedback</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-700 mb-4">Automatically Collected Information</h3>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• IP address and browser information</li>
              <li>• Device information and operating system</li>
              <li>• Website usage patterns and analytics</li>
              <li>• Cookies and tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">2. How We Use Your Information</h2>
            <p className="text-neutral-600 mb-4">We use your information to:</p>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• Process and confirm your reservations</li>
              <li>• Provide customer support and assistance</li>
              <li>• Send booking confirmations and updates</li>
              <li>• Improve our services and website functionality</li>
              <li>• Comply with legal and regulatory requirements</li>
              <li>• Send promotional offers (with your consent)</li>
              <li>• Ensure security and prevent fraud</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">3. Information Sharing</h2>
            <p className="text-neutral-600 mb-4">
              We do not sell or rent your personal information. We may share information with:
            </p>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• Payment processors for secure transactions</li>
              <li>• Government authorities when legally required</li>
              <li>• Service providers who help operate our business</li>
              <li>• Emergency contacts in case of medical emergencies</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">4. Data Security</h2>
            <p className="text-neutral-600 mb-6">
              We implement appropriate security measures to protect your personal information, including:
            </p>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• SSL encryption for data transmission</li>
              <li>• Secure servers and access controls</li>
              <li>• Regular security audits and updates</li>
              <li>• Staff training on data protection</li>
              <li>• Limited access to personal information</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">5. Your Rights</h2>
            <p className="text-neutral-600 mb-4">You have the right to:</p>
            <ul className="text-neutral-600 mb-6 space-y-2">
              <li>• Access your personal information</li>
              <li>• Correct inaccurate information</li>
              <li>• Request deletion of your data</li>
              <li>• Opt-out of marketing communications</li>
              <li>• File a complaint with authorities</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">6. Cookies and Tracking</h2>
            <p className="text-neutral-600 mb-6">
              We use cookies to enhance your browsing experience and analyze website traffic. 
              You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-bold text-neutral-800 mb-6">7. Contact Information</h2>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <p className="text-neutral-600 mb-4">
                If you have questions about this privacy policy, please contact us:
              </p>
              <div className="space-y-2 text-neutral-700">
                <p><strong>Email:</strong> hoteladityamysore@gmail.com</p>
                <p><strong>Phone:</strong> +91 82177 71771</p>
                <p><strong>Address:</strong> 1458, Sapna Book House, 1, NS Road, Devaraja Mohalla, Mysuru, Karnataka 570004</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gold-50 border border-gold-200 rounded-lg">
              <h3 className="text-lg font-semibold text-gold-800 mb-2">Your Consent</h3>
              <p className="text-gold-700 mb-0">
                By using our website and services, you consent to the collection and use of 
                your information as described in this privacy policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
