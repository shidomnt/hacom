import { Button, Col, Input, Row } from 'antd';
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
    .sidebar-row {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default function Sidebar({ checkedList }) {
  const [cost, setCost] = useState(0);

  const { cart } = useContext(CartContext);
  const { formatStringPriceToNumber } = useContext(CartActionContext);

  useEffect(() => {
    const preCost = checkedList.reduce((accumulator, productId) => {
      const item = cart.filter((item) => (item.product.id = productId))?.[0];
      let price = 0;
      if (item) {
        price = formatStringPriceToNumber(item.product.price) * item.quantify;
      }
      return accumulator + price;
    }, 0);
    console.log(preCost);
  }, [cart, checkedList, formatStringPriceToNumber]);

  return (
    <Wrapper>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <div className="cart-block">
            <Input.Group>
              <Input placeholder="Mã giảm giá/ Quà tặng" />
              <Button type="primary">Submit</Button>
            </Input.Group>
          </div>
        </Col>
        <Col span={24}>
          <div className="cart-block"></div>
        </Col>
      </Row>
    </Wrapper>
  );
}
