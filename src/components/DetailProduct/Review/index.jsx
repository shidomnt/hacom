// @ts-check
import { Button, Divider, Image, Typography } from 'antd'
import React, { useState } from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { ProductContext } from '../'

const Wrapper = styled.div``

const ContentWrapper = styled.div`
  & {
    position: relative;
    .content-danhgia {
      max-height: 700px;
      overflow: hidden;
    }
    &.expanded {
      padding-bottom: 60px;
      .content-danhgia {
        max-height: unset;
        overflow: none;
      }
    }
  }
`

const ButtonExpandWrapper = styled.div`
  & {
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgb(255, 255, 255)
    );
    i {
      margin-right: 10px;
    }
  }
`

export default function Review() {
  const [isExpanded, setIsExpanded] = useState(false)

  const { product } = useContext(ProductContext)

  const { danhgia } = product

  function handleClickExpandBtn() {
    setIsExpanded(!isExpanded)
  }

  return (
    <Wrapper>
      <Typography.Title level={4}>Đánh giá {product.name}</Typography.Title>
      <Divider type="horizontal" />
      <ContentWrapper className={isExpanded ? 'expanded' : ''}>
        <div className="content-danhgia">
          {danhgia.title.slice(1).map((title, index) => (
            <div key={`${title}-${index}`}>
              <Typography.Title level={5}>{title}</Typography.Title>
              {danhgia.img?.[index] && (
                <React.Fragment>
                  <Divider type="horizontal" />
                  <Image width="100%" src={danhgia.img?.[index]} />
                  <Divider type="horizontal" />
                </React.Fragment>
              )}
              <Typography.Paragraph>
                {danhgia.info?.[index]}
              </Typography.Paragraph>
              <Typography.Paragraph>
                {danhgia.info?.[index + 1]}
              </Typography.Paragraph>
            </div>
          ))}
        </div>
        {!!danhgia.title.slice(1).length && (
          <ButtonExpandWrapper>
            <Button
              type="primary"
              className="expand-btn"
              onClick={() => handleClickExpandBtn()}
              icon={
                isExpanded ? (
                  <i className="fa-solid fa-angle-up"></i>
                ) : (
                  <i className="fa-solid fa-angle-down"></i>
                )
              }
            >
              {isExpanded ? 'Thu nhỏ' : 'Xem thêm'}
            </Button>
          </ButtonExpandWrapper>
        )}
      </ContentWrapper>
    </Wrapper>
  )
}
