import React from "react";
import { Link } from 'react-router-dom'
import { Col, Row } from "antd";
import ListShowroom from "./ListShowroom";

export default function Footer() {
  return (
    <footer className="footer">
      {/* HỆ THỐNG CÁC SHOWROOM CỦA HACOM */}
      <div className="container">
        <h3 className="footer__title">HỆ THỐNG CÁC SHOWROOM CỦA HACOM</h3>
        <ListShowroom />
        <div className="footer__buttom">
          <div className="footer__buttom--header">
              <div className="footer__policies-list">
                <div className="footer__policies">
                  <i className="fa-solid fa-truck-fast footer__policies--icon" />
                  <div className="footer__policies--description">
                    <h3 className="footer__policies--title">
                      CHÍNH SÁCH GIAO HÀNG
                    </h3>
                    <span className="footer__policies--content">
                      Nhận hàng và thanh toán tại nhà
                    </span>
                  </div>
                </div>
                <div className="footer__policies">
                  <i className="fa-solid fa-arrows-rotate footer__policies--icon" />
                  <div className="footer__policies--description">
                    <h3 className="footer__policies--title">ĐỔI TRẢ DỄ DÀNG</h3>
                    <span className="footer__policies--content">
                      1 đổi 1 trong 15 ngày
                    </span>
                  </div>
                </div>
                <div className="footer__policies">
                  <i className="fa-solid fa-credit-card footer__policies--icon" />
                  <div className="footer__policies--description">
                    <h3 className="footer__policies--title">
                      THANH TOÁN TIỆN LỢI
                    </h3>
                    <span className="footer__policies--content">
                      Trả tiền mặt, CK, trả góp 0%
                    </span>
                  </div>
                </div>
                <div className="footer__policies">
                  <i className="fa-solid fa-comments footer__policies--icon" />
                  <div className="footer__policies--description">
                    <h3 className="footer__policies--title">
                      HỖ TRỢ NHIỆT TÌNH
                    </h3>
                    <span className="footer__policies--content">
                      Tư vấn, giải đáp mọi thắc mắc
                    </span>
                  </div>
                </div>
              </div>
          </div>
          <div className="footer__buttom--body">
              <Row>
                <Col span={6}>
                  <ul className="footet__buttom--body-item">
                    <li>
                      <h4 className="footet__buttom--body-title">
                        GIỚI THIỆU HACOM
                      </h4>
                    </li>
                    <li>
                      <Link to="#" className="footer__buttom-link">
                        Giới thiệu công ty
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="footer__buttom-link">
                        Liên hệ hợp tác kinh doanh
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="footer__buttom-link">
                        Thông tin tuyển dụng
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="footer__buttom-link">
                        Tin tức
                      </Link>
                    </li>
                    <li className="footer__social">
                      <Link to="#" className="footer__buttom-link">
                        <i className="fa-brands fa-facebook-square fb" />
                      </Link>
                      <Link to="#" className="footer__buttom-link">
                        <i className="fa-brands fa-youtube-square ytb" />
                      </Link>
                      <Link to="#" className="footer__buttom-link">
                        {" "}
                        <i className="fa-brands fa-instagram-square ins" />
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col span={6}>
                  <ul className="footet__buttom--body-item">
                    <li>
                      <h4 className="footet__buttom--body-title">
                        HỖ TRỢ KHÁCH HÀNG
                      </h4>
                    </li>
                    <li>
                      <Link to="#" className="footer__buttom-link">
                        Hướng dẫn mua hàng trực tuyến
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="footer__buttom-link">
                        Hướng dẫn thanh toán
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="footer__buttom-link">
                        Hướng dẫn mua hàng trả góp
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="footer__buttom-link">
                        In hóa đơn điện tử
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="footer__buttom-link">
                        Gửi yêu cầu bảo hành
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="footer__buttom-link">
                        Góp ý, Khiếu Nại
                      </Link>
                    </li>
                    <li>
                      <button className="foooter__btn">
                        Xem giao diện bản mobile
                      </button>
                    </li>
                  </ul>
                </Col>
                <Col span={6}>
                  <ul className="footet__buttom--body-item">
                    <li>
                      <h4 className="footet__buttom--body-title">
                        CHÍNH SÁCH CHUNG
                      </h4>
                    </li>
                    <li>
                      <Link to="#" className="footer__buttom-link">
                        Chính sách, quy định chung
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="footer__buttom-link">
                        Chính sách bảo hành
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="footer__buttom-link">
                        Chính sách cho doanh nghiệp
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="footer__buttom-link">
                        Chính sách hàng chính hãng
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="footer__buttom-link">
                        Bảo mật thông tin khách hàng
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="footer__buttom-link">
                        Chính sách nhập lại tính phí
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col span={6}>
                  <ul className="footet__buttom--body-item">
                    <li>
                      <h4 className="footet__buttom--body-title">
                        THÔNG TIN KHUYẾN MẠI
                      </h4>
                    </li>
                    <li>
                      <Link to="#" className="footer__buttom-link">
                        Thông tin khuyến mại
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="footer__buttom-link">
                        Sản phẩm khuyến mại
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="footer__buttom-link">
                        Sản phẩm bán chạy
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="footer__buttom-link">
                        Sản phẩm mới
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="footer__buttom-link">
                        <img
                          src="./assets/img/dathongbao.png"
                          alt="dadangky"
                          className="footer__buttom-img"
                        />
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
          </div>
        </div>
      </div>
    </footer>
  );
}
