'use client';

import { DirectionIcon, HeartFilledIcon, PinIcon, StarIcon } from "@/shared/icons";
import { cn } from "@/shared/utils";
import Link from "next/link";

interface HousingAdItemProps {
  className?: string;
  id: number;
  title: string;
  photoUrl: string;
  station: string | null;
  city: string | null;
  street: string | null;
  area: string | null;
  sleepPlaceCount: string | null;
  rating: number | null;
  price: string | null;
  rentType: string | null;
  filteredPrice: string | null;
  isFavourite: boolean;
}

export default function HousingAdItem({ className, id, title, photoUrl, station, city, street, area, sleepPlaceCount, rating, price, rentType, filteredPrice, isFavourite }: HousingAdItemProps) {
  return (
    <div className={cn(className, 'md:h-[200px] md:grid md:grid-cols-[237px_1fr_0.66fr] bg-[#F3F3F3] rounded-lg relative')}>
      <div className="relative flex items-center justify-center max-h-[230px] md:h-full md:max-h-full overflow-hidden rounded-lg">
        <img className="w-full md:w-[237px] md:h-[200px]" src={photoUrl} alt={`Фотография ${title}`} />

        <button type="button" className="absolute top-[15px] right-[15px] size-[30px] flex items-center justify-center rounded-full bg-[#F3F3F33D] backdrop-blur-sm" onClick={(event) => { event.stopPropagation(); }}>
          <HeartFilledIcon className={`${isFavourite ? 'text-primary' : 'text-white'}`} />
        </button>

        <strong className="md:hidden text-white text-2xl font-semibold leading-tight absolute bottom-[20px] left-[20px]">{title}</strong>
      </div>

      <div className="flex pt-5 px-5 gap-3 justify-between md:flex-col md:py-5 md:px-0 md:ml-[30px] md:mr-1">
        <strong className="md:inline-block hidden text-[#005D6E] text-base font-semibold leading-tight">{title}</strong>

        <div className="[&>p]:inline-flex [&>p]:gap-2 [&>p]:items-center [&>p]:leading-tight [&>p]:truncate [&>p]:line-clamp-1 text-[#353535] text-sm flex flex-col gap-[5px]">
          {station && <p><DirectionIcon />{station}</p>}
          {(city || street) && <p><PinIcon />{`${city}${street ? `, ${street}` : ''}`}</p>}
          {(area || sleepPlaceCount) && <p>{`${area} ${sleepPlaceCount}`}</p>}
        </div>

        <div className="bg-[#FFBF20] text-[#FAFAFA] rounded-lg w-fit h-fit px-[5px] py-[1px] pr-1.5 flex items-center gap-[5px]">
          <StarIcon style={{ strokeWidth: 1.5 }} className="block" />

          <span className="leading-1 text-[15px] mt-0.5 font-semibold">{rating}</span>
        </div>
      </div>

      <div className="flex flex-col gap-[10px] pl-5 py-5 md:pl-0 pr-5 min-w-[164px]">
        {(price || price) && (
          <strong>
            {price && <span className="text-2xl font-medium">{price}</span>}
            {rentType && <span className="text-sm font-normal">{' '}{rentType}</span>}
          </strong>
        )}

        {filteredPrice && (
          <span className="text-sm font-normal">{filteredPrice}</span>
        )}
      </div>

      <Link href="#" className="absolute text-gray bg-white bottom-[20px] right-[20px] size-[40px] rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.45875 1.08031L10.9807 1.08019M10.9807 1.08019L10.9807 9.48098M10.9807 1.08019L1.08125 10.9797" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </div>
  );
}