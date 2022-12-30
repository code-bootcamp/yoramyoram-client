import React, { useEffect, useState, Component } from "react";
import { FullPage, Slide } from "react-full-page";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import AOS from "aos";
import "aos/dist/aos.css";
import * as S from "./Landing.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { RightOutlined } from "@ant-design/icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import LayoutFooter from "../../commons/layout/footer/LayoutFooter.index";

const controlsProps = {
  style: {
    left: "50%",
    paddingTop: "10px",
    position: "fixed",
    transform: "translateX(-50%)",
  },
};

const slideDuration = {
  duration: 1200,
};

const qqq = [1, 2, 3, 4, 5, 6, 7, 78, 8, 0];
// 임시용

export default function Landing() {
  useEffect(() => {
    AOS.init();
  });
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <S.Wrapper>
        <FullPage controlsProps={controlsProps} {...slideDuration}>
          <S.Scroll>
            <S.Mouse></S.Mouse>
            <S.Stxt>SCROLL</S.Stxt>
          </S.Scroll>
          <Slide>
            <S.SlideFirst>
              <S.Video autoPlay loop muted>
                <source src="/landing/ocean.mp4" type="video/mp4" />
              </S.Video>
              <S.VideoPageTextBox>
                <S.VideoLargeText>Yoram to Yoram</S.VideoLargeText>
                <S.VideoSmallText>
                  Yoram Yoram은 한 번 사용한 자원을 내다버리는 쓰레기가 아니라
                  <br />
                  다음 단계 생산의 원료가 되도록 새로운 생산 및 소비시스템을
                  추구합니다.
                </S.VideoSmallText>
                <S.MoreDetailBtn>
                  More Details <RightOutlined />
                </S.MoreDetailBtn>
              </S.VideoPageTextBox>
            </S.SlideFirst>
          </Slide>
          <Slide>
            <S.WasteShopBox>
              <S.WasteShopImg src="/landing/recycle.png" />
              <S.WasteShopTextBox>
                <S.WasteShopText>Zero-Waste-Shop</S.WasteShopText>
                <S.WasteShopTextSmall>
                  Yoram Yoram이 추천하는 제로웨이스트샵을 둘러보세요.
                </S.WasteShopTextSmall>
                <S.WasteShopBtn>
                  샵 둘러보기
                  <RightOutlined />
                </S.WasteShopBtn>
              </S.WasteShopTextBox>
            </S.WasteShopBox>
          </Slide>
          <Slide
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <S.ProductBox>
              <S.ProductText>
                <S.ProductTitle>Zero-Waste Products</S.ProductTitle>
                <S.ProductSmall>
                  제로 웨이스트 제품으로 초록색 소비를 시작해보세요.
                </S.ProductSmall>
              </S.ProductText>
              <div>
                <S.MoreBtn>
                  더보기
                  <RightOutlined />
                </S.MoreBtn>
                <S.SliderCustom {...settings}>
                  {qqq.map((el, index) => (
                    <div key={index}>
                      <S.ProductImg src="https://image.kmib.co.kr/online_image/2018/0511/611819110012348069_1.jpg" />
                      <S.ProductInfo>
                        제품명
                        <br />
                        20000원
                      </S.ProductInfo>

                      <S.BuyBtn>
                        구매하러 가기
                        <RightOutlined />
                      </S.BuyBtn>
                    </div>
                  ))}
                </S.SliderCustom>
              </div>
            </S.ProductBox>
          </Slide>
          <Slide>
            <S.ReviewSlide>
              <S.SwiperWrapper>
                <S.SwiperText>Yoram members' Reviews</S.SwiperText>
                <S.SwiperContents>
                  <div>
                    <S.SwiperImg src="/landing/swiper.png" />
                  </div>
                  <S.SwiperContentWrapper
                    spaceBetween={40}
                    slidesPerView={1.8}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <S.Reviews>
                      제로웨이스트 제품 후기입니다. 제로웨이스트 제품 후기입
                      니다. 제로웨이스트 제품 후기입니다. 제로웨이스트 제품
                      후기입니다. 제로웨이스트 제품 후기입니다. 제로웨이스 트
                      제품 후기입니다. 제로웨이스트 제품 후기입니다.{" "}
                      <div>- yoram123 님</div>
                    </S.Reviews>
                    <S.Reviews>
                      제로웨이스트 제품 후기입니다. 제로웨이스트 제품 후기입
                      니다. 제로웨이스트 제품 후기입니다. 제로웨이스트 제품
                      후기입니다. 제로웨이스트 제품 후기입니다. 제로웨이스 트
                      제품 후기입니다. 제로웨이스트 제품 후기입니다.{" "}
                      <div>- yoram123 님</div>
                    </S.Reviews>
                    <S.Reviews>
                      제로웨이스트 제품 후기입니다. 제로웨이스트 제품 후기입
                      니다. 제로웨이스트 제품 후기입니다. 제로웨이스트 제품
                      후기입니다. 제로웨이스트 제품 후기입니다. 제로웨이스 트
                      제품 후기입니다. 제로웨이스트 제품 후기입니다.{" "}
                      <div>- yoram123 님</div>
                    </S.Reviews>
                    <S.Reviews>
                      제로웨이스트 제품 후기입니다. 제로웨이스트 제품 후기입
                      니다. 제로웨이스트 제품 후기입니다. 제로웨이스트 제품
                      후기입니다. 제로웨이스트 제품 후기입니다. 제로웨이스 트
                      제품 후기입니다. 제로웨이스트 제품 후기입니다.{" "}
                      <div>- yoram123 님</div>
                    </S.Reviews>
                  </S.SwiperContentWrapper>
                </S.SwiperContents>
              </S.SwiperWrapper>
            </S.ReviewSlide>
          </Slide>
          <Slide>
            <S.BrushBox>
              <S.Video autoPlay loop muted>
                <source src="/landing/zero.mp4" type="video/mp4" />
              </S.Video>
              <S.BrushText>
                <S.YoramMemeber>Be Yoram Member! </S.YoramMemeber>
                <S.BeginYoram>
                  요람요람과 함께 제로 웨이스트 라이프를 시작해 보세요.
                </S.BeginYoram>
                <S.BeginZeroBtn>
                  제로 웨이스트 라이프 시작하기
                  <RightOutlined />
                </S.BeginZeroBtn>
              </S.BrushText>
            </S.BrushBox>
          </Slide>
        </FullPage>
      </S.Wrapper>
    </>
  );
}
