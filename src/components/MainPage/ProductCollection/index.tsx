import { Button, Col, Grid, Row } from 'antd';
import React, { useState } from 'react';
import SlideShow from '../SlideShow';
import styled from 'styled-components';
import useApi from '../../../hooks/useApi';
import { Link } from 'react-router-dom';
import { COLLECTION_PRODUCT_SLIDE_SHOW_SIZE } from '../../../constant';

const Wrapper = styled.div`
  padding: 30px 25px 15px;
  background-color: white;
`;

const StyledTitle = styled.div`
  text-align: center;
  color: #d82a29;
  font-size: 1.7rem;
`;

const StyledButton = styled(Button)`
  background-color: var(--primary-color);
  border-radius: 4px;
  font-size: 1.3rem;
  border-color: var(--primary-color);
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
              category={collection.categorySlug}
              title={<StyledTitle>{collection.title}</StyledTitle>}
              limit={COLLECTION_PRODUCT_SLIDE_SHOW_SIZE}
              button={
                <StyledButton size="large" type="primary" block>
                  <Link to={`/${collection.categorySlug}`}>
                    Xem tất cả sản phẩm
                  </Link>
                </StyledButton>
              }
              slidesPerView={1}
            />
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
};

export default CollectionProduct;
