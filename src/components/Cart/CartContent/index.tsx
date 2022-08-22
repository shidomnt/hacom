import { Button, Checkbox, Col, Row, Tooltip, Typography } from 'antd';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import CartItem from './CartItem';
import {
  Product,
} from '../../../interfaces';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  removeProduct,
  selectAllCartItem,
} from '../../../features/cart/cart.slice';

const Wrapper = styled.div`
  & {
    padding-bottom: 48px;
    .cart-block {
      background-color: white;
      padding: 8px 8px;
      border-radius: 6px;
    }
    .cart-list {
      .ant-checkbox-group {
        width: 100%;
      }
    }
    .cart-remove-btn {
      padding: 0;
      height: unset;
    }
    .submit-btn {
      width: 100%;
      padding: 8px 16px;
      height: unset;
      background-color: var(--primary-color);
    }
  }
`;

export default function CartContent() {
  const cart = useAppSelector((state) => selectAllCartItem(state.cart));
  const dispatch = useAppDispatch();
  const [checkedList, setCheckedList] = useState<Array<Product['id']>>([]);
  const [checkAll, setCheckAll] = useState(false);

  useEffect(() => {
    const checkedListMayChange = cart
      .filter((item) => checkedList.includes(item.product.id))
      .map((item) => item.product.id);
    if (checkedListMayChange.length !== checkedList.length) {
      setCheckedList(checkedListMayChange);
    }
  }, [cart, checkedList]);

  useEffect(() => {
    setCheckAll(cart.length === checkedList.length);
  }, [cart.length, checkedList.length]);

  const handleChangeCheckAll = (event: CheckboxChangeEvent) => {
    setCheckedList(
      event.target.checked ? cart.map((item) => item.product.id) : []
    );
    setCheckAll(event.target.checked);
  };

  const handleChangeCheckedList = (list: CheckboxValueType[]) => {
    setCheckedList(list as typeof checkedList);
    setCheckAll(list.length === cart.length);
  };

  const handleDeleteAll = () => {
    if (!checkedList.length) {
      dispatch(
        removeProduct({
          productIds: 'all',
        })
      );
    } else {
      dispatch(
        removeProduct({
          productIds: checkedList,
        })
      );
    }
  };

  return (
    <Wrapper>
      <Row gutter={[8, 8]}>
        <Col span={17} xxl={17} xl={17} lg={17} md={24} sm={24} xs={24}>
          <Row gutter={[8, 8]}>
            <Col span={24} xxl={24} xl={24} lg={24} md={24} sm={0} xs={0}>
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
                      title={`Xóa ${
                        checkedList.length ? 'sản phẩm đã chọn khỏi' : 'toàn bộ'
                      } giỏ hàng`}
                    >
                      <Button
                        onClick={handleDeleteAll}
                        className="cart-remove-btn"
                        type="text"
                      >
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
        <Col span={7} xxl={7} xl={7} lg={7} md={24} sm={24} xs={24}>
          <Sidebar checkedList={checkedList} />
        </Col>
      </Row>
    </Wrapper>
  );
}
