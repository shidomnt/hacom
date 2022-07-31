// @ts-check
import { Empty } from "antd";
import React from "react";

export default function EmptySearch() {
  return (
    <Empty
      description="Không tìm thấy sản phẩm nào :("
      image={Empty.PRESENTED_IMAGE_SIMPLE}
    />
  );
}
