import { Button, Col, Row } from "antd";
import React from "react";
import SlideShow from "../SlideShow";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 15px;
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

const listCollection = [
  {
    id: 1,
    category: "Laptop,Tablet,Mobile",
    title: "MÁY TÍNH CHO GAME THỦ HACOM LUÔN SẴN ĐỦ",
  },
  {
    id: 2,
    category: "PhuKienLaptop,PC,Mobile",
    title: "TRƯỚC MẶT SẠCH SẼ KHÔNG GIAN LUÔN ĐẸP ĐẼ",
  },
  {
    id: 3,
    category: "PCVanPhong,AIO,MiniPC",
    title: "TẤT CẢ TRONG MỘT ALL IN ONE, MINI PC, LÀ SỐ 1",
  },
  {
    id: 4,
    category: "Loa,TaiNghe,Mic,Webcam",
    title: "VỰA KHÔNG GIAN RIÊNG TƯ ĐEO VÀO LÀ LẮC LƯ",
  },
];

const CollectionProduct = ({ categories }) => {
  return (
    <Wrapper>
    <Row gutter={16}>
      {listCollection.map((collection) => (
        <Col span={6} key={collection.id}> 
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
