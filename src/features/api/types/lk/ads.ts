export interface AdsLkResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface AdsLkPhoto {
  id: number;
  photo: string;
}

export interface AdsLk {
  id: number;
  title: string;
  text: string;
  address: string;
  housing_type: string;
  area: number;
  sleep_place_count: string;
  photos: AdsLkPhoto[];
  price: string;
  views_count: number;
  feedbacks_count: number;
  favorites_count: number;
  rating: number;
  created_at: string;
}
