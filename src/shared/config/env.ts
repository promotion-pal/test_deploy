export const envConfig = {
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
  baseApi: process.env.NEXT_PUBLIC_API,
  testApi: process.env.NEXT_PUBLIC_TEST_API,
};
