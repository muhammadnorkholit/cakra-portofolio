import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (
    !request.cookies.has("auth") ||
    request.cookies.get("auth")?.value == ""
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/projects/:path*", "/settings/:path*"],
};
