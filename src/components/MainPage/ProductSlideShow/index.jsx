import { Col, Row } from "antd";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SlideShow from "../SlideShow";

const Title = styled.div`
  & {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    .title {
      text-transform: uppercase;
      font-size: 22px;
    }
    .more {
      color: inherit;
      text-decoration: none;
    }
  }
`;

function ProductSlideShow({ categories }) {
  const breakPointsMemoed = useMemo(
    () => ({
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
      360: {
        slidesPerView: 1,
      },
    }),
    []
  );

  return (
    <Row gutter={[0, 12]}>
      {categories.map((category) => (
      <Col
        span={24}
        key={category.id}
        style={{ backgroundColor: "white" }}
      >
        <SlideShow
          category={category.slug}
          title={
            <Title>
              <span className="title">{category.name}</span>
              <Link to="/" className="more">
                Xem tất cả
              </Link>
            </Title>
          }
          slidesPerView={5}
          query="?_limit=7"
          breakpoints={breakPointsMemoed}
        />
      </Col>
      ))}
    </Row>
  );
}

export default ProductSlideShow;
