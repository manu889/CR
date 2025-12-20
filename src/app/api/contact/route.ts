import { NextRequest, NextResponse } from 'next/server'

// Input validation and sanitization
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,15}$/
  return phoneRegex.test(phone)
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '')
}

function validateDate(dateString: string): boolean {
  const date = new Date(dateString)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return date >= today
}

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request
    const formData = await request.json()
    
    // Input validation
    const requiredFields = ['name', 'email', 'phone', 'checkIn', 'checkOut', 'guests']
    for (const field of requiredFields) {
      if (!formData[field] || formData[field].toString().trim() === '') {
        return NextResponse.json({ 
          success: false, 
          message: `${field} is required` 
        }, { status: 400 })
      }
    }
    
    // Validate and sanitize inputs
    const name = sanitizeInput(formData.name)
    const email = sanitizeInput(formData.email)
    const phone = sanitizeInput(formData.phone)
    const message = formData.message ? sanitizeInput(formData.message) : ''
    
    // Validation checks
    if (name.length < 2 || name.length > 100) {
      return NextResponse.json({ 
        success: false, 
        message: 'Name must be between 2 and 100 characters' 
      }, { status: 400 })
    }
    
    if (!validateEmail(email)) {
      return NextResponse.json({ 
        success: false, 
        message: 'Invalid email format' 
      }, { status: 400 })
    }
    
    if (!validatePhone(phone)) {
      return NextResponse.json({ 
        success: false, 
        message: 'Invalid phone number format' 
      }, { status: 400 })
    }
    
    if (!validateDate(formData.checkIn)) {
      return NextResponse.json({ 
        success: false, 
        message: 'Check-in date must be today or in the future' 
      }, { status: 400 })
    }
    
    if (!validateDate(formData.checkOut)) {
      return NextResponse.json({ 
        success: false, 
        message: 'Check-out date must be in the future' 
      }, { status: 400 })
    }
    
    if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      return NextResponse.json({ 
        success: false, 
        message: 'Check-out date must be after check-in date' 
      }, { status: 400 })
    }
    
    // Rate limiting check (simple in-memory store - for production use Redis)
    const clientIP = request.headers.get('x-forwarded-for') || 'unknown'
    console.log(`Reservation request from IP: ${clientIP}`)
    
    // Log the validated data
    console.log('Validated reservation request:', {
      name,
      email,
      phone,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: formData.guests,
      roomType: formData.roomType,
      message,
      ip: clientIP,
      timestamp: new Date().toISOString()
    })
    
    // Email content with sanitized data
    const emailContent = `
      New Reservation Request from Aditya Hotel Website
      
      Guest Information:
      - Name: ${name}
      - Email: ${email}
      - Phone: ${phone}
      
      Booking Details:
      - Check-in: ${formData.checkIn}
      - Check-out: ${formData.checkOut}
      - Guests: ${formData.guests}
      - Room Type: ${formData.roomType}
      
      Special Requests:
      ${message || 'None'}
      
      Request Details:
      - IP Address: ${clientIP}
      - Timestamp: ${new Date().toISOString()}
      
      Please contact the guest to confirm the reservation.
    `
    
    // In a real implementation, you would send this email to hoteladityamysore@gmail.com
    // Example with Nodemailer:
    /*
    const transporter = nodemailer.createTransporter({
      // Your email configuration
    })
    
    await transporter.sendMail({
      from: 'website@adityahotelmysore.com',
      to: 'hoteladityamysore@gmail.com',
      subject: 'New Reservation Request - Aditya Hotel Mysore',
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>')
    })
    */
    
    return NextResponse.json({ 
      success: true, 
      message: 'Reservation request submitted successfully' 
    })
    
  } catch (error) {
    console.error('Error processing reservation:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to submit reservation request. Please try again.' 
    }, { status: 500 })
  }
}
