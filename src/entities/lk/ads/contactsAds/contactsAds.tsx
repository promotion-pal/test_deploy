import { useNewAdRentHouse } from '@/shared/store/store';
import { AlertDestructive } from '@/shared/ui/alerts/AlertDestructive';
import { Input } from '@/shared/ui/input';
import { cn } from '@/shared/utils';
import {
  FormDataAddAds,
  schemaAddAdsHouseForm,
} from '@/widgets/lk/addAds/schema';
import { useState } from 'react';
import { z } from 'zod';
import style from './contactsAds.module.css';

interface ContactAdsProps {
  className?: string;
}
export const ContactsAds = ({ className = '' }: ContactAdsProps) => {
  const [errors, setErrors] = useState<z.ZodFormattedError<
    FormDataAddAds['contacts'],
    string
  > | null>(null);
  const contactsStore = useNewAdRentHouse((store) => store.values.contacts);
  const { first_name, last_name, phone, whatsapp_link, telegram_link } =
    contactsStore;

  const setValueInStore = useNewAdRentHouse((store) => store.setValues);

  const handleOnChange = (obj: Partial<FormDataAddAds['contacts']>) => {
    const contactsSchema = schemaAddAdsHouseForm.shape.contacts.partial();
    const validate = contactsSchema.safeParse(obj);
    if (validate.success) {
      setErrors(null);
      // console.log(obj); //здесь будет отправка данных на сервер на проверку плохих слов
      setValueInStore({
        contacts: { ...contactsStore, ...obj },
      });
    } else {
      setErrors(validate.error.format());
      setValueInStore({
        contacts: { ...contactsStore, ...obj },
      });
    }
  };
  return (
    <div className={cn(style.contactsAds, '', className)}>
      <h3 className={style.title}>Контактные данные</h3>
      <div className={style.blockInputs}>
        <Input
          value={first_name ?? ''}
          className='w-full'
          withBorder
          label='Имя'
          required={true}
          placeholder='Поле для ввода'
          onChange={(e) => handleOnChange({ first_name: e.target.value })}
        >
          {errors?.first_name?._errors && (
            <AlertDestructive message={errors?.first_name._errors.join(', ')} />
          )}
        </Input>
        <Input
          value={last_name ?? ''}
          className='w-full'
          withBorder
          label='Фамилия'
          required={true}
          placeholder='Поле для ввода'
          onChange={(e) => handleOnChange({ last_name: e.target.value })}
        >
          {errors?.last_name?._errors && (
            <AlertDestructive message={errors?.last_name._errors.join(', ')} />
          )}
        </Input>
        <Input
          value={phone ?? ''}
          className='w-full'
          withBorder
          label='Телефон'
          required={true}
          placeholder='Поле для ввода'
          onChange={(e) => handleOnChange({ phone: e.target.value })}
        >
          {errors?.phone?._errors && (
            <AlertDestructive message={errors?.phone._errors.join(', ')} />
          )}
        </Input>
        <Input
          value={whatsapp_link ?? ''}
          className='w-full'
          withBorder
          label='Ссылка на WhatsApp'
          placeholder='Поле для ввода'
          onChange={(e) => handleOnChange({ whatsapp_link: e.target.value })}
        >
          {errors?.whatsapp_link?._errors && (
            <AlertDestructive
              message={errors?.whatsapp_link._errors.join(', ')}
            />
          )}
        </Input>
        <Input
          value={telegram_link ?? ''}
          className='w-full'
          withBorder
          label='Ссылка на Telegram'
          placeholder='Поле для ввода'
          onChange={(e) => handleOnChange({ telegram_link: e.target.value })}
        >
          {errors?.telegram_link?._errors && (
            <AlertDestructive
              message={errors?.telegram_link._errors.join(', ')}
            />
          )}
        </Input>
      </div>
    </div>
  );
};
