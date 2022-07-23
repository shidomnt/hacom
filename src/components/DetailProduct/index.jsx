import { Col, Divider, Row, Space, Typography } from 'antd';
import React, { createContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useApi from '../../hooks/useApi';
import CustomBreadcrumb from '../CustomBreadcrumb';
import Loading from '../Loading';
import DetailInfo from './DetailInfo';
import SlideGallery from './SlideGallery';
import StaticInfo from './StaticInfo';
import Review from './Review';
import ThongSoKiThuat from './ThongSoKiThuat';

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
        navigate('/');
      }
    })();
  }, [getProduct, category, id, navigate]);

  return (
    <div style={{ backgroundColor: '#f4f4f4' }}>
      <div className="container">
        {product ? (
          <ProductContext.Provider value={{ product }}>
            <CustomBreadcrumb />
            <StyledDetailProductWrapper>
              <Typography.Title level={4}>{product.name}</Typography.Title>
              <Divider />
              <Row gutter={16}>
                <Col span={8}>
                  <SlideGallery />
                </Col>
                <Col span={10}>
                  <DetailInfo />
                </Col>
                <Col span={6}>
                  <StaticInfo />
                </Col>
              </Row>
            </StyledDetailProductWrapper>
            <Row gutter={16}>
              <Col span={15}>
                <StyledDetailProductWrapper>
                  <Review />
                </StyledDetailProductWrapper>
              </Col>
              <Col span={9}>
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
    </div>
  );
}

export { ProductContext };
