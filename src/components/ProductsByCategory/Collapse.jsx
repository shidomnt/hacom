// @ts-check
import { Divider, Typography } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const StyledTitle = styled(Typography.Title)`
  & {
    cursor: pointer;
    text-transform: uppercase;
  }
`;

const StyledChildrenWrapper = styled.div`
  & {
    padding: 12px 8px 0;
    font-size: 1.2rem;
    overflow: hidden;
    transition: 0.3s ease;
    margin-bottom: 16px;
  }
`;

/**
 * @typedef {Object} CollaspeProps
 * @property { React.ReactNode } header
 */

/**
 *
 * @param {import('react').PropsWithChildren<CollaspeProps>} props
 * @returns
 */
export default function Collapse({ header, children }) {
  const [collapse, setCollapse] = useState(false);

  return (
    <Wrapper>
      <StyledTitle onClick={() => setCollapse((prev) => !prev)} level={5}>
        {header}
      </StyledTitle>
      <Divider style={{ margin: 0 }} type="horizontal" />
      <StyledChildrenWrapper style={{ maxHeight: collapse ? 0 : "100em" }}>
        {children}
      </StyledChildrenWrapper>
    </Wrapper>
  );
}
