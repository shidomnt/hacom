// @ts-check
import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledImgContainer } from '..';

/**
 *
 * @param {import("react").PropsWithChildren<{ underSlideBannerSrcList: string[] }>} props
 * @returns
 */
export default function UnderBanner({ underSlideBannerSrcList }) {
  return (
    <Row gutter={6}>
      {underSlideBannerSrcList.map((src) => (
        <Col span={6} key={src}>
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
