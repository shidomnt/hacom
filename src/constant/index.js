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

/**
 * @typedef {Object} User
 * @property {string} _id
 * @property {string} name
 * @property {string} avatarSrc
 * @property {string} nameTag
 */

/**
 * @typedef {Object} Comment
 * @property {string} _id
 * @property {User} author
 * @property {string} content
 * @property {string} createdAt
 * @property {(Omit<Comment, 'reply'>)[] | null} reply
 */

/** ========= End Type Define ========= */

export * from './fakeData';

export * from './stateInit';

export * from './signState';

export const MIN_SOLUONG = 1;

export const MAX_SOLUONG = 99;

export const KEY_LOCAL_STORAGE_CART = 'KEY_CART';

export const API_URL = 'http://localhost:5000';

export const DEFAULT_PAGE_SIZE = 12;

export const AUTO_COMPLETE_SIZE = 6;
