import { Button, Col, Image, Input, Modal, Row, Typography } from 'antd';
import React, { useContext } from 'react';
import styled from 'styled-components';
import CloseButton from './CloseButton';
import SignupWithEmail from './SignupWithEmail';
import SigninWithEmail from './SigninWithEmail';
import SigninWithPhoneNumber from './SigninWithPhoneNumber';
import { ModalSignContext } from '..';
import { ModalSignContextInterface } from '../../../../interfaces';
import { SIGN_STATE } from '../../../../constant';

const StyledModal = styled(Modal)`
  & {
    .ant-modal-content {
      border-radius: 16px;
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
      .ant-modal-close {
        top: -24px;
        right: -24px;
        .ant-modal-close-x {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .ant-modal-body {
        padding: 0;
      }
      .modal-sign-icon {
        font-size: 4rem;
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

export const StyledButton = styled(Button)`
  & {
    width: 100%;
    border-radius: 4px;
    background-color: #ed1b24;
    color: white;
    padding-top: 8px;
    padding-bottom: 8px;
    height: unset;
    font-size: 1.8rem;
    font-weight: 500;
  }
`;

export const StyledInput = styled(Input)`
  & {
    border: none;
    border-bottom: solid 1px #d7d7d7;
    font-size: 2.4rem;
  }
`;

interface SignModalProps {
  visible: boolean;
  onCancel: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export default function SignModal({ visible, onCancel }: SignModalProps) {
  const { signState, setSignState } = useContext(ModalSignContext) as ModalSignContextInterface;

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
        <Col span={15}>
          <StyledMainContent>
            {signState === SIGN_STATE.SIGNIN_WITH_PHONE && (
              <SigninWithPhoneNumber setState={setSignState} />
            )}
            {signState === SIGN_STATE.SIGNIN_WITH_EMAIL && (
              <SigninWithEmail setState={setSignState} />
            )}
            {signState === SIGN_STATE.SIGNUP_WITH_EMAIL && (
              <SignupWithEmail setState={setSignState} />
            )}
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
