// @ts-check
import {
  Button,
  Checkbox,
  Col,
  Grid,
  Image,
  Row,
  Space,
  Tooltip,
  Typography,
} from 'antd';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MAX_SOLUONG, MIN_SOLUONG } from '../../../../constant';
import { CartActionContext } from '../../../../contexts/CartProvider';
import { formatNumberPriceToString } from '../../../../utils';
import InputQuantify from '../../../DetailProduct/DetailInfo/InputQuantify';

/**
 * @typedef {Object} CartItemProps
 * @property {import('../../../../constant').CartItem} item
 * @property {import('../../../../constant').CartItem['quantify']} quantify
 * @property {string} thanhTien
 * @property {import('react').Dispatch<React.SetStateAction<number>>} setQuantify
 */

/**
 *
 * @param {import('react').PropsWithChildren<CartItemProps>} props
 * @returns
 */
export default function FullyCartItem({
  item,
  quantify,
  thanhTien,
  setQuantify,
}) {
  const { removeProduct } = useContext(CartActionContext);
  const { lg } = Grid.useBreakpoint();

  return (
    <Row gutter={[8, 8]} align="middle">
      <Col span={1}>
        <Checkbox value={item.product.id} />
      </Col>
      <Col span={9}>
        <Row gutter={[8, 8]} align="middle">
          <Col span={7}>
            <Link to={`/${item.product.category.slug}/${item.product.id}`}>
              <Image src={item.product.imgSrc} alt="" preview={false} />
            </Link>
          </Col>
          <Col span={17}>
            <Link to={`/${item.product.category.slug}/${item.product.id}`}>
              <Typography.Paragraph ellipsis={{ rows: 3 }}>
                {item.product.name}
              </Typography.Paragraph>
            </Link>
            <Typography.Text>
              Mã SP: <Typography.Text strong>{item.product.id}</Typography.Text>
            </Typography.Text>
          </Col>
        </Row>
      </Col>
      <Col span={5}>
        <Space direction="horizontal">
          <Typography.Text strong>
            {formatNumberPriceToString(item.product.price)}
            <sup>₫</sup>
          </Typography.Text>
          {item.product.maxPrice && lg && (
            <Typography.Text delete>
              {formatNumberPriceToString(item.product.maxPrice)}
              <sup>₫</sup>
            </Typography.Text>
          )}
        </Space>
      </Col>
      <Col span={4}>
        <InputQuantify
          value={quantify}
          min={MIN_SOLUONG}
          max={MAX_SOLUONG}
          controls={false}
          onChange={(value) => setQuantify(value)}
          onClickAdd={() =>
            setQuantify((quantify) => Math.min(quantify + 1, MAX_SOLUONG))
          }
          onClickMinus={() =>
            setQuantify((quantify) => Math.max(quantify - 1, MIN_SOLUONG))
          }
        />
      </Col>
      <Col span={4}>
        <Typography.Title level={5} style={{ margin: 0, color: 'red' }}>
          {thanhTien}
          <sup>₫</sup>
        </Typography.Title>
      </Col>
      <Col span={1}>
        <Tooltip placement="bottomRight" title="Xóa khỏi giỏ hàng">
          <Button
            onClick={() => removeProduct([item.product.id])}
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
