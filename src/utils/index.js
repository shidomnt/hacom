// @ts-check
import { discountMapping } from '../constant';

/**
 *
 * @param {string} stringPrice
 * @returns
 */
export const formatStringPriceToNumber = (stringPrice) =>
  Number(stringPrice.split('.').join(''));

/**
 *
 * @param {number} thanhTienNumber
 * @returns
 */
export const formatNumberPriceToString = (thanhTienNumber) => {
  const thanhTienArrayReverse = thanhTienNumber.toString().split('').reverse();
  let thanhTienArrayFormated = [];
  while (thanhTienArrayReverse.length) {
    const string = thanhTienArrayReverse.splice(0, 3).reverse().join('');
    thanhTienArrayFormated.unshift(string);
  }
  const thanhTienStringFormated = thanhTienArrayFormated.join('.');
  return thanhTienStringFormated;
};

/**
 *
 * @param {number} price
 * @param {number} quantify
 * @returns
 */
export const calculateThanhTien = (price, quantify) => {
  const thanhTienNumber = price * quantify;
  return formatNumberPriceToString(thanhTienNumber);
};

/**
 *
 * @param {import("../constant").DiscountInfo} discountInfo
 * @returns
 */
export const displayDiscountInfo = (discountInfo) => {
  switch (discountInfo.type) {
    case 'rate':
      return `${discountInfo.value * 100}%`;
    default:
      throw new Error('Discount type khong hop le');
  }
};

/**
 *
 * @param {string} discountCode
 * @returns
 */
export const checkDiscountCode = (discountCode = '') => {
  discountCode = discountCode.toUpperCase();
  if (Object.keys(discountMapping).includes(discountCode)) {
    return {
      discount: discountMapping[discountCode],
    };
  }
  return {
    discount: null,
  };
};

export const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

/**
 *
 * @param {import("../constant").DiscountInfo} discountInfo
 * @param {number} cost
 * @returns
 */
export const calculateDiscountCost = (discountInfo, cost) => {
  switch (discountInfo.type) {
    case 'rate':
      return Math.floor(cost * discountInfo.value);
    default:
      throw new Error('Discount type khong hop le');
  }
};

/**
 *
 * @param {string} input
 * @returns {string | undefined}
 * Return string only contain digit
 */
export const filterInputNumber = (input) => {
  return input.match(/\d+/g)?.join('') ?? '0';
};

/**
 * @type {Record<string, ((prev: import('../hooks/useApi').Product, next: import('../hooks/useApi').Product) => number) | undefined>}
 */
export const sortProductHandler = {
  default: undefined,
  'price-desc': (productPrev, productNext) => {
    const prevPrice = productPrev.price;
    const nextPrice = productNext.price;
    return nextPrice - prevPrice;
  },
  'price-asc': (productPrev, productNext) => {
    const prevPrice = productPrev.price;
    const nextPrice = productNext.price;
    return prevPrice - nextPrice;
  },
};

/**
 *
 * @param {import('../hooks/useApi').Product} product
 */
export const calculateDiscountRate = (product) => {
  if (!product.maxPrice) {
    return product.maxPrice;
  }
  return 100 - Math.floor((product.price / product.maxPrice) * 100);
};
