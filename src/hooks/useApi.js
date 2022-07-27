// @ts-check

import axios from 'axios'
import { API_URL } from '../constant'
import React from 'react'

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
 *
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

function getSideBarMappingIcon() {
  const iconMapping = [
    <i className="fa-solid fa-laptop"></i>,
    <i className="fa-solid fa-laptop"></i>,
    <i className="fa-solid fa-server"></i>,
    <i className="fa-solid fa-desktop"></i>,
    <i className="fa-brands fa-usb"></i>,
    <i className="fa-solid fa-desktop"></i>,
    <i className="fa-solid fa-desktop"></i>,
    <i className="fa-solid fa-tv"></i>,
    <i className="fa-solid fa-headset"></i>,
    <i className="fa-solid fa-gamepad"></i>,
    <i className="fa-solid fa-fax"></i>,
    <i className="fa-solid fa-print"></i>,
    <i className="fa-solid fa-print"></i>,
    <i className="fa-solid fa-fax"></i>,
    <i className="fa-solid fa-shop"></i>,
    <i className="fa-solid fa-hard-drive"></i>,
    <i className="fa-solid fa-wifi"></i>,
  ]
  return iconMapping
}

function getBannerList() {
  const slideSrcList = [
    'https://hanoicomputercdn.com/media/banner/30_Jun5f554fbfc506240d24abb33881ee5a78.jpg',
    'https://hanoicomputercdn.com/media/banner/01_Julae73d3b3f05f8253fbe4d8c483c609ec.png',
    'https://hanoicomputercdn.com/media/banner/04_Jul5d448b2e204aa778e135c23f1c6b3d30.jpg',
    'https://hanoicomputercdn.com/media/banner/07_Julf2510bcf29fb56683fba210e2ba14815.jpg',
    'https://hanoicomputercdn.com/media/banner/09_Juldeb6f9166ebe1f5064d0671eeb038b04.png',
  ]

  const rightSlideBannerSrcList = [
    'https://i.ytimg.com/vi/W0uuq13u4MY/hq720.jpg',
    'https://hanoicomputercdn.com/media/banner/16_Jul4a47a0db6e60853dedfcfdf08a5ca249.png',
  ]

  const bottomSlideBannerSrcList = [
    'https://hanoicomputercdn.com/media/banner/16_Julfb5c81ed3a220004b71069645f112867.png',
    'https://hanoicomputercdn.com/media/banner/16_Jul10fb15c77258a991b0028080a64fb42d.png',
    'https://hanoicomputercdn.com/media/banner/16_Jul09dd8c2662b96ce14928333f055c5580.png',
  ]

  const underSlideBannerSrcList = [
    'https://hanoicomputercdn.com/media/banner/16_Jul8266e4bfeda1bd42d8f9794eb4ea0a13.png',
    'https://hanoicomputercdn.com/media/banner/16_Julf19c9085129709ee14d013be869df69b.png',
    'https://hanoicomputercdn.com/media/banner/16_Jul9eb9cd58b9ea5e04c890326b5c1f471f.png',
    'https://hanoicomputercdn.com/media/banner/16_Jul602e8f042f463dc47ebfdf6a94ed5a6d.png',
  ]

  return {
    slideSrcList,
    rightSlideBannerSrcList,
    bottomSlideBannerSrcList,
    underSlideBannerSrcList,
  }
}

function getListCollection() {
  const listCollection = [
    {
      id: 1,
      categorySlug: 'Laptop,Tablet,Mobile',
      title: 'MÁY TÍNH CHO GAME THỦ HACOM LUÔN SẴN ĐỦ',
    },
    {
      id: 2,
      categorySlug: 'PhuKienLaptop,PC,Mobile',
      title: 'TRƯỚC MẶT SẠCH SẼ KHÔNG GIAN LUÔN ĐẸP ĐẼ',
    },
    {
      id: 3,
      categorySlug: 'PCVanPhong,AIO,MiniPC',
      title: 'TẤT CẢ TRONG MỘT ALL IN ONE, MINI PC, LÀ SỐ 1',
    },
    {
      id: 4,
      categorySlug: 'Loa,TaiNghe,Mic,Webcam',
      title: 'VỰA KHÔNG GIAN RIÊNG TƯ ĐEO VÀO LÀ LẮC LƯ',
    },
  ]
  return listCollection
}

export default function useApi() {
  return {
    getProduct,
    getCategories,
    getProductByCategory: getProductsByCategory,
    getBannerList,
    getSideBarMappingIcon,
    getSideBarContent,
    getShowRooms,
    getAutoCompleteProduct,
    getListCollection,
  }
}

