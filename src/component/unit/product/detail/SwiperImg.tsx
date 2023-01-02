import React, { Fragment, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import styled from "@emotion/styled";

const ShowedSwiperWrapper = styled.div`
  max-width: 644px;
  width: 100%;
`;

const MainImg = styled.img`
  width: 100%;
`;

const DetailSubImg = styled.img`
  width: 100%;
  height: 17vh;
  margin: 6.5% 0 0;
  &:last-child {
    margin-right: 0;
  }
  object-fit: cover;
  cursor: pointer;
`;

export default function SwiperImg() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <ShowedSwiperWrapper>
      <Swiper
        style={{
          "--swiper-navigation-color": "white",
          "--swiper-pagination-color": "white",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <MainImg src="/productDetail/purchase.png" alt="상품이미지" />
        </SwiperSlide>
        <SwiperSlide>
          <MainImg src="/productDetail/purchase.png" alt="상품이미지" />
        </SwiperSlide>
        <SwiperSlide>
          <MainImg src="/productDetail/purchase.png" alt="상품이미지" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={15}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <DetailSubImg src="/productDetail/purchase.png" alt="상품이미지" />
        </SwiperSlide>
        <SwiperSlide>
          <DetailSubImg src="/productDetail/purchase.png" alt="상품이미지" />
        </SwiperSlide>
        <SwiperSlide>
          <DetailSubImg src="/productDetail/purchase.png" alt="상품이미지" />
        </SwiperSlide>
      </Swiper>
    </ShowedSwiperWrapper>
  );
}
