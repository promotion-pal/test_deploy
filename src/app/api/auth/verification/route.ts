import { NextResponse, type NextRequest } from 'next/server';

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const confirm = searchParams.get('confirm');
  return NextResponse.redirect(new URL('/auth/login', request.nextUrl.origin));
}
