import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../contexts/CartProvider';
import SignOtherPlatform from './SignOtherPlatform';
import SignModal from './SignModal';
import { UserActionContext, UserContext } from '../../../contexts/UserProvider';
import {
  CartContextInterface,
  ModalSignContextInterface,
  UserActionContextInterface,
  UserContextInterface,
} from '../../../interfaces';
import { SIGN_STATE } from '../../../constant';

const ModalSignContext = React.createContext<ModalSignContextInterface | null>(
  null
);

export default function SignAndCart() {
  const { cart } = useContext(CartContext) as CartContextInterface;

  const { user } = useContext(UserContext) as UserContextInterface;

  const [modalVisible, setModalVisible] = useState(false);

  const [signState, setSignState] = useState<SIGN_STATE>(
    () => SIGN_STATE.SIGNIN_WITH_PHONE
  );

  const { logout } = useContext(
    UserActionContext
  ) as UserActionContextInterface;

  function handleShowModal() {
    setModalVisible(true);
  }

  function handleHideModal() {
    setModalVisible(false);
  }

  function handleLogout() {
    logout();
  }

  return (
    <ModalSignContext.Provider
      value={{
        setModalVisible,
        setSignState,
        signState,
      }}
    >
      <div className="header__buttom--top-nav-hostsing-item">
        <i className="fa-solid fa-user header__buttom--top-nav-hostsing-icon" />
        <div className="header__buttom--top-nav-hostsing-content">
          {user ? (
            <React.Fragment>
              <span>Xin chào</span>
              <span>{user.name}</span>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <span>Đăng ký</span>
              <span>Đăng nhập</span>
            </React.Fragment>
          )}
          <div className="use__submenu">
            {user ? (
              <ul className="user__submenu--list">
                <span
                  onClick={handleLogout}
                  className="use__submenu--list-link"
                >
                  <span>Đăng xuất</span>
                </span>
              </ul>
            ) : (
              <ul className="use__submenu--list">
                <li>
                  <span
                    onClick={() => {
                      setSignState(SIGN_STATE.SIGNIN_WITH_EMAIL);
                      handleShowModal();
                    }}
                    className="use__submenu--list-link"
                  >
                    <span>Đăng nhập</span>
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => {
                      setSignState(SIGN_STATE.SIGNUP_WITH_EMAIL);
                      handleShowModal();
                    }}
                    className="use__submenu--list-link"
                  >
                    <span>Đăng ký</span>
                  </span>
                </li>
                <SignOtherPlatform />
              </ul>
            )}
          </div>
          <SignModal visible={modalVisible} onCancel={handleHideModal} />
        </div>
      </div>
      <div className="header__buttom--top-nav-hostsing-item">
        <Link to="/cart" style={{ display: 'flex', color: 'inherit' }}>
          <i className="fa-solid fa-bag-shopping header__buttom--top-nav-hostsing-icon">
            <span className="cart__price">{cart.length}</span>
          </i>
          <div className="header__buttom--top-nav-hostsing-content">
            <span>Giỏ hàng</span>
          </div>
        </Link>
      </div>
    </ModalSignContext.Provider>
  );
}

export { ModalSignContext };
