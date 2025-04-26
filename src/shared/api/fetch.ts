import { getToken, setToken } from '@/features/auth/lib/token-service';
import { envConfig } from '@/shared/config/env';
import { redirect } from 'next/navigation';

export type FetchInstanceMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

interface FetchApiConfig {
  baseURL?: string;
  headers?: Record<string, string>;
}

export interface ApiError {
  status: number;
  response?: unknown;
}

export function isApiError(error: unknown): error is ApiError {
  return typeof error === 'object' && error !== null && 'status' in error;
}

type QueryParams = Record<string, unknown>;

interface RequestConfig extends Omit<RequestInit, 'body'> {
  params?: QueryParams;
  data?: unknown;
  timeout?: number;
}

interface Interceptor {
  (config: RequestConfig): RequestConfig | Promise<RequestConfig>;
}

export class FetchApi {
  private defaultConfig: FetchApiConfig;
  private requestInterceptors: Interceptor[] = [];

  constructor(config: FetchApiConfig = {}) {
    this.defaultConfig = {
      baseURL: envConfig.isProduction ? envConfig.baseApi : envConfig.testApi,
      headers: {
        'Content-Type': 'application/json',
      },
      ...config,
    };
  }

  private buildUrl(url: string, params: QueryParams = {}): string {
    const queryParts = [];

    for (const [key, value] of Object.entries(params)) {
      if (value === undefined || value === null) continue;

      if (Array.isArray(value)) {
        const stringValues = value.map((v) => encodeURIComponent(String(v)));
        queryParts.push(`${key}=${stringValues.join(',')}`);
      } else {
        queryParts.push(`${key}=${encodeURIComponent(String(value))}`);
      }
    }

    const queryString = queryParts.length > 0 ? `?${queryParts.join('&')}` : '';
    return `${this.defaultConfig.baseURL}${url}${queryString}`;
  }

  async request<T>(url: string, config: RequestConfig = {}): Promise<T> {
    let processedConfig = { ...config };
    for (const interceptor of this.requestInterceptors) {
      processedConfig = await interceptor(processedConfig);
    }
    const { params, data, headers, timeout, ...fetchOptions } = processedConfig;

    const fullURL = this.buildUrl(url, params);

    const requestConfig: RequestInit = {
      ...fetchOptions,
      headers: { ...this.defaultConfig.headers, ...headers },
      body: data ? JSON.stringify(data) : undefined,
    };

    const response = await this.fetchWithTimeout(
      fullURL,
      requestConfig,
      timeout ?? 10000
    );

    if (!response.ok) {
      const error: ApiError = {
        status: response.status,
      };

      try {
        error.response = await this._parseResponse(response);
      } catch (e) {
        error.response = await response.text();
      }

      throw error;
    }
    return this._parseResponse<T>(response);
  }

  private async fetchWithTimeout(
    url: string,
    options: RequestInit,
    timeout: number
  ): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof Error && error.name === 'AbortError') {
        throw new Error(`Request timed out after ${timeout}ms`);
      }
      throw error;
    }
  }

  private async _parseResponse<T>(response: Response): Promise<T> {
    const contentType = response.headers.get('Content-Type');
    if (contentType?.includes('application/json')) {
      return response.json();
    }
    return (await response.text()) as T;
  }

  get<T>(url: string, config?: RequestConfig): Promise<T> {
    return this.request(url, { ...config, method: 'GET' });
  }

  post<T>(url: string, data?: unknown, config?: RequestConfig): Promise<T> {
    return this.request(url, { ...config, method: 'POST', data });
  }

  put<T>(url: string, data?: unknown, config?: RequestConfig): Promise<T> {
    return this.request(url, { ...config, method: 'PUT', data });
  }

  delete<T>(url: string, config?: RequestConfig): Promise<T> {
    return this.request(url, { ...config, method: 'DELETE' });
  }

  patch<T>(url: string, data?: unknown, config?: RequestConfig): Promise<T> {
    return this.request(url, { ...config, method: 'PATCH', data });
  }

  async tokenReques<T>(url: string, config: any) {
    const { accessToken, refreshToken } = await getToken();

    const requestConfig = {
      method: config.method,
      headers: {
        Authorization: `Token ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: config.data ? JSON.stringify(config.data) : undefined,
    };

    const clientRequest = async () => {
      return await fetch(
        `https://backend.devmirtraveler.ru/api/v1${url}`,
        requestConfig
      );
    };

    const updateTokens = async () => {
      return await fetchInstance.post('/site/auth/refresh_token/', {
        refresh_token: refreshToken,
      });
    };

    if (!refreshToken) {
      window.location.href = '/auth/login';
    }

    try {
      const res = await clientRequest();

      if ([401, 403].includes(res.status)) {
        const tokens = await updateTokens();

        if (tokens) {
          setToken({
            accessToken: tokens.access_token,
            refreshToken: tokens.refresh_token,
          });

          const res = await clientRequest();
          const data = await res.json();
          console.log(data);

          if ([401, 403].includes(data.status)) {
            redirect('/auth/login');
          }
          return data;
        }
      }

      const data = await res.json();

      return data;
    } catch (error) {
      if (isApiError(error)) {
        if ([401, 403].includes(error.status)) {
          const tokens = await updateTokens();

          if (tokens) {
            setToken({
              accessToken: tokens.access_token,
              refreshToken: tokens.refresh_token,
            });

            const res = await clientRequest();
            const data = await res.json();
            console.log(data);

            if ([401, 403].includes(data.status)) {
              redirect('/auth/login');
            }
            return data;
          }
        }
      }
    }
  }

  token = {
    get: <T>(url: string, config?: any) =>
      this.tokenReques<T>(url, { ...config, method: 'GET' }),

    post: <T>(url: string, config?: any) =>
      this.tokenReques<T>(url, { ...config, method: 'POST' }),

    put: <T>(url: string, data?: unknown, config?: RequestConfig) =>
      this.tokenReques<T>(url, { ...config, method: 'PUT', data }),

    delete: <T>(url: string, config?: RequestConfig) =>
      this.tokenReques<T>(url, { ...config, method: 'DELETE' }),

    patch: <T>(url: string, data?: unknown, config?: RequestConfig) =>
      this.tokenReques<T>(url, { ...config, method: 'PATCH', data }),
  };

  client = {
    async get<T>(url: string) {
      const response = await fetch(url, { method: 'GET' });
      return response;
    },
    async post<T>(url: string, config?: RequestConfig) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(config?.data),
      });
      return response;
    },
  };

  addRequestInterceptor(interceptor: Interceptor): void {
    this.requestInterceptors.push(interceptor);
  }

  removeRequestInterceptor(interceptor: Interceptor): void {
    this.requestInterceptors = this.requestInterceptors.filter(
      (i) => i !== interceptor
    );
  }
}

export const fetchInstance = new FetchApi();
