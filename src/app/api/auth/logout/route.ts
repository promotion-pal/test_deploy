import { sessionService } from '@/features/auth/api/session';

export async function GET() {
  try {
    await sessionService.delete();
    return true;
  } catch (error) {
    return false;
  }
}
