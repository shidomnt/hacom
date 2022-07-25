import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  & {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default function CollapseHeader() {
  return (
    <header className="header">
      <div className="container">
        <Wrapper>
          <div className="icon-wrap">
            <i className="fa-solid fa-bars"></i>
          </div>
          <Link to="/" className="header__buttom--top-logo">
            <img
              src="https://hanoicomputercdn.com/media/lib/19-02-2022/logo-hacomtrangch.png"
              alt="logo"
              className="header__buttom--top-logo-img"
            />
          </Link>
          <div className='icon-wrap'>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </Wrapper>
      </div>
    </header>
  );
}
