import { DownOutlined, LeftOutlined } from "@ant-design/icons";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { url } from "inspector";
import { Slide } from "react-full-page";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";

export const Wrapper = styled.div``;

export const Scroll = styled.div`
  display: block;
  position: fixed;
  bottom: 3%;
  left: 50%;
  transform: translate(-50%, 0%);
  text-align: center;
  z-index: 2;
`;

const SlideTop = keyframes`
  0% {
  transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
  70% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-5px);
  }
  `;

export const Mouse = styled(DownOutlined)`
  filter: invert(0.8);

  margin-bottom: 10px;
  animation: ${SlideTop} 1.5s linear infinite both;
  & > svg {
    font-size: 2rem;
  }
`;

export const Stxt = styled.p`
  font-size: 0.8rem;
  font-family: "Poppins";
  color: #f2f2f2;
  font-family: "NotoSans";
`;

export const SlideFirst = styled.div`
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Video = styled.video`
  &::-webkit-media-controls-fullscreen-button {
    display: none !important;
  }
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export const VideoPageTextBox = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
`;

export const VideoLargeText = styled.div`
  font-size: 6.2rem;
  font-family: "NewYork";
`;

export const VideoSmallText = styled.div`
  font-size: 1.1rem;
  text-align: center;
  margin: 2% 0 3%;
  font-family: "NotoSans";
`;

export const MoreDetailBtn = styled.button`
  display: inline-block;
  font-size: 1.2rem;
  color: #ffffff;
  background: none;
  border: none;
  cursor: pointer;
  font-family: "NotoSans";
`;

export const WasteShopBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const WasteShopImg = styled.img`
  width: 68%;
  object-fit: cover;
`;

export const WasteShopTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 0 0 6.8% 2.2%;
`;

export const WasteShopText = styled.div`
  font-size: 2.8rem;
  color: #30640a;
  font-family: "NewYork";
`;

export const WasteShopTextSmall = styled.div`
  /* height: 27px; */
  padding: 3% 0 6%;
  font-size: 1.1rem;
  color: #30640a;
  font-family: "NotoSans";
`;

export const WasteShopBtn = styled.button`
  width: 31%;
  padding: 2% 0;
  background: none;
  border: 2px solid #30640a;
  font-family: "NotoSans";

  font-size: 1.1rem;
  text-align: center;
  color: #30640a;

  & > span {
    padding-left: 4%;
  }
  cursor: pointer;
`;

export const ProductBox = styled.div`
  /* width: 1300px; */
  width: 68.25%;
  margin: 0 auto;
`;

export const ProductText = styled.div`
  text-align: center;
`;

export const ProductTitle = styled.div`
  font-size: 2.8rem;
  color: #222222;
  font-family: "NewYork";
`;

export const ProductSmall = styled.div`
  font-size: 1rem;
  color: #222222;
  padding: 1% 0 2.4%;
  font-family: "NotoSans";
`;
export const MoreBtn = styled.div`
  font-size: 1.2rem;
  color: #222222;
  text-align: end;
  font-family: "NotoSans";

  padding-bottom: 1.2%;
  & > span {
    margin-left: 1%;
  }
  cursor: pointer;
`;

export const SliderCustom = styled(Slider)`
  .slick-prev:before {
    color: black;
    opacity: 1;
    font-size: 1rem;
    content: url("/landing/arrow-left.png");
  }
  .slick-next:before {
    color: black;
    opacity: 1;
    font-size: 1rem;

    content: url("/landing/arrow-right.png");
  }
  .slick-prev {
    left: -7%;
    top: 30%;
    z-index: 9;
    font-size: 10px;
  }
  .slick-next {
    right: -5%;
    top: 30%;
    z-index: 9;
    font-size: 0.6rem;
  }
`;

export const ProductImg = styled.img`
  width: 98%;
  height: 34vh;
  object-fit: cover;
`;
export const ProductInfo = styled.div`
  font-size: 1.2rem;
  color: #222222;
  padding: 6% 0;
  font-family: "NotoSans";
`;

export const BuyBtn = styled.button`
  width: 45%;
  padding: 3% 0;
  border: 1px solid #a0a0a0;
  color: rgba(255 255 255, 0);
  background: none;
  font-family: "NotoSans";

  & > span {
    padding-left: 11%;
  }
  cursor: pointer;
`;

export const ReviewSlide = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/landing/white-paper-texture-background.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SwiperText = styled.div`
  font-size: 2.8rem;
  color: #222222;
  font-family: "NewYork";
`;

export const SwiperWrapper = styled.div`
  padding-left: 15%;
`;
export const SwiperContents = styled.div`
  padding-top: 2%;
  display: flex;
  flex-direction: row;
`;

export const SwiperImg = styled.img`
  margin-right: 30px;
  object-fit: cover;
`;

export const SwiperContentWrapper = styled(Swiper)`
  width: 100%;
  display: flex;
  flex-direction: row;

  .swiper-scrollbar {
    background: #d6d6d6;
    border-radius: 2px;
    height: 5px;
    width: 200px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Reviews = styled(SwiperSlide)`
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.51);
  font-size: 1.6rem;
  color: #222222;
  padding: 4% 3% 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "NotoSans";
`;

export const BrushImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/landing/brush.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BrushBox = styled.div`
  position: relative;
  overflow: hidden;
`;

export const BrushText = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 35%;
  left: 38%;
  z-index: 1;
`;

export const YoramMemeber = styled.div`
  font-size: 2.8rem;
  color: #222222;
  font-family: "NewYork";
`;
/* width: 276px; */

export const BeginYoram = styled.div`
  font-size: 1.2rem;
  color: #222222;
  padding: 2.5% 0 4%;
`;

export const BeginZeroBtn = styled.button`
  width: 62%;
  padding: 2% 0;
  background-color: rgba(255, 255, 255, 0);
  color: #222222;
  font-size: 1.1rem;
  cursor: pointer;
`;
