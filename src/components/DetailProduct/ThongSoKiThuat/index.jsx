// @ts-check
import { Col, Divider, Row, Typography } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ProductContext } from '../'

const Wrapper = styled.div`
  & {
    font-size: 1.2rem;
    .ant-typography {
      margin: 0;
    }
    .text-center {
      text-align: center;
    }
    .row-wrapper {
      padding: 6px 8px;
      &:nth-child(2n-1) {
        background-color: #f5f5f5;
      }
    }
  }
`

export default function ThongSoKiThuat() {
  const [isPC, setIsPC] = useState(false)
  const { product } = useContext(ProductContext)

  useEffect(() => {
    const pattern = /^PC/
    if (pattern.test(product.sku)) {
      setIsPC(true)
    } else {
      setIsPC(false)
    }
  }, [product])

  return (
    <Wrapper>
      <Typography.Title level={4}>Thông số kỹ thuật</Typography.Title>
      {!!Object.keys(product.tskt).length && (
        <div>
          <Divider type="horizontal" />
          {isPC && (
            <Row gutter={6}>
              <Col span={19}>
                <Typography.Title className="text-center" level={5}>
                  Tên sản phẩm
                </Typography.Title>
              </Col>
              <Col span={5}>
                <Typography.Title level={5}>Bảo hành</Typography.Title>
              </Col>
            </Row>
          )}
          {Object.keys(product.tskt)
            .slice(0, 16)
            .map((thongso) => (
              <div key={thongso} className="row-wrapper">
                {isPC ? (
                  <Row gutter={6}>
                    <Col span={19}>
                      <Typography.Text strong>{thongso}</Typography.Text>
                    </Col>
                    <Col span={5}>
                      <Typography.Text>{product.tskt[thongso]}</Typography.Text>
                    </Col>
                  </Row>
                ) : (
                  <Row gutter={6}>
                    <Col span={8}>
                      <Typography.Text strong>{thongso}</Typography.Text>
                    </Col>
                    <Col span={16}>
                      <Typography.Text>{product.tskt[thongso]}</Typography.Text>
                    </Col>
                  </Row>
                )}
              </div>
            ))}
        </div>
      )}
    </Wrapper>
  )
}
