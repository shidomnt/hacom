// @ts-check
import { Checkbox, Col, Row, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { initCategories } from '../../constant'
import useApi from '../../hooks/useApi'
import Collapse from './Collapse'

const Wrapper = styled.div`
  & {
    padding: 8px;
    background-color: white;
    border-radius: 4px;
    .products-by-category-sidebar-header {
      border: 1px solid #d9d9d9;
      padding: 4px 8px;
      text-transform: uppercase;
      text-align: center;
      font-weight: 500;
      font-size: 1.2rem;
      border-radius: 4px;
      margin-bottom: 20px;
    }
    .category-link-wrap {
      i {
        min-width: 16px;
        font-size: 1rem;
      }
    }
  }
`

export default function Sidebar() {
  const { getBrandList, getCategories, getKhoangGia } = useApi()
  const [brandList] = useState(() => getBrandList())
  const [khoangGia] = useState(() => getKhoangGia())
  const [categories, setCategories] = useState(initCategories)

  useEffect(() => {
    ;(async () => {
      const response = await getCategories()
      if (response) {
        setCategories(response.data)
      } else {
        setCategories(initCategories)
      }
    })()
  }, [getCategories])

  return (
    <Wrapper>
      <div className="products-by-category-sidebar-header">Lọc sản phẩm</div>
      <Collapse header="Danh mục">
        {categories.map((category) => (
          <div key={category.slug} className="category-link-wrap">
            <Link to={`/${category.slug}`}>
              <Typography.Text strong>
                <i className="fa-solid fa-angles-right"></i>
                {category.name}
              </Typography.Text>
            </Link>
          </div>
        ))}
      </Collapse>
      <Collapse header="Hãng sản xuất">
        <Row gutter={[16, 16]}>
          {brandList.map((brand) => (
            <Col key={brand.name} span={12}>
              <Checkbox style={{ fontSize: '12px' }}>{brand.name}</Checkbox>
            </Col>
          ))}
        </Row>
      </Collapse>
      <Collapse header="Khoảng giá">
        <Row gutter={[16, 16]}>
          {khoangGia.map((gia) => (
            <Col span={24} key={gia}>
              <Checkbox style={{ fontSize: '12px' }}>{gia}</Checkbox>
            </Col>
          ))}
        </Row>
      </Collapse>
    </Wrapper>
  )
}
