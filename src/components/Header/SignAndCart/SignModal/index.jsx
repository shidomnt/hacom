import {
  Button,
  Col,
  Divider,
  Image,
  Input,
  Modal,
  Row,
  Space,
  Typography,
} from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CloseButton from './CloseButton';

const StyledModal = styled(Modal)`
  & {
    .ant-modal-content {
      border-radius: 16px;
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
      .ant-modal-close {
        top: -24px;
        right: -24px;
      }
      .ant-modal-body {
        padding: 0;
      }
      .modal-sign-icon {
        font-size: 40px;
        cursor: pointer;
      }
      .sign-modal-wrap-image {
        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;
        position: relative;
        background-color: #f2f6ff;
        display: flex;
        align-items: center;
        height: 100%;
        .sign-modal-float-text {
          .ant-typography {
            color: #3d5387;
          }
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          bottom: 30px;
          left: 0;
          right: 0;
        }
      }
    }
  }
`;

const StyledMainContent = styled.div`
  & {
    height: 100%;
    padding: 32px;
  }
`;

const StyledButton = styled(Button)`
  & {
    width: 100%;
    border-radius: 4px;
    background-color: #ed1b24;
    color: white;
    padding-top: 8px;
    padding-bottom: 8px;
    height: unset;
    font-size: 18px;
  }
`;

const StyledInput = styled(Input)`
  & {
    border: none;
    border-bottom: solid 1px #d7d7d7;
    font-size: 24px;
  }
`;

export default function SignModal({ visible, onCancel }) {
  return (
    <StyledModal
      visible={visible}
      onCancel={onCancel}
      title={null}
      footer={null}
      width={780}
      closeIcon={<CloseButton />}
    >
      <Row>
        <Col flex="auto">
          <StyledMainContent>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <Typography.Title style={{ margin: 0 }} level={4}>
                Xin chào
              </Typography.Title>
              <Typography.Text>Đăng nhập hoặc Tạo tài khoản</Typography.Text>
              <StyledInput placeholder="Số điện thoại" />
              <StyledButton>Tiếp tục</StyledButton>
              <div style={{ textAlign: 'center' }}>
                <Link to="/">Đăng nhập bằng email</Link>
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
          </StyledMainContent>
        </Col>
        <Col span={9}>
          <div className="sign-modal-wrap-image">
            <Image
              style={{ padding: '50px 46px' }}
              preview={false}
              src="/assets/img/bg-pop-login-phone.png"
            />
            <div className="sign-modal-float-text">
              <Typography.Text strong>Mua sắm tại HACOM</Typography.Text>
              <Typography.Text>Siêu ưu đãi mỗi ngày</Typography.Text>
            </div>
          </div>
        </Col>
      </Row>
    </StyledModal>
  );
}
