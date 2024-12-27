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
        {
          message: "Email and password are required",
        },
        {
          status: 400,
        }
      );
    }

    const collection = db.collection("users");
    const isUserExisits = await collection.findOne({ email });

    if (isUserExisits) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await collection.insertOne({
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    return NextResponse.json(
      {
        message: "User registered Successfully",
        userId: result.insertedId,
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
