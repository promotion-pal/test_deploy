interface Photo {
  id?: number;
  photo: string;
}

interface FeedbackReply {
  [key: string]: any;
}

export interface Feedback {
  id: number;
  user: string;
  text: string;
  rating: number;
  photos: Photo[];
  replies: FeedbackReply[];
}

interface ComfortItem {
  id: number;
  title: string;
}

interface HousingType {
  id: number;
  title: string;
}

interface Address {
  id: number;
  zip_code: string;
  country: string;
  region: string;
  city: string;
  street: string;
  house: string;
  building: string;
  apartment: string;
  structure: string;
  full_address: string;
  latitude: string;
  longitude: string;
  station: string;
  city_obj: number;
}

export interface HouseAds {
  id: number;
  title: string;
  text: string;
  address: Address;
  room_count: string;
  price: string;
  feedbacks_count: number;
  views_count: number;
  feedbacks: Feedback[];
  comfort_items: ComfortItem[];
  photos: Photo[];
  housing_type: HousingType;
  rating: number;
  guests: number;
  is_children_allowed: boolean;
  is_pets_allowed: boolean;
  sleep_place_count: string;
  check_in_time: string;
  check_out_time: string;
  area: string;
  is_favorite: string;
}
