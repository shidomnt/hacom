import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledImgContainer } from '..';
import { Url } from '../../../interfaces';

interface UnderBannerProps {
  underSlideBannerSrcList: Url[];
}
export default function UnderBanner({
  underSlideBannerSrcList,
}: UnderBannerProps) {
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
