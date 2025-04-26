import {
  FormDataAddAds,
  FormErrors,
  FormValids,
  schemaAddAdsHouseForm,
} from '@/widgets/lk/addAds/schema';
import { create } from 'zustand';

interface AdRentHouse {
  values: FormDataAddAds;
  valids: FormValids;
  errors: FormErrors | FormValids;
  setValues: (value: Partial<FormDataAddAds>) => void;
  resetForm: () => void;
  validateAndSave: (obj: Partial<FormDataAddAds>) => void;
  validateAll: () => { valid: boolean; data: FormDataAddAds };
  setErrors: (newErrors: FormErrors) => void;
  clearErrors: (fields?: (keyof FormDataAddAds)[]) => void;
}

export const useNewAdRentHouse = create<AdRentHouse>((set, get) => ({
  values: {
    text: '',
    address: {
      full_address: '',
    },
    title: '',
    housing_type: 0,
    room_count: undefined,
    is_studio: undefined,
    area: undefined,
    guests: undefined,
    is_children_allowed: false,
    is_pets_allowed: false,
    sleep_place_count: undefined,
    check_in_time: '',
    check_out_time: '',
    comfort_items: [],
    rent_type: undefined,
    price_per_hour: undefined,
    price_per_day: undefined,
    // floor: undefined,
    contacts: {
      phone: '',
      last_name: '',
      first_name: '',
      whatsapp_link: '',
      telegram_link: '',
    },
  },
  // values: {
  //   text: 'аовлоалвы',
  //   address: {
  //     full_address: 'Пушкина 37',
  //   },
  //   title: 'Хорошая квартира',
  //   housing_type: 4,
  //   room_count: 4,
  //   is_studio: undefined,
  //   area: 5,
  //   guests: 5,
  //   is_children_allowed: false,
  //   is_pets_allowed: false,
  //   sleep_place_count: 7,
  //   check_in_time: '12:00',
  //   check_out_time: '14:00',
  //   comfort_items: [],
  //   rent_type: undefined,
  //   price_per_hour: undefined,
  //   price_per_day: undefined,
  //   // floor: undefined,
  //   contacts: {
  //     phone: '+79941387422',
  //     last_name: 'Коноплев',
  //     first_name: 'Ростислав',
  //     whatsapp_link: '',
  //     telegram_link: '',
  //   },
  // },
  errors: {},
  valids: {},
  setValues: (value) => {
    set((state) => ({
      values: { ...state.values, ...value },
    }));
  },
  setErrors: (newErrors) =>
    set((state) => ({
      errors: { ...state.errors, ...newErrors },
    })),
  clearErrors: (fields) =>
    set((state) => {
      if (!fields) return { errors: {} };
      const updatedErrors = { ...state.errors };
      fields.forEach((field) => {
        delete updatedErrors[field];
      });
      return { errors: updatedErrors };
    }),
  validateAndSave: (obj: Partial<FormDataAddAds>) => {
    const validate = schemaAddAdsHouseForm.partial().safeParse(obj);
    const newErrors: FormErrors = {};
    const notValidField: Partial<FormDataAddAds> = {};
    const validatedFields = Object.keys(obj) as (keyof FormDataAddAds)[];
    if (validate.success) {
      const passedFields = validatedFields.filter(
        (field) => !(field in newErrors)
      );
      if (passedFields.length > 0) {
        set((state) => {
          if (!passedFields) return { errors: {} };
          const updatedErrors = { ...state.errors };
          passedFields.forEach((field) => {
            delete updatedErrors[field];
          });
          return { errors: updatedErrors };
        });
      }

      // console.log(obj); //здесь будет отправка данных на сервер на проверку плохих слов
      set((state) => ({
        values: { ...state.values, ...validate.data },
      }));
    } else {
      validate.error.errors.forEach((error) => {
        const key = error.path[0] as keyof FormDataAddAds;
        newErrors[key] = error.message;
        notValidField[key] = undefined;
      });
      set((state) => ({
        errors: { ...state.errors, ...newErrors },
      }));
      set((state) => ({
        values: { ...state.values, ...obj },
      }));
    }
  },
  validateAll: () => {
    const result = schemaAddAdsHouseForm.safeParse(get().values);

    if (result.success) {
      set({ valids: {} });
      return { valid: true, data: result.data };
    } else {
      const flat = result.error.flatten().fieldErrors;
      const formatted: FormValids = {};
      Object.entries(flat).forEach(([key, value]) => {
        if (key in get().values) {
          formatted[key as keyof FormDataAddAds] = value?.[0] ?? null;
        }
      });

      set({ valids: formatted });
      return { valid: false };
    }
  },
  resetForm: () =>
    set(() => ({
      values: {
        text: '',
        address: {
          full_address: '',
        },
        title: '',
        housing_type: 0,
        room_count: undefined,
        is_studio: undefined,
        area: undefined,
        guests: undefined,
        is_children_allowed: false,
        is_pets_allowed: false,
        sleep_place_count: undefined,
        check_in_time: '',
        check_out_time: '',
        comfort_items: [],
        rent_type: undefined,
        price_per_hour: undefined,
        price_per_day: undefined,
        floor: undefined,
        contacts: {
          phone: '',
          last_name: '',
          first_name: '',
          whatsapp_link: '',
          telegram_link: '',
        },
      },
    })),
}));
