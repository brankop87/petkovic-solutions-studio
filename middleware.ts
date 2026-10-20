import { NextResponse, NextRequest } from "next/server";

// Sets an x-locale header from the URL path so the root layout can render the
// correct <html lang>. "/sr" and "/sr/*" are Serbian; everything else is English.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = pathname === "/sr" || pathname.startsWith("/sr/") ? "sr" : "en";

  const headers = new Headers(request.headers);
  headers.set("x-locale", locale);

  return NextResponse.next({ request: { headers } });
}

export const config = {
  // Run on pages only - skip Next internals, API routes, and static files.
  matcher: ["/((?!_next/|api/|.*\\.).*)"],
};
