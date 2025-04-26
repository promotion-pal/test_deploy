import Image from 'next/image';
import style from './pictureCardTariffs.module.css';

interface PictureCardTariffsProps {
  className?: string;
}
export const PictureCardTariffs = ({
  className = '',
}: PictureCardTariffsProps) => {
  return (
    <article className={style.imgPrew}>
      <div className={style.imgPrewContainer}>
        <div className={style.imgPrewLeft}>
          <Image
            src={'/663070e0-0cc3-4fd6-b0a2-2c940852effe.png'}
            width={250}
            height={148}
            alt='prewHouse'
          />
        </div>
        <div className={style.imgPrewRight}>
          <div className={style.imgPrewInfo}>
            13.10.2024 — 22.10.2024 Взрослых: 2 Ночей: 8
          </div>
          <div className={style.imgPrewRightSet}>
            <Image
              src={'/Rectangle 40092.png'}
              width={45}
              height={45}
              alt='prewHouse'
            />
            <Image
              src={'/Rectangle 40093.png'}
              width={45}
              height={45}
              alt='prewHouse'
            />
            <Image
              src={'/Rectangle 40094.png'}
              width={45}
              height={45}
              alt='prewHouse'
            />
            <Image
              src={'/Rectangle 40095.png'}
              width={45}
              height={45}
              alt='prewHouse'
            />
          </div>
        </div>
      </div>
    </article>
  );
};
