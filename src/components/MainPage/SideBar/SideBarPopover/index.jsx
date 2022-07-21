import { RightOutlined } from "@ant-design/icons";
import { Col, Popover, Row, Typography } from "antd";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  width: 100%;
`;

const SidebarContentWrapper = styled.div`
  & {
    width: calc(100% / 5);
    margin: 0 8px;
  }
`;

const StyledNonExpandableTitle = styled.div`
  font-size: 11px;
  color: red;
  margin-bottom: 8px;
`;

const StyledExpandableTitle = styled.div`
  font-size: 12px;
`;

const StyledHot = styled.span`
  & {
    position: relative;
    span {
      font-size: 9px;
      background: #ed1b24;
      color: #fff;
      padding: 0 5px;
      margin-left: 9px;
      text-transform: uppercase;
      font-weight: 700;
      position: absolute;
      left: calc(100% + 4px);
      &:before {
        content: "";
        display: block;
        border: 7px solid transparent;
        border-right-color: #ed1b24;
        position: absolute;
        right: 100%;
        top: 0;
        bottom: 0;
      }
      &:after {
        content: "";
        display: block;
        border-top: 7px solid #ed1b24;
        border-right: 7px solid transparent;
        border-bottom: 7px solid #ed1b24;
        position: absolute;
        left: 100%;
        top: 0;
        bottom: 0;
      }
    }
  }
`;

export default function SideBarPopover({ className, listContent }) {

  function checkHot(title) {
    return title.slice(-3) === "HOT" ? (
      <StyledHot>
        {title.slice(0, -3)} <span>HOT</span>
      </StyledHot>
    ) : (
      title
    )
  }

  return (
    <Wrapper className={className}>
      {listContent &&
        listContent.map((content, index) => {
          return (
            <SidebarContentWrapper key={index}>
              <StyledNonExpandableTitle>
                {checkHot(content.title)}
              </StyledNonExpandableTitle>
              {content.childs.map((child, index) => (
                <StyledExpandableTitle key={index}>
                  {!!child.childs.length ? (
                    <a href="#">
                      {checkHot(child.title)}{" "}
                      <i
                        style={{ fontSize: "8px" }}
                        className="fa-solid fa-angle-right"
                      ></i>
                    </a>
                  ) : (
                    <a href="#">{checkHot(child.title)}</a>
                  )}
                </StyledExpandableTitle>
              ))}
            </SidebarContentWrapper>
          );
        })}
    </Wrapper>
  );
}
