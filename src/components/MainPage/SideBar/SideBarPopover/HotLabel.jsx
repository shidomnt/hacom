import React from 'react'
import styled from 'styled-components';
const StyledHot = styled.span`
  & {
    position: relative;
    span {
      font-size: 9px;
      background: #ed1b24;
      color: #fff;
      padding: 0 5px;
      margin-left: 9px;
      text-transform: uppercase;
      font-weight: 700;
      position: absolute;
      left: calc(100% + 4px);
      &:before {
        content: '';
        display: block;
        border: 7px solid transparent;
        border-right-color: #ed1b24;
        position: absolute;
        right: 100%;
        top: 0;
        bottom: 0;
      }
      &:after {
        content: '';
        display: block;
        border-top: 7px solid #ed1b24;
        border-right: 7px solid transparent;
        border-bottom: 7px solid #ed1b24;
        position: absolute;
        left: 100%;
        top: 0;
        bottom: 0;
      }
    }
  }
`;

export default function HotLabel({children}) {
  return (
    <StyledHot>{children}</StyledHot>
  )
}
