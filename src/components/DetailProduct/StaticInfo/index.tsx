import { Card, Col, List, Row, Select, Space, Typography } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import { initShowrooms, staticInfoFakeData } from '../../../constant';
import useApi from '../../../hooks/useApi';
import { Showroom } from '../../../interfaces';
import { Wrapper } from './Wrapper';

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
    const result = new Set<Showroom['city']>();
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
