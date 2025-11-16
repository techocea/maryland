import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import User from "@/app/lib/registerSchema";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  try {
    await connectDB();

    const isUserExisits = await User.findOne({ email });

    if (isUserExisits) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        message: "User registered Successfully",
        success: true,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[REGISTRATION ERROR]: ", error);

    return NextResponse.json(
      {
        message: "An error occured while registering user",
        success: false,
      },
      { status: 500 }
    );
  }
}
