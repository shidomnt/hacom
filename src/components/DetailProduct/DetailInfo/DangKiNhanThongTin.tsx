import { Button, Input, Space, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  & {
    padding: 20px;
    border-radius: 6px;
    border: 1px solid #ed1b24;
  }
`;

const StyledInput = styled(Input)`
  & {
    width: 100%;
    border-radius: 3px;
    font-size: 1.6rem;
    padding-top: 6px;
    padding-bottom: 6px;
  }
`;
const StyledButton = styled(Button)`
  & {
    background-color: #ed1b24;
    border-radius: 6px;
    font-weight: bold;
    color: white;
    padding-top: 6px;
    padding-bottom: 6px;
    height: unset;
  }
`;

export default function DangKiNhanThongTin() {
  return (
    <Wrapper>
      <Typography.Title level={5} style={{ fontWeight: 'bold' }}>
        ĐĂNG KÝ NHẬN THÔNG TIN KHI CÓ HÀNG
      </Typography.Title>
      <Space style={{ width: '100%' }} direction="vertical">
        <StyledInput placeholder="Họ tên (bắt buộc)" required={true} />
        <StyledInput placeholder="Số điện thoại (bắt buộc)" required={true} />
        <StyledInput placeholder="Email (bắt buộc)" required={true} />
        <StyledButton>ĐĂNG KÍ NHẬN THÔNG TIN</StyledButton>
      </Space>
    </Wrapper>
  );
}
