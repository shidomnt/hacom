// @ts-check
import { Button, Col, Grid, Row } from 'antd';
import React, { useState } from 'react';
import SlideShow from '../SlideShow';
import styled from 'styled-components';
import useApi from '../../../hooks/useApi';

const Wrapper = styled.div`
  padding: 30px 25px 15px;
  background-color: white;
`;

const StyledTitle = styled.div`
  text-align: center;
  color: #d82a29;
  font-size: 17px;
`;

const StyledButton = styled(Button)`
  background-color: #243a76;
  border-radius: 4px;
`;

const CollectionProduct = () => {
  const { xl } = Grid.useBreakpoint();
  
  const { getListCollection } = useApi();
  
  const [listCollection] = useState(() => getListCollection());

  return (
    <Wrapper>
      <Row gutter={32}>
        {listCollection.slice(0, xl ? undefined : 3).map((collection) => (
          <Col span={xl ? 6 : 8} key={collection.id}>
            <SlideShow
              category={collection.category}
              title={<StyledTitle>{collection.title}</StyledTitle>}
              button={
                <StyledButton size="large" href="#" type="primary" block>
                  Xem tất cả sản phẩm
                </StyledButton>
              }
            />
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
};

export default CollectionProduct;
