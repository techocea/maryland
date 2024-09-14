const ContactForm = require("../models/contactModel");
const nodemailer = require("nodemailer");

require("dotenv").config();

exports.submitContactForm = async (req, res) => {
  const { name, contact, email, amount, purpose } = req.body;

  try {
    // First, save form details to the database
    const formDetails = new ContactForm({
      name,
      contact,
      email,
      amount,
      purpose,
    });
    await formDetails.save();

    // After saving, proceed with sending the email
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    let mailOptions = {
      from: process.env.GMAIL_USER, // Sender (your email)
      to: process.env.GMAIL_USER, // Receiver (your email)
      subject: `New Loan Customer: ${name}`,
      html: `
        <h2>Loan Customer Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Amount:</strong> LKR ${amount}</p>
        <p><strong>Purpose:</strong> ${purpose}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // If both operations succeed, send a success response
    return res
      .status(200)
      .json({ message: "Form data saved and email sent successfully!" });
  } catch (error) {
    console.error("Error in form submission process:", error);

    // Handle specific email failure case after saving the form
    if (error.response) {
      return res.status(500).json({
        message: "Form saved, but email failed to send",
        error: error.message,
      });
    }

    // Handle general form save or email error
    return res.status(500).json({
      message: "Error processing form data or sending email",
      error: error.message,
    });
  }
};
