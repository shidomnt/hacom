import { DiscountInfo, SortButton } from '../interfaces';

export const discountMapping: Record<string, DiscountInfo> = {
  CDNBK: {
    type: 'rate',
    value: 0.67,
  },
  ITECH: {
    type: 'rate',
    value: 0.99,
  },
};

export const policyList = [
  {
    icon: <i className="fa-solid fa-truck-fast footer__policies--icon" />,
    title: 'CHÍNH SÁCH GIAO HÀNG',
    content: 'Nhận hàng và thanh toán tại nhà',
  },
  {
    icon: <i className="fa-solid fa-arrows-rotate footer__policies--icon" />,
    title: 'ĐỔI TRẢ DỄ DÀNG',
    content: '1 đổi 1 trong 15 ngày',
  },
  {
    icon: <i className="fa-solid fa-credit-card footer__policies--icon" />,
    title: 'THANH TOÁN TIỆN LỢI',
    content: 'Trả tiền mặt, CK, trả góp 0%',
  },
  {
    icon: <i className="fa-solid fa-comments footer__policies--icon" />,
    title: 'HỖ TRỢ NHIỆT TÌNH',
    content: 'Tư vấn, giải đáp mọi thắc mắc',
  },
];

export const sortBtns: Array<SortButton> = [
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
    title: 'VỰA KHÔNG GIAN RIÊNG TƯ NGHE VÀO LÀ LẮC LƯ',
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

export const getProductsByCategoryBannerSrcList = [
  'https://hanoicomputercdn.com/media/banner/01_Jul1cb93447d1dc7161d16a1c39b133baa8.png',
  'https://hanoicomputercdn.com/media/banner/20_Jul1cb93447d1dc7161d16a1c39b133baa8.png',
  'https://hanoicomputercdn.com/media/banner/01_Jul9bf8252a2264102f94be60509fc86d12.png',
  'https://hanoicomputercdn.com/media/banner/20_Jun33e29acbaa0100ff0cb519ca0bd2e784.jpg',
];

export const iconMapping = [
  <i className="fa-solid fa-laptop"></i>,
  <i className="fa-solid fa-hard-drive"></i>,
  <i className="fa-solid fa-laptop"></i>,
  <i className="fa-solid fa-server"></i>,
  <i className="fa-solid fa-desktop"></i>,
  <i className="fa-solid fa-headset"></i>,
  <i className="fa-solid fa-desktop"></i>,
  <i className="fa-solid fa-desktop"></i>,
  <i className="fa-solid fa-tv"></i>,
  <i className="fa-solid fa-gamepad"></i>,
  <i className="fa-solid fa-fax"></i>,
  <i className="fa-solid fa-print"></i>,
  <i className="fa-solid fa-print"></i>,
  <i className="fa-solid fa-fax"></i>,
  <i className="fa-solid fa-wifi"></i>,
  <i className="fa-solid fa-shop"></i>,
  <i className="fa-brands fa-usb"></i>,
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

export const staticInfoFakeData = [
  {
    title: 'YÊN TÂM MUA HÀNG',
    content: [
      'Uy tín 20 năm xây dựng và phát triển',
      'Sản phẩm chính hãng 100%',
      'Trả góp lãi suất 0% toàn bộ giỏ hàng',
      'Trả bảo hành tận nơi sử dụng',
      'Bảo hành tận nơi cho doanh nghiệp',
      'Vệ sinh miễn phí trọn đời PC, Laptop',
      'Miễn phí quẹt thẻ',
    ],
  },
  {
    title: 'MIỄN PHÍ GIAO HÀNG',
    content: [
      'Giao hàng siêu tốc trong 2h',
      'Giao hàng miễn phí toàn quốc',
      'Nhận hàng và thanh toán tại nhà (ship COD)',
    ],
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

// export const listCommentFake: Array<Comment> = [
//   {
//     _id: '1231sdsada2',
//     author: {
//       _id: 'dsadsaee123',
//       avatarSrc: '',
//       name: 'Quân',
//     },
//     content: 'Cấu hình này quá ngon so với tầm giá rồi',
//     createdAt: '30/7/2022 8:24',
//     reply: [],
//   },
//   {
//     _id: '641239asdasddas',
//     author: {
//       _id: 'dsadsaeeadsad123',
//       avatarSrc: '',
//       name: 'Đỗ Quốc Hưng',
//     },
//     content: 'Cuối tháng này đã có chưa ạ',
//     createdAt: '23/2/2022 13:58',
//     reply: [
//       {
//         _id: '912321ddasdsadsa',
//         author: {
//           _id: 'dasd12321ed',
//           avatarSrc: 'https://hacom.vn/media/lib/hnc_40x.png',
//           name: 'HACOM',
//           nameTag: 'HACOM Care',
//         },
//         content: `Dạ bên em sắp về hàng anh nhé.
//         Khi nào có hàng Website sẽ cập nhật ạ.
//         Thông tin đến anh.`,
//         createdAt: '23/2/2022 18:21',
//       },
//     ],
//   },
//   {
//     _id: '6412ad39asdas',
//     author: {
//       _id: 'dsadsaeeadsad123',
//       avatarSrc: '',
//       name: 'Đỗ Quốc Hưng',
//     },
//     content: 'Khi nào máy này về vậy ạ?',
//     createdAt: '23/2/2022 13:58',
//     reply: [
//       {
//         _id: '9123asd21dsadsa',
//         author: {
//           _id: 'dasd12321ed',
//           name: 'HACOM',
//           nameTag: 'HACOM Care',
//           avatarSrc: 'https://hacom.vn/media/lib/hnc_40x.png',
//         },
//         content: `Dạ hiện tại bên em chưa có lịch về hàng cụ thể ạ.
//         Khi nào có trang web sẽ cập nhật thông tin anh nhé.`,
//         createdAt: '10/2/2022 11:4',
//       },
//       {
//         _id: 'dasdasdasd',
//         author: {
//           _id: 'dasd12321ed',
//           name: 'HACOM',
//           nameTag: 'HACOM Care',
//           avatarSrc: 'https://hacom.vn/media/lib/hnc_40x.png',
//         },
//         content: `Dạ hiện tại bên em chưa có lịch về hàng cụ thể ạ.
//         Khi nào có trang web sẽ cập nhật thông tin anh nhé.`,
//         createdAt: '10/2/2022 11:4',
//       },
//     ],
//   },
// ];

export const pathMapping = {
  cart: 'Giỏ hàng',
  products: 'Tất cả sản phẩm',
  'Laptop,Tablet,Mobile': 'Laptop, Tablet, Mobile',
  'PCGaming,Streaming': 'PC Gaming, Streaming',
  'PhuKienLaptop,PC,Mobile': 'Phụ Kiện Laptop, PC, Mobile',
  'PCVanPhong,AIO,MiniPC': 'PC Văn Phòng, AIO, Mini PC',
  LinhKienMayTinh: 'Linh Kiện Máy Tính',
  'TanNhietPC,Cooling': 'Tản Nhiệt PC, Cooling',
  ManHinhMayTinh: 'Màn Hình Máy Tính',
  'PhimChuot,GheGame,Gear': 'Phím Chuột, Ghế Game, Gear',
  'Loa,TaiNghe,Mic,Webcam': 'Loa, Tai Nghe, Mic, Webcam',
  CameraQuanSat: 'Camera Quan Sát',
  'MayIn,MayChamCong': 'Máy In, Máy Chấm Công',
  ThietBiVanPhongKhac: 'Thiết Bị Văn Phòng Khác',
  'TBSieuThi,MayBanHang': 'TB Siêu Thị, Máy Bán Hàng',
  'PCDoHoa,Render,MayChu': 'PC Đồ Họa, Render, Máy Chủ',
  'LaptopGaming,DoHoa': 'Laptop Gaming, Đồ Họa',
  'ThietBiLuuTru,USB,The': 'Thiết Bị Lưu Trữ, USB, Thẻ',
  'ThietBiMang,PhanMem': 'Thiết Bị Mạng, Phần Mềm',
};
