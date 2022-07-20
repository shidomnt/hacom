import React from 'react'
import { Col, Row, Space } from 'antd'
import SideBar from './SideBar'
import style from './style.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'
import ProductCard from './ProductCard'

const slideSrcList = [
  'https://hanoicomputercdn.com/media/banner/30_Jun5f554fbfc506240d24abb33881ee5a78.jpg',
  'https://hanoicomputercdn.com/media/banner/01_Julae73d3b3f05f8253fbe4d8c483c609ec.png',
  'https://hanoicomputercdn.com/media/banner/04_Jul5d448b2e204aa778e135c23f1c6b3d30.jpg',
  'https://hanoicomputercdn.com/media/banner/07_Julf2510bcf29fb56683fba210e2ba14815.jpg',
  'https://hanoicomputercdn.com/media/banner/09_Juldeb6f9166ebe1f5064d0671eeb038b04.png',
]

const rightSlideBannerSrcList = [
  'https://i.ytimg.com/vi/W0uuq13u4MY/hq720.jpg',
  'https://hanoicomputercdn.com/media/banner/16_Jul4a47a0db6e60853dedfcfdf08a5ca249.png',
]

const bottomSlideBannerSrcList = [
  'https://hanoicomputercdn.com/media/banner/16_Julfb5c81ed3a220004b71069645f112867.png',
  'https://hanoicomputercdn.com/media/banner/16_Jul10fb15c77258a991b0028080a64fb42d.png',
  'https://hanoicomputercdn.com/media/banner/16_Jul09dd8c2662b96ce14928333f055c5580.png',
]

const underSlideBannerSrcList = [
  'https://hanoicomputercdn.com/media/banner/16_Jul8266e4bfeda1bd42d8f9794eb4ea0a13.png',
  'https://hanoicomputercdn.com/media/banner/16_Julf19c9085129709ee14d013be869df69b.png',
  'https://hanoicomputercdn.com/media/banner/16_Jul9eb9cd58b9ea5e04c890326b5c1f471f.png',
  'https://hanoicomputercdn.com/media/banner/16_Jul602e8f042f463dc47ebfdf6a94ed5a6d.png',
]

export default function Content() {
  return (
    <section className="content">
      <div className="container">
        <Space size={6} direction='vertical'>
          <Row gutter={8}>
            <Col span={4}>
              <SideBar />
            </Col>
            <Col span={20}>
              <Row gutter={[6, 6]}>
                <Col span={24}>
                  <Row gutter={6}>
                    <Col style={{ maxWidth: '688px' }}>
                      <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        modules={[Navigation, Autoplay]}
                        navigation
                        autoplay={{ delay: 2000 }}
                        className={style.swiperContainer}
                      >
                        {slideSrcList.map((src) => (
                          <SwiperSlide key={src}>
                            <a href="#">
                              <div className={style.img_container}>
                                <img src={src} alt="banner" />
                              </div>
                            </a>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </Col>
                    <Col flex="1">
                      <Row gutter={[6, 6]}>
                        {rightSlideBannerSrcList.map((src) => (
                          <Col span={24} key={src}>
                            <a href="#">
                              <div className={style.img_container}>
                                <img src={src} alt="banner" />
                              </div>
                            </a>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row gutter={6}>
                    {bottomSlideBannerSrcList.map((src) => (
                      <Col span={8} key={src}>
                        <a href="#">
                          <div className={style.img_container}>
                            <img src={src} alt="banner" />
                          </div>
                        </a>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row gutter={6}>
            {underSlideBannerSrcList.map((src) => (
              <Col span={6} key={src}>
                <a href="#">
                  <div className={style.img_container}>
                    <img src={src} alt="banner" />
                  </div>
                </a>
              </Col>
            ))}
          </Row>
          <Row>
            <ProductCard sku='hihi' />
          </Row>
        </Space>
      </div>
    </section>
  )
}

