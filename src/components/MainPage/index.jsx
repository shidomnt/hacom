import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import SideBar from "./SideBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import CollectionProduct from "./ProductCollection";
import useApi from "../../hooks/useApi";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ProductSlideShow from "./ProductSlideShow";

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
                        xxl={16}
                        xl={16}
                        lg={16}
                        sm={24}
                        md={24}
                        xs={24}
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
                              <Link to="/">
                                <StyledImgContainer>
                                  <img src={src} alt="banner" />
                                </StyledImgContainer>
                              </Link>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </Col>
                      <Col span={8} xxl={8} xl={8} lg={8} sm={0} md={0} xs={0}>
                        <Row gutter={[6, 6]}>
                          {rightSlideBannerSrcList.map((src) => (
                            <Col span={24} key={src}>
                              <Link to="/">
                                <StyledImgContainer>
                                  <img src={src} alt="banner" />
                                </StyledImgContainer>
                              </Link>
                            </Col>
                          ))}
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={24} xxl={24} xl={24} lg={24} sm={0} md={0} xs={0}>
                    <Row gutter={6}>
                      {bottomSlideBannerSrcList.map((src) => (
                        <Col span={8} key={src}>
                          <Link to="/">
                            <StyledImgContainer>
                              <img src={src} alt="banner" />
                            </StyledImgContainer>
                          </Link>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={24} xxl={24} xl={24} lg={24} sm={0} md={0} xs={0}>
            <Row gutter={6}>
              {underSlideBannerSrcList.map((src) => (
                <Col span={6} key={src}>
                  <Link to="/">
                    <StyledImgContainer>
                      <img src={src} alt="banner" />
                    </StyledImgContainer>
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>

          {categories && (
            <Col span={24} xxl={24} xl={24} lg={24} sm={0} md={0} xs={0}>
              <CollectionProduct />
            </Col>
          )}

          {categories && (
            <Col span={24}>
              <ProductSlideShow categories={categories} />
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
}
