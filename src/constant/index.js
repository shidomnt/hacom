// @ts-check

/** ========= Type Define ========= */

/**
 * @typedef {{type: string, value: number}} DiscountInfo
 */

/**
 * @typedef {Object} CartItem
 * @property {import("../hooks/useApi").Product} product
 * @property {number} quantify
 */

/**
 * @typedef {CartItem[]} Cart
 */

/** ========= End Type Define ========= */

/** ========= State Init ========= */

/**
 * @type {string[]}
 */
export const initGallerySrc = []

/**
 * @type {Cart}
 */
export const initCart = []

/**
 * @type {DiscountInfo | null}
 */
export const initDiscountInfo = null

/**
 * @type {import("../hooks/useApi").Showroom[]}
 */
export const initShowrooms = []

/**
 * @type {import("../hooks/useApi").Product | null}
 */
export const initProduct = null

/**
 * @type {import("../hooks/useApi").Category[]}
 */
export const initCategories = []

/**
 * @type {import("../hooks/useApi").SideBarContent | null}
 */
export const initSideBarContent = null

/**
 * @type {import("../hooks/useApi").Product[]}
 */
export const initProducts = []

/** ========= End State Init ========= */

/**
 * @type {number}
 */
export const MIN_SOLUONG = 1

/**
 * @type {number}
 */
export const MAX_SOLUONG = 99

/**
 * @type {string}
 */
export const KEY_LOCAL_STORAGE_CART = 'KEY_CART'

/**
 * @type {string}
 */
export const API_URL = 'http://localhost:4000'

/**
 * @type {{[key: string]: DiscountInfo}}
 */
export const discountMapping = {
  CDNBK: {
    type: 'rate',
    value: 0.9,
  },
}

/**
 * @type {{title: string, sortType: string}[]}
 */
export const sortBtns = [
  {
    title: 'Hàng Mới',
    sortType: 'new',
  },
  {
    title: 'Xem Nhiều',
    sortType: 'view',
  },
  {
    title: 'Giá Giảm Nhiều',
    sortType: 'price-off',
  },
  {
    title: 'Giá Tăng Dần',
    sortType: 'price-asc',
  },
  {
    title: 'Giá Giảm Dần',
    sortType: 'price-desc',
  },
]

