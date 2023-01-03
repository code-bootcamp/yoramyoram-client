import React, { Dispatch, Fragment, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styled from "@emotion/styled";
// import from "@tyles/react/index"

const SwiperWrapper = styled(Swiper)`
  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    color: white;
  }

  .swiper-button-next,
  .swiper-rtl .swiper-button-prev {
    right: 10px;
    left: auto;
    color: white;
  }
`;

import SwiperCore, { FreeMode, Navigation, Thumbs, Controller } from "swiper";

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
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  return (
    <ShowedSwiperWrapper>
      <SwiperWrapper
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
      </SwiperWrapper>
      <Swiper
        // onSwiper={(swiper) => console.log(swiper)}
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
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
