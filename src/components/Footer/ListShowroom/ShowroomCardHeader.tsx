import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';
import { Showroom } from '../../../interfaces';

const Wrapper = styled.div`
  & {
    .title-index {
      font-size: 1.6rem;
      padding: 4px 16px;
      background-color: #ed1b24;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    .title-text {
      flex: 1;
      padding: 7px 12px;
      .moi-khai-truong {
        color: #b9f300;
        text-transform: none;
      }
    }
    display: flex;
    .ant-typography {
      color: inherit;
    }
  }
`;

interface ShowroomCardHeaderProps {
  showroom: Showroom;
  index: number;
}
const ShowroomCardHeader = ({ showroom, index }: ShowroomCardHeaderProps) => {
  return (
    <Wrapper>
      <div className="title-index">
        <Typography.Text strong>{index}</Typography.Text>
      </div>
      <div className="title-text">
        <Typography.Text strong>
          {showroom.name}
          {showroom.moikhaitruong && (
            <span className="moi-khai-truong"> - Mới khai trương</span>
          )}
        </Typography.Text>
      </div>
    </Wrapper>
  );
};

export default ShowroomCardHeader;
