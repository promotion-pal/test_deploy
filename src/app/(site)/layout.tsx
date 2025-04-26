import { contactsService } from '@/features/api';
import { sessionService } from '@/features/auth/api/session';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/SiteHeader';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contacts = await contactsService.getContacts();
  const session = await sessionService.get();

  return (
    <div className='mainWrapper'>
      <Header role={session.user?.role} data={contacts} />
      {children}
      <Footer />
    </div>
  );
}
