import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../contexts/CartProvider";
import SignOtherPlatform from './SignOtherPlatform'
import SignModal from './SignModal'

export default function SignAndCart() {
  const { cart } = useContext(CartContext);

  const [modalVisible, setModalVisible] = useState(false);

  function handleShowModal() {
    setModalVisible(true);
  }

  function handleHideModal() {
    setModalVisible(false);
  }

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
                <span onClick={handleShowModal} className="use__submenu--list-link">
                  <span>Đăng nhập</span>
                </span>
              </li>
              <li>
                <span onClick={handleShowModal} className="use__submenu--list-link">
                  <span>Đăng ký</span>
                </span>
              </li>
              <SignOtherPlatform />
            </ul>
          </div>
          <SignModal visible={modalVisible} onCancel={handleHideModal} />
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
