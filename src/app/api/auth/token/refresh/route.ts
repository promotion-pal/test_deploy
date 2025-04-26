import { setToken } from '@/features/auth/lib/token-service';
import { fetchInstance } from '@/shared/api';
import { NextResponse } from 'next/server';

export async function GET() {
  const updateTokens = async (refreshToken: string) => {
    return await fetchInstance.post('/site/auth/refresh_token/', {
      refresh_token: refreshToken,
    });
  };

  //   return NextResponse.json({ error: 'Не удалось обновить токен' });

  const { refreshToken } = await getToken();
  // const refreshToken = 'лл';

  if (refreshToken) {
    try {
      const tokens = await updateTokens(refreshToken);
      console.log(tokens);

      await setToken({
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token,
      });

      await setToken({
        accessToken: 'УУУУ',
        refreshToken: 'Записал',
      });

      return NextResponse.json({ su: 'Успех' });
    } catch (error) {
      return NextResponse.json({ error: error });
    }
  } else {
    return NextResponse.json({ error: 'Не удалось обновить токен' });
  }
}
