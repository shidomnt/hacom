import { CheckOutlined, PhoneOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Card, Col, Row, Spin, Typography } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledCard = styled(Card)`
  & {
    max-width: 258px;
    .ant-card-body {
      padding: 8px;
    }
  }
`

const SkuCode = styled.span`
  font-size: 10px;
  background-color: #f1f1f1;
  padding: 3px 5px;
`

const DonVi = styled.sup`
  font-size: 14px;
`

const apiUrl = 'http://localhost:4000/Laptop,Tablet,Mobile/LTMA083'

async function getProductById(id) {
  try {
    const response = await axios.get(apiUrl)
    return response
  } catch (e) {
    console.log('Loi khi goi API')
  }
}

export default function ProductCard({ sku }) {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    ;(async () => {
      const result = await getProductById('LTAU705')
      if (result) {
        console.log(result.data)
        setProduct(result.data)
      } else {
        setProduct(null)
      }
    })()
  }, [sku])

  return product ? (
    <StyledCard cover={<img src={product.imgSrc} />} bordered={false}>
      <Row>
        <Col span={12}>
          <img
            src={`https://hacom.vn/media/lib/star_${product.rate
              .split('')
              .slice(1, -1)}.png`}
            alt=""
          />{' '}
          {product.rate}
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <SkuCode>MÃ: {product.sku}</SkuCode>
        </Col>
      </Row>
      <Typography.Title
        level={5}
        style={{
          fontSize: '12px',
        }}
        ellipsis={{ rows: 3 }}
      >
        <Typography.Link href="#" style={{ color: '#333333' }}>
          {product.name}
        </Typography.Link>
      </Typography.Title>
      <Typography.Text delete style={{ fontSize: '15px', color: '#666666' }}>
        {product.maxPrice}
        <DonVi >₫</DonVi>
      </Typography.Text>{' '}
      <Typography.Text style={{ fontSize: '12px', color: '#d82a29' }}>
        {product.discount}
      </Typography.Text>{' '}
      <Typography.Text strong style={{ fontSize: '22px', fontWeight: 'bold' }}>
        {product.price}
        <DonVi >₫</DonVi>
      </Typography.Text>
      <Row>
        <Col span={12}>
          <Typography.Link
            style={{
              color: product.action === 'Còn hàng' ? '#2cc067' : '#0074da',
            }}
          >
            {product.action === 'Còn hàng' ? <CheckOutlined /> : <PhoneOutlined />}
            {product.action}
          </Typography.Link>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          {product.action === 'Còn hàng' && <ShoppingCartOutlined style={{ fontSize: '20px' }} />}
        </Col>
      </Row>
    </StyledCard>
  ) : (
    <Spin />
  )
}

