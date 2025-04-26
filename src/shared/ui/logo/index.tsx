import style from './Logo.module.css';

const Logo = ({ className }: { className?: string }) => (
  <div className={className}>
    <span className={style.logoText}>Mir</span>
    <span className={style.logoText}>Traveler</span>
  </div>
);

export { Logo };
