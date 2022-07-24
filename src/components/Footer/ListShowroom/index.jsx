import { Card, Col, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useApi from "../../../hooks/useApi";
import ShowroomInfo from "./ShowroomInfo";

const Wrapper = styled.div`
  padding-bottom: 24px;
`

const StyledCard = styled(Card)`
  & {
    .ant-card-head {
      min-height: auto;
      margin: 0;
      padding: 0;
      border: none;
      background-color: #243a76;
      color: white;
      font-size: 13px;
      text-transform: uppercase;
      border-radius: 5px;
      * {
        min-height: inherit;
      }
      .ant-card-head-title {
        padding: 0;
        display: flex;
        .title-index {
          font-size: 16px;
          padding: 4px 16px;
          background-color: #ed1b24;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
        .title-text {
          flex: 1;
          padding: 7px 12px;
          .moi-khai-truong {
            color: #b9f300;
            text-transform: none;
          }
        }
        .ant-typography {
          color: inherit;
        }
      }
    }
    .ant-card-body {
      padding: 0;
      .showroom-info {
        margin: 6px 0;
        font-size: 12px;
        a {
          color: red;
        }
        i {
          min-width: 20px;
        }
      }
    }
  }
`;

export default function ListShowroom() {
  const [showrooms, setShowrooms] = useState(null);
  const { getShowRooms } = useApi();

  useEffect(() => {
    (async () => {
      const response = await getShowRooms();
      if (response) {
        setShowrooms(response.data);
      } else {
        setShowrooms(null);
      }
    })();
  }, [getShowRooms]);

  return (
    <Wrapper>
      {showrooms && (
        <Row gutter={[32, 32]}>
          {showrooms.map((showroom, index) => (
            <Col key={showroom.name} span={8}>
              <StyledCard
                title={
                  <React.Fragment>
                    <div className="title-index">
                      <Typography.Text strong>{index}</Typography.Text>
                    </div>
                    <div className="title-text">
                      <Typography.Text strong>
                        {showroom.name}
                        {showroom.isNew && (
                          <span className="moi-khai-truong">
                            {" "}
                            - Mới khai trương
                          </span>
                        )}
                      </Typography.Text>
                    </div>
                  </React.Fragment>
                }
                bordered={false}
              >
                <ShowroomInfo showroom={showroom} />
              </StyledCard>
            </Col>
          ))}
        </Row>
      )}
    </Wrapper>
  );
}
