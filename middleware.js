import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;

  const protectedRoutes = ["/profile", "/account", "/dashboard"];

  if (protectedRoutes.some((p) => req.nextUrl.pathname.startsWith(p))) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
}
