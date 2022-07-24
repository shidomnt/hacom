import { Input } from "antd";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  & {
    flex: 1;
    .ant-input-search-button {
      font-size: 1.8rem;
      color: var(--primary-color);
      background-color: var(--btn-color);
      border: none;
      padding: 0 28px;
    }
  }
`;

export default function index() {
  return (
    <Wrapper>
      <Input.Search
        placeholder="Nhập tên sản phẩm, từ khóa cần tìm"
        enterButton={
          <i className="fa-solid fa-magnifying-glass header__search--icon" />
        }
      ></Input.Search>
    </Wrapper>
  );
}
