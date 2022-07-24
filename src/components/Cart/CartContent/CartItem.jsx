import {
  Button,
  Checkbox,
  Col,
  Image,
  Row,
  Space,
  Tooltip,
  Typography,
} from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { CartActionContext } from '../../../contexts/CartProvider';
import InputQuantify from '../../DetailProduct/DetailInfo/InputQuantify';

const MIN_SOLUONG = 1;
const MAX_SOLUONG = 99;

export default function CartItem({ item }) {

  const { changeQuantify, removeProduct, caculateThanhTien } =
    useContext(CartActionContext);

  const [thanhTien, setThanhTien] = useState(() =>
    caculateThanhTien(item.product.price, item.quantify)
  );

  useEffect(() => {
    setThanhTien(caculateThanhTien(item.product.price, item.quantify));
  }, [item.product.price, item.quantify]);

  return (
    <Row gutter={[8, 8]} style={{alignItems: 'center'}}>
      <Col span={1}>
        <Checkbox value={item.product.id} />
      </Col>
      <Col span={9}>
        <Row gutter={[6, 6]}>
          <Col span={7}>
            <Image src={item.product.imgSrc} alt="" preview={false} />
          </Col>
          <Col span={17}>
            <Typography.Paragraph>{item.product.name}</Typography.Paragraph>
            <Typography.Text>
              Mã SP: <Typography.Text strong>{item.product.id}</Typography.Text>
            </Typography.Text>
          </Col>
        </Row>
      </Col>
      <Col span={5}>
        <Space direction="horizontal">
          <Typography.Text strong>
            {item.product.price}
            <sup>₫</sup>
          </Typography.Text>
          <Typography.Text delete>
            {item.product.maxPrice}
            <sup>₫</sup>
          </Typography.Text>
        </Space>
      </Col>
      <Col span={4}>
        <InputQuantify
          value={item.quantify}
          min={MIN_SOLUONG}
          max={MAX_SOLUONG}
          controls={false}
          onChange={(value) => changeQuantify(item.product.id, value)}
          onClickAdd={() => changeQuantify(item.product.id, item.quantify + 1)}
          onClickMinus={() =>
            changeQuantify(item.product.id, item.quantify - 1)
          }
        />
      </Col>
      <Col span={4}>
        <Typography.Title level={5} style={{margin: 0, color: 'red'}}>
          {thanhTien}
          <sup>₫</sup>
        </Typography.Title>
      </Col>
      <Col span={1}>
        <Tooltip placement="bottomRight" title="Xóa khỏi giỏ hàng">
          <Button
            onClick={() => removeProduct(item.product.id)}
            className="cart-remove-btn"
            type="text"
          >
            <i className="fa-solid fa-trash-can"></i>
          </Button>
        </Tooltip>
      </Col>
    </Row>
  );
}
