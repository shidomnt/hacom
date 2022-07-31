// @ts-check
import { Col, Popover, Row } from "antd";
import React from "react";
import styled from "styled-components";
import SideBar from "../../MainPage/SideBar";
import SearchBar from "../SearchBar";
import SignAndCart from "../SignAndCart";

const Wrapper = styled.div`
  & {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    padding: 13px 0;
    box-shadow: 1px 4px 5px #b3aeae;
    animation: slideIn 0.2s linear;
    .header__buttom--top-nav-hostsing {
      background: none;
    }
    .header__buttom--buttom-btn {
      width: fit-content;
      padding-left: 16px;
      padding-right: 16px;
      font-size: 1.2rem;
    }
    .header__buttom--top-nav-hostsing-item:first-child
      .header__buttom--top-nav-hostsing-content {
      margin: 0;
    }
  }
`;

export default function StickyHeader() {
  return (
    <Wrapper className="header">
      <div className="container">
        <Row gutter={[8, 8]} align="middle">
          <Col span={4}>
            <Popover placement="bottom" trigger="hover" content={<SideBar />}>
              <div className="header__buttom--buttom-btn">
                <span className="header__buttom--buttom-btn-link">
                  Danh mục sản phẩm
                </span>
                <i className="fa-solid fa-angle-down header__buttom--buttom-btn-icon"></i>
              </div>
            </Popover>
          </Col>
          <Col span={13}>
            <SearchBar />
          </Col>
          <Col span={7}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{ width: "fit-content" }}
                className="header__buttom--top-nav-hostsing"
              >
                <SignAndCart />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
}
