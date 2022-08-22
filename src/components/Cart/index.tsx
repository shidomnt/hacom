import { Space, Typography } from 'antd';
import styled from 'styled-components';
import CustomBreadcrumb from '../CustomBreadcrumb';
import EmptyCart from './EmptyCart';
import CartContent from './CartContent';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../app/hooks';
import { selectAllCartItem } from '../../features/cart/cart.slice';

const Wrapper = styled.div`
  .ant-typography {
    margin: 0;
  }
`;

export default function Cart() {
  const cartLength = useAppSelector((state) => selectAllCartItem(state.cart).length)

  return (
    <Wrapper>
      <Helmet>
        <title>Thông tin giỏ hàng</title>
      </Helmet>
      <CustomBreadcrumb />
      <div className="cart-title">
        <Space direction="horizontal">
          <Typography.Title level={3}>Giỏ hàng</Typography.Title>
          {!cartLength && (
            <Typography.Text>({cartLength} sản phẩm)</Typography.Text>
          )}
        </Space>
      </div>
      <div>{!cartLength ? <EmptyCart /> : <CartContent />}</div>
    </Wrapper>
  );
}
