// @ts-check
import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useApi from "../../hooks/useApi";

const Wrapper = styled.div`
  & {
    --color: #3c4a65;
    .ant-typography {
      color: var(--color);
      position: relative;
      display: inline-block;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: bold;
      &::before {
        position: absolute;
        width: 130%;
        content: "";
        height: 2px;
        background-color: var(--color);
        bottom: 0;
        left: 0;
      }
    }
  }
`;

export default function Header() {
  const [categoryName, setCategoryName] = useState("");

  const { category } = useParams();
  const { getCategoryBySlug } = useApi();

  useEffect(() => {
    if (category) {
      (async () => {
        const response = await getCategoryBySlug(category);
        if (response) {
          setCategoryName(response.data[0].name);
        } else {
          setCategoryName("");
        }
      })();
    }
  }, [category, getCategoryBySlug]);

  return (
    <Wrapper>
      <Typography.Title level={3}>{categoryName}</Typography.Title>
    </Wrapper>
  );
}
