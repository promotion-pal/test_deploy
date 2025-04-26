import { AdCategory } from '@/entities/advertisement/model/advertisement';
import { WidgetAd } from '@/entities/widget-ad/model/widget-ad';
import { fetchInstance } from '@/shared/api/fetch';

export interface SiteHousingAdsAddress {
  full_address: string | null;
  region: string | null;
  city: string | null;
  street: string | null;
  latitude: string | null;
  longitude: string | null;
  station: string | null;
}

export interface SiteHousingAdsPhoto {
  photo: string;
}

export interface SiteHousingAdsResult {
  id: number;
  title: string;
  address: SiteHousingAdsAddress;
  rating: number | null;
  photos: SiteHousingAdsPhoto[];
  is_favorite: boolean;
  sleep_place_count: string | null;
  area: string | null;
  price: string | null;
  filtered_price: string | null;
  rent_type: string | null;
}

export interface GetSiteHousingAdsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: SiteHousingAdsResult[] | null;
}

export interface GetSiteHousingAdsParams {
  search?: string;
  range_filter?: string;
}

class AdsService {
  getWidgetAds(category: string) {
    if (category === 'main') {
      return fetchInstance.get<WidgetAd[]>('/site/ads/main-widget-ads');
    } else {
      return fetchInstance.get<WidgetAd[]>(
        `/site/ads/${category}/section_widget_ads`
      );
    }
  }

  getHousingAds(params?: GetSiteHousingAdsParams) {
    //@ts-ignore
    return fetchInstance.get<GetSiteHousingAdsResponse>('/site/ads/housing/', {
      params,
    });
  }

  async addToFavorite(category: AdCategory, id: string) {
    await fetchInstance.token.post(`/site/ads/${category}/${id}/is_favourite`);
  }
}

export const adsService = new AdsService();
