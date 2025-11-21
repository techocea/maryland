import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import User from "@/app/lib/registerSchema";
import { NextRequest, NextResponse } from "next/server";
import { signToken, verifyToken } from "@/lib/jwt";
import { cookies } from "next/headers";

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

    const token = signToken({
      _id: isUserExisits._id,
      email: isUserExisits.email,
    });

    const response = NextResponse.json(
      {
        message: "Login Successfull",
        success: "true",
      },
      { status: 200 }
    );

    response.cookies.set("userToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60, //1 hour
    });

    return response;
  } catch (error) {
    console.error("[LOGIN ERROR]: ", error);

    return NextResponse.json(
      {
        message: "Internal Server Error",
        success: false,
      },
      { status: 500 }
    );
  }
}

interface DecodedToken {
  _id: string;
  email: string;
}

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("userToken")?.value;

  if (!token) {
    return NextResponse.json(
      {
        message: "Unauthorized",
        success: false,
      },
      { status: 401 }
    );
  }

  try {
    const decoded = verifyToken(token) as DecodedToken;
    return NextResponse.json(decoded);
  } catch (error) {
    console.error("Error in verifying user: ", error);
    return NextResponse.json(
      {
        message: "Invalid token",
      },
      {
        status: 401,
      }
    );
  }
}
