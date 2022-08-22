import { Product } from "../../interfaces";

export interface ChangeQuantifyPayload {
  productId: Product['id'];
  newQuantify: number;
};

export interface RemoveCartItemPayload {
  productIds: Array<Product['id']> | 'all';
};
