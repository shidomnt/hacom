// @ts-check
import React from 'react'
import styled from 'styled-components'

const StyledCloseBtn = styled.span`
  & {
    padding: 8px 12px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
    background-color: white;
  }
`

export default function CloseButton() {
  return (
    <StyledCloseBtn><i className="fa-solid fa-xmark"></i></StyledCloseBtn>
  )
}

