import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { StyledImgContainer } from "..";

export default function BottomBanner({ bottomSlideBannerSrcList }) {
  if (!bottomSlideBannerSrcList) {
    return;
  }

  return (
    <Row gutter={6}>
      {bottomSlideBannerSrcList.map((src) => (
        <Col span={8} key={src}>
          <Link to="/">
            <StyledImgContainer>
              <img src={src} alt="banner" />
            </StyledImgContainer>
          </Link>
        </Col>
      ))}
    </Row>
  );
}
