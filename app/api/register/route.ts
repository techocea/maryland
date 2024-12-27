import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import Users from "@/app/lib/registerSchema";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  try {
    await connectDB();

    const isUserExisits = await Users.findOne({ email });

    if (isUserExisits) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await Users.create({ email, password: hashedPassword });

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
