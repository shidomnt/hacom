// @ts-check
import { Button, Col, Grid, Row, Select, Space } from 'antd';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { sortBtns } from '../../../../constant';
import CustomPagination from './CustomPagination';

const Wrapper = styled.div`
  & {
    .top-filter-sort-btn {
      border-color: var(--primary-color);
      color: var(--primary-color);
      background-color: white;
      font-weight: 500;
      font-size: 1.2rem;
      &:hover,
      &.active {
        color: white;
        background-color: var(--primary-color);
      }
    }
  }
`;

export default function Sort() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { lg } = Grid.useBreakpoint();

  return (
    <Wrapper>
      <Row align="middle" gutter={[8, 8]}>
        <Col span={17} xxl={17} xl={17} lg={17} md={8} sm={8} xs={8}>
          {lg ? (
            <Space direction="horizontal" size="small">
              {sortBtns.map((button) => {
                return (
                  <Button
                    key={button.sortType}
                    onClick={(event) => {
                      searchParams.set('sort', button.sortType);
                      setSearchParams(searchParams);
                    }}
                    className={`top-filter-sort-btn ${
                      searchParams.get('sort') === button.sortType
                        ? 'active'
                        : ''
                    }`}
                    type="dashed"
                  >
                    {button.title}
                  </Button>
                );
              })}
            </Space>
          ) : (
            <Select defaultValue="default" style={{ width: '100%' }}>
              <Select.Option value="default">Thứ tự sản phẩm</Select.Option>
              {sortBtns.map((button) => {
                return (
                  <Select.Option key={button.sortType} value={button.sortType}>
                    {button.title}
                  </Select.Option>
                );
              })}
            </Select>
          )}
        </Col>
        <Col span={7} xxl={7} xl={7} lg={7} md={16} sm={16} xs={16}>
          <CustomPagination />
        </Col>
      </Row>
    </Wrapper>
  );
}
