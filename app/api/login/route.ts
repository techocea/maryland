import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("test");

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { msg: "Email and password are required", success: false },
        { status: 400 }
      );
    }
    const collection = db.collection("users");
    const user = await collection.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { msg: "Invalid email or password", success: false },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

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
