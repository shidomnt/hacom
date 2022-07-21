import axios from "axios";

const apiUrl = "http://localhost:4000";

async function getProduct(category, id) {
  try {
    const response = await axios.get(apiUrl + `/${category}/${id}`);
    return response;
  } catch (e) {
    console.log("Loi khi goi API");
  }
}

async function getCategories() {
  try {
    const response = await axios.get(apiUrl + `/categories`);
    return response;
  } catch (e) {
    console.log("Loi khi goi API");
  }
}

async function getProductByCategory(category, query = "") {
  try {
    const response = await axios.get(apiUrl + `/${category}` + query);
    return response;
  } catch (e) {
    console.log("Loi khi goi API");
  }
}

async function getSideBarContent() {
  try {
    const response = await axios.get(apiUrl + "/sidebar_content");
    return response;
  } catch (e) {
    console.log("Loi khi goi API");
  }
}

function getSideBarMappingIcon() {
  const iconMapping = [
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
  return iconMapping;
}

function getBannerList() {
  const slideSrcList = [
    "https://hanoicomputercdn.com/media/banner/30_Jun5f554fbfc506240d24abb33881ee5a78.jpg",
    "https://hanoicomputercdn.com/media/banner/01_Julae73d3b3f05f8253fbe4d8c483c609ec.png",
    "https://hanoicomputercdn.com/media/banner/04_Jul5d448b2e204aa778e135c23f1c6b3d30.jpg",
    "https://hanoicomputercdn.com/media/banner/07_Julf2510bcf29fb56683fba210e2ba14815.jpg",
    "https://hanoicomputercdn.com/media/banner/09_Juldeb6f9166ebe1f5064d0671eeb038b04.png",
  ];

  const rightSlideBannerSrcList = [
    "https://i.ytimg.com/vi/W0uuq13u4MY/hq720.jpg",
    "https://hanoicomputercdn.com/media/banner/16_Jul4a47a0db6e60853dedfcfdf08a5ca249.png",
  ];

  const bottomSlideBannerSrcList = [
    "https://hanoicomputercdn.com/media/banner/16_Julfb5c81ed3a220004b71069645f112867.png",
    "https://hanoicomputercdn.com/media/banner/16_Jul10fb15c77258a991b0028080a64fb42d.png",
    "https://hanoicomputercdn.com/media/banner/16_Jul09dd8c2662b96ce14928333f055c5580.png",
  ];

  const underSlideBannerSrcList = [
    "https://hanoicomputercdn.com/media/banner/16_Jul8266e4bfeda1bd42d8f9794eb4ea0a13.png",
    "https://hanoicomputercdn.com/media/banner/16_Julf19c9085129709ee14d013be869df69b.png",
    "https://hanoicomputercdn.com/media/banner/16_Jul9eb9cd58b9ea5e04c890326b5c1f471f.png",
    "https://hanoicomputercdn.com/media/banner/16_Jul602e8f042f463dc47ebfdf6a94ed5a6d.png",
  ];

  return {
    slideSrcList,
    rightSlideBannerSrcList,
    bottomSlideBannerSrcList,
    underSlideBannerSrcList,
  };
}

export default function useApi() {
  return {
    getProduct,
    getCategories,
    getProductByCategory,
    getBannerList,
    getSideBarMappingIcon,
    getSideBarContent
  };
}
