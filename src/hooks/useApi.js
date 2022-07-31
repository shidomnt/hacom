// @ts-check

import axios from 'axios';
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

/** ========= Type Define ========= */

/**
 * @typedef {Record<string, string>} ThongSoKiThuat
 */

/**
 * @typedef {string} Url
 */

/**
 * @typedef {Object} DanhGia
 * @property {string[]} title
 * @property {string[]} info
 * @property {string[]} img
 */

/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {Url} originalUrl
 * @property {string} imgSrc
 * @property {number} rate
 * @property {string} name
 * @property {number} maxPrice
 * @property {Category} category
 * @property {number} price
 * @property {boolean} stockStatus
 * @property {ThongSoKiThuat | null} tskt
 * @property {string[]} tssp
 * @property {string[]} uudai
 * @property {Url[]} gallery
 * @property {string} baohanh
 * @property {boolean} vat
 * @property {DanhGia} danhgia
 */

/**
 * @typedef {Object} Showroom
 * @property {string} _id
 * @property {string} name
 * @property {string} diachi
 * @property {Url} googleMapUrl
 * @property {string} phone
 * @property {string=} baohanh
 * @property {string} email
 * @property {string} openTime
 * @property {string} city
 * @property {string=} landline
 * @property {boolean=} moikhaitruong
 */

/**
 * @typedef {Object} Category
 * @property {string} _id
 * @property {string} name
 * @property {string} slug
 */

/**
 * @typedef {Object} SideBarContentChild
 * @property {string} title
 * @property {(SideBarContentChild | string)[]} children
 */

/**
 * @typedef {Object} SideBarContent
 * @property {string} _id
 * @property {Category} category
 * @property {SideBarContentChild[]} content
 */

/** ========= Type Define ========= */

/**
 * @param {string} url
 * @param {(error: any) => void} onError
 * @returns
 */
async function callApi(url, onError = () => {}) {
  try {
    const response = await axios.get(API_URL + url);
    return response;
  } catch (e) {
    onError(e);
  }
}

/**
 *
 * @param {Object} param
 * @param {string} param.searchValue
 * @param {string=} param.category
 * @param {number=} param.limit
 * @returns {Promise<import('axios').AxiosResponse<Product[]> | undefined>}
 */
async function getAutoCompleteProduct({ searchValue, limit = 3 }) {
  return await callApi(`/products?name=${searchValue}&limit=${limit}`);
}

/**
 *
 * @param {string} id
 * @returns {Promise<import('axios').AxiosResponse<Product> | undefined>}
 */
async function getProduct(id) {
  const result = await callApi(`/products/${id}`);
  return result;
}

/**
 *
 * @returns {Promise<import('axios').AxiosResponse<Showroom[]> | undefined>}
 */
async function getShowRooms() {
  const result = await callApi('/showrooms');
  return result;
}

/**
 *
 * @returns {Promise<import('axios').AxiosResponse<Category[]> | undefined>}
 */
async function getCategories() {
  const result = await callApi(`/categories`);
  return result;
}

/**
 * @param {Category['slug']} slug
 * @returns {Promise<import('axios').AxiosResponse<Category[]> | undefined>}
 */
async function getCategoryBySlug(slug) {
  const result = await callApi(`/categories?slug=${slug}`);
  return result;
}

/**
 *
 * @param {Category['slug']} categorySlug
 * @param {{ limit?: number, page?: number, stockStatus?: string, priceRange?: string }} query
 * @returns {Promise<import('axios').AxiosResponse<Product[]> | undefined>}
 */
async function getProductsByCategory(categorySlug, query) {
  const url = new URL('/products', API_URL);
  url.searchParams.set('categorySlug', categorySlug);
  Object.keys(query).forEach((key) => {
    url.searchParams.set(key, query[key]);
  });
  const result = await callApi(url.pathname + url.search);
  return result;
}

/**
 *
 * @param {Category['slug']} categorySlug
 * @param {{ stockStatus?: string, priceRange?: string }} query
 * @returns {Promise<import("axios").AxiosResponse<number> | undefined>}
 */
async function getProductCountByCategory(categorySlug, query) {
  const url = new URL('/products/count', API_URL);
  url.searchParams.set('categorySlug', categorySlug);
  Object.keys(query).forEach((key) => {
    url.searchParams.set(key, query[key]);
  });
  const result = await callApi(url.pathname + url.search);
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
