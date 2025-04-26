export type AdCategory =
  | 'housing'
  | 'transport'
  | 'recreation'
  | 'tour'
  | 'excursion';

export type UserAdAddress = {
  full_address?: string;
  region?: string;
  city?: string;
  street?: string;
  latitude?: string;
  longitude?: string;
  station?: string;
};
