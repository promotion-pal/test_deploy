// // import { fetchInstance } from '@/shared/api';
// // import { NextResponse } from 'next/server';

// // export async function POST(request: Request) {
// //   const token = await request.json();

// //   if (token) {
// //     const tokens = await fetchInstance.post('/site/auth/refresh_token/', {
// //       refresh_token: token.refresh_token,
// //     });

// //     return NextResponse.json(tokens);
// //   } else {
// //     return NextResponse.json({ error: 'Не передали данные' });
// //   }
// // }

// // app/api/auth/refresh/route.ts
// import { cookies } from 'next/headers';
// import { NextResponse } from 'next/server';

// export async function GET(request: Request) {
//   // 1. Проверяем авторизацию (из заголовков)
//   const authHeader = request.headers.get('Authorization');
//   if (!authHeader?.startsWith('Token ')) {
//     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//   }

//   console.log(authHeader);

//   // 2. Получаем/генерируем токен (заглушка)
//   const newToken = 'generated_jwt_token_' + Date.now();

//   console.log(newToken);

//   // 3. Записываем токен в HTTP-only cookie
//   const cookieStore = await cookies();
//   cookieStore.set('auth-token', newToken, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     maxAge: 60 * 60 * 24 * 7, // 1 неделя
//     path: '/',
//     sameSite: 'lax',
//   });

//   // 4. Возвращаем ответ
//   return NextResponse.json({
//     success: true,
//     token: newToken,
//   });
// }

// app/api/auth/refresh/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // Генерация токена (пример)
  const token = `token_${Date.now()}`;

  // Возвращаем токен в теле ответа (для Middleware)
  return NextResponse.json({
    success: true,
    token,
  });
}
