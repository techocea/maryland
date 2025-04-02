import ContactForm from "@/app/lib/contactSchema";
import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, contact, mode, destination, area } = await req.json();
  try {
    await connectDB();
    await ContactForm.create({ name, email, contact, mode, destination, area });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const tableHTML = `
      <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;">
        <tr>
          <th style="border: 1px solid #ddd; padding: 10px; background-color: #f4f4f4; text-align: left;">Field</th>
          <th style="border: 1px solid #ddd; padding: 10px; background-color: #f4f4f4; text-align: left;">Value</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 10px;">Name</td>
          <td style="border: 1px solid #ddd; padding: 10px;">${name}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 10px;">Email</td>
          <td style="border: 1px solid #ddd; padding: 10px;">${email}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 10px;">Contact</td>
          <td style="border: 1px solid #ddd; padding: 10px;">${contact}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 10px;">Preferred Mode of Contact</td>
          <td style="border: 1px solid #ddd; padding: 10px;">${mode}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 10px;">Destination</td>
          <td style="border: 1px solid #ddd; padding: 10px;">${destination}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 10px;">Area of Interest</td>
          <td style="border: 1px solid #ddd; padding: 10px;">${area}</td>
        </tr>
      </table>
    `;

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Lead",
      html: `<p>You have a new lead:</p>${tableHTML}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      {
        message: "Contact Form sent successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return NextResponse.json(
      {
        message: "Error occurred while processing the request",
        success: false,
      },
      { status: 500 }
    );
  }
}
