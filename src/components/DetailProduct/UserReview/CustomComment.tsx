import { UserOutlined } from '@ant-design/icons';
import {
  Avatar,
  Button,
  Col,
  Divider,
  Grid,
  Row,
  Space,
  Typography,
} from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Comment } from '../../../interfaces';
import CommentBox from './CommentBox';
import ReplyComments from './ReplyComments';

const Wrapper = styled.div`
  & {
    .comment-reply-btn {
      padding-left: 0;
      color: #288ad9;
    }
    .comment-user-info {
      display: flex;
      justify-content: center;
      font-size: 1.2rem;
      * {
        font-size: inherit;
      }
    }
  }
`;

interface CustomCommentProps {
  onReply: (
    content: string,
    replyTo?: Comment['_id'],
    onFinishCb?: () => void
  ) => Promise<any>;
  comment: Comment;
}

export default function CustomComment({
  comment,
  onReply,
}: CustomCommentProps) {
  const [replyVisible, setReplyVisible] = useState(false);
  const [replyComment, setReplyComment] = useState('');

  const { lg } = Grid.useBreakpoint();

  return (
    <Wrapper>
      <Divider type="horizontal" dashed={true} />
      <Row>
        <Col span={6} xxl={6} xl={6} lg={6} md={24} sm={24} xs={24}>
          <div
            className="comment-user-info"
            style={!lg ? { justifyContent: 'start' } : {}}
          >
            <Space direction={lg ? 'vertical' : 'horizontal'} align="center">
              <Avatar
                src={comment.author?.avatarSrc}
                size={50}
                icon={<UserOutlined />}
              />
              <Typography.Text strong>{comment.author.name}</Typography.Text>
              <Typography.Text type="secondary">
                {moment(comment.createdAt).startOf('second').fromNow()}
              </Typography.Text>
            </Space>
          </div>
        </Col>
        <Col span={18} xxl={18} xl={18} lg={18} md={24} sm={24} xs={24}>
          <div>
            <Typography.Text>{comment.content}</Typography.Text>
          </div>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Button
              onClick={() => setReplyVisible((prev) => !prev)}
              className="comment-reply-btn"
              type="text"
            >
              Trả lời
            </Button>
            {!!comment?.reply && !!comment.reply.length && (
              <ReplyComments comment={comment} />
            )}
            <div>
              {replyVisible && (
                <CommentBox
                  value={replyComment}
                  onChange={(value) => setReplyComment(value)}
                  onSubmit={() =>
                    onReply(replyComment, comment._id, () =>
                      setReplyComment('')
                    )
                  }
                />
              )}
            </div>
          </Space>
        </Col>
      </Row>
    </Wrapper>
  );
}
