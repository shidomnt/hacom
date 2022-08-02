// @ts-check
import { Card, Col, List, Row, Select, Space, Typography } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { initShowrooms, staticInfoFakeData } from '../../../constant';
import useApi from '../../../hooks/useApi';

const Wrapper = styled.div`
  & {
    .card {
      border-radius: 8px;
      .ant-card-head {
        display: flex;
        align-items: center;
        background-color: #fbfbfb;
        .ant-card-head-title {
          font-size: 1.5rem;
          .card-title {
            border-radius: inherit;
          }
          padding: 8px 0;
          white-space: normal;
        }
      }
      .ant-card-body {
        padding: 12px;
        .select-selector {
          width: 100%;
        }
        .card-content-item {
          font-size: 1.2rem;
          color: #444444;
          display: flex;
          align-items: center;
          i {
            font-size: 0.5rem;
            transform: translate(0, 1px);
            margin-right: 8px;
          }
          line-height: 26px;
        }
        .list-showroom {
          font-size: 1.2rem;
          max-height: 165px;
          overflow-y: scroll;
          overflow-x: hidden;
          &::-webkit-scrollbar {
            display: none;
          }
          .item-showroom {
            height: 33px;
            margin: 0 -6px;
            border-radius: 3px;
            padding: 7px 0 7px 12px;
            display: flex;
            align-items: center;
            &:nth-child(2n-1) {
              background-color: #f2f2f2;
            }
          }
          .dienthoaiban {
            color: red;
            position: relative;
            margin-right: 9px;
            &::before {
              content: '';
              display: block;
              width: 4px;
              height: 4px;
              border-radius: 50%;
              background-color: black;
              position: absolute;
              right: -6px;
              top: 50%;
              transform: translate(0, calc(-50%));
            }
          }
        }
      }
    }
  }
`;

export default function StaticInfo() {
  const [showrooms, setShowrooms] = useState(initShowrooms);
  const [filterShowrooms, setFilterShowrooms] = useState('default');
  const { getShowRooms } = useApi();

  useEffect(() => {
    (async () => {
      const response = await getShowRooms();
      if (response) {
        setShowrooms(response.data);
      } else {
        setShowrooms([]);
      }
    })();
  }, [getShowRooms]);

  const listThanhPho = useMemo(() => {
    /** @type {Set<string>} */
    const result = new Set();
    showrooms.forEach((showroom) => {
      result.add(showroom.city);
    });
    return Array.from(result);
  }, [showrooms]);

  return (
    <Wrapper>
      <Row gutter={[12, 12]}>
        <Col span={24}>
          <Card
            className="card"
            title={
              <Typography.Text className="cart-title" strong>
                Các cửa hàng có sẵn sản phẩm này
              </Typography.Text>
            }
          >
            <Space direction="vertical" style={{ width: '100%' }}>
              <Row gutter={8}>
                <Col span={12}>
                  <Select
                    defaultValue={filterShowrooms}
                    onChange={(thanhpho) => setFilterShowrooms(thanhpho)}
                    className="select-selector"
                  >
                    <Select.Option value="default">Tỉnh/Thành</Select.Option>
                    {listThanhPho.map((thanhpho) => (
                      <Select.Option value={thanhpho} key={thanhpho}>
                        {thanhpho}
                      </Select.Option>
                    ))}
                  </Select>
                </Col>
                <Col span={12}>
                  <Select defaultValue="default" className="select-selector">
                    <Select.Option value="default">Quận/Huyện</Select.Option>
                  </Select>
                </Col>
              </Row>
              <List
                className="list-showroom"
                dataSource={showrooms.filter((showroom) =>
                  filterShowrooms === 'default'
                    ? true
                    : filterShowrooms === showroom.city
                )}
                renderItem={(showroom) => (
                  <li className="item-showroom">
                    <Typography.Text ellipsis={true}>
                      {showroom.landline && (
                        <React.Fragment>
                          <span className="dienthoaiban">
                            <i className="fa-solid fa-phone"></i>{' '}
                            {showroom.landline}
                          </span>
                        </React.Fragment>
                      )}
                      <span className="diachi">{showroom.diachi}</span>
                    </Typography.Text>
                  </li>
                )}
              />
            </Space>
          </Card>
        </Col>
        {staticInfoFakeData.map((cardInfo) => (
          <Col
            key={cardInfo.title}
            span={24}
            xxl={24}
            xl={24}
            lg={24}
            md={0}
            sm={0}
            xs={0}
          >
            <Card
              className="card"
              key={cardInfo.title}
              title={
                <Typography.Text strong className="card-title">
                  {cardInfo.title}
                </Typography.Text>
              }
            >
              <List
                className="card-content"
                dataSource={cardInfo.content}
                renderItem={(item) => (
                  <li className="card-content-item">
                    <i className="fa-regular fa-circle"></i> {item}
                  </li>
                )}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
}
