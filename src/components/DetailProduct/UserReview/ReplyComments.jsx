// @ts-check
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Col, Row, Space, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  & {
    padding: 8px;
    background-color: #f8f8f8;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    .reply-comment-wrap:not(:last-child) {
      margin-bottom: 16px;
      border-bottom: 1px dashed #f8f8f8;
    }
  }
`;

const NameTag = styled.span`
  & {
    color: white;
    background-color: #f78d1c;
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 1rem;
  }
`;

/**
 * @typedef {import('react').PropsWithChildren<{ comment: import('../../../constant').Comment}>} CustomCommentProps
 */

/**
 *
 * @param {CustomCommentProps} props
 * @returns
 */

export default function ReplyComments({ comment }) {
  return (
    <Wrapper>
      {!!comment.reply &&
        !!comment.reply.length &&
        comment.reply.map((replyComment) => (
          <div className="reply-comment-wrap" key={replyComment._id}>
            <Row gutter={[8, 8]}>
              <Col span={2} xxl={2} xl={2} lg={2} md={3} sm={2} xs={3}>
                <Avatar
                  src={replyComment.author.avatarSrc}
                  icon={<UserOutlined />}
                />
              </Col>
              <Col span={22} xxl={22} xl={22} lg={22} md={21} sm={22} xs={21}>
                <div>
                  <Space align="center" direction="horizontal">
                    <Typography.Text strong>
                      {replyComment.author.name}
                    </Typography.Text>
                    {replyComment.author.nameTag && (
                      <NameTag>{replyComment.author.nameTag}</NameTag>
                    )}
                  </Space>
                </div>
                <Typography.Paragraph style={{ margin: 0 }}>
                  {replyComment.content}
                </Typography.Paragraph>
                <Typography.Text type="secondary">
                  {replyComment.createdAt}
                </Typography.Text>
              </Col>
            </Row>
          </div>
        ))}
    </Wrapper>
  );
}
