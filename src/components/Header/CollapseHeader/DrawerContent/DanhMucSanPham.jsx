// @ts-check
import { Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { initCategories, initSideBarContent } from '../../../../constant'
import useApi from '../../../../hooks/useApi'
import { getItem } from '../../../../utils/'

const StyledMenu = styled(Menu)`
  & {
    & > li > .ant-menu-submenu-title {
      padding-left: 0 !important;
    }
  }
`

export default function DanhMucSanPham() {
  const { getCategories, getSideBarContent, getSideBarMappingIcon } = useApi()

  const [mappingIcon] = useState(() => getSideBarMappingIcon())

  const [categories, setCategories] = useState(initCategories)

  const [sideBarContent, setSideBarContent] = useState(initSideBarContent)

  const [items, setItems] = useState(() => [
    getItem(
      'Danh mục sản phẩm',
      'Danh mục sản phẩm',
      <i className="fa-solid fa-bars"></i>
    ),
  ])

  useEffect(() => {
    ;(async () => {
      const response = await getCategories()
      if (response) {
        setCategories(response.data)
      } else {
        setCategories([])
      }
    })()
  }, [getCategories])

  useEffect(() => {
    ;(async () => {
      const response = await getSideBarContent()
      if (response) {
        setSideBarContent(response.data)
      } else {
        setSideBarContent(null)
      }
    })()
  }, [getSideBarContent])

  useEffect(() => {
    if (categories.length && sideBarContent) {
      const listCategory = categories.map((category, index) => {
        const itemsOfCategory = sideBarContent[category.slug]
        const listItem = itemsOfCategory.map((item) => {
          const listSubitem = item.childs.map((child) => {
            return getItem(
              <Link to="/">
                {typeof child === 'string' ? child : child.title}
              </Link>,
              `${category.slug}-${item.title}-${
                typeof child === 'string' ? child : child.title
              }`
            )
          })
          return getItem(
            <Link to="/">{item.title}</Link>,
            `${category.slug}-${item.title}`,
            null,
            listSubitem
          )
        })
        return getItem(
          category.name,
          category.slug,
          mappingIcon[index],
          listItem
        )
      })
      setItems([
        getItem(
          'Danh mục sản phẩm',
          'Danh mục sản phẩm',
          <i className="fa-solid fa-bars"></i>,
          listCategory
        ),
      ])
    }
  }, [categories, sideBarContent, mappingIcon])

  return (
    <React.Fragment>
      {!!categories.length && sideBarContent && (
        <StyledMenu mode="inline" items={items} />
      )}
    </React.Fragment>
  )
}
