import { PushkinDesktop } from './pushkin-card/pushkin-desktop';
import { PushkinMobile } from './pushkin-card/pushkin-mobile';

export function PushkinCard() {
  return (
    <section className='container'>
      <div className='mt-32 overflow-hidden rounded-3xl bg-primary md:overflow-visible'>
        <PushkinMobile />
        <PushkinDesktop />
      </div>
    </section>
  );
}
