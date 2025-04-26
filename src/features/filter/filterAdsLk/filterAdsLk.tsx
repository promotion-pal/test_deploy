'use client';
import { typeHousing } from '@/shared/assets/lk_static';
import { Badge } from '@/shared/ui/badge';
import { Button } from '@/shared/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { ChevronDown, Settings2, X } from 'lucide-react';
import * as React from 'react';

interface TypeBox {
  id: string | number;
  title: string;
  checked: boolean;
}
interface filterProps {
  onFilterTypeHouseChange: (filter: string) => void;
  onFilterTypeRentChange: (filter: string) => void;
}

export function FilterAdsLk({
  onFilterTypeHouseChange,
  onFilterTypeRentChange,
}: filterProps) {
  //массив ярлычков для показа выбранных фильтров
  const [badgesHouse, setBadgesHouse] = React.useState<TypeBox[]>([]);
  const [badgesRent, setBadgesRent] = React.useState<TypeBox[]>([]);
  //фильтр по типу жилья
  const [filterTypeHous, setFilterTypeHous] =
    React.useState<TypeBox[]>(typeHousing);
  const handleToggleTypeHous = (id: number | string) => {
    setFilterTypeHous((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };
  //фильтр по типу аренды
  const [filterTypeRent, setFilterTypeRent] = React.useState<TypeBox[]>([
    { id: 'hourly', title: 'Часовая', checked: false },
    { id: 'daily', title: 'Суточная', checked: false },
  ]);
  const handleToggleTypeRent = (id: number | string) => {
    setFilterTypeRent((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };
  const handleClose = () => {
    // При закрытии обновляем массив выбранных элементов
    const checked = filterTypeHous.filter((item) => item.checked);
    setBadgesHouse(checked);
    const checkedrent = filterTypeRent.filter((item) => item.checked);
    setBadgesRent(checkedrent);
  };
  //обновляем состояния после удаления ярлычков показанных на странице фильтров
  const handleRemoveCheckedItems = (id: number | string) => {
    setFilterTypeHous((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: false } : item))
    );
    setFilterTypeRent((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: false } : item))
    );
    setBadgesHouse((prev) => prev.filter((item) => item.id !== id));
    setBadgesRent((prev) => prev.filter((item) => item.id !== id));
  };
  //отправляем родителю состояние фильтров
  React.useEffect(() => {
    const strToQueryH = badgesHouse.map((el) => el.id).join();
    onFilterTypeHouseChange(strToQueryH);
  }, [badgesHouse]);
  React.useEffect(() => {
    const strToQueryR = badgesRent.map((el) => el.id).join();
    onFilterTypeRentChange(strToQueryR);
  }, [badgesRent]);
  return (
    <div className='flex flex-wrap items-center'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='white' style={{ padding: '0' }}>
            <Settings2 />
            Фильтры
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          onCloseAutoFocus={handleClose}
          className='bg-white'
        >
          <DropdownMenuLabel>По типу жилья</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {filterTypeHous.map((el, i) => (
            <DropdownMenuCheckboxItem
              className='cursor-pointer'
              key={el.id}
              checked={el.checked}
              onSelect={(e) => {
                e.preventDefault();
                handleToggleTypeHous(el.id);
              }}
            >
              {el.title}
            </DropdownMenuCheckboxItem>
          ))}

          <DropdownMenuLabel>По типу аренды</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {filterTypeRent.map((el, i) => (
            <DropdownMenuCheckboxItem
              className='cursor-pointer'
              key={el.id}
              checked={el.checked}
              onSelect={(e) => {
                e.preventDefault();
                handleToggleTypeRent(el.id);
              }}
            >
              {el.title}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {badgesHouse.map((el) => (
        <Badge key={el.id} className='bg-white font-semibold text-primary'>
          {el.title}
          <button type='button' onClick={() => handleRemoveCheckedItems(el.id)}>
            <X />
          </button>
        </Badge>
      ))}
      {badgesRent.map((el) => (
        <Badge key={el.id} className='bg-white font-semibold text-primary'>
          {el.title}
          <button onClick={() => handleRemoveCheckedItems(el.id)}>
            <X />
          </button>
        </Badge>
      ))}
    </div>
  );
}
