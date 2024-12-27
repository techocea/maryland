import ContactForm from "@/app/lib/contactSchema";
import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, contact, mode, destination, area } = await req.json();
  try {
    await connectDB();
    await ContactForm.create({ name, email, contact, mode, destination, area });

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
