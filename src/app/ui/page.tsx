'use client';

import {
  BagGraphicIcon,
  // ArrowUpRight,
  CalendarIcon,
  CarIcon,
  ChatIcon,
  CloseMark,
  CompassIcon,
  CrescentIcon,
  DirectionIcon,
  DiskIcon,
  DownArrowIcon,
  EyeClosedIcon,
  EyeIcon,
  FlagAltIcon,
  GlobeAmericas,
  GlobeGraphicIcon,
  HeartFilledIcon,
  HeartIcon,
  HomeIcon,
  HoopIcon,
  LegoSmileIcon,
  MailCircleIcon,
  MailMobileIcon,
  MenuBurger,
  OKRUIcon,
  PawIcon,
  PinAltIcon,
  PinCircleIcon,
  PinIcon,
  PyramidIcon,
  SearchIcon,
  ShareIcon,
  SmileIcon,
  SphereIcon,
  StarFilledIcon,
  // StarIcon,
  TelegramCircleIcon,
  TelegramIcon,
  TelegramIconMobile,
  ThumbtackIcon,
  TickIcon,
  UserIcon,
  UsersIcon,
  VkIcon,
  WandIcon,
  WhatsAppMobileIcon,
  WhatsappCircleIcon,
  WhatsappIcon,
  XIcon,
  YandexIcon,
} from '@/shared/icons';
import { Badge } from '@/shared/ui/badge';
import { Button } from '@/shared/ui/button';
import { Calendar } from '@/shared/ui/calendar';
import {
  Carousel,
  CarouselContent,
  CarouselFade,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel';
import { Checkbox } from '@/shared/ui/checkbox';
import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/dialog';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/shared/ui/radio-group';
import { Skeleton } from '@/shared/ui/skeleton';
import { Switch } from '@/shared/ui/switch';
import { addDays } from 'date-fns';
import { ArrowUpRight, Loader, Loader2, StarIcon } from 'lucide-react';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';
const icons = {
  CalendarIcon,
  CarIcon,
  ChatIcon,
  CloseMark,
  CompassIcon,
  DirectionIcon,
  DownArrowIcon,
  EyeClosedIcon,
  EyeIcon,
  FlagAltIcon,
  GlobeAmericas,
  HeartFilledIcon,
  HeartIcon,
  HomeIcon,
  LegoSmileIcon,
  MailCircleIcon,
  MailMobileIcon,
  MenuBurger,
  OKRUIcon,
  PawIcon,
  PinAltIcon,
  PinCircleIcon,
  PinIcon,
  SearchIcon,
  ShareIcon,
  SmileIcon,
  StarFilledIcon,
  TelegramCircleIcon,
  TelegramIcon,
  TelegramIconMobile,
  ThumbtackIcon,
  TickIcon,
  UserIcon,
  UsersIcon,
  VkIcon,
  WandIcon,
  WhatsAppMobileIcon,
  WhatsappCircleIcon,
  WhatsappIcon,
  XIcon,
  YandexIcon,
  BagGraphicIcon,
  CrescentIcon,
  DiskIcon,
  GlobeGraphicIcon,
  HoopIcon,
  PyramidIcon,
  SphereIcon,
};
export default function Page() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <main className='p-16'>
      <div className='space-y-12'>
        <div className='space-y-4'>
          <h1 className='mb-8 text-4xl font-extrabold'>Button</h1>
          <div className='flex gap-2'>
            <Button>Кнопка</Button>
            <Button variant='secondary'>Кнопка</Button>
            <Button variant='teal'>Кнопка</Button>
            <Button variant='blue'>Кнопка</Button>
            <Button variant='outline'>Кнопка</Button>
            <Button variant='outline-teal'>Кнопка</Button>
          </div>
          <div className='flex gap-2'>
            <Button size='sm'>Кнопка</Button>
            <Button size='sm' variant='secondary'>
              Кнопка
            </Button>
            <Button size='sm' variant='teal'>
              Кнопка
            </Button>
            <Button size='sm' variant='blue'>
              Кнопка
            </Button>
            <Button size='sm' variant='outline'>
              Кнопка
            </Button>
            <Button size='sm' variant='outline-teal'>
              Кнопка
            </Button>
          </div>
          <div className='flex gap-2'>
            <Button radius='full'>Кнопка</Button>
            <Button variant='teal' radius='full'>
              Кнопка
            </Button>

            <Button variant='blue' radius='full'>
              Кнопка
            </Button>
            <Button variant='outline' radius='full'>
              Кнопка
            </Button>
            <Button variant='outline-teal' radius='full'>
              Кнопка
            </Button>
          </div>
          <div className='flex gap-2'>
            <Button size='lg'>Кнопка</Button>
            <Button variant='teal' size='lg'>
              Кнопка
            </Button>
            <Button variant='blue' size='lg'>
              Кнопка
            </Button>
            <Button variant='outline' size='lg'>
              Кнопка
            </Button>
            <Button variant='outline-teal' size='lg'>
              Кнопка
            </Button>
          </div>
          <div className='flex gap-2'>
            <Button size='lg' radius='full'>
              Кнопка
            </Button>
            <Button variant='teal' radius='full' size='lg'>
              Кнопка
            </Button>
            <Button variant='blue' radius='full' size='lg'>
              Кнопка
            </Button>
            <Button variant='outline' radius='full' size='lg'>
              Кнопка
            </Button>
            <Button variant='outline-teal' radius='full' size='lg'>
              Кнопка
            </Button>
          </div>
          <div className='flex gap-2'>
            <Button size='icon' radius='full'>
              <ArrowUpRight />
            </Button>
            <Button variant='teal' radius='full' size='icon'>
              <ArrowUpRight />
            </Button>
            <Button variant='blue' radius='full' size='icon'>
              <ArrowUpRight />
            </Button>
            <Button variant='outline' radius='full' size='icon'>
              <ArrowUpRight />
            </Button>
            <Button variant='outline-teal' radius='full' size='icon'>
              <ArrowUpRight />
            </Button>
          </div>
          <div className='flex gap-2'>
            <Button size='icon-sm' radius='full'>
              <ArrowUpRight />
            </Button>
            <Button variant='teal' radius='full' size='icon-sm'>
              <ArrowUpRight />
            </Button>
            <Button variant='blue' radius='full' size='icon-sm'>
              <ArrowUpRight />
            </Button>
            <Button variant='outline' radius='full' size='icon-sm'>
              <ArrowUpRight />
            </Button>
            <Button variant='outline-teal' radius='full' size='icon-sm'>
              <ArrowUpRight />
            </Button>
          </div>
          <div className='flex gap-2'>
            <Button radius='full' disabled>
              неактивна
            </Button>
            <Button variant='teal' radius='full' disabled>
              <Loader2 className='animate-spin' />
              Загрузка
            </Button>
            <Button variant='blue' radius='full' disabled>
              <Loader className='animate-spin' />
              Загрузка
            </Button>
            <Button variant='outline' radius='full' disabled>
              неактивна
            </Button>
            <Button variant='outline-teal' radius='full' disabled>
              неактивна
            </Button>
          </div>
          <div className='relative h-64 w-64 p-4'>
            <img
              src='https://laketahoeprints.com/cdn/shop/products/heavenly-lake-tahoe-aerial-brad-scott_fd1265ea-c512-41a6-96b4-0939184b1475.jpg?v=1578460648'
              className='absolute inset-0 -z-10 h-full w-full rounded-xl object-cover'
            />
            <div className='flex gap-2'>
              <Button variant='white' radius='full' asChild>
                <span>Кнопка</span>
              </Button>
              <Button variant='white' radius='full' size='icon'>
                <ArrowUpRight />
              </Button>
            </div>
            <Button
              className='absolute right-3 top-3'
              variant='action'
              radius='full'
              size='icon-sm'
            >
              <StarIcon fill='currentColor' />
            </Button>
          </div>
        </div>
        <div className='space-y-4'>
          <h1 className='mb-8 text-4xl font-extrabold'>Carousel</h1>
          <h2 className='mb-12 text-3xl font-semibold'>С фейдом</h2>
          <Carousel className='w-full'>
            <CarouselContent>
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem className='basis-full sm:basis-auto' key={index}>
                  {/*<ListingCard />*/}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            <CarouselFade />
          </Carousel>
        </div>
        <div className='space-y-4'>
          <h1 className='mb-8 text-4xl font-extrabold'>Badge</h1>
          <div className='relative h-64 w-64 p-4'>
            <img
              src='https://laketahoeprints.com/cdn/shop/products/heavenly-lake-tahoe-aerial-brad-scott_fd1265ea-c512-41a6-96b4-0939184b1475.jpg?v=1578460648'
              className='absolute inset-0 -z-10 h-full w-full rounded-xl object-cover'
            />
            <div className='flex flex-wrap gap-1'>
              <Badge>Primary</Badge>
              <Badge variant='teal'>Teal</Badge>
              <Badge variant='white'>White</Badge>
              <Badge variant='dark'>Dark</Badge>
              <Badge variant='white' asChild>
                <button>As button</button>
              </Badge>
              <Badge className='bg-yellow'>
                <StarIcon fill='currentColor' />
                With icon
              </Badge>
            </div>
          </div>
        </div>
        <div className='max-w-md space-y-4'>
          <h1 className='mb-8 text-4xl font-extrabold'>Элементы ввода</h1>
          <Input variant='secondary' placeholder='Secondary' />
          <div className='flex gap-3'>
            <Input
              className='w-36'
              label='Заселение'
              withBorder
              value='После 14:00'
              readOnly
            />
            <Input
              className='w-36'
              withBorder
              label='Label'
              placeholder='Placeholder'
            />
            <Input
              className='w-36'
              variant='secondary'
              label='Label'
              placeholder='Placeholder'
            />
          </div>
          <Input
            size='lg'
            variant='secondary'
            placeholder='Secondary'
            contentEditable={false}
          />
          <Input size='xl' variant='secondary' placeholder='Secondary' />
          <Input variant='secondary' radius='full' placeholder='Secondary' />
          <div className='flex items-center space-x-2'>
            <Checkbox variant='radio' id='c1' />
            <Label htmlFor='c1'>Чекбокс</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <Checkbox id='c2' />
            <Label htmlFor='c2'>Чекбокс</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <Switch id='s1' />
            <Label htmlFor='s1'>Переключатель</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <Switch id='s2' disabled />
            <Label htmlFor='s2'>Переключатель</Label>
          </div>
          <RadioGroup defaultValue='comfortable'>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='default' id='r1' withBorder />
              <Label htmlFor='r1'>Default</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='comfortable' id='r2' withBorder />
              <Label htmlFor='r2'>Comfortable</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='compact' id='r3' withBorder />
              <Label htmlFor='r3'>Compact</Label>
            </div>
          </RadioGroup>
        </div>
        <div className='max-w-md space-y-4'>
          <h1 className='mb-8 text-4xl font-extrabold'>Skeleton</h1>
          <Skeleton className='h-64 w-64 rounded-lg' />
        </div>
        <div className='max-w-md space-y-4'>
          <h1 className='mb-8 text-4xl font-extrabold'>Popover</h1>
          <Popover>
            <PopoverTrigger asChild>
              <Button>Открыть</Button>
            </PopoverTrigger>
            <PopoverContent align='start' className='w-auto p-0'>
              <Calendar
                initialFocus
                mode='range'
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className='max-w-md space-y-4'>
          <h1 className='mb-8 text-4xl font-extrabold'>Dialog</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Открыть</Button>
            </DialogTrigger>
            <DialogContent>
              <Skeleton className='h-64' />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
        {Object.entries(icons).map(([n, Icn]) => (
          <div className='p-2' key={n}>
            <Icn stroke='black' width={20} />
            {n}
          </div>
        ))}
      </div>
    </main>
  );
}
