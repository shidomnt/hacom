// @ts-check

import axios from 'axios'
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
} from '../constant'

/** ========= Type Define ========= */

/**
 * @typedef {{[key: string]: string}} ThongSoKiThuat
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
 * @property {Url} url
 * @property {string} imgSrc
 * @property {string} rate
 * @property {string} sku
 * @property {string} name
 * @property {string} maxPrice
 * @property {string} discount
 * @property {string} price
 * @property {string} action
 * @property {ThongSoKiThuat} tskt
 * @property {string[]} tssp
 * @property {string[]} uudai
 * @property {Url[]} gallery
 * @property {string} baohanh
 * @property {string} vat
 * @property {DanhGia} danhgia
 */

/**
 * @typedef {Object} Showroom
 * @property {string} name
 * @property {string} diachi
 * @property {Url} img
 * @property {Url} map
 * @property {string} phone
 * @property {string=} baohanh
 * @property {string} email
 * @property {string} openTime
 * @property {string} thanhpho
 * @property {string=} dienthoaiban
 * @property {boolean=} isNew
 */

/**
 * @typedef {Object} Category
 * @property {string} id
 * @property {string} name
 * @property {string} slug
 */

/**
 * @typedef {Object} SideBarContentChild
 * @property {string} title
 * @property {(SideBarContentChild | string)[]} childs
 */

/**
 * @typedef {{[key: Category['slug']]: SideBarContentChild[]}} SideBarContent
 */

/** ========= Type Define ========= */

/**
 * @param {string} url
 * @param {(error: any) => void} onError
 * @returns
 */
async function callApi(url, onError = () => {}) {
  try {
    const response = await axios.get(API_URL + url)
    return response
  } catch (e) {
    onError(e)
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
async function getAutoCompleteProduct({
  searchValue,
  category = 'Laptop,Tablet,Mobile',
  limit = 3,
}) {
  return await callApi(`/${category}?q=${searchValue}&_limit=${limit}`)
}

/**
 *
 * @param {string} categorySlug
 * @param {string} id
 * @returns {Promise<import('axios').AxiosResponse<Product> | undefined>}
 */
async function getProduct(categorySlug, id) {
  return await callApi(`/${categorySlug}/${id}`)
}

/**
 *
 * @returns {Promise<import('axios').AxiosResponse<Showroom[]> | undefined>}
 */
async function getShowRooms() {
  return await callApi('/showrooms')
}

/**
 *
 * @returns {Promise<import('axios').AxiosResponse<Category[]> | undefined>}
 */
async function getCategories() {
  return await callApi(`/categories`)
}

/**
 * @param {Category['slug']} slug
 * @returns {Promise<import('axios').AxiosResponse<Category[]> | undefined>}
 */
async function getCategoryBySlug(slug) {
  return await callApi(`/categories?slug=${slug}`)
}

/**
 *
 * @param {string} categorySlug
 * @param {string} query
 * @returns {Promise<import('axios').AxiosResponse<Product[]> | undefined>}
 */
async function getProductsByCategory(categorySlug, query = '') {
  return await callApi(`/${categorySlug}` + query)
}

/**
 *
 * @returns {Promise<import('axios').AxiosResponse<SideBarContent> | undefined>}
 */
async function getSideBarContent() {
  return await callApi('/sidebar_content')
}

function getBrandList(categorySlug = '') {
  return brandList
}

function getSideBarMappingIcon() {
  return iconMapping
}

function getBannerList() {
  return {
    slideSrcList,
    rightSlideBannerSrcList,
    bottomSlideBannerSrcList,
    underSlideBannerSrcList,
  }
}

function getListCollection() {
  return listCollection
}

function getKhoangGia() {
  return khoangGia
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
  }
}
