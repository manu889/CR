import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Cab Rental Mysore',
  description: 'Privacy Policy for Cab Rental Mysore. Learn how we collect, use, and protect your personal information when you use our taxi services.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom max-w-4xl">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: December 18, 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Cab Rental Mysore ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our taxi and tour services, visit our website, or interact with us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-700 mb-4">We may collect the following personal information:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Name and contact details (phone number, email address)</li>
                <li>Pickup and drop-off locations</li>
                <li>Travel dates and times</li>
                <li>Payment information (processed securely by payment gateways)</li>
                <li>Special requirements or preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>IP address and browser information</li>
                <li>Device type and operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website or search terms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use your information for the following purposes:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Processing and confirming your bookings</li>
                <li>Providing taxi and tour services</li>
                <li>Communicating with you about your bookings</li>
                <li>Sending booking confirmations and receipts</li>
                <li>Improving our services and customer experience</li>
                <li>Sending promotional offers (with your consent)</li>
                <li>Complying with legal obligations</li>
                <li>Preventing fraud and ensuring service security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">We may share your information with:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Drivers:</strong> To facilitate your trip</li>
                <li><strong>Payment processors:</strong> To process transactions securely</li>
                <li><strong>Service providers:</strong> Who help us operate our business (e.g., technology providers)</li>
                <li><strong>Law enforcement:</strong> When required by law or to protect rights and safety</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We do NOT sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
              <p className="text-gray-700">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Access your personal information we hold</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Lodge a complaint with a data protection authority</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Links</h2>
              <p className="text-gray-700">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
              <p className="text-gray-700">
                Our services are not directed to children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700"><strong>Cab Rental Mysore</strong></p>
                <p className="text-gray-700">Email: <a href="mailto:info@cabrentalmysore.com" className="text-amber-600 hover:underline">info@cabrentalmysore.com</a></p>
                <p className="text-gray-700">Phone: <a href="tel:+919632722100" className="text-amber-600 hover:underline">+91 96327 22100</a></p>
                <p className="text-gray-700">Address: Mysore, Karnataka 570001</p>
              </div>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link href="/" className="text-amber-600 hover:text-amber-700 font-semibold">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
