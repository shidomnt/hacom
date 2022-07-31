// @ts-check
import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { StyledImgContainer } from "..";

/**
 *
 * @param {import("react").PropsWithChildren<{ bottomSlideBannerSrcList: string[] }>} props
 * @returns
 */
export default function BottomBanner({ bottomSlideBannerSrcList }) {
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
