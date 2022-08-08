import {
  CheckOutlined,
  PhoneOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { Card, Col, Grid, Row, Typography } from 'antd';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CartActionContext } from '../../../contexts/CartProvider';
import {
  calculateDiscountRate,
  formatNumberPriceToString,
} from '../../../utils';
import { Category, Product } from '../../../interfaces';

const StyledCard = styled(Card)`
  & {
    /* max-width: 258px; */
    .ant-card-body {
      padding: 8px;
      height: 186px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      .titleContainer {
        flex: 1;
      }
    }
  }
`;

const StyledCartIcon = styled.span`
  font-size: 2rem;
  cursor: pointer;
  padding: 2px 8px;
`;

const StyledSkuCode = styled.span`
  font-size: 1rem;
  background-color: #f1f1f1;
  padding: 3px 5px;
}
`;

const DonVi = styled.sup`
  font-size: 1.4rem;
`;

const Rate = styled.span`
  color: #666;
  font-size: 1.2rem;
  font-weight: bold;
`;

interface ProductCardProps {
  category: Category['slug'];
  product: Product;
}

export default function ProductCard({ category, product }: ProductCardProps) {
  const cartActionContext = useContext(CartActionContext);
  const { xs } = Grid.useBreakpoint();

  if (!cartActionContext) {
    return null;
  }

  const { addProduct } = cartActionContext;

  function handleClickCartIcon(product: Product) {
    addProduct(product);
  }

  return (
    product && (
      <StyledCard
        cover={
          <Link to={`/${category}/${product.id}`}>
            <img
              // @ts-ignore
              style={{ width: '100%', aspectRatio: 1 / 1 }}
              src={product.imgSrc}
              alt=""
            />
          </Link>
        }
        bordered={false}
      >
        <Row>
          <Col span={12}>
            <img
              src={`https://hacom.vn/media/lib/star_${product.rate}.png`}
              alt=""
            />{' '}
            <Rate>({product.rate})</Rate>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <StyledSkuCode>MÃ: {product.id}</StyledSkuCode>
          </Col>
        </Row>
        <div className="titleContainer">
          <Typography.Title
            level={5}
            style={{
              fontSize: '1.2rem',
            }}
            ellipsis={{ rows: xs ? 2 : 3 }}
          >
            <Link
              to={`/${category}/${product.id}`}
              style={{ color: '#333333' }}
            >
              {product.name}
            </Link>
          </Typography.Title>
        </div>
        {!!product.maxPrice && (
          <div>
            <Typography.Text
              delete
              style={{ fontSize: '1.5rem', color: '#666666' }}
            >
              {
                <span>
                  {formatNumberPriceToString(product.maxPrice)} <DonVi>₫</DonVi>
                </span>
              }
            </Typography.Text>{' '}
            {!xs && (
              <Typography.Text style={{ fontSize: '1.2rem', color: '#d82a29' }}>
                {`(Tiết kiệm ${calculateDiscountRate(product)}%)`}
              </Typography.Text>
            )}
          </div>
        )}
        <Typography.Text
          strong
          style={{ fontSize: '2.2rem', fontWeight: 'bold' }}
        >
          {formatNumberPriceToString(product.price)}
          <DonVi>₫</DonVi>
        </Typography.Text>
        <Row align="middle">
          <Col span={12}>
            <Typography.Text
              style={{
                color: product.stockStatus ? '#2cc067' : '#0074da',
              }}
            >
              {product.stockStatus ? <CheckOutlined /> : <PhoneOutlined />}{' '}
              {product.stockStatus ? 'Còn hàng' : 'Liên hệ'}
            </Typography.Text>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            {product.stockStatus && (
              <StyledCartIcon onClick={() => handleClickCartIcon(product)}>
                <ShoppingCartOutlined />
              </StyledCartIcon>
            )}
          </Col>
        </Row>
      </StyledCard>
    )
  );
}
