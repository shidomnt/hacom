import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Navigation, Grid } from 'swiper';
import styled from 'styled-components';
import { ProductContext } from '..';
import { Image } from 'antd';

const Wrapper = styled.div`
  & {
    padding-right: 8px;
    .swiper-slide.swiper-slide-thumb-active {
      border: 1px solid #333;
    }
  }
`;

export default function SlideGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [gallery, setGallery] = useState([]);

  const { product } = useContext(ProductContext);

  useEffect(() => {
    setGallery([product.imgSrc, ...product.gallery]);
  }, [product]);

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
            <Image width="100%" src={imgSrc} alt="" />
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
              <Image width='100%' preview={false} src={imgSrc} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
}
