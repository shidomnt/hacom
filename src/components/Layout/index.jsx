import { Grid } from "antd";
import React, {
  useEffect,
} from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer";
// @ts-check
import Header from "../Header";
import CollapseHeader from '../Header/CollapseHeader'

const Content = styled.div`
  padding: 8px 0 32px;
  background-color: #f4f4f4;
`;

export default function Layout() {

  const {xl} = Grid.useBreakpoint();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);

  return (
    <React.Fragment>
      {xl ? <Header /> : <CollapseHeader />}
      <Content>
        <div className="container">
          <Outlet />
        </div>
      </Content>
      <Footer />
    </React.Fragment>
  );
}
