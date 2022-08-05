// @ts-check
import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  initCategories,
  PRODUCT_NUMBER_SLIDE_SHOW,
  PRODUCT_SLIDE_SHOW_SIZE,
} from '../../../constant';
import useApi from '../../../hooks/useApi';
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

function ProductSlideShow() {
  const { getCategories } = useApi();

  const [categories, setCategories] = useState(initCategories);

  useEffect(() => {
    (async () => {
      const response = await getCategories();
      if (response) {
        setCategories(response.data);
      } else {
        setCategories([]);
      }
    })();
  }, [getCategories]);
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
