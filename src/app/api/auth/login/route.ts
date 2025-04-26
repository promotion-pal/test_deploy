import { setToken } from '@/features/auth/lib/token-service';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { access_token, refresh_token } = await request.json();

    await setToken({ accessToken: access_token, refreshToken: refresh_token });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Token set error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
