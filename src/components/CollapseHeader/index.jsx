import { Col, Drawer, Row } from 'antd';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../../contexts/CartProvider'
import DrawerContent from './DrawerContent'

const Wrapper = styled.div`
  & {
    padding: 4px 20px;
    .icon-wrap {
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      cursor: pointer;
    }
    .cart-wrap {
      position: relative;
      .cart-soluong {
        position: absolute;
        color: black;
        background-color: #fce101;
        padding: 0 6px;
        border-radius: 50%;
        font-size: 12px;
        top: -4px;
        right: -12px;
      }
    }
    .logo-wrap {
      text-align: center;
    }
  }
`;

const StyledDrawer = styled(Drawer)`
  & {
    top: unset;
    bottom: 0;
    height: calc(100% - 67px);
    .ant-drawer-body {
      padding: 0;
    }
  }
`;

export default function CollapseHeader() {

  const { cart } = useContext(CartContext);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <Wrapper>
        <Row align="middle">
          <Col span={1}>
            <div onClick={handleToggleDrawer} className="icon-wrap">
              {drawerOpen ? (
                <i className="fa-solid fa-xmark"></i>
              ) : (
                <i className="fa-solid fa-bars"></i>
              )}
            </div>
            <StyledDrawer
              visible={drawerOpen}
              placement="left"
              closable={false}
              autoFocus={false}
              onClose={() => setDrawerOpen(false)}
            >
              <DrawerContent />
            </StyledDrawer>
          </Col>
          <Col flex="auto">
            <div className="logo-wrap">
              <Link to="/" className="header__buttom--top-logo">
                <img
                  src="https://hanoicomputercdn.com/media/lib/19-02-2022/logo-hacomtrangch.png"
                  alt="logo"
                  className="header__buttom--top-logo-img"
                />
              </Link>
            </div>
          </Col>
          <Col span={1}>
            <div className="icon-wrap cart-wrap">
              <Link to="/cart" style={{ color: 'inherit' }}>
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
              <span className='cart-soluong'>{cart.length}</span>
            </div>
          </Col>
        </Row>
      </Wrapper>
    </header>
  );
}
