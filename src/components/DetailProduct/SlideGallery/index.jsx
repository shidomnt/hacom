import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation, Grid } from "swiper";
import styled from "styled-components";

const Wrapper = styled.div`
  & {
    padding-right: 8px;
    .swiper-slide.swiper-slide-thumb-active {
      border: 1px solid #333;
    }
  }
`;

const StyledImgContainer = styled.div`
  & {
    img {
      width: 100%;
    }
  }
`;

export default function SlideGallery({ gallery }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Wrapper>
      <Swiper
        loop={true}
        spaceBetween={5}
        navigation={true}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
      >
        {gallery.map((imgSrc) => (
          <SwiperSlide key={imgSrc}>
            <StyledImgContainer>
              <img src={imgSrc} alt="" />
            </StyledImgContainer>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={5}
        slidesPerView={3}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        centeredSlides={true}
        centeredSlidesBounds={true}
      >
        {gallery.map((imgSrc) => (
          <SwiperSlide key={imgSrc}>
            <StyledImgContainer>
              <img src={imgSrc} alt="" />
            </StyledImgContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
}
