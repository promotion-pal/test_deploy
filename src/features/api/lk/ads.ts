import { fetchInstance } from '@/shared/api';

class LkAdsService {
  async getAds() {
    return fetchInstance.token.get('/site/ads/business-housing/');
  }

  async addAds(adsForm: {}) {
    return fetchInstance.token.post('/site/ads/business-housing/', {
      data: adsForm,
    });
  }
}

export const lkAdsService = new LkAdsService();
