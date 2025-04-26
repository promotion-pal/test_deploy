import { sessionService } from '@/features/auth/api/session';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await sessionService.get();
    return NextResponse.json(res);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: true });
  }
}
