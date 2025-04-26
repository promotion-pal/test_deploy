type AppPaths = {
  pages: {
    [key: string]: string;
  };
  contacts: {
    [key: string]: string | { href: string; label: string };
  };
  legal: {
    [key: string]: string;
  };
};

export const paths: AppPaths = {
  pages: {
    home: '/',
    account: '/my-account',
    houseRent: '/house-rent',
    carRent: '/car-rent',
    tours: '/tours-excursions',
    leisure: '/leisure-entertainment',
    contact: '/contact',
    blog: '/blog',
    lawInfo: '/law-information',
    about: '/about',
  },

  legal: {
    userAgreement: '/rules/user-agreement',
    privacyPolicy: '/rules/privacy-policy',
    politics: '',
  },

  contacts: {
    telephone: { href: 'tel:88005553535', label: '8 800 555 35 35' },
    telegram: { href: 'https://t.me/mirtravelWorld', label: '@mirtravelWorld' },
    whatsapp: { href: 'https://wa.me/88005553535', label: 'WhatsApp' },
    email: { href: 'mailto:Mirtraveler@mail.ru', label: 'Mirtraveler@mail.ru' },
  },
};
