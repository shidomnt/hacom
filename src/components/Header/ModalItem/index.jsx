import React from "react";

const data = [1, 2, 3, 4];

export default function ModalItem() {
  return (
    <div className="header__modal-item">
      <span className="header__modal-item-title">Tư vấn sản phẩm</span>
      <ul className="header__modal-item-content">
        {data.map((key) => (
          <li key={key} className="header__modal-item-content-list">
            <span className="text__blue">
              <i className="fa-solid fa-comment-dots" />
              Zalo
            </span>
            <span className="text__red">098xxxxxxx</span>
            <span> Mr Duy (Tản nhiệt, Cooling)</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
