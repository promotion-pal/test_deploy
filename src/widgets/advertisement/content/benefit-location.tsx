interface BenefitLocationProps {
  address: string;
  type: string;
  roomCount: string;
}

export function BenefitLocation({
  address,
  type,
  roomCount,
}: BenefitLocationProps) {
  const benefits = [{ text: address }, { text: type }, { text: roomCount }];
  return (
    <ul className='space-y-3'>
      {benefits.map((item, index) => (
        <li key={index} className='flex items-center gap-3'>
          &bull;
          <p className='text-lg'>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
