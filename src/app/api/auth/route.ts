import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tokens = searchParams.get('tokens')?.split(',') || [];

  const cookieStore = await cookies();
  const result: Record<string, string | null> = {};

  if (tokens.includes('access')) {
    result.accessToken = cookieStore.get('accessToken')?.value || null;
  }

  if (tokens.includes('refresh')) {
    result.refreshToken = cookieStore.get('refreshToken')?.value || null;
  }

  if (tokens.length === 0) {
    result.accessToken = cookieStore.get('accessToken')?.value || null;
    result.refreshToken = cookieStore.get('refreshToken')?.value || null;
  }

  return NextResponse.json(result);
}
