import { Col, Image, Row, Typography } from 'antd';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { AUTO_COMPLETE_SIZE, initProducts } from '../../../../constant';
import useApi from '../../../../hooks/useApi';
import { formatNumberPriceToString } from '../../../../utils';
import EmptySearch from './EmptySearch';

const autoCompleteSlideIn = keyframes`
  0% {transform: translateY(10%);opacity: 0;}
100% {transform: translateY(0%); opacity: 1;}
`;

const Wrapper = styled.div`
  & {
    position: relative;
  }
`;

const AutoCompleteWrapper = styled.div`
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
    font-size: 1.2rem;
    border-radius: 4px;
    &::-webkit-scrollbar {
      display: none;
    }
    animation: ${autoCompleteSlideIn} 0.2s linear;
    max-height: 300px;
    overflow-y: auto;
    .autocomplete-row-wrap:not(:last-child) {
      margin-bottom: 12px;
      border-bottom: 1px solid #f4f4f4;
    }
  }
`;

interface AutoCompleteProps {
  visible: boolean;
  searchValue: string;
}

export default function AutoComplete({
  visible,
  searchValue,
  children,
}: PropsWithChildren<AutoCompleteProps>) {
  const [autoCompleteProducts, setAutoCompleteProducts] =
    useState(initProducts);

  const { getAutoCompleteProduct } = useApi();

  useEffect(() => {
    let idSetTimeOut: ReturnType<typeof setTimeout>;
    if (searchValue) {
      idSetTimeOut = setTimeout(async () => {
        const response = await getAutoCompleteProduct({
          searchValue: searchValue,
          limit: AUTO_COMPLETE_SIZE,
        });
        if (response) {
          setAutoCompleteProducts(response.data);
        } else {
          setAutoCompleteProducts([]);
        }
      }, 500);
    }
    return () => {
      clearTimeout(idSetTimeOut);
    };
  }, [searchValue, getAutoCompleteProduct]);

  return (
    <Wrapper>
      {children}
      {visible && searchValue && (
        <AutoCompleteWrapper>
          {!!autoCompleteProducts.length ? (
            autoCompleteProducts.map((product) => (
              <div key={product.id} className="autocomplete-row-wrap">
                <Row gutter={[6, 6]}>
                  <Col span={3} xxl={3} xl={3} lg={3} md={3} sm={3} xs={6}>
                    <Link
                      reloadDocument
                      to={`/Laptop,Tablet,Mobile/${product.id}`}
                    >
                      <Image preview={false} src={product.imgSrc} alt="" />
                    </Link>
                  </Col>
                  <Col
                    span={21}
                    xxl={21}
                    xl={21}
                    lg={21}
                    md={21}
                    sm={21}
                    xs={18}
                  >
                    <Link
                      reloadDocument
                      to={`/Laptop,Tablet,Mobile/${product.id}`}
                    >
                      <Typography.Paragraph
                        style={{ margin: 0 }}
                        ellipsis={{ rows: 2 }}
                      >
                        {product.name}
                      </Typography.Paragraph>
                    </Link>
                    <Typography.Text strong>
                      {formatNumberPriceToString(product.price)}
                      <sup>₫</sup>
                    </Typography.Text>
                  </Col>
                </Row>
              </div>
            ))
          ) : (
            <EmptySearch />
          )}
        </AutoCompleteWrapper>
      )}
    </Wrapper>
  );
}
