const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const nodemailer = require('nodemailer');
const { Op } = require('sequelize'); 
const moment = require('moment-timezone');

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  host:  process.env.EMAIL_HOST, //'smtp.webfrat.com' // Replace with your SMTP server address
  port:  process.env.EMAIL_PORT, // Use 587 for TLS or 465 for SSL
  secure: false, // Set to true if using port 465
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

router.post('/', async (req, res) => {
  const { from, to, date, time, phoneNumber } = req.body;
  if(!from || !to || !date || !time || !phoneNumber) {
    return res.status(400).json({message: 'all the fields are mandatory'})
  }
  
  // Combine date and time into a single datetime object
  const bookingDatetime = new Date(`${date}T${time}`);
  const bookingDateTimeBoston = moment.tz(bookingDatetime, 'America/New_York').format('YYYY-MM-DD HH:mm:ss');

  try {
    // Check for existing bookings within ±30 minutes
    const thirtyMinutes = 30 * 60 * 1000; // 30 minutes in milliseconds
    const startTime = new Date(bookingDatetime.getTime() - thirtyMinutes);
    const endTime = new Date(bookingDatetime.getTime() + thirtyMinutes);

    const existingBooking = await Booking.findOne({
      where: {
        booking_datetime: {
          [Op.between]: [startTime, endTime]
        }
      }
    });

    if (existingBooking) {
      return res.status(400).json({ error: 'Time slot is not available' });
    }

    // Create the new booking
    const booking = await Booking.create({
      from_location: from,
      to_location: to,
      booking_datetime: bookingDatetime,
      phone_number: phoneNumber
    });

    // Email notification
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender's email address
      to: process.env.EMAIL_OWNER, //  owner's email address
      subject: 'New Booking Confirmation',
      text: `New booking received:\n\nFrom: ${from}\nTo: ${to}\nDate and Time: ${bookingDateTimeBoston}\nCustomer Phone: ${phoneNumber}`
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({message: 'booking created successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating booking' });
  }
});

module.exports = router;
