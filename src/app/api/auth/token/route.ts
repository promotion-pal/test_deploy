import { getToken, setToken } from '@/features/auth/lib/token-service';
import { fetchInstance, FetchInstanceMethod, isApiError } from '@/shared/api';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { url, config } = await request.json();

  const clientRequest = async (accessToken: string) => {
    const method = config.method.toLowerCase() as FetchInstanceMethod;

    if (!['get', 'post', 'put', 'delete', 'patch'].includes(method)) {
      throw new Error(`Unsupported HTTP method: ${method}`);
    }

    const requestConfig = {
      headers: {
        Authorization: `Token ${accessToken}`,
      },
    };

    if (['post', 'put', 'patch'].includes(method) && config.data) {
      return await fetchInstance[method](url, config.data, requestConfig);
    }

    return await fetchInstance[method](url, requestConfig);
  };

  const updateTokens = async (refreshToken: string) => {
    return await fetchInstance.post('/site/auth/refresh_token/', {
      refresh_token: refreshToken,
    });
  };

  const { accessToken, refreshToken } = await getToken();

  if (accessToken || refreshToken) {
    try {
      console.log('Запрос на строний сервре');

      const response = await clientRequest(accessToken);

      return NextResponse.json(response);
    } catch (error: any) {
      if (isApiError(error)) {
        console.error(error);

        if ([401, 403].includes(error?.status)) {
          console.log('Попытка обновить токены');

          const tokens = await updateTokens(refreshToken);
          await setToken({
            accessToken: tokens.access_token,
            refreshToken: tokens.refresh_token,
          });
          const response = await clientRequest(tokens.access_token);
          return NextResponse.json(response);
        }
      }
    }
  } else {
    return NextResponse.json({ error: 'Пользователь не вощел в систему' });
  }
}
