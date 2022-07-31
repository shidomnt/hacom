// @ts-check
import { Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DanhMucSanPham from './DanhMucSanPham';

const Wrapper = styled.div`
  & {
    font-size: 1.4rem;
    color: #333333;
    i {
      min-width: 40px;
      padding: 8px 12px;
      text-align: center;
      color: #888;
      font-size: 1.6rem;
    }
    .ant-space-vertical {
      width: 100%;
      .ant-space-item {
        .login {
          i {
            font-size: 3.6rem;
          }
        }
        & > div {
          display: flex;
          align-items: center;
        }
      }
    }
    a {
      color: inherit;
    }
  }
`;

export default function DrawerContent() {
  return (
    <Wrapper>
      <Space direction="vertical">
        <div className="login">
          <i className="fa-solid fa-circle-user"></i>
          Đăng kí/ Đăng nhập
        </div>
        <div>
          <DanhMucSanPham />
        </div>
        <div>
          <i className="fa-solid fa-phone-volume"></i>
          19001903
        </div>
        <Link to="/">
          <i className="fa-solid fa-headphones"></i>
          Tư vấn mua hàng
        </Link>
        <Link to="/">
          <i className="fa-solid fa-wrench"></i>
          Xây dựng cấu hình
        </Link>
        <Link to="/">
          <i className="fa-solid fa-eye"></i>
          Sản phẩm đã xem
        </Link>
        <Link to="/">
          <i className="fa-solid fa-temperature-three-quarters header__buttom--top-nav-build-list-icon"></i>
          Xây dựng tản nhiệt nước
        </Link>
        <Link to="/">
          <i className="fa-solid fa-address-card"></i>
          Liên hệ hợp tác
        </Link>
        <Link to="/">
          <i className="fa-solid fa-shield header__top--item-icon" />
          Tra cứu bảo hành
        </Link>
      </Space>
    </Wrapper>
  );
}
