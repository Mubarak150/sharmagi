const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Adjust the path to your Contact model
const nodemailer = require('nodemailer');

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, //'smtp.webfrat.com' // Replace with your SMTP server address
  port: process.env.EMAIL_PORT, // Use 587 for TLS or 465 for SSL
  secure: false, // Set to true if using port 465
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

router.post('/', async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  if(!firstName || !lastName || !email || !message ) {
    return res.status(400).json({message: 'all the fields are mandatory'})
  }

  try {
    // Save contact form data to the database
    const contact = await Contact.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
    });

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender's email address
      to: process.env.EMAIL_OWNER, //  owner's email address
      subject: 'New Contact Form Submission',
      text: `New contact form submission:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ message: 'Error processing contact form submission' });
  }
});

module.exports = router;
