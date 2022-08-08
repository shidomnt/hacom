// @ts-check
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
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MAX_SOLUONG, MIN_SOLUONG } from '../../../../constant';
import { CartActionContext } from '../../../../contexts/CartProvider';
import { formatNumberPriceToString } from '../../../../utils';
import InputQuantify from '../../../DetailProduct/DetailInfo/InputQuantify';

/**
 * @typedef {Object} CollapseCartItemProps
 * @property {import('../../../../constant').CartItem} item
 * @property {import('../../../../constant').CartItem['quantify']} quantify
 * @property {string} thanhTien
 * @property {import('react').Dispatch<React.SetStateAction<number>>} setQuantify
 */

/**
 * @param {import('react').PropsWithChildren<CollapseCartItemProps>} props
 * @returns
 */
export default function CollapseCartItem({ item, quantify, setQuantify }) {
  const { removeProduct } = useContext(CartActionContext);

  return (
    <Row gutter={[8, 8]} align="middle">
      <Col span={1} xxl={1} xl={1} lg={1} md={1} sm={1} xs={2}>
        <Checkbox value={item.product.id} />
      </Col>
      <Col span={4} xxl={4} xl={4} lg={4} md={4} sm={4} xs={4}>
        <Link to={`/${item.product.category.slug}/${item.product.id}`}>
          <Image src={item.product.imgSrc} alt="" preview={false} />
        </Link>
      </Col>
      <Col span={18} xxl={18} xl={18} lg={18} md={18} sm={18} xs={16}>
        <Row gutter={[6, 6]}>
          <Col span={24}>
            <Typography.Text ellipsis={true}>
              {item.product.name}
            </Typography.Text>
          </Col>
          <Col span={24}>
            <Space direction="horizontal">
              <Typography.Text
                strong
                style={{
                  display: 'block',
                  minWidth: '100px',
                  textAlign: 'center',
                }}
              >
                {formatNumberPriceToString(item.product.price)}
                <sup>₫</sup>
              </Typography.Text>
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
            </Space>
          </Col>
        </Row>
      </Col>
      <Col span={1} xxl={1} xl={1} lg={1} md={1} sm={1} xs={2}>
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
