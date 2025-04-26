import { getToken, removeTokens } from '@/features/auth/lib/token-service';
import { fetchInstance } from '@/shared/api/fetch';
import { User } from '../../api/types/user';

class SessionService {
  async get(): Promise<{ user: User } | false> {
    try {
      const { accessToken } = await getToken();
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      if (accessToken) headers['Authorization'] = `Token ${accessToken}`;

      const user: User = await fetchInstance.get('/site/me', {
        headers,
        cache: 'no-store',
      });
      console.log(user);

      return {
        user: user,
      };
    } catch (error) {
      return false;
    }
  }

  async delete() {
    try {
      await removeTokens();
      return true;
    } catch (error) {
      return false;
    }
  }
}

export const sessionService = new SessionService();
