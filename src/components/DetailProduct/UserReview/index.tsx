import { StarFilled } from '@ant-design/icons';
import {
  Col,
  Divider,
  Grid,
  message,
  Progress,
  Rate,
  Row,
  Space,
  Typography,
} from 'antd';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProductContext } from '..';
import { createComment, getComments } from '../../../api/commentApi';
import { UserContext } from '../../../contexts/UserProvider';
import {
  Comment,
  CreateCommentDto,
  ProductContextInterface,
  UserContextInterface,
} from '../../../interfaces';
// import { listCommentFake } from '../../../constant';
import CommentBox from './CommentBox';
import CustomComment from './CustomComment';

const Wrapper = styled.div`
  & {
    .avgRate {
      color: #fe302e;
      font-size: 4rem;
    }
    .helper-text {
      font-size: 1.2rem;
      padding: 2px 6px;
      color: white;
      background-color: #52b858;
      border-radius: 3px;
      position: relative;
      &::before {
        --length: 6px;
        content: '';
        display: block;
        position: absolute;
        left: calc(var(--length) * (-2));
        top: 50%;
        transform: translateY(-50%);
        border: var(--length) solid transparent;
        border-right-color: #52b858;
      }
    }
    .rate-control {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .number-review-by-star {
      color: #318fd8;
      * {
        color: inherit;
      }
    }
  }
`;

const helperTextMapping = [
  '',
  'Không thích',
  'Tạm được',
  'Bình thường',
  'Hài lòng',
  'Rất hài lòng',
];

export default function UserReview() {
  const [starValue, setStarValue] = useState(5);
  const [starHoverValue, setStarHoverValue] = useState(0);
  const [commentValue, setCommentValue] = useState('');
  const [listComment, setListComment] = useState<Array<Comment>>([]);

  const { product } = useContext(ProductContext) as ProductContextInterface;
  const { user } = useContext(UserContext) as UserContextInterface;

  const { xl } = Grid.useBreakpoint();

  const handleGetComments = useCallback(async () => {
    const response = await getComments(product._id);
    if (!response?.data?.success) {
      return message.warn('Ban phai dang nhap de dung tinh nang nay!');
    }
    setListComment(response.data.data);
  }, [product._id]);

  useEffect(() => {
    handleGetComments();
  }, [handleGetComments]);

  const handleSubmit = async (
    content: string,
    replyTo?: Comment['_id'],
    onFinishCb?: () => void
  ) => {
    if (content) {
      if (!user) {
        return message.warn('Ban phai dang nhap de dung tinh nang nay!');
      }
      const comment: CreateCommentDto = {
        product: replyTo ? undefined : product._id,
        content,
      };
      if (replyTo) {
        comment.replyTo = replyTo;
      }
      const response = await createComment(comment);
      if (!response?.data?.success) {
        return message.error('Loi khi tao comment');
      }
      console.log(response.data.data);
      await handleGetComments();
      if (onFinishCb) {
        onFinishCb();
      }
    }
  };

  return (
    <Wrapper>
      <Typography.Title level={4}>
        Khách hàng chấm điểm, đánh giá, nhận xét
      </Typography.Title>
      <Divider type="horizontal" />
      <Row align="middle" gutter={[0, 16]}>
        <Col span={8} xxl={8} xl={8} lg={8} md={12} sm={12} xs={24}>
          <Row justify="center" align="middle">
            <Typography.Text className="avgRate">
              0/5 <StarFilled />
            </Typography.Text>
          </Row>
        </Col>
        <Col span={8} xxl={8} xl={8} lg={6} md={12} sm={12} xs={24}>
          <Row justify="center">
            <div>
              {[1, 2, 3, 4, 5].map((reviewStar) => (
                <div style={{ display: 'flex' }} key={reviewStar}>
                  <Space direction="horizontal">
                    <Typography.Text>{reviewStar}</Typography.Text>{' '}
                    <StarFilled />
                    {xl && (
                      <Progress
                        showInfo={false}
                        type="line"
                        style={{ width: '60px' }}
                        percent={0}
                      />
                    )}
                    <Typography.Text className="number-review-by-star">
                      <Typography.Text strong>0</Typography.Text> đánh giá
                    </Typography.Text>
                  </Space>
                </div>
              ))}
            </div>
          </Row>
        </Col>
        <Col span={8} xxl={8} xl={8} lg={10} md={24} sm={24} xs={24}>
          <Row>
            <div className="rate-control">
              <Typography.Text>Chia sẻ nhận xét về sản phẩm</Typography.Text>
              <Space direction="horizontal" size="middle">
                <Rate
                  allowClear={false}
                  value={starValue}
                  onChange={(value) => setStarValue(value)}
                  onHoverChange={(value) => setStarHoverValue(value)}
                />
                <div className="helper-text">
                  {helperTextMapping[starHoverValue || starValue]}
                </div>
              </Space>
            </div>
          </Row>
        </Col>
        <Col span={24}>
          <CommentBox
            value={commentValue}
            onChange={(value) => setCommentValue(value)}
            onSubmit={() =>
              handleSubmit(commentValue, undefined, () => setCommentValue(''))
            }
          />
        </Col>
        <Col span={24}>
          {!!listComment.length &&
            listComment.map((comment) => (
              <CustomComment
                key={comment._id}
                onReply={handleSubmit}
                comment={comment}
              />
            ))}
        </Col>
      </Row>
    </Wrapper>
  );
}
