import styled from 'styled-components';

export const StyledSubMenuWrapper = styled.span`
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
        content: '';
        border: 5px solid transparent;
        border-right-color: #d2d2d2;
        position: absolute;
        left: -10px;
        top: 13px;
      }
      &::after {
        display: block;
        content: '';
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
          content: '';
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
