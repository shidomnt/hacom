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
]

export const slideSrcList = [
  'https://hanoicomputercdn.com/media/banner/30_Jun5f554fbfc506240d24abb33881ee5a78.jpg',
  'https://hanoicomputercdn.com/media/banner/01_Julae73d3b3f05f8253fbe4d8c483c609ec.png',
  'https://hanoicomputercdn.com/media/banner/04_Jul5d448b2e204aa778e135c23f1c6b3d30.jpg',
  'https://hanoicomputercdn.com/media/banner/07_Julf2510bcf29fb56683fba210e2ba14815.jpg',
  'https://hanoicomputercdn.com/media/banner/09_Juldeb6f9166ebe1f5064d0671eeb038b04.png',
]

export const rightSlideBannerSrcList = [
  'https://i.ytimg.com/vi/W0uuq13u4MY/hq720.jpg',
  'https://hanoicomputercdn.com/media/banner/16_Jul4a47a0db6e60853dedfcfdf08a5ca249.png',
]

export const bottomSlideBannerSrcList = [
  'https://hanoicomputercdn.com/media/banner/16_Julfb5c81ed3a220004b71069645f112867.png',
  'https://hanoicomputercdn.com/media/banner/16_Jul10fb15c77258a991b0028080a64fb42d.png',
  'https://hanoicomputercdn.com/media/banner/16_Jul09dd8c2662b96ce14928333f055c5580.png',
]

export const underSlideBannerSrcList = [
  'https://hanoicomputercdn.com/media/banner/16_Jul8266e4bfeda1bd42d8f9794eb4ea0a13.png',
  'https://hanoicomputercdn.com/media/banner/16_Julf19c9085129709ee14d013be869df69b.png',
  'https://hanoicomputercdn.com/media/banner/16_Jul9eb9cd58b9ea5e04c890326b5c1f471f.png',
  'https://hanoicomputercdn.com/media/banner/16_Jul602e8f042f463dc47ebfdf6a94ed5a6d.png',
]

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
]

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
]

export const khoangGia = [
  'Dưới 10 Triệu',
  '10 Triệu - 15 Triệu',
  '15 Triệu - 20 Triệu',
  '20 Triệu - 25 Triệu',
  '25 Triệu - 30 Triệu',
  '30 Triệu - 35 Triệu',
  '35 Triệu - 40 Triệu',
  '40 Triệu - 45 Triệu',
  '45 Triệu - 50 Triệu',
  '50 Triệu - 60 Triệu',
  'Trên 60 Triệu',
]
