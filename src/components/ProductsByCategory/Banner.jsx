// @ts-check
import { Image } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getProductsByCategoryBannerSrcList } from '../../constant';

const Wrapper = styled.div``;

export default function Banner() {
  const [bannerSrcList] = useState(() => getProductsByCategoryBannerSrcList);

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
