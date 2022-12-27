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
  bottom: 10px;
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
  font-size: 99px;
  font-family: "NewYork";
`;

export const VideoSmallText = styled.div`
  font-size: 18px;
  text-align: center;
  margin-top: 13px;
  font-family: "NotoSans";
`;

export const MoreDetailBtn = styled.button`
  display: inline-block;
  font-size: 18px;
  color: #ffffff;
  background: none;
  border: none;
  margin-top: 18px;
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
  width: 67vw;
  height: 100vh;
  object-fit: cover;
`;

export const WasteShopTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 0 0 128px 41px;
`;

export const WasteShopText = styled.div`
  font-size: 2.8rem;
  color: rgb(48, 100, 10);
  font-family: "NewYork";
`;

export const WasteShopTextSmall = styled.div`
  width: 425px;
  height: 27px;
  font-size: 1.1rem;
  color: rgb(48, 100, 10);
  margin-top: 10px;
  font-family: "NotoSans";
`;

export const WasteShopBtn = styled.button`
  width: 130px;
  height: 46px;
  margin-top: 24px;
  background: none;
  border: 2px solid rgb(48, 100, 10);
  font-family: "NotoSans";

  font-size: 1.1rem;
  text-align: center;
  color: rgb(48, 100, 10);

  & > span {
    padding-left: 5px;
  }
  cursor: pointer;
`;

export const ProductBox = styled.div`
  width: 1300px;
  height: 622px;
  margin: 0 auto;
`;

export const ProductText = styled.div`
  text-align: center;
`;

export const ProductTitle = styled.div`
  font-size: 45px;
  color: rgb(34, 34, 34);
  margin-bottom: 10px;
  font-family: "NewYork";
`;

export const ProductSmall = styled.div`
  font-size: 1rem;
  color: rgb(34, 34, 34);
  margin-bottom: 31px;
  font-family: "NotoSans";
`;
export const MoreBtn = styled.div`
  font-size: 18px;
  color: rgb(34, 34, 34);
  text-align: end;
  font-family: "NotoSans";

  margin-bottom: 20px;
  & > span {
    margin-left: 8px;
  }
  cursor: pointer;
`;

export const SliderCustom = styled(Slider)`
  .slick-prev:before {
    color: black;
    opacity: 1;
    font-size: 10px;
    content: url("/landing/arrow-left.png");
  }
  .slick-next:before {
    color: black;
    opacity: 1;
    font-size: 10px;

    content: url("/landing/arrow-right.png");
  }
  .slick-prev {
    left: -75px;
    top: 130px;
    z-index: 9;
    font-size: 10px;
  }
  .slick-next {
    right: -46px;
    top: 130px;
    z-index: 9;
    font-size: 10px;
  }
`;

export const ProductImg = styled.img`
  width: 319px;
  height: 319px;
  object-fit: cover;
  margin-bottom: 20px;
`;
export const ProductInfo = styled.div`
  font-size: 18px;
  color: rgb(34, 34, 34);
  margin-bottom: 20px;
  font-family: "NotoSans";
`;

export const BuyBtn = styled.button`
  width: 145px;
  height: 40px;
  border: 1px solid rgb(160, 160, 160);
  color: rgba(255 255 255, 0);
  background: none;
  font-family: "NotoSans";

  & > span {
    padding-left: 15px;
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
  font-size: 45px;
  color: rgb(34, 34, 34);
  font-family: "NewYork";
`;

export const SwiperWrapper = styled.div`
  margin-left: 278px;
`;
export const SwiperContents = styled.div`
  margin-top: 32px;
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
  width: 669px;
  height: 401px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.51);
  font-size: 25px;
  color: rgb(34, 34, 34);
  padding: 50px 38px 39px;
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
  font-size: 45px;
  color: rgb(34, 34, 34);
  font-family: "NewYork";
`;

export const BeginYoram = styled.div`
  font-size: 18px;
  color: rgb(34, 34, 34);
  margin-top: 10px;
`;

export const BeginZeroBtn = styled.button`
  width: 276px;
  height: 46px;
  background-color: rgba(255, 255, 255, 0);
  color: rgb(34, 34, 34);
  font-size: 18px;
  cursor: pointer;
  margin-top: 17px;
`;
