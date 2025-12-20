'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: 'deluxe',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: '',
            email: '',
            phone: '',
            checkIn: '',
            checkOut: '',
            guests: '1',
            roomType: 'deluxe',
            message: ''
          })
        }, 3000)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your request. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["098450 92115", "Front Desk Available 24/7"],
      action: "tel:09845092115"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["hoteladityamysore@gmail.com", "reservations available"],
      action: "mailto:hoteladityamysore@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["No. 1458/1, NS Road, Devaraja Mohalla", "Near Sapna Book House, Mysore – 570001"],
      action: "https://maps.google.com/?q=No.+1458/1+NS+Road+Devaraja+Mohalla+Mysore+570001"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reception Hours",
      details: ["24/7 Available", "Front Desk Service"],
      action: null
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-section">
          <h2 className="section-title">
            <span className="text-reveal">
              <span className="text-reveal-inner">Contact & Reservations</span>
            </span>
          </h2>
          <p className="section-subtitle">
            Ready to experience the luxury and comfort of Aditya Hotel? Get in touch with us to make your reservation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="reveal-section">
            <h3 className="heading-2 mb-8">Get in Touch</h3>
            
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-neutral-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-gold-600">{info.icon}</div>
                    <h4 className="font-semibold text-neutral-800">{info.title}</h4>
                  </div>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-neutral-600">
                        {info.action ? (
                          <a href={info.action} className="hover:text-gold-600 transition-colors">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-neutral-200 rounded-xl h-64 flex items-center justify-center mb-8">
              <div className="text-center text-neutral-600">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>Interactive Map</p>
                <p className="text-sm">Google Maps will be embedded here</p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl p-6 text-white">
              <h4 className="text-xl font-semibold mb-4">Quick Booking</h4>
              <p className="mb-4 opacity-90">Need immediate assistance? Call us directly for instant bookings and special requests.</p>
              <a 
                href="tel:09845092115"
                className="inline-flex items-center gap-2 bg-white text-gold-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>

          {/* Booking Form */}
          <div className="reveal-section">
            <div className="bg-neutral-50 rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-neutral-800 mb-6">Make a Reservation</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-neutral-800 mb-2">Thank You!</h4>
                  <p className="text-neutral-600">Your reservation request has been submitted. We'll contact you shortly to confirm your booking.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  {/* Booking Details */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="checkIn" className="block text-sm font-medium text-neutral-700 mb-2">
                        Check-in Date *
                      </label>
                      <input
                        type="date"
                        id="checkIn"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="checkOut" className="block text-sm font-medium text-neutral-700 mb-2">
                        Check-out Date *
                      </label>
                      <input
                        type="date"
                        id="checkOut"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-neutral-700 mb-2">
                        Number of Guests
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors text-neutral-700"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5+">5+ Guests</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="roomType" className="block text-sm font-medium text-neutral-700 mb-2">
                        Room Type
                      </label>
                      <select
                        id="roomType"
                        name="roomType"
                        value={formData.roomType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors text-neutral-700"
                      >
                        <option value="standard">Standard Room</option>
                        <option value="superior">Superior Room</option>
                        <option value="suite">Suite Room</option>
                        <option value="3bed">3-Bed Room</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors resize-none"
                      placeholder="Any special requests or requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={20} />
                    {isSubmitting ? 'Submitting...' : 'Submit Reservation Request'}
                  </button>

                  <p className="text-xs text-neutral-600 text-center">
                    * By submitting this form, you agree to our terms and conditions. 
                    We'll contact you within 24 hours to confirm your reservation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
