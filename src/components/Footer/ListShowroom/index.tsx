import { Col, Grid, Row } from 'antd';
import styled from 'styled-components';
import ShowroomCard from './ShowroomCard';
import ListShowroomCollapse from './ListShowroomCollapse';
import { useGetShowroomsQuery } from '../../../features/api/api.slice';
import Loading from '../../Loading';

const Wrapper = styled.div`
  padding-bottom: 24px;
`;

export default function ListShowroom() {

  const { data: showrooms } = useGetShowroomsQuery();

  const { md } = Grid.useBreakpoint();

  if (!showrooms) {
    return <Loading />;
  }

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
