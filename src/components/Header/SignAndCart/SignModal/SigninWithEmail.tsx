import React, { useContext, useState } from 'react';
import { Space, Button, Typography, Input } from 'antd';
import styled from 'styled-components';
import { StyledButton, StyledInput } from '.';
import {
  KEY_LOCAL_STORAGE_ACCESS_TOKEN,
  SIGNIN_WITH_PHONE,
} from '../../../../constant';
import { getProfile, login } from '../../../../api/userApi';
import { UserContext } from '../../../../contexts/UserProvider';
import { UserContextInterface } from '../../../../interfaces';

const Wrapper = styled.div`
  & {
    .font-size-2 {
      font-size: 2rem;
    }
  }
`;

export const StyledInputPassword = styled(Input.Password)`
  & {
    border: none;
    border-bottom: solid 1px #d7d7d7;
    * {
      font-size: inherit;
    }
  }
`;

interface SignupWithEmailProps {
  setState?: React.Dispatch<React.SetStateAction<string>>;
}

export default function SigninWithEmail({ setState }: SignupWithEmailProps) {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const isAllInputReady = emailValue && setEmailValue;

  const { setUser } = useContext(UserContext) as UserContextInterface;

  const handleSubmit = async () => {
    if (isAllInputReady) {
      const payload = {
        email: emailValue,
        password: passwordValue,
      };
      try {
        const response = await login<'email'>(payload);
        if (!response.data?.success) {
          throw new Error('Dang nhap that bai');
        }
        localStorage.setItem(
          KEY_LOCAL_STORAGE_ACCESS_TOKEN,
          response.data.accessToken
        );
        const res = await getProfile();
        if (!res.data?.success) {
          throw new Error('Dang nhap that bai');
        }
        setUser(res.data.data);
        window.alert('dang nhap thanh cong!');
      } catch (e) {
        if (e instanceof Error) {
          window.alert(e.message);
        }
      }
    }
  };

  return (
    <Wrapper>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          {setState && (
            <div>
              <Button type="text" onClick={() => setState(SIGNIN_WITH_PHONE)}>
                <i className="fa-solid fa-angle-left"></i>
              </Button>
            </div>
          )}
          <Typography.Title level={3}>Đăng nhập bằng email</Typography.Title>
          <Typography.Text>
            Nhập email và mật khẩu tài khoản HACOM
          </Typography.Text>
        </div>
        <div>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <StyledInput
              className="font-size-2"
              placeholder="abc@gmail.com"
              value={emailValue}
              onChange={(event) => setEmailValue(event.target.value)}
            />
            <StyledInputPassword
              className="font-size-2"
              placeholder="Mật khẩu"
              value={passwordValue}
              onChange={(event) => setPasswordValue(event.target.value)}
            />
          </Space>
        </div>
        <StyledButton disabled={!isAllInputReady} onClick={handleSubmit}>
          Đăng nhập
        </StyledButton>
        <Button type="link">Quên mật khẩu?</Button>
      </Space>
    </Wrapper>
  );
}
