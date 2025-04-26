import { fetchInstance } from '@/shared/api';

export interface TypeContacts {
  email?: string;
  id?: number;
  inn?: string;
  kpp?: string;
  ogrn_ip?: string;
  organization_type?: string;
  phone?: string;
  telegram?: string;
  whatsapp?: string;
  work_end_time?: string;
  work_start_time?: string;
}

class ContactsService {
  async getContacts() {
    return fetchInstance.get('/site/contacts');
  }

  async getContactsLandlord(pageId: number) {
    return fetchInstance.token.get(`/site/ads/housing/${pageId}/contacts/`);
  }
}

export const contactsService = new ContactsService();
