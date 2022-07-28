import React from 'react'
import styled from 'styled-components'
import Collapse from './Collapse'

const Wrapper = styled.div`
  & {
    padding: 8px;
    background-color: white;
    .products-by-category-sidebar-header {
      border: 1px solid #d9d9d9;
      padding: 4px 8px;
      text-transform: uppercase;
      text-align: center;
      font-weight: 500;
      font-size: 12px;
      border-radius: 4px;
      margin-bottom: 20px;
    }
  }
`

export default function Sidebar() {
  return (
    <Wrapper>
      <div className="products-by-category-sidebar-header">Lọc sản phẩm</div>
      <Collapse header="Danh mục">Tay Cầm Chơi Game</Collapse>
    </Wrapper>
  )
}
