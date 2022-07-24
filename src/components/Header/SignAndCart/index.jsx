import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../contexts/CartProvider";

export default function SignAndCart() {
  const { cart } = useContext(CartContext);

  return (
    <React.Fragment>
      <div className="header__buttom--top-nav-hostsing-item">
        <i className="fa-solid fa-user header__buttom--top-nav-hostsing-icon" />
        <div className="header__buttom--top-nav-hostsing-content">
          <span>Đăng ký</span>
          <span>Đăng nhập</span>
          <div className="use__submenu">
            <ul className="use__submenu--list">
              <li>
                <Link to="#" className="use__submenu--list-link">
                  <span>Đăng nhập</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="use__submenu--list-link">
                  <span>Đăng ký</span>
                </Link>
              </li>
              <li className="use__submenu--social">
                <Link to="#" className="use__submenu--list-link social gg">
                  <i className="fa-brands fa-google" />
                  <span>Đăng nhập bằng Google</span>
                </Link>
              </li>
              <li className="use__submenu--social">
                <Link to="#" className="use__submenu--list-link social fb">
                  <i className="fa-brands fa-facebook-square" />
                  <span> Đăng nhập bằng Facebook</span>
                </Link>
              </li>
              <li className="use__submenu--social">
                <Link to="#" className="use__submenu--list-link social zl">
                  <i className="fa-solid fa-comment" />
                  <span>Đăng nhập bằng Zalo</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header__buttom--top-nav-hostsing-item">
        <Link to="/cart" style={{ display: "flex", color: "inherit" }}>
          <i className="fa-solid fa-bag-shopping header__buttom--top-nav-hostsing-icon">
            <span className="cart__price">{cart.length}</span>
          </i>
          <div className="header__buttom--top-nav-hostsing-content">
            <span>Giỏ hàng</span>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
}
