/**
 * @type {{[key: string]: import(".").DiscountInfo}}
 */
export const discountMapping = {
  CDNBK: {
    type: 'rate',
    value: 0.67,
  },
  ITECH: {
    type: 'rate',
    value: 0.99,
  },
};

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
];

export const listCollection = [
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
];

export const slideSrcList = [
  'https://hanoicomputercdn.com/media/banner/30_Jun5f554fbfc506240d24abb33881ee5a78.jpg',
  'https://hanoicomputercdn.com/media/banner/01_Julae73d3b3f05f8253fbe4d8c483c609ec.png',
  'https://hanoicomputercdn.com/media/banner/04_Jul5d448b2e204aa778e135c23f1c6b3d30.jpg',
  'https://hanoicomputercdn.com/media/banner/07_Julf2510bcf29fb56683fba210e2ba14815.jpg',
  'https://hanoicomputercdn.com/media/banner/09_Juldeb6f9166ebe1f5064d0671eeb038b04.png',
];

export const rightSlideBannerSrcList = [
  'https://i.ytimg.com/vi/W0uuq13u4MY/hq720.jpg',
  'https://hanoicomputercdn.com/media/banner/16_Jul4a47a0db6e60853dedfcfdf08a5ca249.png',
];

export const bottomSlideBannerSrcList = [
  'https://hanoicomputercdn.com/media/banner/16_Julfb5c81ed3a220004b71069645f112867.png',
  'https://hanoicomputercdn.com/media/banner/16_Jul10fb15c77258a991b0028080a64fb42d.png',
  'https://hanoicomputercdn.com/media/banner/16_Jul09dd8c2662b96ce14928333f055c5580.png',
];

export const underSlideBannerSrcList = [
  'https://hanoicomputercdn.com/media/banner/16_Jul8266e4bfeda1bd42d8f9794eb4ea0a13.png',
  'https://hanoicomputercdn.com/media/banner/16_Julf19c9085129709ee14d013be869df69b.png',
  'https://hanoicomputercdn.com/media/banner/16_Jul9eb9cd58b9ea5e04c890326b5c1f471f.png',
  'https://hanoicomputercdn.com/media/banner/16_Jul602e8f042f463dc47ebfdf6a94ed5a6d.png',
];

export const iconMapping = [
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
];

export const brandList = [
  {
    name: 'ASUS',
  },
  {
    name: 'DELL',
  },
  {
    name: 'GIGABYTE',
  },
  {
    name: 'HACOM',
  },
  {
    name: 'HNC',
  },
  {
    name: 'INTEL',
  },
  {
    name: 'LENOVO',
  },
  {
    name: 'MSI',
  },
];

/**
 * @type {{ label: string, priceRange: { min: number, max: number } }[]}
 */
export const khoangGia = [
  {
    label: 'Dưới 10 Triệu',
    priceRange: {
      min: 0,
      max: 10,
    },
  },
  {
    label: '10 Triệu - 15 Triệu',
    priceRange: {
      min: 10,
      max: 15,
    },
  },
  {
    label: '15 Triệu - 20 Triệu',
    priceRange: {
      min: 15,
      max: 20,
    },
  },
  {
    label: '20 Triệu - 25 Triệu',
    priceRange: {
      min: 20,
      max: 25,
    },
  },
  {
    label: '25 Triệu - 30 Triệu',
    priceRange: {
      min: 25,
      max: 30,
    },
  },
  {
    label: '30 Triệu - 35 Triệu',
    priceRange: {
      min: 30,
      max: 35,
    },
  },
  {
    label: '35 Triệu - 40 Triệu',
    priceRange: {
      min: 35,
      max: 40,
    },
  },
  {
    label: '40 Triệu - 45 Triệu',
    priceRange: {
      min: 40,
      max: 45,
    },
  },
  {
    label: '45 Triệu - 50 Triệu',
    priceRange: {
      min: 45,
      max: 50,
    },
  },
  {
    label: 'Trên 60 Triệu',
    priceRange: {
      min: 60,
      max: Infinity,
    },
  },
];

export const headerSubNavData = [
  {
    title: 'Hỗ trợ khách hàng',
    policies: [
      'Hướng dẫn mua hàng trực tuyến',
      'Hướng dẫn thanh toán',
      'Hướng dẫn mua hàng trả góp',
      'Tra cứu hóa đơn điện tử',
      'Tra cứu sản phẩm gửi bảo hành',
      'Gửi yêu cầu bảo hành',
      'Biểu mẫu hợp đồng',
      'Góp ý, khiếu nại',
    ],
  },
  {
    title: 'Chính sách chung',
    policies: [
      'Chính sách chung',
      'Bảo mật thông tin khách hàng',
      'Chính sách hàng chính hãng',
      'Chính sách giao hàng',
      'Chính sách bảo hành',
      'Chính sách cho doanh nghiệp',
      'Chính sách nhập lại tính phí',
    ],
  },
  { title: 'Thông tin khuyến mại', policies: ['Thông tin khuyến mại'] },
  {
    title: 'Thông tin HACOM',
    policies: [
      'Giới thiệu HACOM',
      'Tuyển dụng',
      'Tin tức công nghệ',
      'Liên hệ hợp tác kinh doanh',
    ],
  },
];

export const listBrandImgSrc = [
  '/assets/img/asus.jpg',
  '/assets/img/dell.jpg',
  '/assets/img/msi.jpg',
  '/assets/img/hp.jpg',
  '/assets/img/acer.jpg',
  '/assets/img/intel.png',
  '/assets/img/amd.jpg',
  '/assets/img/lenovo.jpg',
  '/assets/img/gigabyte.jpg',
  '/assets/img/microsoft.jpg',
  '/assets/img/lg.jpg',
  '/assets/img/samsung.jpg',
];
