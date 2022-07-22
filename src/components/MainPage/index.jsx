import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import SideBar from "./SideBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import CollectionProduct from "./ProductCollection";
import useApi from "../../hooks/useApi";
import ProductShow from "./ProductSlideShow";
import styled from "styled-components";

const StyledImgContainer = styled.div`
  & {
    img {
      border-radius: 6px;
      width: 100%;
    }
  }
`;

export default function Content() {
  const [categories, setCategories] = useState(null);
  const { getCategories, getBannerList } = useApi();
  const [bannerList] = useState(() => getBannerList());

  const {
    slideSrcList,
    rightSlideBannerSrcList,
    bottomSlideBannerSrcList,
    underSlideBannerSrcList,
  } = bannerList;

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

  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <div className="container">
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
                        xl={16}
                        lg={16}
                        sm={24}
                        md={24}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <Swiper
                          spaceBetween={10}
                          slidesPerView={1}
                          modules={[Navigation, Autoplay]}
                          navigation
                          autoplay={{ delay: 8000 }}
                          style={{ borderRadius: "6px" }}
                          loop={true}
                        >
                          {slideSrcList.map((src) => (
                            <SwiperSlide key={src}>
                              <a href="#">
                                <StyledImgContainer>
                                  <img src={src} alt="banner" />
                                </StyledImgContainer>
                              </a>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </Col>
                      <Col span={8} xl={8} lg={8} sm={0} md={0}>
                        <Row gutter={[6, 6]}>
                          {rightSlideBannerSrcList.map((src) => (
                            <Col span={24} key={src}>
                              <a href="#">
                                <StyledImgContainer>
                                  <img src={src} alt="banner" />
                                </StyledImgContainer>
                              </a>
                            </Col>
                          ))}
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={24} xl={24} lg={24} sm={0} md={0}>
                    <Row gutter={6}>
                      {bottomSlideBannerSrcList.map((src) => (
                        <Col span={8} key={src}>
                          <a href="#">
                            <StyledImgContainer>
                              <img src={src} alt="banner" />
                            </StyledImgContainer>
                          </a>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={24} xl={24} lg={24} sm={0} md={0}>
            <Row gutter={6}>
              {underSlideBannerSrcList.map((src) => (
                <Col span={6} key={src}>
                  <a href="#">
                    <StyledImgContainer>
                      <img src={src} alt="banner" />
                    </StyledImgContainer>
                  </a>
                </Col>
              ))}
            </Row>
          </Col>

          {categories && (
            <Col span={24} xl={24} lg={24} sm={0} md={0}>
              <CollectionProduct categories={categories} />
            </Col>
          )}

          {categories && (
            <Col span={24}>
              <ProductShow categories={categories} />
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
}
