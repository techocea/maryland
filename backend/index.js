const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const formRoute = require("./routes/formRoute");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT;

//middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//database connection
connectDB();
// mongoose
//   .connect("mongodb://127.0.0.1:27017/grameen")
//   .then(() => console.log("Mongodb connected"))
//   .catch((err) => console.log(err));

//routes
app.use("/api/contact", formRoute);
app.post("/send-email", async (req, res) => {
  try {
    // Setup Nodemailer transport with Gmail or any other service
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email provider
      auth: {
        user: process.env.GMAIL_USER, // Your email address
        pass: process.env.GMAIL_PASS, // Your email password (use app-specific password if needed)
      },
    });

    // Setup mail options
    const mailOptions = {
      from: req.body.email, // Sender email
      to: process.env.GMAIL_USER, // Recipient email from request body
      subject: `New Loan Customer: ${req.body.name}`,
      html: `
        <h2>Loan CustomerDetails</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Amount:</strong> LKR ${amount}</p>
        <p><strong>Purpose:</strong> ${purpose}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // If email is sent successfully, respond with a success message
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    // Handle errors, such as email sending failure, and respond with an error message
    res
      .status(500)
      .json({ message: "Failed to send email", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
app.get("/", (req, res) => {
  res.json("Hello from the Brescia Grameen Server");
});
