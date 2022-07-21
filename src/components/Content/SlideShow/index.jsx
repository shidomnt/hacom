import React, { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../ProductCard";
import useApi from "../../../hooks/useApi";



const SlideShow = ({
  title,
  category,
  query = "?_limit=3",
  slidesPerView = 1,
  spaceBetween = 10,
  button
}) => {
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
        {title}
        <Swiper
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          modules={[Navigation, Autoplay]}
          navigation
          loop={true}
          autoplay={{ delay: 8000 }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard category={category} sku={product.sku} />
            </SwiperSlide>
          ))}
        </Swiper>
        {button && <div style={{marginTop: '16px'}}>
          {button}
          </div>}
      </React.Fragment>
    )
  );
};

export default SlideShow;
