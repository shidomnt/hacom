import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  & {
    .title-index {
      font-size: 16px;
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

/**
 * 
 * @param {Object} props 
 * @param {import('../../../hooks/useApi').Showroom} props.showroom
 * @param {number} props.index
 * @returns 
 */
const ShowroomCardHeader = ({ showroom, index }) => {
  return (
    <Wrapper>
      <div className="title-index">
        <Typography.Text strong>{index}</Typography.Text>
      </div>
      <div className="title-text">
        <Typography.Text strong>
          {showroom.name}
          {showroom.isNew && (
            <span className="moi-khai-truong"> - Mới khai trương</span>
          )}
        </Typography.Text>
      </div>
    </Wrapper>
  );
};

export default ShowroomCardHeader;
