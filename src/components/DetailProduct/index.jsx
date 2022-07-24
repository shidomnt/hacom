import { Col, Divider, Row, Space, Typography } from "antd";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import useApi from "../../hooks/useApi";
import CustomBreadcrumb from "../CustomBreadcrumb";
import Loading from "../Loading";
import DetailInfo from "./DetailInfo";
import SlideGallery from "./SlideGallery";
import StaticInfo from "./StaticInfo";
import Review from "./Review";
import ThongSoKiThuat from "./ThongSoKiThuat";

const StyledDetailProductWrapper = styled.div`
  & {
    box-shadow: 0 0 4px 0 rgb(152 165 185 / 20%);
    border-radius: 3px;
    padding: 12px 10px;
    background-color: white;
    margin-bottom: 16px;
    .ant-divider-horizontal {
      margin: 12px 0;
    }
  }
`;

const ProductContext = createContext(null);

export default function DetailProduct() {
  const [product, setProduct] = useState(null);

  const { category, id } = useParams();

  const navigate = useNavigate();

  const { getProduct } = useApi();

  useEffect(() => {
    (async () => {
      const response = await getProduct(category, id);
      if (response) {
        setProduct(response.data);
      } else {
        setProduct(null);
        navigate("/");
      }
    })();
  }, [getProduct, category, id, navigate]);

  return (
    <div className="container">
      {product ? (
        <ProductContext.Provider value={{ product }}>
          <CustomBreadcrumb />
          <StyledDetailProductWrapper>
            <Typography.Title level={4}>{product.name}</Typography.Title>
            <Divider />
            <Row gutter={16}>
              <Col span={8} xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
                <Row gutter={[12, 12]}>
                  <Col span={24}>
                    <SlideGallery />
                  </Col>
                  <Col span={0} xxl={0} xl={0} lg={0} md={24}>
                    <StaticInfo />
                  </Col>
                </Row>
              </Col>
              <Col span={16} xxl={16} xl={16} lg={16} md={16} sm={24} xs={24}>
                <Row gutter={16}>
                  <Col
                    span={15}
                    xxl={15}
                    xl={15}
                    lg={15}
                    md={24}
                    sm={24}
                    xs={24}
                  >
                    <DetailInfo />
                  </Col>
                  <Col span={9} xxl={9} xl={9} lg={9} md={0} sm={24} xs={24}>
                    <StaticInfo />
                  </Col>
                </Row>
              </Col>
            </Row>
          </StyledDetailProductWrapper>
          <Row gutter={16}>
            <Col
              span={15}
              xxl={{ span: 15, order: 2 }}
              xl={{ span: 15, order: 2 }}
              lg={{ span: 15, order: 2 }}
              md={{ span: 15, order: 2 }}
              sm={{ span: 24, order: 2 }}
              xs={{ span: 24, order: 2 }}
            >
              <StyledDetailProductWrapper>
                <Review />
              </StyledDetailProductWrapper>
            </Col>
            <Col
              span={9}
              xxl={{ span: 9, order: 2 }}
              xl={{ span: 9, order: 2 }}
              lg={{ span: 9, order: 2 }}
              md={{ span: 9, order: 2 }}
              sm={{ span: 24, order: 1 }}
              xs={{ span: 24, order: 1 }}
            >
              <StyledDetailProductWrapper>
                <ThongSoKiThuat />
              </StyledDetailProductWrapper>
            </Col>
          </Row>
        </ProductContext.Provider>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export { ProductContext };
