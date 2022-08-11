import React, { useContext, useState } from 'react';
import { Space, Button, Typography, Input } from 'antd';
import styled from 'styled-components';
import { StyledButton, StyledInput } from '.';
import { SIGNIN_WITH_PHONE } from '../../../../constant';
import { UserActionContext } from '../../../../contexts/UserProvider';
import { UserActionContextInterface } from '../../../../interfaces';
import { ModalToggleVisibleContext } from '..';

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

  const { login } = useContext(UserActionContext) as UserActionContextInterface;

  const setModalVisible = useContext(ModalToggleVisibleContext);

  const handleSubmit = () => {
    if (isAllInputReady) {
      const payload = {
        email: emailValue,
        password: passwordValue,
      };
      login(payload, () => {
        if (setModalVisible) {
          setModalVisible(false);
        }
      });
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
