import { fetchInstance } from '@/shared/api';

class UserService {
  async getUser(userId: number) {
    return fetchInstance.token.get(`/site/users/${userId}`);
  }
}

export const userService = new UserService();
