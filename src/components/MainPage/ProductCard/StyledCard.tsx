import { Card } from 'antd';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  & {
    /* max-width: 258px; */
    .ant-card-body {
      padding: 8px;
      height: 186px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      .titleContainer {
        flex: 1;
      }
    }
  }
`;

