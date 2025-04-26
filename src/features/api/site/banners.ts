import { FetchApi } from '@/shared/api/fetch';

export type BannerPlacement =
  | 'main_page'
  | 'housing'
  | 'transport'
  | 'recreation'
  | 'tour'
  | 'excursion';

export type SliderImage = {
  image: string;
};

export interface SiteBanner {
  slider_images: SliderImage[];
  placement: BannerPlacement;
  banner_image: string;
  banner_title: string;
  slider_title: string;
}

class BannersService extends FetchApi {
  getBanners(placement?: BannerPlacement) {
    return this.get<SiteBanner[]>('/site/banners', {
      params: { placement },
    });
  }
}

export const bannersService = new BannersService();
