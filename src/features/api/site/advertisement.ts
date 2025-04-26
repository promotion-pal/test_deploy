import { fetchInstance, isApiError } from '@/shared/api/fetch';
import { redirect } from 'next/navigation';
import { HouseAds } from '../types/ads/house';

class AdvertisementService {
  async getHouse(id: number): Promise<HouseAds> {
    try {
      return await fetchInstance.get<HouseAds>(`/site/ads/housing/${id}/`);
    } catch (error) {
      if (isApiError(error)) {
        switch (error.status) {
          case 404:
            redirect('/404');
          case 401:
            redirect('/login');
          case 500:
            redirect('/');
          default:
            throw new Error(`Ошибка запроса: ${error.status}`);
        }
      }
      console.error('Неизвестная ошибка:', error);
      throw new Error('Произошла неизвестная ошибка');
    }
  }
}

export const advertisementService = new AdvertisementService();
