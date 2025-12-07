import { jwtDecode } from "jwt-decode";
import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("accessToken")?.value;

  if (!accessToken) {
    return NextResponse.redirect(new URL("/login/", request.url));
  }

  if (pathname.startsWith("/login")) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/library/:path*", "/admin/:path*"],
};
