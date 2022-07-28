// @ts-check
import { Col, Row } from 'antd';
import React from 'react';
import CustomBreadcrumb from '../CustomBreadcrumb';
import Header from './Header';
import Banner from './Banner';
import Sidebar from './Sidebar';
import ListProduct from './ListProduct';

export default function ProductsByCategory() {
  return (
    <React.Fragment>
      <CustomBreadcrumb />
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <Header />
        </Col>
        <Col span={24}>
          <Banner />
        </Col>
        <Col span={24}>
          <Row gutter={[8, 8]}>
            <Col span={5}>
              <Sidebar />
            </Col>
            <Col span={19}>
              <ListProduct />
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
}
