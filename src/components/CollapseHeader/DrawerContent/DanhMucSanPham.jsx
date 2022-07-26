import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useApi from '../../../hooks/useApi';
import { getItem } from '../../../utils/';

const StyledMenu = styled(Menu)`
  & {
    & > li > .ant-menu-submenu-title {
      padding-left: 0 !important;
    }
  }
`;

export default function DanhMucSanPham() {
  const { getCategories, getSideBarContent, getSideBarMappingIcon } = useApi();

  const [mappingIcon] = useState(() => getSideBarMappingIcon());

  const [categories, setCategories] = useState(null);

  const [sideBarContent, setSideBarContent] = useState(null);

  const [items, setItems] = useState(() => [
    getItem(
      'Danh mục sản phẩm',
      'Danh mục sản phẩm',
      <i className="fa-solid fa-bars"></i>
    ),
  ]);

  useEffect(() => {
    (async () => {
      const response = await getCategories();
      if (response) {
        setCategories(response.data);
      } else {
        setCategories(null);
      }
    })();
  }, [getCategories]);

  useEffect(() => {
    (async () => {
      const response = await getSideBarContent();
      if (response) {
        setSideBarContent(response.data);
      } else {
        setSideBarContent(null);
      }
    })();
  }, [getSideBarContent]);

  useEffect(() => {
    if (categories && sideBarContent) {
      const listCategory = categories.map((category) => {
        const itemsOfCategory = sideBarContent[category.slug];
        const listItem = itemsOfCategory.map((item) => {
          const listSubitem = item.childs.map((child) => {
            return getItem(
              <Link to="/">{child.title}</Link>,
              `${category.slug}-${item.title}-${child.title}`
            );
          });
          return getItem(
            <Link to="/">{item.title}</Link>,
            `${category.slug}-${item.title}`,
            null,
            listSubitem
          );
        });
        return getItem(category.name, category.slug, null, listItem);
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
  }, [categories, sideBarContent]);

  return (
    <React.Fragment>
      {categories && sideBarContent && (
        <StyledMenu mode="inline" items={items} />
      )}
    </React.Fragment>
  );
}
