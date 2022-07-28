// @ts-check
import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { initProducts } from '../../../constant';
import useApi from '../../../hooks/useApi';
import Loading from '../../Loading';
import ProductCard from '../../MainPage/ProductCard';
import TopFilter from './TopFilter';

const Wrapper = styled.div`
  & {
    background-color: white;
    border-bottom: 1px solid #d7d7d7;
    .product-by-category-card-wrap {
      border-right: 1px solid #d7d7d7;
      border-top: 1px solid #d7d7d7;
    }
  }
`;

export default function ListProduct() {
  const [products, setProducts] = useState(initProducts);
  const [filters, setFilters] = useState([]);

  const { category } = useParams();

  const { getProductsByCategory } = useApi();

  useEffect(() => {
    (async () => {
      const response = await getProductsByCategory(category, '?_limit=8');
      if (response) {
        setProducts(response.data);
      } else {
        setProducts([]);
      }
    })();
  }, [getProductsByCategory, category]);

  return (
    <React.Fragment>
      <TopFilter setFilters={setFilters} />
      {!!products.length ? (
        <Wrapper>
          <Row>
            {products.map((product) => (
              <Col span={6} key={product.id}>
                <div className="product-by-category-card-wrap">
                  <ProductCard category={category} product={product} />
                </div>
              </Col>
            ))}
          </Row>
        </Wrapper>
      ) : (
        <Loading />
      )}
    </React.Fragment>
  );
}
