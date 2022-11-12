import React from 'react';
import { Typography, Divider, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import { StyledButton, StyledInput } from '.';
import { SIGN_STATE } from '../../../../constant';

interface SigninWithPhoneNumberProps {
  setState?: React.Dispatch<React.SetStateAction<SIGN_STATE>>;
}

export default function SigninWithPhoneNumber({
  setState = () => {},
}: SigninWithPhoneNumberProps) {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Typography.Title level={3}>Xin chào</Typography.Title>
        <Typography.Text>
          Đăng nhập hoặc{' '}
          <Button
            type="link"
            onClick={() => setState(SIGN_STATE.SIGNUP_WITH_EMAIL)}
            style={{ padding: 0 }}
          >
            Tạo tài khoản
          </Button>
        </Typography.Text>
      </div>
      <StyledInput placeholder="Số điện thoại" />
      <StyledButton>Tiếp tục</StyledButton>
      <div style={{ textAlign: 'center' }}>
        <Button type="link" onClick={() => setState(SIGN_STATE.SIGNIN_WITH_EMAIL)}>
          Đăng nhập bằng email
        </Button>
      </div>
      <Divider
        style={{ color: '#787878', margin: 0 }}
        type="horizontal"
        orientation="center"
      >
        Hoặc tiếp tục bằng
      </Divider>
      <Space
        style={{ width: '100%', justifyContent: 'center' }}
        direction="horizontal"
        size="large"
      >
        <i className="fa-brands fa-facebook modal-sign-icon"></i>
        <i className="fa-brands fa-google modal-sign-icon"></i>
      </Space>
      <div
        style={{
          textAlign: 'center',
          color: '#787878',
          fontSize: '11px',
        }}
      >
        Bằng việc tiếp tục, bạn đã chấp nhận{' '}
        <Link to="/">điều khoản sử dụng</Link>
      </div>
    </Space>
  );
}
