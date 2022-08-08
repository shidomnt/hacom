import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import ShowroomCardHeader from './ShowroomCardHeader';
import ShowroomInfo from './ShowroomInfo';
import { Showroom } from '../../../interfaces';

const StyledCard = styled(Card)`
  & {
    .ant-card-head {
      min-height: auto;
      margin: 0;
      padding: 0;
      border: none;
      background-color: var(--primary-color);
      color: white;
      font-size: 1.3rem;
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

interface ShowroomCardProps {
  showroom: Showroom;
  index: number;
}

export default function ShowroomCard({ showroom, index }: ShowroomCardProps) {
  return (
    <StyledCard
      title={<ShowroomCardHeader showroom={showroom} index={index} />}
      bordered={false}
    >
      <ShowroomInfo showroom={showroom} />
    </StyledCard>
  );
}
