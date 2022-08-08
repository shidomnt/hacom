import styled from 'styled-components';

export const Wrapper = styled.div`
  & {
    .card {
      border-radius: 8px;
      .ant-card-head {
        display: flex;
        align-items: center;
        background-color: #fbfbfb;
        .ant-card-head-title {
          font-size: 1.5rem;
          .card-title {
            border-radius: inherit;
          }
          padding: 8px 0;
          white-space: normal;
        }
      }
      .ant-card-body {
        padding: 12px;
        .select-selector {
          width: 100%;
        }
        .card-content-item {
          font-size: 1.2rem;
          color: #444444;
          display: flex;
          align-items: center;
          i {
            font-size: 0.5rem;
            transform: translate(0, 1px);
            margin-right: 8px;
          }
          line-height: 26px;
        }
        .list-showroom {
          font-size: 1.2rem;
          max-height: 165px;
          overflow-y: scroll;
          overflow-x: hidden;
          &::-webkit-scrollbar {
            display: none;
          }
          .item-showroom {
            height: 33px;
            margin: 0 -6px;
            border-radius: 3px;
            padding: 7px 0 7px 12px;
            display: flex;
            align-items: center;
            &:nth-child(2n-1) {
              background-color: #f2f2f2;
            }
          }
          .dienthoaiban {
            color: red;
            position: relative;
            margin-right: 9px;
            &::before {
              content: '';
              display: block;
              width: 4px;
              height: 4px;
              border-radius: 50%;
              background-color: black;
              position: absolute;
              right: -6px;
              top: 50%;
              transform: translate(0, calc(-50%));
            }
          }
        }
      }
    }
  }
`;
