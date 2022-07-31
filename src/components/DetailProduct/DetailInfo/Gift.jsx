// @ts-check
import { Card, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  & {
    border-radius: 5px;
    .ant-card-head {
      background-color: #f1f1f1;
      border-radius: 5px;
      .card-title {
        color: #ed1b24;
        i {
          margin-right: 3px;
        }
      }
    }
    .ant-card-body {
      max-height: 250px;
      overflow-y: scroll;
      font-size: 1.3rem;
      &::-webkit-scrollbar {
        display: none;
      }
      .title {
        color: #ed1b24;
      }
      .content {
        padding-left: 6px;
        line-height: 1.5;
      }
    }
  }
`;

/**
 * @typedef {Object} GiftProps
 * @property {import("../../../hooks/useApi").Product['uudai']} uudai
 */

/**
 * @param {import("react").PropsWithChildren<GiftProps>} props
 * @returns
 */
export default function Gift({ uudai }) {
  return (
    <StyledCard
      title={
        <Typography.Text className="card-title" strong>
          {' '}
          <i className="fa-solid fa-gift"></i> Quà tặng và ưu đãi kèm theo
        </Typography.Text>
      }
    >
      {uudai.map((chitietuudai, index) => {
        if (chitietuudai[0] !== '+') {
          return (
            <Typography.Title key={index} className="title" level={5}>
              {chitietuudai}
            </Typography.Title>
          );
        }
        return (
          <div key={index} className="content">
            {chitietuudai}
          </div>
        );
      })}
    </StyledCard>
  );
}
