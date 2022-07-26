import { Button, Col, Row, Space, Typography } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ProductContext } from '..';
import { CartActionContext } from '../../../contexts/CartProvider';
import InputQuantify from './InputQuantify';

const Wrapper = styled.div`
  & {
    .ant-input-number-group-wrapper {
      use-select: none;
      .ant-input-number {
        max-width: 40px;
      }
    }
    .input-label {
      font-size: 15px;
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

const MIN_SOLUONG = 1;
const MAX_SOLUONG = 99;

export default function ThanhToan() {
  const [soluong, setSoluong] = useState(1);

  const { product } = useContext(ProductContext);
  const { addProduct } = useContext(CartActionContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (soluong < MIN_SOLUONG) {
      setSoluong(MIN_SOLUONG);
    }
    if (soluong > MAX_SOLUONG) {
      setSoluong(MAX_SOLUONG);
    }
  }, [soluong]);

  const handleAddProductToCart = (product, soluong, redirect = false) => {
    addProduct(product, soluong);
    if (redirect) {
      navigate('/cart');
    }
  };

  return (
    <Wrapper>
      <Space direction="vertical" size="middle">
        <Space size="middle" direction="horizontal">
          <Typography.Text className="input-label" strong>
            Số lượng:{' '}
          </Typography.Text>
          <InputQuantify
            min={MIN_SOLUONG}
            max={MAX_SOLUONG}
            value={soluong}
            onChange={(value) => setSoluong(value)}
            controls={false}
            onClickMinus={() => setSoluong((prev) => prev - 1)}
            onClickAdd={() => setSoluong((prev) => prev + 1)}
          />
          <Button onClick={() => handleAddProductToCart(product, soluong)}>
            <Typography.Text strong>
              <i className="fa-solid fa-cart-plus"></i> Thêm vào giỏ hàng
            </Typography.Text>
          </Button>
        </Space>
        <Row gutter={[12, 12]} className="button-group">
          <Col span={24}>
            <StyledButton onClick={() => handleAddProductToCart(product, soluong, true)} className="primary">
              <div>
                <Typography.Text strong>Đặt mua ngay</Typography.Text>
              </div>
              <Typography.Text type="secondary">
                Giao hàng tận nơi nhanh chóng
              </Typography.Text>
            </StyledButton>
          </Col>
          <Col span={12}>
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
          <Col span={12}>
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
      </Space>
    </Wrapper>
  );
}
