// @ts-check
import React from 'react'
import { Link } from 'react-router-dom'

const data = [1, 2, 3, 4]

export default function SubNavItem() {
  return (
    <ul className="header__subnav-item">
      <li>
        <h3 className="header__subnav-title">HỖ TRỢ KHÁCH HÀNG</h3>
      </li>
      {data.map((key) => (
        <li key={key}>
          <Link to="#" className="header__subnav-link">
            <i className="fa-solid fa-check" />
            Hướng dẫn mua hàng trực tuyến
          </Link>
        </li>
      ))}
    </ul>
  )
}
