// @ts-check
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export default function Loading() {
  return (
    <Wrapper>
      <Spin indicator={<LoadingOutlined spin />} />
    </Wrapper>
  );
}
