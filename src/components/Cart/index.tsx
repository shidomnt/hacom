import { Space, Typography } from 'antd';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../contexts/CartProvider';
import CustomBreadcrumb from '../CustomBreadcrumb';
import EmptyCart from './EmptyCart';
import CartContent from './CartContent';
import { Helmet } from 'react-helmet-async';
import { CartContextInterface } from '../../interfaces';

const Wrapper = styled.div`
  .ant-typography {
    margin: 0;
  }
`;

export default function Cart() {
  const { cart } = useContext(CartContext) as CartContextInterface;

  return (
    <Wrapper>
      <Helmet>
        <title>Thông tin giỏ hàng</title>
      </Helmet>
      <CustomBreadcrumb />
      <div className="cart-title">
        <Space direction="horizontal">
          <Typography.Title level={3}>Giỏ hàng</Typography.Title>
          {!cart.length && (
            <Typography.Text>({cart.length} sản phẩm)</Typography.Text>
          )}
        </Space>
      </div>
      <div>{!cart.length ? <EmptyCart /> : <CartContent />}</div>
    </Wrapper>
  );
}
