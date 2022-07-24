import { Button, Image, Space, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  & {
    text-align: center;
    padding: 32px 0;
    background-color: white;
    border-radius: 6px;
    .ant-space-item {
      text-align: center;
    }
  }
`;

const StyledButton = styled(Button)`
  & {
    background-color: #f78d1b;
    border-radius: 8px;
    color: white;
    padding: 8px 36px;
    height: unset;
  }
`

export default function EmptyCart() {
  return (
    <Wrapper>
      <Space direction="vertical">
        <Image src="/assets/img/tk-shopping-img.png" preview={false} />
        <Typography.Text>
          Không có sản phẩm nào trong giỏ hàng của bạn
        </Typography.Text>
        <StyledButton><Link to='/' >Tiếp tục mua sắm</Link></StyledButton>
      </Space>
    </Wrapper>
  );
}
