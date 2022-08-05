// @ts-check
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HotLabel from './HotLabel';
import { StyledSubMenuWrapper } from './StyledSubMenuWrapper';

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
  font-size: 1.1rem;
  color: red;
  margin-bottom: 6px;
`;

const StyledExpandableTitle = styled.div`
  & {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 4px;
    a {
      color: inherit;
    }
    a.title-child {
      &:hover {
        color: #e00;
        text-decoration: underline;
      }
    }
  }
`;

function checkHot(title) {
  return title?.slice(-3) === 'HOT' ? (
    <HotLabel>
      {title.slice(0, -3)} <span>HOT</span>
    </HotLabel>
  ) : (
    title
  );
}

/**
 * @typedef {Object} SideBarPopoverProps
 * @property {string} className
 * @property {import("../../../../hooks/useApi").SideBarContentChild[]} listContent
 */

/**
 * @param {import("react").PropsWithChildren<SideBarPopoverProps>} props
 * @returns
 */
export default function SideBarPopover({ className, listContent }) {
  return (
    <Wrapper className={className}>
      {listContent &&
        listContent.map((content, index) => {
          return (
            <SidebarContentWrapper key={index}>
              <StyledNonExpandableTitle>
                {checkHot(content.title)}
              </StyledNonExpandableTitle>
              {content.children.map((child, index) => (
                <StyledExpandableTitle key={index}>
                  {!(typeof child === 'string') ? (
                    <StyledSubMenuWrapper>
                      <Link to="/" className="title-child">
                        {checkHot(child.title)}{' '}
                        {!!child.children.length && (
                          <i
                            style={{ fontSize: '8px' }}
                            className="fa-solid fa-angle-right"
                          ></i>
                        )}
                      </Link>
                      {!!child.children.length && (
                        <div className="sidebar-submenu">
                          {child.children.map((childLevelTwo, index) => (
                            <Link
                              to="/Laptop,Tablet,Mobile/LTAC791"
                              key={index}
                            >
                              {typeof childLevelTwo === 'string' &&
                                childLevelTwo}
                            </Link>
                          ))}
                        </div>
                      )}
                    </StyledSubMenuWrapper>
                  ) : (
                    <Link to="/" className="title-child">
                      {checkHot(child)}
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
