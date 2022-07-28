// @ts-check
import {
  Button,
  Col,
  Input,
  Pagination,
  Row,
  Select,
  Space,
  Typography,
} from 'antd'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { initShowrooms } from '../../../constant'
import useApi from '../../../hooks/useApi'
import { filterInputNumber, formatNumberPriceToString } from '../../../utils'

const DEFAULT = 'default'

const Wrapper = styled.div`
  & {
    padding: 4px;
    background-color: white;
    .top-filter-zone {
      padding: 6px;
      background-color: #f2f2f2;
      .top-filter-price {
        display: flex;
        align-items: center;
        .ant-input {
          width: 100px;
          text-align: right;
        }
      }
      .ant-select {
        width: 100%;
      }
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
/**
 * @type {{title: string, sortType: string}[]}
 */
const sortBtns = [
  {
    title: 'Hàng Mới',
    sortType: 'new',
  },
  {
    title: 'Xem Nhiều',
    sortType: 'view',
  },
  {
    title: 'Giá Giảm Nhiều',
    sortType: 'price-off',
  },
  {
    title: 'Giá Tăng Dần',
    sortType: 'price-asc',
  },
  {
    title: 'Giá Giảm Dần',
    sortType: 'price-desc',
  },
]

export default function TopFilter() {
  const [listShowroom, setListShowroom] = useState(initShowrooms)
  const [searchParams, setSearchParams] = useSearchParams({
    page: '1',
  })
  const [stockStatus, setStockStatus] = useState(
    searchParams.get('stock') ?? DEFAULT
  )

  const [costFilter, setCostFilter] = useState({
    min: '200.000',
    max: '5.000.000',
  })

  const { getShowRooms } = useApi()

  useEffect(() => {
    ;(async () => {
      const response = await getShowRooms()
      if (response) {
        setListShowroom(response.data)
      } else {
        setListShowroom(initShowrooms)
      }
    })()
  }, [getShowRooms])

  useEffect(() => {
    if (stockStatus === 'con-hang') {
      searchParams.set('stock', 'con-hang')
      setSearchParams(searchParams)
    } else {
      searchParams.delete('stock')
      setSearchParams(searchParams)
    }
  }, [stockStatus, setSearchParams, searchParams])

  /**
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event
   * @param {'min' | 'max'} type
   */
  const handleSetCost = (event, type) => {
    setCostFilter((prev) => ({
      ...prev,
      [type]: formatNumberPriceToString(
        Number(filterInputNumber(event.target.value))
      ),
    }))
  }

  return (
    <Wrapper>
      <div className="top-filter-zone">
        <Row gutter={[16, 16]}>
          <Col span={5}>
            <Select
              onChange={(value) => setStockStatus(value)}
              value={stockStatus}
            >
              <Select.Option value={DEFAULT}>Tình trạng kho hàng</Select.Option>
              <Select.Option value="con-hang">Còn hàng</Select.Option>
            </Select>
          </Col>
          <Col span={8}>
            <Select defaultValue={DEFAULT}>
              <Select.Option value={DEFAULT}>Tất cả kho</Select.Option>
              {!!listShowroom.length &&
                listShowroom.map((showroom) => (
                  <Select.Option key={showroom.diachi} value={showroom.diachi}>
                    {showroom.diachi}
                  </Select.Option>
                ))}
            </Select>
          </Col>
          <Col span={11}>
            <div className="top-filter-price">
              <Space direction="horizontal" size="small">
                <Typography.Text style={{ fontSize: '12px' }}>
                  Lọc theo giá tiền:
                </Typography.Text>
                <Input
                  suffix="₫"
                  value={costFilter.min}
                  onChange={(event) => handleSetCost(event, 'min')}
                />
                {'-'}
                <Input
                  suffix="₫"
                  value={costFilter.max}
                  onChange={(event) => handleSetCost(event, 'max')}
                />
              </Space>
            </div>
          </Col>
          <Col span={24}>
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
          </Col>
        </Row>
      </div>
    </Wrapper>
  )
}
