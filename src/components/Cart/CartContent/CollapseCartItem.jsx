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
} from 'antd'
import React, { useContext } from 'react'
import { CartActionContext } from '../../../contexts/CartProvider'
import InputQuantify from '../../DetailProduct/DetailInfo/InputQuantify'
import { MAX_SOLUONG, MIN_SOLUONG } from '../../../constant'

/**
 * @typedef {Object} CollapseCartItemProps
 * @property {import('../../../constant').CartItem} item
 */

/**
 * @param {import('react').PropsWithChildren<CollapseCartItemProps>} props
 * @returns
 */
export default function CollapseCartItem({ item }) {
  const { changeQuantify, removeProduct } = useContext(CartActionContext)

  return (
    <Row gutter={[8, 8]} style={{ alignItems: 'center' }}>
      <Col span={1}>
        <Checkbox value={item.product.id} />
      </Col>
      <Col span={4}>
        <Image src={item.product.imgSrc} alt="" preview={false} />
      </Col>
      <Col span={19}>
        <Space style={{ width: '100%' }} direction="vertical">
          <Row>
            <Col span={23}>
              <Typography.Text ellipsis={true}>
                {item.product.name}
              </Typography.Text>
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
          <div>
            <Space direction="horizontal">
              <Typography.Text
                strong
                style={{
                  display: 'block',
                  minWidth: '100px',
                  textAlign: 'center',
                }}
              >
                {item.product.price}
                <sup>₫</sup>
              </Typography.Text>
              <InputQuantify
                value={item.quantify}
                min={MIN_SOLUONG}
                max={MAX_SOLUONG}
                controls={false}
                onChange={(value) => changeQuantify(item.product.id, value)}
                onClickAdd={() =>
                  changeQuantify(item.product.id, item.quantify + 1)
                }
                onClickMinus={() =>
                  changeQuantify(item.product.id, item.quantify - 1)
                }
              />
            </Space>
          </div>
        </Space>
      </Col>
    </Row>
  )
}

