import React, { useContext, useState } from 'react';
import { Space, Button, Typography, Input, Row } from 'antd';
import styled from 'styled-components';
import { StyledButton, StyledInput } from '.';
import { UserActionContext } from '../../../../contexts/UserProvider';
import {
  ModalSignContextInterface,
  UserActionContextInterface,
} from '../../../../interfaces';
import { ModalSignContext } from '..';
import { SIGN_STATE } from '../../../../constant';

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
  setState?: React.Dispatch<React.SetStateAction<SIGN_STATE>>;
}

export default function SigninWithEmail({ setState }: SignupWithEmailProps) {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const isAllInputReady = emailValue && setEmailValue;

  const { login } = useContext(UserActionContext) as UserActionContextInterface;

  const { setModalVisible } = useContext(
    ModalSignContext
  ) as ModalSignContextInterface;

  const handleSubmit = () => {
    if (isAllInputReady) {
      const payload = {
        email: emailValue,
        password: passwordValue,
      };
      login(payload, () => {
        setModalVisible(false);
      });
    }
  };

  return (
    <Wrapper>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
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
        <Row justify="space-between">
          <Button type="link">Quên mật khẩu?</Button>
          <Typography.Text>
            Chưa có tài khoản?{' '}
            <Button
              style={{ padding: 0 }}
              type="link"
              onClick={() => setState && setState(SIGN_STATE.SIGNUP_WITH_EMAIL)}
            >
              Đăng kí
            </Button>{' '}
            ngay
          </Typography.Text>
        </Row>
      </Space>
    </Wrapper>
  );
}
