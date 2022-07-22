import { Divider, List, Space, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import Gift from "./Gift";
import Price from "./Price";

const Wrapper = styled.div`
  & {
    font-size: 12px;
    .color-288ad6 {
      color: #288ad6;
    }
    .thongso-sp {
      font-size: inherit;
      color: #444444;
      padding-left: 6px;
      padding-top: 6px;
      i {
        font-size: 8px;
        margin-right: 4px;
        transform: translate(0, -1px);
      }
    }
    .summary {
      .title {
        font-size: 14px;
      }
    }
  }
`;

export default function DetailInfo({ product }) {
  return (
    <Wrapper>
      <Space direction="vertical">
        <div>
          <Typography.Text>
            Mã SP: <span className="color-288ad6">{product.sku}</span>
          </Typography.Text>
          <Divider type="vertical" />
          <Typography.Text>
            Đánh giá:{" "}
            <img
              src={`https://hacom.vn/media/lib/star_${product.rate
                .split("")
                .slice(1, -1)}.png`}
              alt=""
            />{" "}
            <span className="color-288ad6">{product.rate.slice(1, -1)}</span>
          </Typography.Text>
          <Divider type="vertical" />
          <Typography.Text>
            Bình luận: <span className="color-288ad6">0</span>
          </Typography.Text>
          <Divider type="vertical" />
          <Typography.Text>
            Lượt xem: <span className="color-288ad6">0</span>
          </Typography.Text>
        </div>
        <div className="summary">
          <Typography.Text className="title">Thông số sản phẩm</Typography.Text>
          <List
            className="thongso-sp"
            dataSource={product.tssp.map(ts => ts.trim()).filter(v => !!v)}
            renderItem={(thongso) => (
              <li>
                <i className="fa-solid fa-angle-right"></i> {thongso}
              </li>
            )}
          />
        </div>
        <Price product={product} />
        <Gift uudai={product.uudai.slice(1)} />
      </Space>
    </Wrapper>
  );
}
