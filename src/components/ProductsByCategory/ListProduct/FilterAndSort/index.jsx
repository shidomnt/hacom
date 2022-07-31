// @ts-check
import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import Sort from './Sort';

const Wrapper = styled.div`
  & {
    padding: 4px;
    background-color: white;
    .top-filter-zone {
      padding: 6px;
      background-color: #f2f2f2;
    }
  }
`;

export default function TopFilter() {
  return (
    <Wrapper>
      <div className="top-filter-zone">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Filter />
          </Col>
          <Col span={24}>
            <Sort />
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
}
