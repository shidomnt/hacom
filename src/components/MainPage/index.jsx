import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import SideBar from './SideBar'
import CollectionProduct from './ProductCollection'
import useApi from '../../hooks/useApi'
import styled from 'styled-components'
import ProductSlideShow from './ProductSlideShow'
import { Helmet } from 'react-helmet'
import MainBanner from './Banner/MainBanner'
import RightBanner from './Banner/RightBanner'
import BottomBanner from './Banner/BottomBanner'
import UnderBanner from './Banner/UnderBanner'
import { initCategories } from '../../constant'

const StyledImgContainer = styled.div`
  & {
    img {
      border-radius: 6px;
      width: 100%;
    }
  }
`

export default function Content() {
  const [categories, setCategories] = useState(initCategories)
  const { getCategories, getBannerList } = useApi()
  const [bannerList] = useState(() => getBannerList())

  const {
    slideSrcList,
    rightSlideBannerSrcList,
    bottomSlideBannerSrcList,
    underSlideBannerSrcList,
  } = bannerList

  useEffect(() => {
    ;(async () => {
      const response = await getCategories()
      if (response) {
        setCategories(response.data)
      } else {
        setCategories(null)
      }
    })()
  }, [getCategories])

  return (
    <React.Fragment>
      <Helmet>
        <title>HACOM | HANOICOMPUTER - HI-END COMPUTER WORLD</title>
      </Helmet>
      <Row gutter={[0, 6]}>
        <Col span={24}>
          <Row gutter={6}>
            <Col xxl={4} xl={4} lg={0} md={0} sm={0} xs={0}>
              <SideBar />
            </Col>
            <Col xxl={20} xl={20} lg={24} md={24} sm={24} xs={24}>
              <Row gutter={[6, 6]}>
                <Col span={24}>
                  <Row gutter={6}>
                    <Col
                      span={16}
                      xxl={16}
                      xl={16}
                      lg={16}
                      sm={24}
                      md={24}
                      xs={24}
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <MainBanner slideSrcList={slideSrcList} />
                    </Col>
                    <Col span={8} xxl={8} xl={8} lg={8} sm={0} md={0} xs={0}>
                      <RightBanner
                        rightSlideBannerSrcList={rightSlideBannerSrcList}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col span={24} xxl={24} xl={24} lg={24} sm={0} md={0} xs={0}>
                  <BottomBanner
                    bottomSlideBannerSrcList={bottomSlideBannerSrcList}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={24} xxl={24} xl={24} lg={24} sm={0} md={0} xs={0}>
          <UnderBanner underSlideBannerSrcList={underSlideBannerSrcList} />
        </Col>

        <Col span={24} xxl={24} xl={24} lg={24} sm={0} md={0} xs={0}>
          <CollectionProduct />
        </Col>

        <Col span={24}>
          <ProductSlideShow categories={categories} />
        </Col>
      </Row>
    </React.Fragment>
  )
}

export { StyledImgContainer }
