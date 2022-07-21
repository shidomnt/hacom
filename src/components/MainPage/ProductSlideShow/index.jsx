import { Col, Grid, Row } from "antd";
import React from "react";
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

export default function ProductShow({ categories }) {
  const screens = Grid.useBreakpoint();

    const activeBreakPoints = Object.entries(screens).filter((screen) => !!screen[1]).map(screen => screen[0]);

  console.log(activeBreakPoints);
  return (
    <Row gutter={[0, 12]}>
      {/* {categories.map((category) => ( */}
        <Col span={24} key={categories[0].id} style={{ backgroundColor: "white" }}>
          <SlideShow
            category={categories[0].slug}
            title={
              <Title>
                <span className="title">{categories[0].name}</span>
                <a href="#" className="more">
                  Xem tất cả
                </a>
              </Title>
            }
            slidesPerView={5}
            query="?_limit=7"
          />
        </Col>
      {/* ))} */}
    </Row>
  );
}
