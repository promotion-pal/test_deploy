export interface User {
  id: number;
  email: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  role: string;
  status: string;
  moderation_status: string;
  is_subscribed: boolean;
  favorite_count: number;
  notification_count: number;
  all_notification_count: number;
  permissions: string[];
}

export interface PersonSession {
  id: number;
  email: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  role: string;
  status: string;
  moderation_status: string;
  is_subscribed: boolean;
  favorite_count: number;
  notification_count: number;
  all_notification_count: number;
  permissions: string[];
}
