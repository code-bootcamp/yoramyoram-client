import React, { useEffect, useState, Component, MouseEvent } from "react";
import { FullPage, Slide } from "react-full-page";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
// import AOS from "aos";
import "aos/dist/aos.css";
import * as S from "./Landing.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { RightOutlined } from "@ant-design/icons";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import LayoutFooter from "../../commons/layout/footer/LayoutFooter.index";
import { useMoveToPage } from "../../commons/custom/useMoveToPage";
import {
  FETCH_PRODUCTS,
  useFetchProducts,
} from "../../commons/hooks/queries/useFetchProducts";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchProductsArgs,
} from "../../../commons/types/generated/types";
import { PriceReg } from "../../../commons/library/util";
import { useRouter } from "next/router";

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

const dummyData = new Array(10).fill(10);
// 임시용

export default function Landing() {
  const router = useRouter();
  const { data } = useFetchProducts();

  const { onClickMoveToPage } = useMoveToPage();
  const onClickMoveToDetail = (event: MouseEvent<HTMLButtonElement>) => {
    void router.push(`/products/${event.currentTarget.id}`);
  };
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    // AOS.init();
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 80px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      // 스크롤이 80px 미만일경우 false를 넣어줌
      setScroll(false);
    }
  };
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <S.Wrapper>
        <FullPage controlProps={controlsProps} {...slideDuration}>
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
                  Yoram Yoram은 한 번 사용한 자원을 내다버리는 쓰레기가
                  아니라&nbsp;
                  <br />
                  다음 단계 생산의 원료가 되도록 새로운 생산 및 소비시스템을
                  추구합니다.
                </S.VideoSmallText>
                <S.MoreDetailBtn onClick={onClickMoveToPage("/about")}>
                  More Details <RightOutlined />
                </S.MoreDetailBtn>
              </S.VideoPageTextBox>
            </S.SlideFirst>
          </Slide>
          <Slide>
            <S.WasteShopBox>
              <S.WasteShopImg src="/landing/recycle.png" />
              <S.WasteShopTextBox>
                <S.WasteShopText>Zero-Waste Shop</S.WasteShopText>
                <S.WasteShopTextSmall>
                  Yoram Yoram이 추천하는 제로웨이스트샵을 둘러보세요.
                </S.WasteShopTextSmall>
                <S.WasteShopBtn onClick={onClickMoveToPage("/offline_shop")}>
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
              maxWidth: "1300px",
              margin: "0 auto",
            }}
          >
            <S.ProductBox>
              <S.ProductText>
                <S.ProductTitle>Zero-Waste Products</S.ProductTitle>
                <S.ProductSmall>
                  제로 웨이스트 제품으로 <br />
                  초록색 소비를 시작해보세요.
                </S.ProductSmall>
              </S.ProductText>
              <div>
                <S.MoreBtn onClick={onClickMoveToPage("/products")}>
                  더 보기
                  <RightOutlined />
                </S.MoreBtn>
                <S.SliderCustom {...settings}>
                  {data?.fetchProducts.map((el, index) => (
                    <S.SlideBox key={el.product_id}>
                      <S.ImgBox>
                        <S.ProductImg
                          src={`https://storage.googleapis.com/${el.productImages[0]?.url}`}
                        />
                      </S.ImgBox>

                      <S.InfoBox>
                        <S.ProductInfo>
                          <S.Name>{el.name}</S.Name>
                          <S.Price>{PriceReg(String(el.price))}원</S.Price>
                        </S.ProductInfo>

                        <S.BuyBtn
                          id={el.product_id}
                          onClick={onClickMoveToDetail}
                        >
                          구매하러 가기
                          <RightOutlined />
                        </S.BuyBtn>
                      </S.InfoBox>
                    </S.SlideBox>
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
                    loop={true}
                    spaceBetween={40}
                    slidesPerView={1.8}
                    modules={[Autoplay]}
                    // onSlideChange={() => console.log("slide change")}
                    // onSwiper={(swiper) => console.log(swiper)}
                    autoplay
                    breakpoints={{
                      0: {
                        slidesOffsetBefore: 0,
                        slidesPerView: 1,
                        spaceBetween: 8,
                        centeredSlides: false,
                      },
                      500: {
                        slidesOffsetBefore: 16,
                        slidesPerView: 1,
                        spaceBetween: 8,
                        centeredSlides: false,
                      },
                      1024: {
                        slidesOffsetBefore: 16,
                        slidesPerView: 1.8,
                        spaceBetween: 40,
                        centeredSlides: false,
                      },
                    }}
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
                <S.BeginZeroBtn onClick={onClickMoveToPage("/join")}>
                  제로 웨이스트 라이프 시작하기
                  <RightOutlined />
                </S.BeginZeroBtn>
              </S.BrushText>
            </S.BrushBox>
          </Slide>
          <Slide className="footerSlide">
            <LayoutFooter />
          </Slide>
        </FullPage>
      </S.Wrapper>
    </>
  );
}
