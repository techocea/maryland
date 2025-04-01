import User from "@/app/lib/registerSchema";
import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  try {
    await connectDB();

    const isUserExisits = await User.findOne({ email });

    if (!isUserExisits) {
      return NextResponse.json(
        { message: "User is not registered", succes: "false" },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      isUserExisits.password
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          message: "Invalid Password",
          success: "false",
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        message: "Login Successfull",
        success: "true",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[LOGIN ERROR]: ", error);

    return NextResponse.json(
      {
        message: "An error occured while registering user",
        success: false,
      },
      { status: 500 }
    );
  }
}
