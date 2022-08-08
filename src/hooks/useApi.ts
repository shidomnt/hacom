import axios, { AxiosResponse } from 'axios';
import {
  API_URL,
  bottomSlideBannerSrcList,
  brandList,
  iconMapping,
  khoangGia,
  listCollection,
  rightSlideBannerSrcList,
  slideSrcList,
  underSlideBannerSrcList,
} from '../constant';
import { Category, Product, ProductQuery, Showroom, Url } from '../interfaces';

async function callApi<ResultType = any>(
  url: Url,
  onError: (e: any) => void = () => {}
): Promise<AxiosResponse<ResultType> | undefined> {
  try {
    const response = await axios.get<ResultType>(API_URL + url);
    return response;
  } catch (e) {
    onError(e);
  }
}

async function getAutoCompleteProduct({
  searchValue,
  limit = 3,
}: {
  searchValue: string;
  limit?: number;
}) {
  return await callApi<Array<Product>>(
    `/products?name=${searchValue}&limit=${limit}`
  );
}

async function getProduct(id: string) {
  const result = await callApi<Product>(`/products/${id}`);
  return result;
}

async function getShowRooms() {
  const result = await callApi<Array<Showroom>>('/showrooms');
  return result;
}

async function getCategories() {
  const result = await callApi<Array<Category>>(`/categories`);
  return result;
}

async function getCategoryBySlug(slug: Category['slug']) {
  const result = await callApi<Array<Category>>(`/categories?slug=${slug}`);
  return result;
}

async function getProductsByCategory(
  categorySlug: Category['slug'],
  query: Partial<ProductQuery>
) {
  const url = new URL('/products', API_URL);
  url.searchParams.set('categorySlug', categorySlug);
  const listKeyOfQuery = Object.keys(query) as unknown as Array<
    keyof ProductQuery
  >;
  listKeyOfQuery.forEach((key) => {
    const value = query[key];
    if (value) {
      url.searchParams.set(key, String(value));
    }
  });
  const result = await callApi<Array<Product>>(url.pathname + url.search);
  return result;
}

async function getProductCountByCategory(
  categorySlug: Category['slug'],
  query: Partial<ProductQuery>
) {
  const url = new URL('/products/count', API_URL);
  url.searchParams.set('categorySlug', categorySlug);
  const listKeyOfQuery = Object.keys(query) as unknown as Array<
    keyof ProductQuery
  >;
  listKeyOfQuery.forEach((key) => {
    const value = query[key];
    if (value) {
      url.searchParams.set(key, String(value));
    }
  });
  const result = await callApi<number>(url.pathname + url.search);
  return result;
}

/**
 *
 * @returns {Promise<import('axios').AxiosResponse<SideBarContent[]> | undefined>}
 */
async function getSideBarContent() {
  const result = await callApi('/catalogs');
  return result;
}

function getBrandList(categorySlug = '') {
  return brandList;
}

function getSideBarMappingIcon() {
  return iconMapping;
}

function getBannerList() {
  return {
    slideSrcList,
    rightSlideBannerSrcList,
    bottomSlideBannerSrcList,
    underSlideBannerSrcList,
  };
}

function getListCollection() {
  return listCollection;
}

function getKhoangGia() {
  return khoangGia;
}

export default function useApi() {
  return {
    getProduct,
    getCategories,
    getProductsByCategory,
    getBannerList,
    getSideBarMappingIcon,
    getSideBarContent,
    getShowRooms,
    getAutoCompleteProduct,
    getListCollection,
    getCategoryBySlug,
    getBrandList,
    getKhoangGia,
    getProductCountByCategory,
  };
}
