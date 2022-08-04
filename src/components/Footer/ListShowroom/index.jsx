// @ts-check
import { Col, Grid, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useApi from '../../../hooks/useApi';
import ShowroomCard from './ShowroomCard';
import ListShowroomCollapse from './ListShowroomCollapse';
import { initShowrooms } from '../../../constant';

const Wrapper = styled.div`
  padding-bottom: 24px;
`;

export default function ListShowroom() {
  const [showrooms, setShowrooms] = useState(initShowrooms);
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

  const { md } = Grid.useBreakpoint();

  if (!md) {
    return <ListShowroomCollapse showrooms={showrooms} />;
  }

  return (
    <Wrapper>
      <Row gutter={[32, 32]}>
        {showrooms.map((showroom, index) => (
          <Col
            key={showroom._id}
            span={8}
            xxl={8}
            xl={8}
            lg={8}
            md={12}
            sm={24}
            xs={24}
          >
            <ShowroomCard showroom={showroom} index={index + 1} />
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
}
