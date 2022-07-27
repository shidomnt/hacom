// @ts-check
import { Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  & {
    .showroom-info {
      margin: 6px 0;
      font-size: 12px;
      a {
        color: red;
      }
      i {
        min-width: 20px;
      }
    }
  }
`;

/**
 * @typedef {Object} ShowroomInfoProps 
 * @property {import('../../../hooks/useApi').Showroom} showroom
 */

/**
 * @param {import('react').PropsWithChildren<ShowroomInfoProps>} props 
 * @returns 
 */
export default function ShowroomInfo({ showroom }) {
  return (
    <Wrapper>
      {showroom.diachi && (
        <div className="showroom-info">
          <i className="fa-solid fa-location-dot"></i>
          <Typography.Text strong>{showroom.diachi}</Typography.Text>
        </div>
      )}
      {
        <div className="showroom-info">
          <a href={showroom.map} target="_blank" rel="noreferrer">
            <i className="fa-solid fa-map-location-dot"></i>
            Xem bản đồ đường đi
          </a>
        </div>
      }
      {showroom.phone && (
        <div className="showroom-info">
          <i className="fa-solid fa-phone"></i>
          Tel: {showroom.phone} - {showroom.dienthoaiban}
        </div>
      )}
      {showroom.baohanh && (
        <div className="showroom-info">
          <i className="fa-solid fa-phone"></i>
          Bảo hành: {showroom.baohanh}
        </div>
      )}
      {showroom.email && (
        <div className="showroom-info">
          <i className="fa-solid fa-envelope"></i>
          Email: {showroom.email}
        </div>
      )}
      {showroom.openTime && (
        <div className="showroom-info">
          <i className="fa-solid fa-clock"></i>
          {showroom.openTime}
        </div>
      )}
    </Wrapper>
  );
}
