import { Collapse } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { Showroom } from '../../../interfaces';
import ShowroomInfo from './ShowroomInfo';

const Wrapper = styled.div``;

interface ListShowroomCollapseProps {
  showrooms: Array<Showroom>;
}
export default function ListShowroomCollapse({
  showrooms,
}: ListShowroomCollapseProps) {
  return (
    <Wrapper>
      <Collapse
        expandIconPosition="end"
        expandIcon={(props) => {
          return props.isActive ? (
            <i className="fa-solid fa-minus"></i>
          ) : (
            <i className="fa-solid fa-plus"></i>
          );
        }}
      >
        {showrooms.map((showroom) => (
          <Collapse.Panel key={showroom.name} header={showroom.name}>
            <ShowroomInfo showroom={showroom} />
          </Collapse.Panel>
        ))}
      </Collapse>
    </Wrapper>
  );
}
