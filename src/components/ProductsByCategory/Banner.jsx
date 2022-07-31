// @ts-check
import { Image } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Wrapper = styled.div``;

const listSrc = [
  "https://hanoicomputercdn.com/media/banner/01_Jul1cb93447d1dc7161d16a1c39b133baa8.png",
  "https://hanoicomputercdn.com/media/banner/20_Jul1cb93447d1dc7161d16a1c39b133baa8.png",
  "https://hanoicomputercdn.com/media/banner/01_Jul9bf8252a2264102f94be60509fc86d12.png",
  "https://hanoicomputercdn.com/media/banner/20_Jun33e29acbaa0100ff0cb519ca0bd2e784.jpg",
];

export default function Banner() {
  const [bannerSrcList] = useState(() => listSrc);

  return (
    <Wrapper>
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        slidesPerView={2}
        navigation
        spaceBetween={10}
      >
        {bannerSrcList.map((bannerSrc) => (
          <SwiperSlide key={bannerSrc}>
            <Image preview={false} src={bannerSrc} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
}
