const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Create a contact message
router.post('/', async (req, res) => {
  try {
    console.log('Received contact form submission:', req.body);
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Please provide name, email and message' 
      });
    }
    
    // Create new contact entry
    const newContact = new Contact({
      name,
      email,
      message
    });
    
    // Save to database
    try {
      const contact = await newContact.save();
      console.log('Contact saved to database:', contact);
      
      // Optional: Send email notification
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        try {
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS
            }
          });
          
          const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO || process.env.EMAIL_USER,
            subject: `New Contact Form Submission from ${name}`,
            text: `
              Name: ${name}
              Email: ${email}
              Message: ${message}
            `
          };
          
          transporter.sendMail(mailOptions, (error) => {
            if (error) {
              console.log('Email error:', error);
            } else {
              console.log('Email notification sent');
            }
          });
        } catch (emailErr) {
          console.error('Email configuration error:', emailErr);
          // Continue execution - email is optional
        }
      }
      
      return res.status(201).json({ success: true, data: contact });
    } catch (dbErr) {
      console.error('Database error:', dbErr);
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to save to database. Check MongoDB connection.' 
      });
    }
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ 
      success: false, 
      error: 'Server Error: ' + (err.message || 'Unknown error') 
    });
  }
});

module.exports = router;