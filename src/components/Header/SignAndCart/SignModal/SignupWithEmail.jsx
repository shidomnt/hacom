import React from "react";
import { Space, Button, Typography } from "antd";
import styled from "styled-components";
import { StyledButton, StyledInput } from ".";
import { StyledInputPassword } from "./SigninWithEmail";
import { SIGNIN_WITH_PHONE } from "../../../../constant";

const Wrapper = styled.div`
  & {
    .font-size-1-6 {
      font-size: 1.6rem;
    }
    .signup-email-space {
    }
  }
`;

export default function SignupWithEmail({ setState }) {
  return (
    <Wrapper>
      <Space
        direction="vertical"
        size="middle"
        className="signup-email-space"
        style={{ width: "100%" }}
      >
        <div>
          <div>
            <Button type="text" onClick={() => setState(SIGNIN_WITH_PHONE)}>
              <i className="fa-solid fa-angle-left"></i>
            </Button>
          </div>
          <Typography.Title level={3}>Tạo tài khoản</Typography.Title>
        </div>
        <div>
          <Typography.Text>Vui lòng cho biết tên bạn</Typography.Text>
          <StyledInput className="font-size-1-6" placeholder="Tên bạn" />
        </div>
        <div>
          <Typography.Text>Email</Typography.Text>
          <StyledInput className="font-size-1-6" placeholder="Email" />
        </div>
        <div>
          <Typography.Text>Đặt mật khẩu</Typography.Text>
          <StyledInputPassword
            className="font-size-1-6"
            placeholder="Mật khẩu"
          />
        </div>
        <div>
          <Typography.Text>Nhập lại mật khẩu</Typography.Text>
          <StyledInputPassword
            className="font-size-1-6"
            placeholder="Nhập lại mật khẩu"
          />
        </div>
        <StyledButton>Tạo tài khoản</StyledButton>
      </Space>
    </Wrapper>
  );
}
