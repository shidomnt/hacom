// @ts-check
import { Divider, Grid, Space, Typography } from 'antd'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ProductContext } from '..'
import { caculateDiscountRate, formatNumberPriceToString } from '../../../utils'

const Wrapper = styled.div`
  & {
    border: 1px dashed #ddd;
    border-radius: 5px;
    padding: 16px 12px;
    .chip {
      background-color: #f5f5f5;
      padding: 2px 4px;
      border-radius: 2px;
      display: inline;
    }
    .price {
      color: #bf081f;
      display: inline;
      font-size: 2.7rem;
    }
    .max-price {
      font-size: 1.6rem;
    }
    .discount {
      color: #bf081f;
      font-size: 1.4rem;
    }
  }
`

export default function Price() {
  const { product } = useContext(ProductContext)

  const { xs } = Grid.useBreakpoint()

  return (
    <Wrapper>
      <Space direction={'vertical'}>
        <div>
          <Typography.Title className="price" level={4}>
            {formatNumberPriceToString(product.price)}
            <sup>₫</sup>
          </Typography.Title>
          {!xs && !!product.maxPrice && (
            <React.Fragment>
              <Divider type="vertical" />
              <Typography.Text className="max-price" delete>
                {formatNumberPriceToString(product.maxPrice)}
                <sup>₫</sup>
              </Typography.Text>
              <Divider type="vertical" />
              <Typography.Text className="discount">
                {`(Tiết kiệm ${caculateDiscountRate(product)}%)`}
              </Typography.Text>
            </React.Fragment>
          )}
        </div>
        <div>
          <div className="chip">{`Giá ${
            product.vat ? 'đã' : 'chưa'
          } có VAT`}</div>
          <Divider type="vertical" />
          <div className="chip">{product.baohanh}</div>
        </div>
      </Space>
    </Wrapper>
  )
}
