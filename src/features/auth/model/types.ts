export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

export interface RefreshTokenData {
  refresh_token: string;
}

export interface RefreshTokenResponse {
  access_token: string;
  refresh_token: string;
}

export interface RegisterData {
  email: string;
  password: string;
  password_2: string;
  role: string;
  is_privacy_policy_confirmed: boolean;
}

export interface ResetPasswordData {
  email: string;
}

export interface NewPasswordData {
  password: string;
  password_2: string;
}

export type SessionPayload = {
  access_token: string;
  refresh_token: string;
  id?: string;
  role?: string;
};

export interface Tokens {
  accessToken: string;
  refreshToken?: string;
}

export type TokenType = 'access' | 'refresh' | '';
