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

export * from './fakeData'
export * from './stateInit'

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
export const API_URL = 'http://localhost:5000'
