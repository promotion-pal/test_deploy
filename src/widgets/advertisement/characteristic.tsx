'use client';

import { Description, EntryExit } from './content';
import { Text } from './ui/title';

export default function Characteristic() {
  return (
    <section className='mt-5 rounded-lg bg-gray-light px-5 py-10'>
      <Text title='Характеристики жилья' />
      <EntryExit entry='После 14.00' exit='До 12.00' />

      <Description
        className='mt-10'
        text='Жильё класса премиум в жилом комплексе с охраняемым паркингом в шаговой доступности от метро Новослободская. Рядом торговый центр, кафе и рестораны, на территории двора имеется собственный охраняемый паркинг'
      />
    </section>
  );
}
