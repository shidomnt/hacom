// @ts-check
import { Button, Col, Grid, Row, Select, Space } from 'antd';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { sortBtns } from '../../../../constant';
import CustomPagination from './CustomPagination';

const Wrapper = styled.div``;

export const TopFilterSortButton = styled(Button)`
  & {
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
`;

export default function Sort() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { lg } = Grid.useBreakpoint();

  /**
   *
   * @param {import('../../../../constant').SortButtons} button
   */
  const handleClickSortButton = (button) => {
    const currentSort = searchParams.get('sort');
    if (currentSort === button.sortType) {
      searchParams.delete('sort');
    } else {
      searchParams.set('sort', button.sortType);
    }
    setSearchParams(searchParams);
  };

  return (
    <Wrapper>
      <Row align="middle" gutter={[8, 8]}>
        <Col span={17} xxl={17} xl={17} lg={17} md={8} sm={8} xs={8}>
          {lg ? (
            <Space direction="horizontal" size="small">
              {sortBtns.map((button) => {
                return (
                  <TopFilterSortButton
                    key={button.sortType}
                    onClick={() => handleClickSortButton(button)}
                    className={` ${
                      searchParams.get('sort') === button.sortType
                        ? 'active'
                        : ''
                    }`}
                    type="dashed"
                  >
                    {button.title}
                  </TopFilterSortButton>
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
