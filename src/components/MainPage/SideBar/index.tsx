import { useState } from 'react';
import useApi from '../../../hooks/useApi';
import styled from 'styled-components';
import SideBarPopover from './SideBarPopover';
import { Link } from 'react-router-dom';
import Loading from '../../Loading';
import { useGetSideBarQuery } from '../../../features/api/api.slice';

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
        content: '';
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
  const { getSideBarMappingIcon } = useApi();

  const [iconMapping] = useState(() => getSideBarMappingIcon());

  const {
    data: sideBarContent,
    isLoading,
    isError,
    error,
  } = useGetSideBarQuery();

  if (isError) {
    console.log(error);
  }

  if (isLoading) {
    return <Loading />;
  }

  if (!sideBarContent) {
    return <Loading />;
  }

  return (
    <Wrapper>
      {sideBarContent.map((catalog, index) => (
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
