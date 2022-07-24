import {
  CheckOutlined,
  PhoneOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Space, Typography } from "antd";
import React, { useContext } from "react";
import styled from "styled-components";
import { useSwiper } from "swiper/react";
import { Link } from "react-router-dom";
import { CartActionContext } from "../../../contexts/CartProvider";

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

const StyledCartIcon = styled.span`
  font-size: 20px;
  cursor: pointer;
`;

const StyledSkuCode = styled.span`
font-size: 10px;
  background-color: #f1f1f1;
  padding: 3px 5px;
}
`;

const DonVi = styled.sup`
  font-size: 14px;
`;

const Rate = styled.span`
  color: #666;
  font-size: 12px;
  font-weight: bold;
`;

export default function ProductCard({ category, product }) {
  const swiper = useSwiper();
  
  const { addProduct } = useContext(CartActionContext);

  function handleMouseEnter() {
    swiper.autoplay.stop();
  }

  function handleMouseLeave() {
    swiper.autoplay.start();
  }

  function handleClickCartIcon(product) {
    addProduct(product);
  }

  return product && (
    <StyledCard
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      cover={
        <Link  to={`/${category}/${product.sku}`}>
          <img
            style={{ width: "100%", aspectRatio: 1 / 1 }}
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
              .split("")
              .slice(1, -1)}.png`}
            alt=""
          />{" "}
          <Rate>{product.rate}</Rate>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <StyledSkuCode>MÃ: {product.sku}</StyledSkuCode>
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
          <Link  to={`/${category}/${product.sku}`} style={{ color: "#333333" }}>
            {product.name}
          </Link>
        </Typography.Title>
      </div>
      <div>
        <Typography.Text delete style={{ fontSize: "15px", color: "#666666" }}>
          {product.maxPrice && (
            <>
              {product.maxPrice} <DonVi>₫</DonVi>
            </>
          )}
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
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
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
            <StyledCartIcon onClick={() => handleClickCartIcon(product)}>
              <ShoppingCartOutlined />
            </StyledCartIcon>
          )}
        </Col>
      </Row>
    </StyledCard>
  );
}
