'useClient';
import { useNewAdRentHouse } from '@/shared/store/store';
import { Checkbox } from '@/shared/ui/checkbox';
import { Label } from '@/shared/ui/label';
import { cn } from '@/shared/utils';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import style from './amenities.module.css';
interface TypeAmenities {
  id: number;
  title: string;
}
interface AmenitiesProps {
  className?: string;
  comfort_itemsOld?: number[];
}
export const Amenities = ({
  className = '',
  comfort_itemsOld,
}: AmenitiesProps) => {
  const { data: listHousingAmenities } = useQuery({
    queryKey: ['housingamenities'],
    queryFn: async () => {
      const { data } = await axios.get<TypeAmenities[]>(
        'http://backend.devmirtraveler.ru/api/v1/site/dictionaries/comfort-items/'
      );
      return data;
    },
  });
  const comfort_items = useNewAdRentHouse(
    (store) => store.values.comfort_items
  );
  const child = useNewAdRentHouse((store) => store.values.is_children_allowed);
  const pets = useNewAdRentHouse((store) => store.values.is_pets_allowed);
  const setValueInStore = useNewAdRentHouse((store) => store.setValues);

  const handleChange = (id: number) => {
    const updatedItems = comfort_items.includes(id)
      ? comfort_items.filter((i) => i !== id)
      : [...comfort_items, id];
    setValueInStore({ comfort_items: updatedItems });
  };

  return (
    <div className={cn(style.amenities, '', className)}>
      <h3 className={style.title}>Дополнительные удобства</h3>
      <div className={style.boxBlock}>
        {listHousingAmenities?.map((el) => (
          <div key={el.id} className='flex items-center space-x-2'>
            <Checkbox
              variant='radio'
              id={`comfort_item_${el.id}`}
              checked={(comfort_items ?? []).includes(el.id)}
              onCheckedChange={() => handleChange(el.id)}
            />
            <Label className='cursor-pointer' htmlFor={`comfort_item_${el.id}`}>
              {el.title}
            </Label>
          </div>
        ))}
      </div>
      <div className={style.prmisions}>
        <div className='flex items-center space-x-2'>
          <Checkbox
            variant='radio'
            id={`child`}
            checked={child}
            onCheckedChange={() =>
              setValueInStore({ is_children_allowed: !child })
            }
          />
          <Label className='cursor-pointer' htmlFor={`child`}>
            Можно с детьми
          </Label>
        </div>
        <div className='flex items-center space-x-2'>
          <Checkbox
            variant='radio'
            id={`pets`}
            checked={pets}
            onCheckedChange={() => setValueInStore({ is_pets_allowed: !pets })}
          />
          <Label className='cursor-pointer' htmlFor={`pets`}>
            Можно с животными
          </Label>
        </div>
      </div>
    </div>
  );
};
