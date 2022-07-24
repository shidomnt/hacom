import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../Footer';
import Header from '../Header';

const Content = styled.div`
  padding: 8px 0;
  background-color: #f4f4f4;
`;

export default function Layout() {
  return (
    <React.Fragment>
      <Header />
      <Content>
        <div className="container">
          <Outlet />
        </div>
      </Content>
      <Footer />
    </React.Fragment>
  );
}
