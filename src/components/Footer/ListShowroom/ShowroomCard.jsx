// @ts-check
import React from 'react';
import { Card } from 'antd'
import styled from 'styled-components';
import ShowroomCardHeader from './ShowroomCardHeader'
import ShowroomInfo from './ShowroomInfo'

const StyledCard = styled(Card)`
  & {
    .ant-card-head {
      min-height: auto;
      margin: 0;
      padding: 0;
      border: none;
      background-color: var(--primary-color);
      color: white;
      font-size: 13px;
      text-transform: uppercase;
      border-radius: 5px;
      * {
        min-height: inherit;
      }
      .ant-card-head-title {
        padding: 0;
      }
    }
    .ant-card-body {
      padding: 0;
    }
  }
`;

/**
 * @typedef {Object} ShowroomCardProps 
 * @property {import('../../../hooks/useApi').Showroom} showroom
 * @property {number} index
 */

/**
 * @param {import('react').PropsWithChildren<ShowroomCardProps>} props 
 * @returns 
 */
export default function ShowroomCard({showroom, index}) {
  return (
    <StyledCard
      title={<ShowroomCardHeader showroom={showroom} index={index} />}
      bordered={false}
    >
      <ShowroomInfo showroom={showroom} />
    </StyledCard>
  );
}
