import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGetSideBarQuery } from '../../../../features/api/api.slice';
import useApi from '../../../../hooks/useApi';
import { getItem } from '../../../../utils/';

const StyledMenu = styled(Menu)`
  & {
    & > li > .ant-menu-submenu-title {
      padding-left: 0 !important;
    }
  }
`;

export default function DanhMucSanPham() {
  const { getSideBarMappingIcon } = useApi();

  const [mappingIcon] = useState(() => getSideBarMappingIcon());

  const [items, setItems] = useState(() => [
    getItem(
      'Danh mục sản phẩm',
      'Danh mục sản phẩm',
      <i className="fa-solid fa-bars"></i>
    ),
  ]);

  const { data: sideBarContent } = useGetSideBarQuery();

  useEffect(() => {
    if (sideBarContent) {
      const listCategory = sideBarContent.map((catalog, index) => {
        const category = catalog.category;
        const itemsOfCategory = catalog.content;
        const listItem = itemsOfCategory.map((item) => {
          const listSubitem = item.children.map((child) => {
            return getItem(
              <Link to="/Laptop,Tablet,Mobile" reloadDocument>
                {typeof child === 'string' ? child : child.title}
              </Link>,
              `${category.slug}-${item.title}-${
                typeof child === 'string' ? child : child.title
              }`
            );
          });
          return getItem(
            <Link to="#">{item.title}</Link>,
            `${category.slug}-${item.title}`,
            null,
            listSubitem
          );
        });
        return getItem(
          category.name,
          category.slug,
          mappingIcon[index],
          listItem
        );
      });
      setItems([
        getItem(
          'Danh mục sản phẩm',
          'Danh mục sản phẩm',
          <i className="fa-solid fa-bars"></i>,
          listCategory
        ),
      ]);
    }
  }, [sideBarContent, mappingIcon]);

  return (
    <React.Fragment>
      {sideBarContent && <StyledMenu mode="inline" items={items} />}
    </React.Fragment>
  );
}
