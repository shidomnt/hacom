import { Col, Empty, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { DEFAULT_PAGE_SIZE } from '../../../constant';
import useApi from '../../../hooks/useApi';
import { Product, ProductQuery } from '../../../interfaces';
import { sortProductHandler } from '../../../utils';
import Loading from '../../Loading';
import ProductCard from '../../MainPage/ProductCard';
import TopFilter from './FilterAndSort';

const ListProductWrapper = styled.div`
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
  const [products, setProducts] = useState<Array<Product> | null>(null);

  const [searchParams] = useSearchParams();

  const { category } = useParams();

  const { getProductsByCategory } = useApi();

  useEffect(() => {
    if (category) {
      (async () => {
        const filterObj: Partial<ProductQuery> = {};
        const stockStatusQuery = searchParams.get('stockStatus');
        if (stockStatusQuery) {
          filterObj.stockStatus = stockStatusQuery;
        }
        const priceRangeQuery = searchParams.get('priceRange');
        if (priceRangeQuery) {
          filterObj.priceRange = priceRangeQuery;
        }
        const response = await getProductsByCategory(category, {
          page: Number(searchParams.get('page') ?? 1),
          limit: DEFAULT_PAGE_SIZE,
          ...filterObj,
        });
        if (response) {
          setProducts(response.data);
        } else {
          setProducts([]);
        }
      })();
    }
  }, [getProductsByCategory, category, searchParams]);

  if (!products) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <TopFilter />
      {!!products.length && category ? (
        <ListProductWrapper>
          <Row>
            {products
              .sort(sortProductHandler?.[searchParams.get('sort') ?? 'default'])
              .map((product) => (
                <Col
                  span={6}
                  xxl={6}
                  xl={6}
                  lg={8}
                  md={8}
                  sm={12}
                  xs={12}
                  key={product.id}
                >
                  <div className="product-by-category-card-wrap">
                    <ProductCard category={category} product={product} />
                  </div>
                </Col>
              ))}
          </Row>
        </ListProductWrapper>
      ) : (
        <Empty description="Không có sản phẩm nào phù hợp :(" />
      )}
    </React.Fragment>
  );
}
