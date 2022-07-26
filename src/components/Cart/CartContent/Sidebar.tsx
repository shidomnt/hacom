import { Button, Col, Divider, Input, message, Row, Typography } from 'antd';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { discountInfoSelector, selectAllCartItem, setDiscountInfo } from '../../../features/cart/cart.slice';
import {
  Product,
} from '../../../interfaces';
import {
  calculateDiscountCost,
  checkDiscountCode,
  displayDiscountInfo,
  formatNumberPriceToString,
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

interface SidebarProps {
  checkedList: Array<Product['id']>;
}

export default function Sidebar({ checkedList }: SidebarProps) {
  const [cost, setCost] = useState(0);
  const [discountCode, setDisCountCode] = useState('');

  const cart = useAppSelector((state) => selectAllCartItem(state.cart));
  const discountInfo = useAppSelector(discountInfoSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const selectedItems = cart.filter((item) =>
      checkedList.includes(item.product.id)
    );
    const cost = selectedItems.reduce((accumulator, item) => {
      const price = item.product.price * item.quantify;
      return accumulator + price;
    }, 0);
    setCost(cost);
  }, [cart, checkedList]);

  const discountCost = discountInfo
    ? calculateDiscountCost(discountInfo, cost)
    : 0;

  const thanhTien = cost - discountCost;

  function handleSetDiscountInfo() {
    if (discountCode) {
      const result = checkDiscountCode(discountCode);
      if (!result.discount) {
        message.error({
          content: 'Mã giảm giá không hợp lệ!',
          className: 'custom-message',
        });
        dispatch(setDiscountInfo(null));
      } else {
        message.success({
          content: 'Áp dụng mã giảm giá thành công!',
          className: 'custom-message',
        });
        dispatch(setDiscountInfo(result.discount));
      }
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
                onPressEnter={handleSetDiscountInfo}
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
                {formatNumberPriceToString(thanhTien)}
                <sup>₫</sup>
              </Typography.Title>
            </div>
            <div style={{ textAlign: 'right' }}>(Đã bao gồm VAT nếu có)</div>
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
