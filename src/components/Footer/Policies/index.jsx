// @ts-check
import React from 'react';
import { Row, Col } from 'antd';

const policyList = [
  {
    icon: <i className="fa-solid fa-truck-fast footer__policies--icon" />,
    title: 'CHÍNH SÁCH GIAO HÀNG',
    content: 'Nhận hàng và thanh toán tại nhà',
  },
  {
    icon: <i className="fa-solid fa-arrows-rotate footer__policies--icon" />,
    title: 'ĐỔI TRẢ DỄ DÀNG',
    content: '1 đổi 1 trong 15 ngày',
  },
  {
    icon: <i className="fa-solid fa-credit-card footer__policies--icon" />,
    title: 'THANH TOÁN TIỆN LỢI',
    content: 'Trả tiền mặt, CK, trả góp 0%',
  },
  {
    icon: <i className="fa-solid fa-comments footer__policies--icon" />,
    title: 'HỖ TRỢ NHIỆT TÌNH',
    content: 'Tư vấn, giải đáp mọi thắc mắc',
  },
];

const Policies = () => {
  return (
    <div className="footer__policies-list">
      <Row gutter={[6, 6]}>
        {policyList.map((policy) => (
          <Col
            key={policy.title}
            span={6}
            xxl={6}
            xl={6}
            lg={6}
            md={12}
            sm={12}
            xs={24}
          >
            <div className="footer__policies">
              {policy.icon}
              <div className="footer__policies--description">
                <h3 className="footer__policies--title">{policy.title}</h3>
                <span className="footer__policies--content">
                  {policy.content}
                </span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Policies;
