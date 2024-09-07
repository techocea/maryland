const ContactForm = require("../models/contactModel");
const nodemailer = require("nodemailer");

require("dotenv").config();

exports.submitContactForm = async (req, res) => {
  const { name, contact, email, amount, purpose } = req.body;

  try {
    const formDetails = new ContactForm({
      name,
      contact,
      email,
      amount,
      purpose,
    });
    await formDetails.save();
    res.status(201).json({ message: "Data submitted successfully" });
  } catch (error) {
    console.error("Error saving form to database:", error);
    return res.status(500).json({ message: "Error saving form data" });
  }

  // const transporter = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: process.env.GMAIL_USER,
  //     pass: process.env.GMAIL_PASS,
  //   },
  // });

  // let mailOptions = {
  //   from: req.body.email,
  //   to: "loandepbr@gmail.com",
  //   subject: `New Loan Customer: ${req.body.name}`,
  //   html: `
  //     <h2>Contact Form Details</h2>
  //     <p><strong>Name:</strong> ${name}</p>
  //     <p><strong>Contact:</strong> ${contact}</p>
  //     <p><strong>Email:</strong> ${email}</p>
  //     <p><strong>Amount:</strong> LKR ${amount}</p>
  //     <p><strong>Purpose:</strong> ${purpose}</p>
  //   `,
  // };

  // try {
  //   await transporter.sendMail(mailOptions);
  //   return res
  //     .status(200)
  //     .json({ message: "Form and email sent successfully!" });
  // } catch (error) {
  //   console.error("Error sending email:", error);
  //   return res
  //     .status(500)
  //     .json({ message: "Form saved, but email failed to send" });
  // }
};
