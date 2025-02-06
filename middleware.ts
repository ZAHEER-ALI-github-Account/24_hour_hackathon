import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function middleware(req: NextRequest) {
  const authData = await auth(); // auth() ko await karein
  const userId = authData?.userId; // userId extract karein

  // Agar user logged in nahi hai aur checkout page visit kar raha hai to redirect karein
  if (!userId && req.nextUrl.pathname.startsWith("/checkout")) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
}

// Matcher to apply middleware only on pages
export const config = {
  matcher: "/((?!_next|.\\..).*)",
};