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
        <Col span={24} xxl={24} xl={24} lg={24} md={24} sm={24} xs={0}>
          <Header />
        </Col>
        <Col span={24} xxl={24} xl={24} lg={24} md={0} sm={0} xs={0}>
          <Banner />
        </Col>
        <Col span={24}>
          <Row gutter={[8, 8]}>
            <Col span={5} xxl={5} xl={5} lg={5} md={0} sm={0} xs={0}>
              <Sidebar />
            </Col>
            <Col span={19} xxl={19} xl={19} lg={19} md={24} sm={24} xs={24}>
              <ListProduct />
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
}
