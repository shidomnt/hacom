import React, { useEffect, useState } from 'react';
import { Autoplay, Navigation, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../ProductCard';
import useApi from '../../../hooks/useApi';
import Loading from '../../Loading';
import { initProducts } from '../../../constant';
import { Category } from '../../../interfaces';

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
  const [products, setProducts] = useState(initProducts);

  const { getProductsByCategory } = useApi();

  useEffect(() => {
    (async () => {
      const response = await getProductsByCategory(categorySlug, {
        limit,
      });
      if (response) {
        setProducts(response.data);
      } else {
        setProducts([]);
      }
    })();
  }, [categorySlug, getProductsByCategory, limit]);

  return !!products.length ? (
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
  );
}

export default SlideShow;
