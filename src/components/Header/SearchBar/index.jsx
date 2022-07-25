import { Input } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import AutoComplete from './AutoComplete';

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

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [autoComplete, setAutoComplete] = useState(false);

  return (
    <Wrapper>
      <AutoComplete visible={autoComplete} searchValue={searchValue}>
        <Input.Search
          placeholder="Nhập tên sản phẩm, từ khóa cần tìm"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          enterButton={
            <i className="fa-solid fa-magnifying-glass header__search--icon" />
          }
          onFocus={() => setAutoComplete(true)}
          onBlur={() => setAutoComplete(false)}
        />
      </AutoComplete>
    </Wrapper>
  );
}
