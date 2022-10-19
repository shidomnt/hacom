import React, { useState } from 'react';
import { Space, Button, Typography, message } from 'antd';
import styled from 'styled-components';
import { StyledButton, StyledInput } from '.';
import { StyledInputPassword } from './SigninWithEmail';
import { CreateUserDto } from '../../../../interfaces';
import { register } from '../../../../api/userApi';
import { SIGN_STATE } from '../../../../constant';

const Wrapper = styled.div`
  & {
    .font-size-1-6 {
      font-size: 1.6rem;
    }
    .signup-email-space {
    }
  }
`;

interface SignupWithEmailProps {
  setState?: React.Dispatch<React.SetStateAction<SIGN_STATE>>;
}

export default function SignupWithEmail({ setState }: SignupWithEmailProps) {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

  const isAllInputReady =
    nameValue && emailValue && passwordValue && confirmPasswordValue;

  const handleSubmit = async () => {
    if (isAllInputReady) {
      if (passwordValue !== confirmPasswordValue) {
        return message.error('Xác nhận mật khẩu không chính xác');
      }
      const createUserDto: CreateUserDto = {
        name: nameValue,
        email: emailValue,
        password: passwordValue,
      };
      const hide = message.loading('Action in progress..', 0);
      try {
        const response = await register(createUserDto);
        if (!response.data?.success) {
          throw new Error('Tao tk that bai');
        }
        hide();
        message.success('Tao tk thanh cong!');
        if (setState) {
          setState(SIGN_STATE.SIGNIN_WITH_EMAIL);
        }
      } catch (e) {
        hide();
        if (e instanceof Error) {
          message.error(e.message);
        }
      }
    }
  };

  return (
    <Wrapper>
      <Space
        direction="vertical"
        size="middle"
        className="signup-email-space"
        style={{ width: '100%' }}
      >
        <div>
          {setState && (
            <div>
              <Button
                type="text"
                onClick={() => setState(SIGN_STATE.SIGNIN_WITH_PHONE)}
              >
                <i className="fa-solid fa-angle-left"></i>
              </Button>
            </div>
          )}
          <Typography.Title style={{ margin: 0 }} level={3}>
            Tạo tài khoản
          </Typography.Title>
        </div>
        <div>
          <Typography.Text>Vui lòng cho biết tên bạn</Typography.Text>
          <StyledInput
            value={nameValue}
            onChange={(event) => setNameValue(event.target.value)}
            className="font-size-1-6"
            placeholder="Tên bạn"
          />
        </div>
        <div>
          <Typography.Text>Email</Typography.Text>
          <StyledInput
            value={emailValue}
            onChange={(event) => setEmailValue(event.target.value)}
            className="font-size-1-6"
            placeholder="Email"
          />
        </div>
        <div>
          <Typography.Text>Đặt mật khẩu</Typography.Text>
          <StyledInputPassword
            value={passwordValue}
            onChange={(event) => setPasswordValue(event.target.value)}
            className="font-size-1-6"
            placeholder="Mật khẩu"
          />
        </div>
        <div>
          <Typography.Text>Nhập lại mật khẩu</Typography.Text>
          <StyledInputPassword
            value={confirmPasswordValue}
            onChange={(event) => setConfirmPasswordValue(event.target.value)}
            className="font-size-1-6"
            placeholder="Nhập lại mật khẩu"
          />
        </div>
        <StyledButton disabled={!isAllInputReady} onClick={handleSubmit}>
          Tạo tài khoản
        </StyledButton>
        <Typography.Text>
          Đã có tài khoản ?{' '}
          <Button
            type="link"
            onClick={() => setState && setState(SIGN_STATE.SIGNIN_WITH_EMAIL)}
            style={{ padding: 0 }}
          >
            Đăng nhập
          </Button>{' '}
          ngay
        </Typography.Text>
      </Space>
    </Wrapper>
  );
}
