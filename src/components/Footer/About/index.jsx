// @ts-check
import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Row>
      <Col span={6} xxl={6} xl={6} lg={8} md={8} sm={12} xs={12}>
        <ul className="footet__buttom--body-item">
          <li>
            <h4 className="footet__buttom--body-title">GIỚI THIỆU HACOM</h4>
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
            <a
              href="https://www.facebook.com/www.hacom.vn"
              target="_blank"
              rel="noreferrer"
              className="footer__buttom-link"
            >
              <i className="fa-brands fa-facebook-square fb" />
            </a>
            <a
              href="https://www.youtube.com/c/HACOMchannel"
              target="_blank"
              rel="noreferrer"
              className="footer__buttom-link"
            >
              <i className="fa-brands fa-youtube-square ytb" />
            </a>
            <a
              href="https://www.instagram.com/hacom.vn/"
              target="_blank"
              rel="noreferrer"
              className="footer__buttom-link"
            >
              {' '}
              <i className="fa-brands fa-instagram-square ins" />
            </a>
          </li>
        </ul>
      </Col>
      <Col span={6} xxl={6} xl={6} lg={8} md={8} sm={12} xs={12}>
        <ul className="footet__buttom--body-item">
          <li>
            <h4 className="footet__buttom--body-title">HỖ TRỢ KHÁCH HÀNG</h4>
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
        </ul>
      </Col>
      <Col span={6} xxl={6} xl={6} lg={8} md={8} sm={0} xs={0}>
        <ul className="footet__buttom--body-item">
          <li>
            <h4 className="footet__buttom--body-title">CHÍNH SÁCH CHUNG</h4>
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
      <Col span={6} xxl={6} xl={6} lg={0} md={0} sm={0} xs={0}>
        <ul className="footet__buttom--body-item">
          <li>
            <h4 className="footet__buttom--body-title">THÔNG TIN KHUYẾN MẠI</h4>
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
                src="/assets/img/dathongbao.png"
                alt="dadangky"
                className="footer__buttom-img"
              />
            </Link>
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default About;
