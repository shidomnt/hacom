import { Button, Col, Row, Typography } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ProductContext } from '..';
import { CartActionContext } from '../../../contexts/CartProvider';
import InputQuantify from './InputQuantify';
import { MAX_SOLUONG, MIN_SOLUONG } from '../../../constant';
import {
  CartActionContextInterface,
  Product,
  ProductContextInterface,
} from '../../../interfaces';

const Wrapper = styled.div`
  & {
    margin: 8px 0;
    .ant-input-number-group-wrapper {
      use-select: none;
      .ant-input-number {
        max-width: 40px;
      }
    }
    .input-label {
      font-size: 1.5rem;
    }
  }
`;

const StyledButton = styled.button`
  & {
    * {
      color: inherit !important;
    }
    cursor: pointer;
    width: 100%;
    border: none;
    border-radius: 4px;
    padding: 16px 0;
    color: white;
    .ant-typography {
      strong {
        text-transform: uppercase;
      }
    }
  }
  &.primary {
    background-color: #ed1b24;
  }
  &.secondary {
    background-color: #2b7cea;
  }
`;

export default function ThanhToan() {
  const [quantify, setQuantify] = useState(1);

  const { product } = useContext(ProductContext) as ProductContextInterface;
  const { addProduct } = useContext(
    CartActionContext
  ) as CartActionContextInterface;

  const navigate = useNavigate();

  useEffect(() => {
    if (!quantify) {
      setQuantify(1);
    }
  }, [quantify]);

  const handleAddProductToCart = (
    product: Product,
    quantify: number,
    redirect: boolean = false
  ) => {
    addProduct(product, quantify);
    if (redirect) {
      navigate('/cart');
    }
  };

  return (
    <Wrapper>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Row align="middle" gutter={[16, 16]}>
            <Col span={5} xxl={5} xl={5} lg={5} md={5} sm={5} xs={0}>
              <Typography.Text className="input-label" strong>
                Số lượng:{' '}
              </Typography.Text>
            </Col>
            <Col span={7} xxl={7} xl={7} lg={7} md={7} sm={7} xs={9}>
              <InputQuantify
                value={quantify}
                min={MIN_SOLUONG}
                max={MAX_SOLUONG}
                onChange={(value) => setQuantify(value)}
                onClickMinus={() =>
                  setQuantify((prev) => Math.max(prev - 1, MIN_SOLUONG))
                }
                onClickAdd={() =>
                  setQuantify((prev) => Math.min(prev + 1, MAX_SOLUONG))
                }
              />
            </Col>
            <Col span={12} xxl={12} xl={12} lg={12} md={12} sm={12} xs={15}>
              <Button onClick={() => handleAddProductToCart(product, quantify)}>
                <Typography.Text strong>
                  <i className="fa-solid fa-cart-plus"></i> Thêm vào giỏ hàng
                </Typography.Text>
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[16, 16]} className="button-group">
            <Col span={24}>
              <StyledButton
                onClick={() => handleAddProductToCart(product, quantify, true)}
                className="primary"
              >
                <div>
                  <Typography.Text strong>Đặt mua ngay</Typography.Text>
                </div>
                <Typography.Text type="secondary">
                  Giao hàng tận nơi nhanh chóng
                </Typography.Text>
              </StyledButton>
            </Col>
            <Col span={12} xxl={12} xl={12} lg={24} md={12} sm={12} xs={0}>
              <StyledButton className="secondary">
                <div>
                  <Typography.Text strong>
                    Trả góp qua thẻ visa, master,...
                  </Typography.Text>
                </div>
                <Typography.Text type="secondary">
                  Chỉ từ 1.666.500<sup>₫</sup>/ tháng (6 tháng)
                </Typography.Text>
              </StyledButton>
            </Col>
            <Col span={12} xxl={12} xl={12} lg={24} md={12} sm={12} xs={0}>
              <StyledButton className="secondary">
                <div>
                  <Typography.Text strong>
                    Trả góp hồ sơ duyệt 15 phút
                  </Typography.Text>
                </div>
                <Typography.Text type="secondary">
                  Chỉ từ 1.666.500<sup>₫</sup>/ tháng (6 tháng)
                </Typography.Text>
              </StyledButton>
            </Col>
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
}
