// @ts-check
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Navigation } from 'swiper';
import styled from 'styled-components';
import { ProductContext } from '..';
import { Col, Image, Row } from 'antd';
import { initGallerySrc } from '../../../constant';

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
  const [gallery, setGallery] = useState(initGallerySrc);

  const { product } = useContext(ProductContext);

  useEffect(() => {
    setGallery([product.imgSrc, ...product.gallery]);
  }, [product]);

  const thumbProp = useMemo(() => {
    return thumbsSwiper
      ? {
          thumbs: { swiper: thumbsSwiper },
        }
      : {};
  }, [thumbsSwiper]);

  return (
    <Wrapper>
      <Row>
        <Col span={24}>
          <Swiper
            loop={true}
            spaceBetween={5}
            navigation={true}
            slidesPerView={1}
            {...thumbProp}
            modules={[Navigation, Thumbs]}
          >
            {gallery.map((imgSrc) => (
              <SwiperSlide key={imgSrc}>
                <Image width="100%" src={imgSrc} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
        <Col span={24} xxl={24} xl={24} lg={24} md={24} sm={0} xs={0}>
          <Swiper
            // @ts-ignore
            onSwiper={setThumbsSwiper}
            spaceBetween={5}
            slidesPerView={5}
            watchSlidesProgress={true}
            modules={[Thumbs]}
            centeredSlides={true}
            centeredSlidesBounds={true}
          >
            {gallery.map((imgSrc) => (
              <SwiperSlide key={imgSrc}>
                <Image width="100%" preview={false} src={imgSrc} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </Wrapper>
  );
}
