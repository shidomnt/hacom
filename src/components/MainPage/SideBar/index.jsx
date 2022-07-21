import { Col, Popover, Row } from "antd";
import React, { useEffect, useLayoutEffect, useState } from "react";
import useApi from "../../../hooks/useApi";
import styled from "styled-components";
import SideBarPopover from "./SideBarPopover";

const Wrapper = styled.div`
  & {
    background-color: white;
    border-right: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
    position: relative;
    z-index: 99;
    .pop {
      position: absolute;
      left: calc(100% + 1px);
      background-color: white;
      top: 0;
      width: 1005px;
      min-height: 500px;
      border-right: 1px solid #e1e1e1;
      border-bottom: 1px solid #e1e1e1;
      z-index: 9;
      display: none;
    }
  }
`;

const StyledCategoryWrapper = styled.div`
  & {
    .category-name {
      height: calc(500px / 17);
      font-size: 12px;
      padding-left: 5px;
      display: flex;
      align-items: center;
      color: #6e6a6e;
      border-bottom: 1px solid #e1e1e1;
      position: relative;
      z-index: 10;
      &::before {
        content: "";
        display: none;
        border: 15px solid transparent;
        border-left: 11px solid #333a71;
        position: absolute;
        right: -26px;
      }
      i {
        margin-right: 4px;
      }
    }
    &:hover {
    .category-name {
      background-color: #333a71;
      color: white;
      cursor: pointer;
      &::before {
        display: block;
      }
    }
    .pop {
      display: flex;
    }
    }
  }
`;

export default function SideBar() {
  const [categories, setCategories] = useState(null);
  const [sideBarContent, setSideBarContent] = useState(null);

  const { getCategories, getSideBarMappingIcon, getSideBarContent } = useApi();

  const [iconMapping] = useState(() => getSideBarMappingIcon());

  useEffect(() => {
    (async () => {
      const response = await getCategories();
      if (response) {
        setCategories(response.data);
      } else {
        setCategories(null);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await getSideBarContent();
      if (response) {
        setSideBarContent(response.data);
      } else {
        setSideBarContent(null);
      }
    })();
  }, []);
  return (
    categories && (
      <Wrapper>
        {categories.map((category, index) => (
          <StyledCategoryWrapper key={category.id}>
            <div className="category-name">
              {iconMapping[index]} {category.name}
            </div>
            {sideBarContent && (
              <SideBarPopover
                className="pop"
                listContent={sideBarContent[category.slug]}
              />
            )}
          </StyledCategoryWrapper>
        ))}
      </Wrapper>
    )
  );
}
