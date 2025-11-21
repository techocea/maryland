import { NextResponse, NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  const userToken = req.cookies.get("userToken")?.value;

  if (!userToken) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  try {
    await jwtVerify(
      userToken,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );
    return NextResponse.next();
  } catch (err) {
    const response = NextResponse.redirect(new URL("/sign-in", req.url));

    response.cookies.set("userToken", "", {
      maxAge: -1,
      path: "/",
    });

    return response;
  }
}

export const config = {
  matcher: ["/portal", "/welcome"],
};
