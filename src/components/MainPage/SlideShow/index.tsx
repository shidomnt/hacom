import React, { useEffect, useRef, useState } from 'react';
import { Autoplay, Navigation, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../ProductCard';
import Loading from '../../Loading';
import { Category } from '../../../interfaces';
import { isInViewport } from '../../../utils';
import {
  useLazyGetProductsQuery,
} from '../../../features/api/api.slice';

interface SlideShowProps {
  title: React.ReactNode;
  category: Category['slug'];
  limit: number;
  slidesPerView?: SwiperOptions['slidesPerView'];
  spaceBetween?: SwiperOptions['spaceBetween'];
  button?: React.ReactNode;
  breakpoints?: SwiperOptions['breakpoints'];
}

function SlideShow({
  title,
  category: categorySlug,
  limit,
  slidesPerView = 1,
  spaceBetween = 10,
  button = null,
  breakpoints = {},
}: SlideShowProps) {

  const [getProducts, result] = useLazyGetProductsQuery();

  const [shouldRender, setShouldRender] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const { data: products, isError, error } = result;

  useEffect(() => {
    if (shouldRender) {
      (async () => {
        await getProducts({
          categorySlug,
          limit
        }, true)
      })();
    }
  }, [categorySlug, getProducts, limit, shouldRender]);

  useEffect(() => {
    const divElement = ref.current;
    const handleScroll = () => {
      if (divElement) {
        const check = isInViewport(divElement);
        if (check) {
          setShouldRender(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [categorySlug]);

  if (isError) {
    console.log(error);
  }

  return (
    <div ref={ref}>
      {!!products?.length ? (
        <React.Fragment>
          {title}
          <Swiper
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            modules={[Navigation, Autoplay]}
            navigation
            loop={true}
            autoplay={{ delay: 8000 }}
            breakpoints={breakpoints}
            lazy={true}
            watchSlidesProgress={true}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard category={categorySlug} product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          {button && <div style={{ marginTop: '16px' }}>{button}</div>}
        </React.Fragment>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default SlideShow;
