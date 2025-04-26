interface EntryExit {
  entry: string;
  exit: string;
}

export function EntryExit({ entry, exit }: EntryExit) {
  return (
    <section className='mt-10 flex items-center justify-between'>
      <TimeWidget label='Заселение' time={entry} />

      <div className='h-[2px] w-5 rounded-full bg-gray' />

      <TimeWidget label='Выезд' time={exit} />
    </section>
  );
}

interface TimeWidgetProps {
  label: string;
  time: string;
}

const TimeWidget = ({ label, time }: TimeWidgetProps) => (
  <div className='flex w-[44%] flex-col justify-start rounded-xl border border-solid border-gray px-2 py-3'>
    <p className='text-lg font-light text-gray-500'>{label}</p>
    <p className='mt-2 text-lg font-medium'>{time}</p>
  </div>
);
