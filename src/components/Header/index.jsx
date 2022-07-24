import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ModalItem from './ModalItem';
import SubNavItem from './SubNavItem';
import SearchBar from './SearchBar';
import { Col, Row } from 'antd';
import { CartContext } from '../../contexts/CartProvider';

export default function Header() {

  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          {/* tìm cửa hàng gần nhẩt  */}
          <div className="header__top--nav">
            <Link to="#" className="header__top--item btn">
              <i className="fa-solid fa-location-dot header__top--item-icon" />
              Tìm cửa hàng gần nhất
            </Link>
          </div>
          {/* khách cá nhân */}
          <div className="header__top--nav">
            <span className="header__top--item btn-primary">
              <i className="fa-solid fa-phone header__top--item-icon" />
              Khách cá nhân
            </span>
            <div className="header__modal">
              <div className="header__modal-wrapper">
                <div className="header__modal-title">
                  <span className="header__modal-title-item header__modal-active">
                    hỗ trợ tại hà nội/toàn quốc
                  </span>
                  <span className="header__modal-title-item">
                    hỗ trợ tại hải phòng
                  </span>
                  <span className="header__modal-title-item">
                    hỗ trợ tại bắc ninh
                  </span>
                  <span className="header__modal-title-item">
                    hỗ trợ tại bắc giang
                  </span>
                </div>
                <div className="header__modal-content">
                  {/* Hà Nội/ALL */}
                  <div className="header__modal-pane modal-pane-active">
                    <div className="header__modal-hours">
                      <span>BÁN HÀNG ONLINE (8h - 24h hàng ngày)</span>
                    </div>
                    <div className="header__modal-body">
                      <ModalItem />
                      <ModalItem />
                      <ModalItem />
                    </div>
                  </div>
                  {/* Hải Phòng */}
                  <div className="header__modal-pane">
                    <div className="header__modal-hours">
                      <span>BÁN HÀNG ONLINE (8h - 21h30 hàng ngày)</span>
                    </div>
                    <div className="header__modal-body">
                      <div className="header__modal-item">
                        <span className="header__modal-item-title">
                          Bán hàng online
                        </span>
                        <ul className="header__modal-item-content">
                          <li className="header__modal-item-content-list">
                            <span className="text__blue"> </span>
                            <span className="text__red" />
                            <span>
                              Tel: 1900 1903 (máy lẻ 25387) - (022) 58830013
                            </span>
                          </li>
                        </ul>
                      </div>
                      <ModalItem />
                      <ModalItem />
                    </div>
                  </div>
                  {/* BẮC NINH  */}
                  <div className="header__modal-pane">
                    <div className="header__modal-hours">
                      <span>BÁN HÀNG ONLINE (8h - 18h30 hàng ngày)</span>
                    </div>
                    <div className="header__modal-body">
                      <div className="header__modal-item">
                        <span className="header__modal-item-title">
                          Bán hàng online
                        </span>
                        <ul className="header__modal-item-content">
                          <li className="header__modal-item-content-list">
                            <span className="text__blue"> </span>
                            <span className="text__red" />
                            <span>
                              Tel: 1900 1903 (máy lẻ 25387) - (022) 58830013
                            </span>
                          </li>
                        </ul>
                      </div>
                      <ModalItem />
                      <ModalItem />
                    </div>
                  </div>
                  {/* BẮC GIANG  */}
                  <div className="header__modal-pane">
                    <div className="header__modal-hours">
                      <span>BÁN HÀNG ONLINE (8h - 21h30 hàng ngày)</span>
                    </div>
                    <div className="header__modal-body">
                      <div className="header__modal-item">
                        <span className="header__modal-item-title">
                          Bán hàng online
                        </span>
                        <ul className="header__modal-item-content">
                          <li className="header__modal-item-content-list">
                            <span className="text__blue"> </span>
                            <span className="text__red" />
                            <span>
                              Tel: 1900 1903 (máy lẻ 25387) - (022) 58830013
                            </span>
                          </li>
                        </ul>
                      </div>
                      <ModalItem />
                      <ModalItem />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header__overlay" />
          </div>
          {/* khách doanh nghiệpp */}
          <div className="header__top--nav">
            <span className="header__top--item btn-primary">
              <i className="fa-solid fa-phone header__top--item-icon" />
              Khách Doanh nghiệp
            </span>
            <div className="header__modal">
              <div className="header__modal-wrapper">
                <div className="header__modal-title">
                  <span className="header__modal-title-item header__modal-active">
                    khách hàng doanh nghiệp
                  </span>
                </div>
                <div className="header__modal-content">
                  {/* khách doanh nghiệpp */}
                  <div className="header__modal-pane modal-pane-active">
                    <div className="header__modal-hours">
                      <span>BÁN HÀNG ONLINE (8h - 24h hàng ngày)</span>
                    </div>
                    <div className="header__modal-body">
                      <ModalItem />
                      <ModalItem />
                      <ModalItem />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header__overlay" />
          </div>
          <div className="header__top--nav">
            <span className="header__top--item btn-primary">
              <i className="fa-solid fa-phone header__top--item-icon" />
              Bán hàng - TPHCM
            </span>
          </div>
          <div className="header__top--nav">
            <Link to="#" className="header__top--item">
              <i className="fa-solid fa-shield header__top--item-icon" />
              Tra cứu bảo hàng
            </Link>
          </div>
          <div className="header__top--nav">
            <Link to="#" className="header__top--item">
              <i className="fa-solid fa-file header__top--item-icon" />
              In hóa đơn điện tử
            </Link>
          </div>
          <div className="header__top--nav">
            <Link to="#" className="header__top--item">
              <i className="fa-solid fa-bullhorn header__top--item-icon" />
              Tuyển dụng
            </Link>
          </div>
        </div>
        <div className="header__buttom">
          <div className="header__buttom--top">
            <Link to='/' className="header__buttom--top-logo">
              <img
                src="https://hanoicomputercdn.com/media/lib/19-02-2022/logo-hacomtrangch.png"
                alt="logo"
                className="header__buttom--top-logo-img"
              />
            </Link>
            <div className="header__buttom--top-nav">
              <div className="header__buttom--top-nav-build">
                <Link to="#" className="header__buttom--top-nav-build-list">
                  <i className="fa-solid fa-wrench header__buttom--top-nav-build-list-icon" />
                  Xây dựng cấu hình máy tính
                </Link>
                <Link to="#" className="header__buttom--top-nav-build-list">
                  <i className="fa-solid fa-temperature-three-quarters header__buttom--top-nav-build-list-icon"></i>
                  Xây dựng tản nhiệt nước PC
                </Link>
              </div>
              <div className="header__buttom--top-nav-hostsing">
                <div className="header__buttom--top-nav-hostsing-item">
                  <i className="fa-solid fa-phone header__buttom--top-nav-hostsing-icon phone__icon" />
                  <div className="header__buttom--top-nav-hostsing-content">
                    <span>Mua hàng online</span>
                    <span className="phone__number">1900.1903</span>
                  </div>
                </div>
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
                          <Link
                            to="#"
                            className="use__submenu--list-link social gg"
                          >
                            <i className="fa-brands fa-google" />
                            <span>Đăng nhập bằng Google</span>
                          </Link>
                        </li>
                        <li className="use__submenu--social">
                          <Link
                            to="#"
                            className="use__submenu--list-link social fb"
                          >
                            <i className="fa-brands fa-facebook-square" />
                            <span> Đăng nhập bằng Facebook</span>
                          </Link>
                        </li>
                        <li className="use__submenu--social">
                          <Link
                            to="#"
                            className="use__submenu--list-link social zl"
                          >
                            <i className="fa-solid fa-comment" />
                            <span>Đăng nhập bằng Zalo</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="header__buttom--top-nav-hostsing-item">
                  <Link to="/cart" style={{display: 'flex', color: 'inherit'}} >
                    <i className="fa-solid fa-bag-shopping header__buttom--top-nav-hostsing-icon" />
                    <div className="header__buttom--top-nav-hostsing-content">
                      <span>Giỏ hàng</span>
                      <span className="cart__price">{cart.length}</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="header__buttom--buttom">
            <Row>
              <Col span={7}>
                <div className="header__buttom--buttom-item">
                  <div className="header__buttom--buttom-btn">
                    <Link to="#" className="header__buttom--buttom-btn-link">
                      Chính sách - Hướng dẫn
                    </Link>
                    <i className="fa-solid fa-angle-down header__buttom--buttom-btn-icon" />
                    {/* submenu chích sách - hướng dẫn */}
                    <div className="header__subnav">
                      <div className="header__subnav--list">
                        <SubNavItem />
                        <SubNavItem />
                        <SubNavItem />
                        <SubNavItem />
                      </div>
                    </div>
                  </div>
                  <div className="header__buttom--buttom-btn">
                    <Link to="#" className="header__buttom--buttom-btn-link">
                      Tìm theo hãng
                    </Link>
                    <i className="fa-solid fa-angle-down header__buttom--buttom-btn-icon" />
                    {/* submenu tìm theo hãng */}
                    <div className="header__subnav brand">
                      <div className="header__subnav-header">
                        <h4>Thương hiệu nổi bật</h4>
                        <Link to="#" className="header__subnav-brand-link">
                          Xem tất cả
                          <i className="fa-solid fa-arrow-right" />
                        </Link>
                      </div>
                      <div className="header__subnav--list">
                        <ul className="header__subnav-item">
                          <li>
                            <Link to="#" className="header__subnav-link">
                              <img src="/assets/img/asus.jpg" alt="" />
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__subnav-item">
                          <li>
                            <Link to="#" className="header__subnav-link">
                              <img src="/assets/img/dell.jpg" alt="" />
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__subnav-item">
                          <li>
                            <Link to="#" className="header__subnav-link">
                              <img src="/assets/img/msi.jpg" alt="" />
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__subnav-item">
                          <li>
                            <Link to="#" className="header__subnav-link">
                              <img src="/assets/img/hp.jpg" alt="" />
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__subnav-item">
                          <li>
                            <Link to="#" className="header__subnav-link">
                              <img src="/assets/img/acer.jpg" alt="" />
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__subnav-item">
                          <li>
                            <Link to="#" className="header__subnav-link">
                              <img src="/assets/img/intel.png" alt="" />
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__subnav-item">
                          <li>
                            <Link to="#" className="header__subnav-link">
                              <img src="/assets/img/amd.jpg" alt="" />
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__subnav-item">
                          <li>
                            <Link to="#" className="header__subnav-link">
                              <img src="/assets/img/lenovo.jpg" alt="" />
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__subnav-item">
                          <li>
                            <Link to="#" className="header__subnav-link">
                              <img src="/assets/img/gigabyte.jpg" alt="" />
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__subnav-item">
                          <li>
                            <Link to="#" className="header__subnav-link">
                              <img src="/assets/img/microsoft.jpg" alt="" />
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__subnav-item">
                          <li>
                            <Link to="#" className="header__subnav-link">
                              <img src="/assets/img/lg.jpg" alt="" />
                            </Link>
                          </li>
                        </ul>
                        <ul className="header__subnav-item">
                          <li>
                            <Link to="#" className="header__subnav-link">
                              <img src="/assets/img/samsung.jpg" alt="" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                {/* start header search */}
                <SearchBar />
              </Col>
              <Col span={5}>
                {/* end header search */}
                <div className="header__sep">
                  <Link to="#" className="header__sep--item">
                    <i className="fas fa-rss header__sep--item-icon" />
                    Tin công nghệ
                  </Link>
                  <Link to="#" className="header__sep--item">
                    <i className="fa-solid fa-tags header__sep--item-icon" />
                    Khuyến mại
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </header>
  );
}
