import { Col, Radio, RadioGroupProps, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import useApi from '../../hooks/useApi';
import { Category } from '../../interfaces';
import Collapse from './Collapse';

const Wrapper = styled.div`
  & {
    padding: 8px;
    background-color: white;
    border-radius: 4px;
    .category-link-wrap {
      i {
        min-width: 16px;
        font-size: 1rem;
      }
      &.active {
        font-size: 1.3rem;
        color: var(--primary-color);
        * {
          color: inherit;
          font-size: inherit;
        }
      }
    }
  }
`;

const SidebarHeader = styled.div`
  & {
    border: 1px solid #d9d9d9;
    padding: 4px 8px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 500;
    font-size: 1.2rem;
    border-radius: 4px;
    margin-bottom: 20px;
  }
`;

export default function Sidebar() {
  const { getBrandList, getCategories, getKhoangGia } = useApi();
  const [brandList] = useState(() => getBrandList());
  const [listKhoangGia] = useState(() => getKhoangGia());
  const [categories, setCategories] = useState<Array<Category>>([]);

  const { category: categoryParam } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      const response = await getCategories();
      if (response) {
        setCategories(response.data);
      } else {
        setCategories([]);
      }
    })();
  }, [getCategories]);

  const handleChangeKhoangGia: RadioGroupProps['onChange'] = (event) => {
    searchParams.set('priceRange', event.target.value);
    setSearchParams(searchParams);
  };

  return (
    <Wrapper>
      <SidebarHeader>Lọc sản phẩm</SidebarHeader>
      <Collapse header="Danh mục">
        {categories.map((category) => (
          <div
            key={category.slug}
            className={`category-link-wrap ${
              categoryParam === category.slug ? 'active' : ''
            }`}
          >
            <Link to={`/${category.slug}`}>
              <Typography.Text strong>
                <i className="fa-solid fa-angles-right"></i>
                {category.name}
              </Typography.Text>
            </Link>
          </div>
        ))}
      </Collapse>
      <Collapse header="Khoảng giá">
        <Radio.Group
          value={searchParams.get('priceRange') ?? ''}
          onChange={handleChangeKhoangGia}
        >
          <Row gutter={[16, 16]}>
            {listKhoangGia.map((gia) => (
              <Col span={24} key={gia.label}>
                <Radio
                  style={{ fontSize: '12px' }}
                  value={`${gia.priceRange.min
                    .toString()
                    .padEnd(8, '0')}-${gia.priceRange.max
                    .toString()
                    .padEnd(8, '0')}`}
                >
                  {gia.label}
                </Radio>
              </Col>
            ))}
          </Row>
        </Radio.Group>
      </Collapse>
      <Collapse header="Hãng sản xuất">
        <Radio.Group>
          <Row gutter={[16, 16]}>
            {brandList.map((brand) => (
              <Col key={brand.name} span={12}>
                <Radio style={{ fontSize: '12px' }} value={brand.name}>
                  {brand.name}
                </Radio>
              </Col>
            ))}
          </Row>
        </Radio.Group>
      </Collapse>
    </Wrapper>
  );
}
