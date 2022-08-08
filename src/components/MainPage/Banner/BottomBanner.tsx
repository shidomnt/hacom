import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledImgContainer } from '..';
import { Url } from '../../../interfaces';

interface BottomBannerProps {
  bottomSlideBannerSrcList: Url[];
}
export default function BottomBanner({
  bottomSlideBannerSrcList,
}: BottomBannerProps) {
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
