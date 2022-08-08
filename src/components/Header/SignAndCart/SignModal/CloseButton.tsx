import React from 'react';
import styled from 'styled-components';

const StyledCloseBtn = styled.span`
  & {
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    background-color: white;
  }
`;

export default function CloseButton() {
  return (
    <StyledCloseBtn>
      <i className="fa-solid fa-xmark"></i>
    </StyledCloseBtn>
  );
}
