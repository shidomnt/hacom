import { Col, Divider, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useApi from "../../hooks/useApi";
import CustomBreadcrumb from "../CustomBreadcrumb";
import Loading from "../Loading";
import DetailInfo from "./DetailInfo";
import SlideGallery from "./SlideGallery";
import StaticInfo from "./StaticInfo";

const StyledDetailProductWrapper = styled.div`
  box-shadow: 0 0 4px 0 rgb(152 165 185 / 20%);
  border-radius: 3px;
  padding: 12px 10px;
  background-color: white;
`;

export default function DetailProduct() {
  const [product, setProduct] = useState(null);

  const { category, id } = useParams();

  const { getProduct } = useApi();

  useEffect(() => {
    (async () => {
      const response = await getProduct(category, id);
      if (response) {
        setProduct(response.data);
      } else {
        setProduct(null);
      }
    })();
  }, [getProduct, category, id]);

  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <div className="container">
        {product ? (
          <>
            <CustomBreadcrumb />
            <StyledDetailProductWrapper>
              <Typography.Title level={4}>
                {product.name}
              </Typography.Title>
              <Divider style={{ margin: '12px 0 6px'}} />
              <Row gutter={16}>
                <Col span={8}>
                  <SlideGallery gallery={[product.imgSrc, ...product.gallery]} />
                </Col>
                <Col span={10}>
                  <DetailInfo product={product} />
                </Col>
                <Col span={6}>
                  <StaticInfo />
                </Col>
              </Row>
            </StyledDetailProductWrapper>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
