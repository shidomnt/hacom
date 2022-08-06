// @ts-check
import { Col, Divider, Grid, List, Row, Typography } from 'antd';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductContext } from '..';
import DangKiNhanThongTin from './DangKiNhanThongTin';
import Gift from './Gift';
import Price from './Price';
import ThanhToan from './ThanhToan';

const Wrapper = styled.div`
  & {
    font-size: 1.2rem;
    .color-288ad6 {
      color: #288ad6;
    }
    .thongso-sp {
      font-size: inherit;
      color: #444444;
      padding-left: 6px;
      padding-top: 6px;
      i {
        font-size: 0.8rem;
        margin-right: 4px;
        transform: translate(0, -1px);
      }
    }
    .summary {
      .title {
        font-size: 1.4rem;
      }
    }
  }
`;

export default function DetailInfo() {
  const { product } = useContext(ProductContext);

  const { xs } = Grid.useBreakpoint();

  return (
    <Wrapper>
      <Row gutter={[12, 12]}>
        <Col span={24}>
          <Typography.Text>
            Mã SP: <span className="color-288ad6">{product.id}</span>
          </Typography.Text>
          <Divider type="vertical" />
          <Typography.Text>
            Đánh giá:{' '}
            <img
              src={`https://hacom.vn/media/lib/star_${product.rate}.png`}
              alt=""
            />{' '}
            <span className="color-288ad6">{product.rate}</span>
          </Typography.Text>
          {!xs && (
            <React.Fragment>
              <Divider type="vertical" />
              <Typography.Text>
                Bình luận: <span className="color-288ad6">0</span>
              </Typography.Text>
              <Divider type="vertical" />
              <Typography.Text>
                Lượt xem: <span className="color-288ad6">0</span>
              </Typography.Text>
            </React.Fragment>
          )}
        </Col>
        <Col span={24} xxl={24} xl={24} lg={24} md={24} sm={0} xs={0}>
          <div className="summary">
            <Typography.Text className="title">
              Thông số sản phẩm
            </Typography.Text>
            <List
              className="thongso-sp"
              locale={{
                emptyText: 'Chưa có thông số của sản phẩm này :(',
              }}
              dataSource={product.tssp
                .map((ts) => ts.trim())
                .filter((v) => !!v)}
              renderItem={(thongso) => (
                <li>
                  <i className="fa-solid fa-angle-right"></i> {thongso}
                </li>
              )}
            />
          </div>
        </Col>
        <Col span={24}>
          <Price />
        </Col>
        <Col span={24}>
          <Gift uudai={product.uudai.slice(1)} />
        </Col>
        <Col span={24}>{product.stockStatus ? <ThanhToan /> : <DangKiNhanThongTin />}</Col>
      </Row>
    </Wrapper>
  );
}
