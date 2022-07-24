import { Button, Checkbox, Col, Row, Tooltip, Typography } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CartActionContext, CartContext } from '../../../contexts/CartProvider';
import CartItem from './CartItem';
import Sidebar from './Sidebar';

const Wrapper = styled.div`
  & {
    .cart-block {
      background-color: white;
      padding: 8px 8px;
      border-radius: 6px;
    }
    .cart-remove-btn {
      padding: 0;
      height: unset;
    }
  }
`;

export default function CartContent() {
  const { cart } = useContext(CartContext);
  const { removeProduct } = useContext(CartActionContext);
  const [checkedList, setCheckedList] = useState([]);
  const [checkAll, setCheckAll] = useState(false);

  useEffect(() => {
    console.log('checkedList', checkedList);
  }, [checkedList])

  const handleChangeCheckAll = (event) => {
    setCheckedList(
      event.target.checked ? cart.map((item) => item.product.id) : []
    );
    setCheckAll(event.target.checked);
  };

  const handleChangeCheckedList = (list) => {
    setCheckedList(list);
    setCheckAll(list.length === cart.length);
  };

  return (
    <Wrapper>
      <Row gutter={[8, 8]}>
        <Col span={17}>
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <div className="cart-block">
                <Row gutter={[8, 8]}>
                  <Col span={1}>
                    <Checkbox
                      checked={checkAll}
                      onChange={handleChangeCheckAll}
                    />
                  </Col>
                  <Col span={9}>
                    <Typography.Text>
                      Tất cả ({cart.length} sản phẩm)
                    </Typography.Text>
                  </Col>
                  <Col span={5}>Đơn giá</Col>
                  <Col span={4}>Số lượng</Col>
                  <Col span={4}>Thành tiền</Col>
                  <Col span={1}>
                    <Tooltip
                      placement="bottomRight"
                      title="Xóa toàn bộ giỏ hàng"
                    >
                      <Button onClick={() => removeProduct('all')} className='cart-remove-btn' type='text'>
                        <i className="fa-solid fa-trash-can"></i>
                      </Button>
                    </Tooltip>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={24}>
              <div className="cart-list">
                <Checkbox.Group
                  value={checkedList}
                  onChange={handleChangeCheckedList}
                >
                  <Row gutter={[8, 8]}>
                    {cart.map((item) => (
                      <Col span={24} key={item.product.id}>
                        <div className="cart-block">
                          <CartItem item={item} />
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Checkbox.Group>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={7}>
          <Sidebar checkedList={checkedList} />
        </Col>
      </Row>
    </Wrapper>
  );
}
