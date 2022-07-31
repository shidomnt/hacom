// @ts-check
import React, { useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";
import styled from "styled-components";
import SideBarPopover from "./SideBarPopover";
import { initSideBarContent } from "../../../constant";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  & {
    background-color: white;
    border-right: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
    position: relative;
    z-index: 99;
    .popover {
      position: absolute;
      left: calc(100% + 7px);
      top: 0;
      z-index: 9;
      display: none;
    }
  }
`;

const StyledCategoryWrapper = styled.div`
  & {
    .category-name {
      height: calc(500px / 17);
      font-size: 1.2rem;
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
      a {
        color: inherit;
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
      .popover {
        display: flex;
      }
    }
  }
`;

export default function SideBar() {
  const [sideBarContent, setSideBarContent] = useState(initSideBarContent);

  const { getSideBarMappingIcon, getSideBarContent } = useApi();

  const [iconMapping] = useState(() => getSideBarMappingIcon());

  useEffect(() => {
    (async () => {
      const response = await getSideBarContent();
      if (response) {
        setSideBarContent(response.data);
      } else {
        setSideBarContent(null);
      }
    })();
  }, [getSideBarContent]);

  return (
    <Wrapper>
      {sideBarContent &&
        sideBarContent.map((catalog, index) => (
          <StyledCategoryWrapper key={catalog.category._id}>
            <div className="category-name">
              <Link to={`/${catalog.category.slug}`}>
                {iconMapping[index]} {catalog.category.name}
              </Link>
            </div>
            <SideBarPopover className="popover" listContent={catalog.content} />
          </StyledCategoryWrapper>
        ))}
    </Wrapper>
  );
}
