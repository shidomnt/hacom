import { Col, Row } from 'antd';
import React from 'react';
import SlideShow from '../SlideShow';

const listCollection = [
  {
    id: 1,
    category: 'Laptop,Tablet,Mobile',
    title: 'MÁY TÍNH CHO GAME THỦ HACOM LUÔN SẴN ĐỦ',
  },
  {
    id: 2,
    category: 'PhuKienLaptop,PC,Mobile',
    title: 'TRƯỚC MẶT SẠCH SẼ KHÔNG GIAN LUÔN ĐẸP ĐẼ',
  },
  {
    id: 3,
    category: 'PCVanPhong,AIO,MiniPC',
    title: 'TẤT CẢ TRONG MỘT ALL IN ONE, MINI PC, LÀ SỐ 1',
  },
  {
    id: 4,
    category: 'Loa,TaiNghe,Mic,Webcam',
    title: 'VỰA KHÔNG GIAN RIÊNG TƯ ĐEO VÀO LÀ LẮC LƯ',
  },
];

const CollectionProduct = ({ categories }) => {
  return (
    <Row gutter={32}>
      {listCollection.map((collection) => (
        <Col span={6} key={collection.id}>
          <SlideShow
            category={collection.category}
            title={collection.title}
          />
        </Col>
      ))}
    </Row>
  );
};

export default CollectionProduct;
