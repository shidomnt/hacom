// @ts-check
import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { StyledImgContainer } from "..";

/**
 * 
 * @param {import("react").PropsWithChildren<{ rightSlideBannerSrcList: string[] }>} props 
 * @returns 
 */
export default function RightBanner({ rightSlideBannerSrcList }) {

  return (
    <Row gutter={[6, 6]}>
      {rightSlideBannerSrcList.map((src) => (
        <Col span={24} key={src}>
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
