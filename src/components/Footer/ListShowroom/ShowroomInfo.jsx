import { Typography } from "antd";
import React from "react";

export default function ShowroomInfo({ showroom }) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
