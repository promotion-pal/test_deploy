import { sessionService } from '@/features/auth/api/session';
import { getToken } from '@/features/auth/lib/token-service';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await sessionService.get();
    const tokens = await getToken();

    return NextResponse.json({ res: res, tokens: tokens });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: true });
  }
}
