import {
  CheckOutlined,
  PhoneOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Space, Spin, Typography } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import style from "./style.module.css";
import useApi from "../../../hooks/useApi";
import { useSwiper } from "swiper/react";

const StyledCard = styled(Card)`
  & {
    /* max-width: 258px; */
    .ant-card-body {
      padding: 8px;
      height: 186px;
      display: flex;
      flex-direction: column;
      .titleContainer {
        flex: 1;
      }
    }
  }
`;

const DonVi = styled.sup`
  font-size: 14px;
`;

export default function ProductCard({ category, sku }) {
  const [product, setProduct] = useState(null);

  const { getProduct } = useApi();

  const swiper = useSwiper();

  useEffect(() => {
    if (sku) {
      (async () => {
        const result = await getProduct(category, sku);
        if (result) {
          setProduct(result.data);
        } else {
          setProduct(null);
        }
      })();
    }
  }, [sku, getProduct]);

  function handleMouseEnter() {
    swiper.autoplay.stop();
  }

  function handleMouseLeave() {
    swiper.autoplay.start();
  }

  return product ? (
    <StyledCard
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      cover={
        <a href="#">
          <img
            style={{ width: "100%", aspectRatio: 1 / 1 }}
            src={product.imgSrc}
          />
        </a>
      }
      bordered={false}
    >
      <Row>
        <Col span={12}>
          <img
            src={`https://hacom.vn/media/lib/star_${product.rate
              .split("")
              .slice(1, -1)}.png`}
            alt=""
          />{" "}
          {product.rate}
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <span className={style.skuCode}>MÃ: {product.sku}</span>
        </Col>
      </Row>
      <div className="titleContainer">
        <Typography.Title
          level={5}
          style={{
            fontSize: "12px",
          }}
          ellipsis={{ rows: 3 }}
        >
          <Typography.Link href="#" style={{ color: "#333333" }}>
            {product.name}
          </Typography.Link>
        </Typography.Title>
      </div>
      <div>
        <Typography.Text delete style={{ fontSize: "15px", color: "#666666" }}>
          {product.maxPrice}
          <DonVi>₫</DonVi>
        </Typography.Text>{" "}
        <Typography.Text style={{ fontSize: "12px", color: "#d82a29" }}>
          {product.discount}
        </Typography.Text>
      </div>{" "}
      <Typography.Text strong style={{ fontSize: "22px", fontWeight: "bold" }}>
        {product.price}
        <DonVi>₫</DonVi>
      </Typography.Text>
      <Row style={{ height: "30px" }}>
        <Col span={12}>
          <div style={{display: 'flex', alignItems: 'center', height: '100%'}}>
            <Typography.Text
              style={{
                color: product.action === "Còn hàng" ? "#2cc067" : "#0074da",
              }}
            >
              <Space>
                {product.action === "Còn hàng" ? (
                  <CheckOutlined />
                ) : (
                  <PhoneOutlined />
                )}
                {product.action}
              </Space>
            </Typography.Text>
          </div>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          {product.action === "Còn hàng" && (
            <span className={style.cartIcon}>
              <ShoppingCartOutlined />
            </span>
          )}
        </Col>
      </Row>
    </StyledCard>
  ) : (
    <Spin />
  );
}
