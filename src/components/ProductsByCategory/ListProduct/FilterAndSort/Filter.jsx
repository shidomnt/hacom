// @ts-check
import { Button, Col, Grid, Input, Row, Select, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { initShowrooms } from '../../../../constant';
import useApi from '../../../../hooks/useApi';
import {
  filterInputNumber,
  formatNumberPriceToString,
  formatStringPriceToNumber,
} from '../../../../utils';

const Wrapper = styled.div`
  & {
    .top-filter-price {
      display: flex;
      align-items: center;
      .ant-input {
        width: 80px;
        text-align: right;
      }
    }
    .ant-select {
      width: 100%;
    }
  }
`;
const DEFAULT = 'default';

export default function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [listShowroom, setListShowroom] = useState(initShowrooms);
  const [stockStatus, setStockStatus] = useState(
    searchParams.get('stock') ?? DEFAULT
  );

  const { xl, lg } = Grid.useBreakpoint();

  const [costFilter, setCostFilter] = useState({
    min: '200.000',
    max: '5.000.000',
  });

  const { getShowRooms, getKhoangGia } = useApi();

  const [khoangGia] = useState(() => getKhoangGia());

  useEffect(() => {
    (async () => {
      const response = await getShowRooms();
      if (response) {
        setListShowroom(response.data);
      } else {
        setListShowroom(initShowrooms);
      }
    })();
  }, [getShowRooms]);

  useEffect(() => {
    if (stockStatus === 'con-hang') {
      searchParams.set('stockStatus', 'con-hang');
      setSearchParams(searchParams);
    } else {
      searchParams.delete('stockStatus');
      setSearchParams(searchParams);
    }
  }, [stockStatus, setSearchParams, searchParams]);

  const handleFilterPrice = () => {
    searchParams.set(
      'price',
      `${formatStringPriceToNumber(costFilter.min)}-${formatStringPriceToNumber(
        costFilter.max
      )}`
    );
    setSearchParams(searchParams);
  };

  /**
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event
   * @param {'min' | 'max'} type
   */
  const handleSetCost = (event, type) => {
    setCostFilter((prev) => ({
      ...prev,
      [type]: formatNumberPriceToString(
        Number(filterInputNumber(event.target.value))
      ),
    }));
  };

  return (
    <Wrapper>
      <Row gutter={[8, 8]}>
        <Col span={5} xxl={5} xl={5} lg={5} md={8} sm={8} xs={8}>
          <Select
            onChange={(value) => setStockStatus(value)}
            value={stockStatus}
          >
            <Select.Option value={DEFAULT}>Tình trạng kho hàng</Select.Option>
            <Select.Option value="con-hang">Còn hàng</Select.Option>
          </Select>
        </Col>
        <Col span={8}>
          <Select defaultValue={DEFAULT}>
            <Select.Option value={DEFAULT}>Tất cả kho</Select.Option>
            {!!listShowroom.length &&
              listShowroom.map((showroom) => (
                <Select.Option key={showroom.diachi} value={showroom.diachi}>
                  {showroom.diachi}
                </Select.Option>
              ))}
          </Select>
        </Col>
        <Col span={11} xxl={11} xl={11} lg={11} md={8} sm={8} xs={8}>
          {lg ? (
            <div className="top-filter-price">
              <Space direction="horizontal" size="small">
                {xl && (
                  <Typography.Text style={{ fontSize: '12px' }}>
                    Lọc theo giá tiền:
                  </Typography.Text>
                )}

                <Input
                  suffix="₫"
                  value={costFilter.min}
                  onChange={(event) => handleSetCost(event, 'min')}
                />
                {'-'}
                <Input
                  suffix="₫"
                  value={costFilter.max}
                  onChange={(event) => handleSetCost(event, 'max')}
                />
                <Button onClick={() => handleFilterPrice()}>Lọc</Button>
              </Space>
            </div>
          ) : (
            <Select defaultValue="default" style={{ width: '100%' }}>
              <Select.Option value="default">Khoảng giá</Select.Option>
              {khoangGia.map((gia) => (
                <Select.Option key={gia} value={gia}>
                  {gia}
                </Select.Option>
              ))}
            </Select>
          )}
        </Col>
      </Row>
    </Wrapper>
  );
}
