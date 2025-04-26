import { appConfig } from '@/shared/config/appConfig';
import { gilroy } from '@/shared/config/fonts';
import { ReactQueryProvider } from '@/shared/providers/QueryProvider';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: appConfig.siteName,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={appConfig.defaultLocale}>
      <body className={gilroy.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
