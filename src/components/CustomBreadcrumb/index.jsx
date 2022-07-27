// @ts-check
import { Breadcrumb } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px 0;
`;

const StyledBreadcrumb = styled(Breadcrumb)`
  & {
    font-size: 15px;
    color: #555555;
    font-weight: bold;
  }
`;

const pathMapping = {
  'cart': 'Giỏ hàng'
}

export default function CustomBreadcrumb() {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((pathSnippet, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{pathMapping[pathSnippet] || pathSnippet}</Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
    ...extraBreadcrumbItems,
  ];

  return (
    <Wrapper>
      <StyledBreadcrumb
        separator={
          <i
            style={{ fontSize: "10px" }}
            className="fa-solid fa-angle-right"
          ></i>
        }
      >
        {breadcrumbItems}
      </StyledBreadcrumb>
    </Wrapper>
  );
}
