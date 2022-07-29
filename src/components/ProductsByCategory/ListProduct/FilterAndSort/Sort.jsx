import { Button, Pagination, Space } from 'antd'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { sortBtns } from '../../../../constant'

const Wrapper = styled.div`
  & {
    .top-filter-sort-btn {
      border-color: var(--primary-color);
      color: var(--primary-color);
      background-color: white;
      font-weight: 500;
      &:hover,
      &.active {
        color: white;
        background-color: var(--primary-color);
      }
    }
    .top-filter-pagination {
      .ant-pagination-item {
        font-weight: 500;
        a {
          color: var(--primary-color);
          background-color: white;
        }
        &.ant-pagination-item-active {
          border-color: var(--primary-color);
          a {
            color: white;
            background-color: var(--primary-color);
          }
        }
      }
    }
  }
`

export default function Sort() {
  const [searchParams, setSearchParams] = useSearchParams({
    page: '1',
  })
  return (
    <Wrapper>
      <Space direction="horizontal" size="middle">
        {sortBtns.map((button) => (
          <Button
            key={button.sortType}
            onClick={(event) => {
              searchParams.set('sort', button.sortType)
              setSearchParams(searchParams)
            }}
            className={`top-filter-sort-btn ${
              searchParams.get('sort') === button.sortType ? 'active' : ''
            }`}
            type="dashed"
          >
            {button.title}
          </Button>
        ))}
        <div className="top-filter-pagination-wrap">
          <Pagination
            current={Number(searchParams.get('page')) ?? 1}
            onChange={(page) =>
              setSearchParams({
                ...Object.fromEntries(searchParams.entries()),
                page: String(page),
              })
            }
            className="top-filter-pagination"
            defaultCurrent={1}
            defaultPageSize={8}
            total={30}
            showSizeChanger={false}
            responsive={true}
            size="small"
            showPrevNextJumpers={false}
            showTitle={false}
          />
        </div>
      </Space>
    </Wrapper>
  )
}

