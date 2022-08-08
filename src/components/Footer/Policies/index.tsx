import React from 'react';
import { Row, Col } from 'antd';
import { policyList } from '../../../constant';

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
