import axios from 'axios';
import { envConfig } from './env';

const baseURL = envConfig.baseApi;
const testURL = envConfig.testApi;

export type ApiError = {
  detail?: string;
  [key: string]: string[] | string | undefined;
};

export const BaseUrl = envConfig.isProduction ? baseURL : testURL;

export const axiosInstance = axios.create({
  baseURL: BaseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchInstance = async (url: string, options: RequestInit = {}) => {
  const fullUrl = `${envConfig.isProduction ? baseURL : testURL}${url}`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  const response = await fetch(fullUrl, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    signal: controller.signal,
  });

  clearTimeout(timeoutId);

  return response;
};
