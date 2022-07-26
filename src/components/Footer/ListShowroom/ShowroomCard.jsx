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
      background-color: #243a76;
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
 * 
 * @param {Object} props 
 * @param {import('../../../hooks/useApi').Showroom} props.showroom
 * @param {number} props.index
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
