import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constant';
import {
  Product,
  SideBarContent,
  ProductQuery,
  Category,
  Showroom,
} from '../../interfaces';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getSideBar: builder.query<SideBarContent[], void>({
      query: () => ({
        url: '/catalogs',
        method: 'GET',
      }),
    }),

    getProduct: builder.query<Product, { productId: Product['id'] }>({
      query: ({ productId }) => ({
        url: `/products/${productId}`,
        method: 'GET',
      }),
    }),

    getProducts: builder.query<
      Product[],
      Partial<
        ProductQuery & {
          categorySlug: Category['slug'];
        }
      >
    >({
      query: (params) => ({
        url: '/products',
        method: 'GET',
        params,
      }),
    }),

    getShowrooms: builder.query<Showroom[], void>({
      query: () => ({
        url: '/showrooms',
        method: 'GET'
      })
    })
  }),
});

export const {
  useGetSideBarQuery,
  useGetProductQuery,
  useGetProductsQuery,
  useLazyGetProductsQuery,
  useGetShowroomsQuery,
} = apiSlice;

export { apiSlice };
