'use client';

interface CalcRentProps {
  sleepPlaceCount: string;
  price: string;
}

export function CalcRent({ sleepPlaceCount, price }: CalcRentProps) {
  const priceStatic = 24000;

  return (
    <div className=''>
      <p className='mt-10 text-2xl'>{sleepPlaceCount}</p>

      <div className='mt-16 flex flex-col items-center'>
        <p className='text-4xl font-semibold'>
          {price}
          {/* {Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            currencyDisplay: 'symbol',
            minimumFractionDigits: 0,
          }).format(priceStatic)} */}
        </p>

        {/* <p className='text-lg font-medium'>
          За 2 ночи <span className='font-normal text-gray'>{price}</span>
        </p> */}
      </div>
    </div>
  );
}
