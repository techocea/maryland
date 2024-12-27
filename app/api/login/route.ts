import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import Users from "@/app/lib/registerSchema";
import connectDB from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  try {
    await connectDB();

    const isUserExists = await Users.findOne({ email });

    if (!isUserExists) {
      return NextResponse.json(
        { msg: "Invalid email or password", success: false },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, isUserExists.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid email or password", success: false },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        message: "Login successful",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[LOGIN ERROR]: ", error);

    return NextResponse.json(
      {
        msg: "An error occurred while logging in",
        success: false,
      },
      { status: 500 }
    );
  }
}
