import { Breadcrumb } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { pathMapping } from '../../constant';

const Wrapper = styled.div`
  padding: 10px 0;
`;

const StyledBreadcrumb = styled(Breadcrumb)`
  & {
    font-size: 1.5rem;
    color: #555555;
    font-weight: bold;
  }
`;

export default function CustomBreadcrumb() {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((pathSnippet, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>
          {pathMapping[pathSnippet as keyof typeof pathMapping] || pathSnippet}
        </Link>
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
            style={{ fontSize: '10px' }}
            className="fa-solid fa-angle-right"
          ></i>
        }
      >
        {breadcrumbItems}
      </StyledBreadcrumb>
    </Wrapper>
  );
}
