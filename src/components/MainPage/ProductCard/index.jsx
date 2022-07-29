// @ts-check
import {
  CheckOutlined,
  PhoneOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import { Card, Col, Grid, Row, Typography } from 'antd'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CartActionContext } from '../../../contexts/CartProvider'

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
`

const StyledCartIcon = styled.span`
  font-size: 2rem;
  cursor: pointer;
`

const StyledSkuCode = styled.span`
  font-size: 1rem;
  background-color: #f1f1f1;
  padding: 3px 5px;
}
`

const DonVi = styled.sup`
  font-size: 1.4rem;
`

const Rate = styled.span`
  color: #666;
  font-size: 1.2rem;
  font-weight: bold;
`

/**
 * @typedef {Object} ProductCardProps
 * @property {import("../../../hooks/useApi").Category['slug']} category
 * @property {import("../../../hooks/useApi").Product} product
 */

/**
 * @param {import("react").PropsWithChildren<ProductCardProps>} props
 * @returns
 */
export default function ProductCard({ category, product }) {
  const { addProduct } = useContext(CartActionContext)

  /**
   *
   * @param {import("../../../hooks/useApi").Product} product
   */
  function handleClickCartIcon(product) {
    addProduct(product)
  }

  const { xs } = Grid.useBreakpoint()

  return (
    product && (
      <StyledCard
        cover={
          <Link to={`/${category}/${product.sku}`}>
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
              src={`https://hacom.vn/media/lib/star_${product.rate
                .split('')
                .slice(1, -1)}.png`}
              alt=""
            />{' '}
            <Rate>{product.rate}</Rate>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <StyledSkuCode>MÃ: {product.sku}</StyledSkuCode>
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
              to={`/${category}/${product.sku}`}
              style={{ color: '#333333' }}
            >
              {product.name}
            </Link>
          </Typography.Title>
        </div>
        <div>
          <Typography.Text
            delete
            style={{ fontSize: '1.5rem', color: '#666666' }}
          >
            {product.maxPrice && (
              <>
                {product.maxPrice} <DonVi>₫</DonVi>
              </>
            )}
          </Typography.Text>{' '}
          {!xs && (
            <Typography.Text style={{ fontSize: '1.2rem', color: '#d82a29' }}>
              {product.discount}
            </Typography.Text>
          )}
        </div>{' '}
        <Typography.Text
          strong
          style={{ fontSize: '2.2rem', fontWeight: 'bold' }}
        >
          {product.price}
          <DonVi>₫</DonVi>
        </Typography.Text>
        <Row align="middle">
          <Col span={12}>
            <Typography.Text
              style={{
                color: product.action === 'Còn hàng' ? '#2cc067' : '#0074da',
              }}
            >
              {product.action === 'Còn hàng' ? (
                <CheckOutlined />
              ) : (
                <PhoneOutlined />
              )}
              {product.action}
            </Typography.Text>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            {product.action === 'Còn hàng' && (
              <StyledCartIcon onClick={() => handleClickCartIcon(product)}>
                <ShoppingCartOutlined />
              </StyledCartIcon>
            )}
          </Col>
        </Row>
      </StyledCard>
    )
  )
}
