import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function isLamDomain(host: string) {
  const h = host.split(":")[0]?.toLowerCase() ?? "";
  return h === "lachgasbezorgenamsterdam.nl" || h === "www.lachgasbezorgenamsterdam.nl";
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  if (!isLamDomain(host)) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;
  if (pathname === "/" || pathname === "") {
    const url = request.nextUrl.clone();
    url.pathname = "/lachgasbezorgenamsterdam";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
