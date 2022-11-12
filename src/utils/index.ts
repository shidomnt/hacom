import { discountMapping } from '../constant';
import {
  DiscountInfo,
  MenuItem,
  Product,
  SortProductHandler,
} from '../interfaces';

export const formatStringPriceToNumber = (stringPrice: string) =>
  Number(stringPrice.split('.').join(''));

export const formatNumberPriceToString = (thanhTienNumber: number) => {
  const thanhTienArrayReverse = thanhTienNumber.toString().split('').reverse();
  let thanhTienArrayFormated = [];
  while (thanhTienArrayReverse.length) {
    const string = thanhTienArrayReverse.splice(0, 3).reverse().join('');
    thanhTienArrayFormated.unshift(string);
  }
  const thanhTienStringFormated = thanhTienArrayFormated.join('.');
  return thanhTienStringFormated;
};

export const calculateThanhTien = (price: number, quantify: number) => {
  const thanhTienNumber = price * quantify;
  return formatNumberPriceToString(thanhTienNumber);
};

export const displayDiscountInfo = (discountInfo: DiscountInfo) => {
  switch (discountInfo.type) {
    case 'rate':
      return `${discountInfo.value * 100}%`;
    default:
      throw new Error('Discount type khong hop le');
  }
};

export const checkDiscountCode = (discountCode: string = '') => {
  discountCode = discountCode.toUpperCase();
  if (Object.keys(discountMapping).includes(discountCode)) {
    return {
      discount: discountMapping[discountCode as keyof typeof discountMapping],
    };
  }
  return {
    discount: null,
  };
};
export const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: any
) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

export const calculateDiscountCost = (
  discountInfo: DiscountInfo,
  cost: number
) => {
  switch (discountInfo.type) {
    case 'rate':
      return Math.floor(cost * discountInfo.value);
    default:
      throw new Error('Discount type khong hop le');
  }
};

export const filterInputNumber = (input: string): string | undefined => {
  return input.match(/\d+/g)?.join('') ?? '0';
};

export const sortProductHandler: SortProductHandler = {
  default: () => 1,
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

export const calculateDiscountRate = (product: Product) => {
  if (!product.maxPrice) {
    return product.maxPrice;
  }
  return 100 - Math.floor((product.price / product.maxPrice) * 100);
};

export function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  const check =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + 200 &&
    rect.right <=
      (window.innerWidth || document.documentElement.clientWidth) + 200;
  return check;
}
