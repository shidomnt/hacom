// @ts-check
import { Input } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import AutoComplete from '../../SearchBar/AutoComplete';

const Wrapper = styled.div`
& {
  .ant-input-search-button {
    border: none;
  }
}
`

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  const [autoComplete, setAutoComplete] = useState(false);

  return (
    <Wrapper>
      <AutoComplete visible={autoComplete} searchValue={searchValue}>
        <Input.Search
          value={searchValue}
          placeholder="Nhập tên, mã sản phẩm"
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setAutoComplete(true)}
          onBlur={() => setTimeout(() => setAutoComplete(false), 200)}
        />
      </AutoComplete>
    </Wrapper>
  );
}
