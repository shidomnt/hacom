export const formatStringPriceToNumber = (stringPrice) =>
  Number(stringPrice.split('.').join(''));

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

export const caculateThanhTien = (price, quantify) => {
  const thanhTienNumber = formatStringPriceToNumber(price) * quantify;
  return formatNumberPriceToString(thanhTienNumber);
};

const discountMapping = {
  CDNBK: {
    type: 'rate',
    value: 0.9,
  },
};

export const displayDiscountInfo = (discountInfo) => {
  switch (discountInfo.type) {
    case 'rate':
      return `${discountInfo.value * 100}%`;
    default:
      throw new Error('Discount type khong hop le');
  }
};

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
