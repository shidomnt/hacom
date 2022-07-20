import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../ProductCard';
import useApi from '../../../hooks/useApi';

const StyledTitle = styled.div`
  text-align: center;
  color: #d82a29;
  font-size: 17px;
`;

const SlideShow = ({ title, category, query = '?_limit=3', slidesPerView = 1, spaceBetween = 10 }) => {
  const [products, setProducts] = useState([]);

  const { getProductByCategory } = useApi();

  useEffect(() => {
    (async () => {
      const response = await getProductByCategory(category, query);
      if (response) {
        setProducts(response.data);
      } else {
        setProducts([]);
      }
    })();
  }, [category, getProductByCategory, query]);

  return (
    products.length && (
      <React.Fragment>
        {title && <StyledTitle>{title}</StyledTitle>}
        <Swiper
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 8000 }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard category={category} sku={product.sku} />
            </SwiperSlide>
          ))}
        </Swiper>
      </React.Fragment>
    )
  );
};

export default SlideShow;
