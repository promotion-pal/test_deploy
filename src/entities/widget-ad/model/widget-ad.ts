import {
  AdCategory,
  UserAdAddress,
} from '@/entities/advertisement/model/advertisement';

export type WidgetAdPhoto = {
  photo: string;
};

export interface WidgetAd {
  // Основные поля
  id: string;
  category_type: AdCategory;
  title: string;
  address: UserAdAddress;
  rating: number;
  photos: WidgetAdPhoto[];

  // Зависящие от типа объявления
  room_count?: number;
  rent_type?: string;
  guests?: number;
  is_studio?: boolean;
  sleep_place_count?: number;
  price_per_hour?: number;
  price_per_day?: number;
  price_per_tour?: number;
  price_per_excursion?: number;
  average_bill?: number;
  is_last_minute_tour?: number;
  is_delivery?: boolean;
  link: string;
}
