// @ts-check
import { CameraOutlined } from '@ant-design/icons';
import { Button, Input, Row, Upload } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  & {
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    .comment-box {
      border-bottom: 1px solid #e8e8e8;
    }
  }
`;

/**
 * @typedef {import('react').PropsWithoutRef<Partial<{value: string, onChange: (value: string) => void, onSubmit: () => void}>>} CommentBoxProps
 */

/**
 * @param {Required<CommentBoxProps>} props
 * @returns
 */

export default function CommentBox({ value, onChange, onSubmit }) {
  return (
    <Wrapper>
      <Input.TextArea
        bordered={false}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="comment-box"
        placeholder="Mời bạn để lại bình luận..."
        autoSize={{ minRows: 3 }}
      />
      <Row justify="space-between" style={{ padding: '4px' }}>
        <Upload>
          <Button type="text">
            <CameraOutlined /> Gửi ảnh
          </Button>
        </Upload>
        <Button onClick={onSubmit} type="primary">
          Gửi bình luận
        </Button>
      </Row>
    </Wrapper>
  );
}
