export interface AddressHint {
  value: string;
}

class AddressService {
  async getHints(prompt: string) {
    // return await RequestHandler(
    //   () =>
    //     fetchInstance.token.post('/site/address/address_hints/', { prompt }),
    //   {
    //     on500() {
    //       alert('Войдите пожалуйста в личный кабинет');
    //     },
    //   }
    // );
  }
}

export const addressService = new AddressService();
