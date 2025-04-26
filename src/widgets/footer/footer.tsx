import { FooterBottom } from './footer-bottom';
import { FooterDesktop } from './footer-dektop';
import { MobileFooter } from './mobile-footer';

export function Footer() {
  return (
    <footer className='mt-auto rounded-tl-2xl rounded-tr-2xl bg-gray-dark px-5 pb-8 pt-6 md:mt-32 md:bg-gray-light md:pt-14'>
      <MobileFooter />

      <FooterDesktop />

      <div className='mt-12 h-[1px] w-full rounded-full bg-gray' />

      <FooterBottom />
    </footer>
  );
}
