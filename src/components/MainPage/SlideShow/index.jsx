// @ts-check

import React, { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../ProductCard";
import useApi from "../../../hooks/useApi";
import Loading from "../../Loading";
import { initProducts } from "../../../constant";

/**
 * @typedef {Object} SlideShowProps
 * @property {React.ReactNode=} title
 * @property {import("../../../hooks/useApi").Category['slug']} category
 * @property {number=} limit
 * @property {number=} slidesPerView
 * @property {number=} spaceBetween
 * @property {React.ReactNode=} button
 * @property {*=} breakpoints
 */

/**
 * @param {import("react").PropsWithChildren<SlideShowProps>} props
 * @returns
 */
const SlideShow = ({
  title,
  category: categorySlug,
  limit = 3,
  slidesPerView = 1,
  spaceBetween = 10,
  button = null,
  breakpoints = {},
}) => {
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
      {button && <div style={{ marginTop: "16px" }}>{button}</div>}
    </React.Fragment>
  ) : (
    <Loading />
  );
};

export default React.memo(SlideShow);
