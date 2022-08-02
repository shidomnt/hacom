import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { DEFAULT_PAGE_SIZE } from '../../../../constant';
import useApi from '../../../../hooks/useApi';

const Wrapper = styled.div`
  & {
    .top-filter-pagination {
      .ant-pagination-item {
        font-weight: 500;
        a {
          color: var(--primary-color);
          background-color: white;
        }
        &.ant-pagination-item-active {
          border-color: var(--primary-color);
          a {
            color: white;
            background-color: var(--primary-color);
          }
        }
      }
    }
  }
`;

export default function CustomPagination() {
  const [productCount, setProductCount] = useState(DEFAULT_PAGE_SIZE);
  const [searchParams, setSearchParams] = useSearchParams({
    page: '1',
  });

  const { getProductCountByCategory } = useApi();

  const { category } = useParams();

  useEffect(() => {
    (async () => {
      if (category) {
        const filterObj = {};
        const stockStatusQuery = searchParams.get('stockStatus');
        if (stockStatusQuery) {
          filterObj.stockStatus = stockStatusQuery;
        }
        const priceRangeQuery = searchParams.get('priceRange');
        if (priceRangeQuery) {
          filterObj.priceRange = priceRangeQuery;
        }
        const response = await getProductCountByCategory(category, filterObj);
        if (response) {
          setProductCount(response.data);
        } else {
          setProductCount(DEFAULT_PAGE_SIZE);
        }
      }
    })();
  }, [getProductCountByCategory, category, searchParams]);

  /**
   *
   * @param {number} page
   */
  const handleChangePage = (page) => {
    searchParams.set('page', String(page));
    setSearchParams(searchParams);
  };

  return (
    <Wrapper>
      <Pagination
        current={Number(searchParams.get('page')) ?? 1}
        onChange={handleChangePage}
        className="top-filter-pagination"
        defaultCurrent={1}
        defaultPageSize={DEFAULT_PAGE_SIZE}
        total={productCount}
        showSizeChanger={false}
        size="small"
        showPrevNextJumpers={false}
        showTitle={false}
      />
    </Wrapper>
  );
}
