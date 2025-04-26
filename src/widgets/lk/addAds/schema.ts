import { z } from 'zod';

const numInt = z
  .union([z.string(), z.number()])
  .optional()
  .refine(
    (val) => val === undefined || val === '' || /^[1-9]\d*$/.test(String(val)),
    {
      message: 'Число должно быть целым.',
    }
  )
  .transform((val) =>
    val === undefined || val === '' ? undefined : parseInt(String(val), 10)
  );

export const schemaAddAdsHouseForm = z.object({
  title: z.string().min(1, { message: 'Заголовок объявления обязателен.' }),
  text: z.string().min(1, { message: 'Описание объекта обязательно.' }),
  address: z.object({
    full_address: z.string().min(1, { message: 'Адрес объекта обязателен.' }),
  }),
  housing_type: z.number().int().min(1),
  room_count: numInt,
  is_studio: z.boolean().optional(),
  area: numInt,
  guests: numInt,
  is_children_allowed: z.boolean().optional(),
  is_pets_allowed: z.boolean().optional(),
  sleep_place_count: numInt,
  check_in_time: z.preprocess(
    (val) => (typeof val === 'string' && val.trim() === '' ? undefined : val),
    z.union([
      z.string().regex(/^(?:[01]\d|2[0-3]):[0-5]\d$/, {
        message: 'Укажите время заезда в формате чч:мм',
      }),
      z.undefined(),
    ])
  ),
  check_out_time: z.preprocess(
    (val) => (typeof val === 'string' && val.trim() === '' ? undefined : val),
    z.union([
      z.string().regex(/^(?:[01]\d|2[0-3]):[0-5]\d$/, {
        message: 'Укажите время выезда в формате чч:мм',
      }),
      z.undefined(),
    ])
  ),
  comfort_items: z.array(z.number().int()),
  rent_type: z.string().optional(),
  price_per_hour: numInt,
  price_per_day: numInt,
  floor: numInt,
  contacts: z.object({
    first_name: z.string().min(1, { message: 'Имя обязательно.' }),
    last_name: z.string().min(1, { message: 'Фамилия обязательна.' }),
    phone: z.string().min(1, { message: 'Телефон обязателен.' }),
    whatsapp_link: z.preprocess(
      (val) => (typeof val === 'string' && val.trim() === '' ? undefined : val),
      z.string().url({ message: 'Укажите рабочую ссылку.' }).optional()
    ),
    telegram_link: z.preprocess(
      (val) => (typeof val === 'string' && val.trim() === '' ? undefined : val),
      z.string().url({ message: 'Укажите рабочую ссылку.' }).optional()
    ),
  }),
});

export type FormDataAddAds = z.infer<typeof schemaAddAdsHouseForm>;
export type FormValids = Partial<Record<keyof FormDataAddAds, string | null>>;
export type FormErrors = {
  [key in keyof FormDataAddAds]?: string; // Ошибки по ключам из FormDataAddAds
};
