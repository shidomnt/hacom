import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  width: 100%;
  margin-left: -6px;
  margin-right: -6px;
  width: 1005px;
  min-height: 500px;
  border-right: 1px solid #e1e1e1;
  background-color: white;
  border-bottom: 1px solid #e1e1e1;
`;

const SidebarContentWrapper = styled.div`
  & {
    width: calc(100% / 5);
    padding-left: 6px;
    padding-right: 6px;
  }
`;

const StyledNonExpandableTitle = styled.div`
  font-size: 11px;
  color: red;
  margin-bottom: 6px;
`;

const StyledExpandableTitle = styled.div`
  & {
    font-size: 12px;
    color: #333;
    margin-bottom: 4px;
    a {
      color: inherit;
    }
    a.title-childLevelOne {
      &:hover {
        color: #e00;
        text-decoration: underline;
      }
    }
  }
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

const StyledSubMenuWrapper = styled.span`
  & {
    position: relative;

    .sidebar-submenu {
      position: absolute;
      left: calc(100% + 10px);
      top: -10px;
      min-width: 160px;
      background-color: white;
      z-index: 20;
      border-radius: 4px;
      display: none;
      box-shadow: 0 0 4px 0 #b5b5b5;
      flex-direction: column;
      padding: 12px;
      &::before {
        display: block;
        content: "";
        border: 5px solid transparent;
        border-right-color: #d2d2d2;
        position: absolute;
        left: -10px;
        top: 13px;
      }
      &::after {
        display: block;
        content: "";
        width: 15px;
        height: 100%;
        position: absolute;
        top: 0;
        left: -15px;
      }
      a {
        color: #333;
        display: block;
        text-decoration: none;
        margin-bottom: 5px;
        position: relative;
        &::before {
          display: none;
          content: "";
          position: absolute;
          height: 1px;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: #e00;
        }
        &:hover {
          color: #e00;
          &::before {
            display: block;
          }
        }
      }
    }
    &:hover {
      .sidebar-submenu {
        display: flex;
      }
    }
  }
`;

export default function SideBarPopover({ className, listContent }) {
  function checkHot(title) {
    return title?.slice(-3) === "HOT" ? (
      <StyledHot>
        {title.slice(0, -3)} <span>HOT</span>
      </StyledHot>
    ) : (
      title
    );
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
                  {!!child.childs?.length ? (
                    <StyledSubMenuWrapper>
                      <Link to='/' className="title-childLevelOne">
                        {checkHot(child.title)}{" "}
                        <i
                          style={{ fontSize: "8px" }}
                          className="fa-solid fa-angle-right"
                        ></i>
                      </Link>
                      <div className="sidebar-submenu">
                        {child.childs.map((childLevelTwo, index) => (
                          <Link to='/' key={index}>
                            {childLevelTwo}
                          </Link>
                        ))}
                      </div>
                    </StyledSubMenuWrapper>
                  ) : (
                    <Link to='/' className="title-childLevelOne">
                      {checkHot(child.title)}
                    </Link>
                  )}
                </StyledExpandableTitle>
              ))}
            </SidebarContentWrapper>
          );
        })}
    </Wrapper>
  );
}
