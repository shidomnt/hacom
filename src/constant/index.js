/**
 * @typedef {{type: string, value: number}} DiscountInfo
 */
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

/**
 * @type {number}
 */
export const MIN_SOLUONG = 1;

/**
 * @type {number}
 */
export const MAX_SOLUONG = 99;

/**
 * @type {string}
 */
export const KEY_LOCAL_STORAGE_CART = "KEY_CART";

/**
 * @type {string}
 */
export const API_URL = "http://localhost:4000";

/**
 * @type {{[key: string]: DiscountInfo}}
 */
export const discountMapping = {
  CDNBK: {
    type: 'rate',
    value: 0.9,
  },
};