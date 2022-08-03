// @ts-check
import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  PRODUCT_NUMBER_SLIDE_SHOW,
  PRODUCT_SLIDE_SHOW_SIZE,
} from '../../../constant';
import SlideShow from '../SlideShow';

const Title = styled.div`
  & {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    .title {
      text-transform: uppercase;
      font-size: 2.2rem;
    }
    .more {
      color: inherit;
      text-decoration: none;
    }
  }
`;

const breakPoints = {
  1600: {
    slidesPerView: 5,
  },
  1200: {
    slidesPerView: 5,
  },
  992: {
    slidesPerView: 4,
  },
  768: {
    slidesPerView: 3,
  },
  576: {
    slidesPerView: 2,
  },
  0: {
    slidesPerView: 2,
  },
};

/**
 * @typedef {Object} ProductSlideShowProps
 * @property {import("../../../hooks/useApi").Category[]} categories
 */

/**
 * @param {import("react").PropsWithChildren<ProductSlideShowProps>} props
 * @returns
 */
function ProductSlideShow({ categories }) {
  return (
    <Row gutter={[0, 12]}>
      {categories.slice(0, PRODUCT_NUMBER_SLIDE_SHOW).map((category) => (
        <Col span={24} key={category._id} style={{ backgroundColor: 'white' }}>
          <SlideShow
            category={category.slug}
            title={
              <Title>
                <span className="title">{category.name}</span>
                <Link to={`/${category.slug}`} className="more">
                  Xem tất cả
                </Link>
              </Title>
            }
            slidesPerView={5}
            limit={PRODUCT_SLIDE_SHOW_SIZE}
            breakpoints={breakPoints}
          />
        </Col>
      ))}
    </Row>
  );
}

export default ProductSlideShow;
