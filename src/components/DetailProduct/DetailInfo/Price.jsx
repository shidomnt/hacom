import { Divider, Space, Typography } from "antd";
import React, { useContext } from "react";
import styled from "styled-components";
import { ProductContext } from "..";

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
      font-size: 27px;
    }
    .max-price {
      font-size: 16px;
    }
    .discount {
      color: #bf081f;
      font-size: 14px;
    }
  }
`;

export default function Price() {

  const { product } = useContext(ProductContext);

  return (
    <Wrapper>
      <Space direction={'vertical'}>
        <div>
          <Typography.Title className="price" level={4}>
            {product.price}
            <sup>₫</sup>
          </Typography.Title>
          <Divider type="vertical" />
          <Typography.Text className="max-price" delete>
            {product.maxPrice}
            <sup>₫</sup>
          </Typography.Text>
          <Divider type="vertical" />
          <Typography.Text className="discount">
            {product.discount}
          </Typography.Text>
        </div>
        <div>
          <div className="chip">{product.vat}</div>
          <Divider type="vertical" />
          <div className="chip">{product.baohanh}</div>
        </div>
      </Space>
    </Wrapper>
  );
}
