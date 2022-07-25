import { Col, Image, Row, Typography } from 'antd';
import React, { useDeferredValue, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import useApi from '../../../../hooks/useApi';
import EmptySearch from './EmptySearch';

const autoCompleteSlideIn = keyframes`
  0% {transform: translateY(10%);opacity: 0;}
100% {transform: translateY(0%); opacity: 1;}
`;

const Wrapper = styled.div`
  & {
    position: absolute;
    background-color: white;
    border: 1px solid #ddd;
    left: 0;
    right: 0;
    top: calc(100% + 6px);
    padding: 10px;
    z-index: 99;
    border-radius: 2px;
    font-size: 12px;
    animation: ${autoCompleteSlideIn} 0.2s linear;
    max-height: 300px;
    overflow-y: auto;
  }
`;

export default function AutoComplete({ searchValue }) {
  const [autoCompleteProducts, setAutoCompleteProducts] = useState([]);

  const { getAutoCompleteProduct } = useApi();

  const deferredSearchValue = useDeferredValue(searchValue);

  useEffect(() => {
    (async () => {
      const response = await getAutoCompleteProduct({
        searchValue: deferredSearchValue,
        limit: 6
      });
      if (response) {
        setAutoCompleteProducts(response.data);
      } else {
        setAutoCompleteProducts([]);
      }
    })();
  }, [deferredSearchValue]);

  return (
    <Wrapper>
      {!!autoCompleteProducts.length ? (
        autoCompleteProducts.map((product) => (
          <Row key={product.id} gutter={[6, 6]}>
            <Col span={3}>
              <Image src={product.imgSrc} alt="" />
            </Col>
            <Col span={21}>
              <div>
                <Typography.Text>{product.name}</Typography.Text>
              </div>
              <Typography.Text>
                {product.price}
                <sup>₫</sup>
              </Typography.Text>
            </Col>
          </Row>
        ))
      ) : (
        <EmptySearch />
      )}
    </Wrapper>
  );
}
