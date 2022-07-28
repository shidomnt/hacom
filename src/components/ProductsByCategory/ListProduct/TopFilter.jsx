// @ts-check
import { Col, Input, InputNumber, Row, Select, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { initShowrooms } from '../../../constant';
import useApi from '../../../hooks/useApi';

//React.Dispatch<React.SetStateAction<any[]>>

const DEFAULT = 'default';

const Wrapper = styled.div`
  & {
    padding: 4px;
    background-color: white;
    .top-filter-zone {
      padding: 6px;
      background-color: #f2f2f2;
      .top-filter-price {
        display: flex;
        align-items: center;
        .ant-input {
          width: 100px;
          text-align: right;
        }
      }
      .ant-select {
        width: 100%;
      }
    }
  }
`;

export default function TopFilter({ setFilters }) {
  const [listShowroom, setListShowroom] = useState(initShowrooms);

  const { getShowRooms } = useApi();

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

  return (
    <Wrapper>
      <div className="top-filter-zone">
        <Row gutter={[16, 16]}>
          <Col span={5}>
            <Select>
              <Select.Option value={DEFAULT}>Tình trạng kho hàng</Select.Option>
              <Select.Option value="con-hang">Còn hàng</Select.Option>
            </Select>
          </Col>
          <Col span={8}>
            <Select>
              <Select.Option value={DEFAULT}>Tất cả kho</Select.Option>
              {!!listShowroom.length &&
                listShowroom.map((showroom) => (
                  <Select.Option key={showroom.diachi} value={showroom.diachi}>
                    {showroom.diachi}
                  </Select.Option>
                ))}
            </Select>
          </Col>
          <Col span={11}>
            <div className="top-filter-price">
              <Space direction="horizontal" size="small">
                <Typography.Text style={{ fontSize: '12px' }}>
                  Lọc theo giá tiền:
                </Typography.Text>
                <Input suffix="₫" />
                {'-'}
                <Input suffix="₫" />
              </Space>
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
}
