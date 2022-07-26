import { Collapse } from 'antd';
import React from 'react';
import styled from 'styled-components';
import ShowroomInfo from './ShowroomInfo';

const Wrapper = styled.div``;

/**
 * 
 * @param {Object} props 
 * @param {import('../../../hooks/useApi').Showroom[]} props.showrooms 
 * @returns 
 */
export default function ListShowroomCollapse({ showrooms }) {
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
