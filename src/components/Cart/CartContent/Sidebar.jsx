import { Button, Col, Divider, Input, Row, Typography } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CartActionContext, CartContext } from '../../../contexts/CartProvider';

const Wrapper = styled.div`
  & {
    .ant-input-group {
      display: flex;
      .ant-input {
        flex: 1;
      }
    }
    .cart-sidebar-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 8px;
    }
    .ant-divider-horizontal {
      margin: 12px 0;
    }
  }
`;

export default function Sidebar({ checkedList }) {
  const [cost, setCost] = useState(0);

  const { cart } = useContext(CartContext);
  const { formatStringPriceToNumber, formatNumberPriceToString } =
    useContext(CartActionContext);

  useEffect(() => {
    const cost = checkedList.reduce((accumulator, productId) => {
      const item = cart.filter((item) => item.product.id === productId)?.[0];
      let price = 0;
      if (item) {
        price = formatStringPriceToNumber(item.product.price) * item.quantify;
      }
      return accumulator + price;
    }, 0);
    setCost(cost);
  }, [cart, checkedList, formatStringPriceToNumber]);

  return (
    <Wrapper>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <div className="cart-block">
            <Input.Group>
              <Input placeholder="Mã giảm giá/ Quà tặng" />
              <Button style={{ backgroundColor: '#243a76' }} type="primary">
                Áp dụng
              </Button>
            </Input.Group>
          </div>
        </Col>
        <Col span={24}>
          <div className="cart-block">
            <div className="cart-sidebar-row">
              <Typography.Text>Tạm tính</Typography.Text>
              <Typography.Text strong>
                {formatNumberPriceToString(cost)}
                <sup>₫</sup>
              </Typography.Text>
            </div>
            <Divider type="horizontal" />
            <div className="cart-sidebar-row">
              <Typography.Text>Giảm giá</Typography.Text>
              <Typography.Text strong>
                0<sup>₫</sup>
              </Typography.Text>
            </div>
            <Divider type="horizontal" />
            <div className="cart-sidebar-row">
              <Typography.Text>Thành tiền</Typography.Text>
              <Typography.Title style={{ color: 'red', margin: 0 }} level={5}>
                {formatNumberPriceToString(cost)}
                <sup>₫</sup>
              </Typography.Title>
            </div>
            <div style={{ textAlign: 'right' }}>(Đã bao gồm VAT nếu có)</div>
            <Divider type="horizontal" />
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
}
