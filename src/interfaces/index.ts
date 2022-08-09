import { MenuProps } from 'rc-menu';
import React from 'react';

export type ThongSoKiThuat = Record<string, string>;

export type Url = string;

export type Cart = Array<CartItemType>;

export type MenuItem = Required<MenuProps>['items'][number];

export type CreateUserDto = Pick<User, 'name' | 'email'> & {
  password: string;
};

export interface AxiosCommonResponse {
  success?: boolean;
  message?: string;
}

export interface SortButton {
  title: string;
  sortType: string;
}

export interface DiscountInfo {
  type: string;
  value: number;
}

export interface CartItemType {
  product: Product;
  quantify: number;
}

export interface User {
  _id: string;

  name: string;

  avatarSrc?: string;

  nameTag?: string;

  phone?: string;

  email: string;

  gender?: boolean;

  city?: string;

  address?: string;
}

export interface Comment {
  _id: string;
  author: User;
  content: string;
  createdAt: string;
  reply: Array<Omit<Comment, 'reply'>> | null;
}

export interface DanhGia {
  title: Array<string>;
  info: Array<string>;
  img: Array<string>;
}

export interface Product {
  id: string;
  originalUrl: Url;
  imgSrc: Url;
  rate: number;
  name: string;
  maxPrice: number;
  category: Category;
  price: number;
  stockStatus: boolean;
  tskt: ThongSoKiThuat | null;
  tssp: Array<string>;
  uudai: Array<string>;
  gallery: Array<Url>;
  baohanh: string;
  vat: boolean;
  danhgia: DanhGia;
}

export interface Showroom {
  _id: string;
  name: string;
  diachi: string;
  googleMapUrl: Url;
  phone: string;
  baohanh: string;
  email: string;
  openTime: string;
  city: string;
  landline: string;
  moikhaitruong: boolean;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
}

export interface SideBarContentChild {
  title: string;
  children: Array<SideBarContentChild | string>;
}

export interface SideBarContent {
  _id: string;
  category: Category;
  content: Array<SideBarContentChild>;
}

export interface SortProductHandler {
  [index: string]: (prev: Product, next: Product) => number;
}

export interface ProductQuery {
  limit: number;
  page: number;
  stockStatus: string;
  priceRange: string;
}

export interface AddProduct {
  (product: Product, quantify?: number): void;
}

export interface ChangeQuantify {
  (productId: Product['id'], newQuantify: number): void;
}

export interface RemoveProduct {
  (productIds: Array<Product['id']> | 'all'): void;
}

export interface CartContextInterface {
  cart: Cart;
  discountInfo: DiscountInfo | null;
}

export interface CartActionContextInterface {
  addProduct: AddProduct;
  removeProduct: RemoveProduct;
  changeQuantify: ChangeQuantify;
  setDiscountInfo: React.Dispatch<React.SetStateAction<DiscountInfo | null>>;
}

export interface UserContextInterface {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export interface ProductContextInterface {
  product: Product;
}