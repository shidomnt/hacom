import React, {
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";
import StickyHeader from "../Header/StickyHeader";

const Content = styled.div`
  padding: 8px 0;
  background-color: #f4f4f4;
`;

export default function Layout() {
  const [displayStickyHeader, setDisplayStickyHeader] = useState(false);

  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);

  useEffect(() => {
    const handleSroll = () => {
      if (window.scrollY >= 550) {
        setDisplayStickyHeader(true);
      } else {
        setDisplayStickyHeader(false);
      }
    };
    window.addEventListener("scroll", handleSroll);
    return () => {
      window.removeEventListener("scroll", handleSroll);
    };
  }, []);

  return (
    <React.Fragment>
      <Header />
      {displayStickyHeader && <StickyHeader />}
      <Content>
        <div className="container">
          <Outlet />
        </div>
      </Content>
      <Footer />
    </React.Fragment>
  );
}
