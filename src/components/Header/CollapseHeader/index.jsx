// @ts-check
import { Col, Drawer, Image, Row } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../../../contexts/CartProvider';
import SearchBar from './SearchBar';
import DrawerContent from './DrawerContent';

const Wrapper = styled.div`
  & {
    padding: 4px 0;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9999;
    background-color: var(--primary-color);
    .row-wrap {
      padding: 0 20px;
    }
    .search-bar-wrap {
      padding: 0 4px;
      border-radius: 5px;
    }
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
        top: 0px;
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
    height: calc(100% - 48px + 4px);
    z-index: 9999;
    .ant-drawer-body {
      padding: 0;
    }
  }
`;

export default function CollapseHeader() {
  const { cart } = useContext(CartContext);
  const [hideLogo, setHideLogo] = useState(false);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setHideLogo(true);
      } else {
        setHideLogo(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header" style={{ height: 'calc(48px + 32px)' }}>
      <Wrapper>
        <div className="row-wrap">
          <Row gutter={[8, 8]} align="middle">
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
              {hideLogo ? (
                <div className="search-bar-wrap">
                  <SearchBar />
                </div>
              ) : (
                <div className="logo-wrap">
                  <Link to="/" className="header__buttom--top-logo">
                    <Image
                    preview={false}
                      style={{ height: '40px' }}
                      src="https://hanoicomputercdn.com/media/lib/19-02-2022/logo-hacomtrangch.png"
                      alt="logo"
                      className="header__buttom--top-logo-img"
                    />
                  </Link>
                </div>
              )}
            </Col>
            <Col span={1}>
              <div className="icon-wrap cart-wrap">
                <Link to="/cart" style={{ color: 'inherit' }}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
                <span className="cart-soluong">{cart.length}</span>
              </div>
            </Col>
          </Row>
        </div>
        {!hideLogo && (
          <div className="search-bar-wrap">
            <SearchBar />
          </div>
        )}
      </Wrapper>
    </header>
  );
}
