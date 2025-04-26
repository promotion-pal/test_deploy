export function ProfilePicture({ name }: { name: string }) {
  return (
    <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xl text-white'>
      <p>{name[0]}</p>
    </div>
  );
}
