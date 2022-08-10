import axios from 'axios';
import { API_URL, getProtectedApiRouteOptions } from '../constant';
import { AxiosCommonResponse, Cart } from '../interfaces';

const url = API_URL + '/carts';

export async function getCart() {
  const options = getProtectedApiRouteOptions();
  const response = await axios.get<
    AxiosCommonResponse & {
      data: Cart;
    }
  >(url, options);
  return response;
}

export async function updateCart(cart: Cart) {
  const options = getProtectedApiRouteOptions();
  const response = await axios.post<AxiosCommonResponse>(
    url,
    cart.map((item) => ({
      ...item,
      product: item.product._id,
    })),
    options
  );
  return response;
}
