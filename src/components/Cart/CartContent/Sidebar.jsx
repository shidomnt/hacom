// @ts-check
import { Button, Col, Divider, Input, Row, Typography } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CartActionContext, CartContext } from '../../../contexts/CartProvider';
import {
  caculateDiscountCost,
  checkDiscountCode,
  displayDiscountInfo,
  formatNumberPriceToString,
  formatStringPriceToNumber,
} from '../../../utils';

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

/**
 * @typedef {Object} SidebarProps
 * @property {import('../../../hooks/useApi').Product['id'][]} checkedList
 */

/**
 * @param {import('react').PropsWithChildren<SidebarProps>} props
 * @returns 
 */
export default function Sidebar({ checkedList }) {
  const [cost, setCost] = useState(0);
  const [discountCode, setDisCountCode] = useState('');
  const [discountCost, setDiscountCost] = useState(0);

  const { cart, discountInfo } = useContext(CartContext);
  const { setDiscountInfo } = useContext(CartActionContext);

  useEffect(() => {
    const selectedItems = cart.filter((item) =>
      checkedList.includes(item.product.id)
    );
    const cost = selectedItems.reduce((accumulator, item) => {
      const price =
        formatStringPriceToNumber(item.product.price) * item.quantify;
      return accumulator + price;
    }, 0);
    setCost(cost);
  }, [cart, checkedList]);

  useEffect(() => {
    if (discountInfo) {
      const result = caculateDiscountCost(discountInfo, cost);
      setDiscountCost(result);
    } else {
      setDiscountCost(0);
    }
  }, [discountInfo, cost]);

  function handleSetDiscountInfo() {
    const result = checkDiscountCode(discountCode);
    if (!result.discount) {
      alert('Ma giam gia khong hop le!');
      setDiscountInfo(null);
    } else {
      alert('Ap dung ma giam gia thanh cong!');
      setDiscountInfo(result.discount);
    }
  }

  return (
    <Wrapper>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <div className="cart-block">
            <Input.Group>
              <Input
                placeholder="Mã giảm giá/ Quà tặng"
                value={discountCode}
                onChange={(e) => setDisCountCode(e.target.value.toUpperCase())}
              />
              <Button
                onClick={handleSetDiscountInfo}
                style={{ backgroundColor: 'var(--primary-color)' }}
                type="primary"
              >
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
              <span>
                <Typography.Text strong>
                  {formatNumberPriceToString(discountCost)}
                  <sup>₫</sup>
                </Typography.Text>
                {discountInfo && ` (${displayDiscountInfo(discountInfo)})`}
              </span>
            </div>
            <Divider type="horizontal" />
            <div className="cart-sidebar-row">
              <Typography.Text>Thành tiền</Typography.Text>
              <Typography.Title style={{ color: 'red', margin: 0 }} level={5}>
                {formatNumberPriceToString(cost - discountCost)}
                <sup>₫</sup>
              </Typography.Title>
            </div>
            <div style={{ textAlign: 'right' }}>(Đã bao gồm VAT nếu có)</div>
            <Divider type="horizontal" />
          </div>
        </Col>
        <Col span={24}>
          <Button className="submit-btn" type="primary">
            Tiến hành đặt hàng
          </Button>
        </Col>
      </Row>
    </Wrapper>
  );
}
