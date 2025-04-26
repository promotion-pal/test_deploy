import { LoginData, RegisterData } from '@/features/auth/model';
import { fetchInstance } from '@/shared/api/fetch';

class AuthService {
  async login(form: LoginData) {
    const tokens = await fetchInstance.post('/site/auth/login/', form);

    if (tokens) {
      const data = await fetchInstance.client.post('/api/auth/login', {
        data: tokens,
      });

      if (data) {
        return true;
      }
    }
  }
  async register(data: RegisterData) {
    try {
      const response = await fetchInstance.post('/site/auth/register/', data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export const authService = new AuthService();
