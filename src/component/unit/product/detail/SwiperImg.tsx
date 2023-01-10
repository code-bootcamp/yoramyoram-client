import React, { Dispatch, Fragment, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styled from "@emotion/styled";
import SwiperCore, { FreeMode, Navigation, Thumbs, Controller } from "swiper";
import * as mq from "../../../../commons/styles/mediaQueries";
import { FETCH_PRODUCT } from "../../../../component/commons/hooks/queries/useFetchProduct";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchProductArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";

const SwiperWrapper = styled(Swiper)`
  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    color: white;
    transform: scale(0.5);
  }

  .swiper-button-next,
  .swiper-rtl .swiper-button-prev {
    right: 10px;
    left: auto;
    color: white;
    transform: scale(0.5);
  }
  .swiper-slide,
  .swiper-slide.swiper-slide-thumb-active.swiper-slide-visible.swiper-slide-active {
    height: auto;
  }
`;

const ShowedSwiperWrapper = styled.div`
  width: 50%;
  .swiper-slide {
    height: auto;
    margin-bottom: 15px;
    cursor: pointer;
  }
  ${mq.mobile} {
    width: 100%;
    margin-bottom: 15px;
    .mySwiper {
      display: none;
    }
  }
  ${mq.mobileL} {
    width: 100%;
    .mySwiper {
      display: none;
    }
  }
  ${mq.tablet} {
    width: 45%;
  }
  ${mq.laptop} {
    width: 45%;
  }
`;

const MainImg = styled.img`
  width: 100%;
  height: 100%;
`;

const DetailSubImg = styled.img`
  width: 100%;
  height: 100%;
  margin: 16px 0 0;
  &:last-child {
    margin-right: 0;
  }
  object-fit: cover;
  cursor: pointer;
`;

export default function SwiperImg() {
  const router = useRouter();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  const { data } = useQuery<
    Pick<IQuery, "fetchProduct">,
    IQueryFetchProductArgs
  >(FETCH_PRODUCT, {
    variables: {
      productId: String(router.query.productId),
    },
  });
  const ProductImages = data?.fetchProduct.productImages;
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
        {ProductImages?.map((el, idx) => (
          <SwiperSlide>
            <MainImg
              key={idx}
              src={`https://storage.googleapis.com/${el.url}`}
            />
          </SwiperSlide>
        ))}
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
        {ProductImages?.map((el, idx) => (
          <SwiperSlide>
            <MainImg
              key={idx}
              src={`https://storage.googleapis.com/${el.url}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </ShowedSwiperWrapper>
  );
}
