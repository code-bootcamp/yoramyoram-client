import { DownOutlined, LeftOutlined } from "@ant-design/icons";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import * as mq from "../../../commons/styles/mediaQueries";

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

  margin-bottom: 9.8px;
  animation: ${SlideTop} 1.5s linear infinite both;
  & > svg {
    font-size: 30px;
  }
`;

export const Stxt = styled.p`
  font-size: 13px;
  font-family: "Poppins";
  color: #f2f2f2;
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
  ${mq.mobile} {
    width: 80%;
  }
  ${mq.mobileL} {
    width: 80%;
  }
  ${mq.tablet} {
    width: 80%;
  }
`;

export const VideoLargeText = styled.h1`
  font-size: 70px;
  font-family: "NewYork";
  margin-bottom: 15px;
  ${mq.tablet} {
    font-size: 60px;
  }
  ${mq.mobileL} {
    font-size: 45px;
  }
  ${mq.mobile} {
    font-size: 38px;
  }
`;

export const VideoSmallText = styled.h5`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.3;
  text-align: center;
  margin-bottom: 30px;
  font-family: "Noto Sans KR";
  ${mq.mobile} {
    & > br {
      display: none;
    }
  }
`;

export const MoreDetailBtn = styled.button`
  display: inline-block;
  font-size: 14px;
  font-weight: 300;
  text-transform: uppercase;
  color: #ffffff;
  background: none;
  border: none;
  cursor: pointer;
  font-family: "Poppins";
`;

export const WasteShopBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  ${mq.mobile} {
    display: block;
  }
  ${mq.mobileL} {
    display: block;
  }
`;

export const WasteShopImg = styled.img`
  width: 68%;
  object-fit: cover;
  ${mq.mobile} {
    width: 100%;
    height: 70%;
  }
  ${mq.mobileL} {
    width: 100%;
    height: 65%;
  }
`;

export const WasteShopTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 0 30px 100px 30px;
  background-color: #fcfbfa;
  width: 32%;
  ${mq.mobile} {
    width: 100%;
    height: 35%;
    justify-content: center;
    padding: 0 18px;
  }
  ${mq.mobileL} {
    width: 100%;
    height: 35%;
    justify-content: center;
    padding: 0 18px;
  }
`;

export const WasteShopText = styled.div`
  font-size: 40px;
  color: #30640a;
  font-family: "NewYork";
`;

export const WasteShopTextSmall = styled.div`
  font-size: 16px;
  color: #30640a;
  font-family: "Noto Sans KR";
  margin: 15px 0 30px 0;
  font-weight: 400;
  line-height: 1.3;
`;

export const WasteShopBtn = styled.button`
  width: 150px;
  padding: 10px;
  background: none;
  border: 1px solid #30640a;
  font-family: "Noto Sans KR";

  font-size: 16px;
  text-align: center;
  color: #30640a;
  transition: all 0.3s;
  & > span {
    padding-left: 5px;
  }
  &:hover {
    background-color: #30640a;
    color: #fcfbfa;
  }
  cursor: pointer;
`;

export const ProductBox = styled.div`
  max-width: 100%;
  margin: 0 auto;
  ${mq.mobile} {
    padding: 0 18px;
  }
  ${mq.mobileL} {
    padding: 0 18px;
  }
`;

export const ProductText = styled.div`
  text-align: center;
`;

export const ProductTitle = styled.div`
  font-size: 40px;
  color: #222222;
  font-family: "NewYork";
  margin-bottom: 15px;
`;

export const ProductSmall = styled.div`
  font-size: 16px;
  color: #222222;
  font-family: "Noto Sans KR";
  font-weight: 300;
  margin-bottom: 30px;
  line-height: 1.3;
  & > br {
    display: none;
  }
  ${mq.mobile} {
    & > br {
      display: block;
    }
  }
  ${mq.mobileL} {
    & > br {
      display: block;
    }
  }
`;
export const MoreBtn = styled.div`
  font-size: 15px;
  color: #222222;
  text-align: right;
  font-family: "Noto Sans KR";
  margin-bottom: 15px;
  & > span {
    margin-left: 5px;
  }
  cursor: pointer;
`;

export const SliderCustom = styled(Slider)`
  .slick-prev:before {
    color: black;
    opacity: 1;
    content: url("/landing/arrow-left.png");
    transform: scale(0.5);
    position: absolute;
    ${mq.mobile} {
      display: none;
    }
    ${mq.mobileL} {
      display: none;
    }
    ${mq.tablet} {
      display: none;
    }
  }
  .slick-next:before {
    color: black;
    opacity: 1;
    transform: scale(0.5);
    position: absolute;
    content: url("/landing/arrow-right.png");
    ${mq.mobile} {
      display: none;
    }
  }
  .slick-prev {
    left: -3%;
    top: 30%;
    z-index: 9;
    font-size: 10px;
  }
  .slick-next {
    right: -1%;
    top: 30%;
    z-index: 9;
    font-size: 0.6rem;
  }
`;
export const SlideBox = styled.div``;
export const ProductImg = styled.img`
  width: 90%;
  height: 100%;
  object-fit: cover;
  margin: 0 auto;
`;
export const ImgBox = styled.div`
  height: 292px;
  ${mq.mobile} {
    height: 153px;
  }
  ${mq.mobileL} {
    height: 153px;
  }
`;

export const InfoBox = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 15px;
`;

export const ProductInfo = styled.div`
  font-family: "Noto Sans KR";
  margin: 15px 0;
`;

export const Name = styled.p`
  font-size: 16px;
  color: #222222;
  font-weight: 400;
  margin-bottom: 8px;
  ${mq.mobile} {
    text-overflow: ellipsis;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
  }
  ${mq.mobileL} {
    text-overflow: ellipsis;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
  }
  ${mq.tablet} {
    text-overflow: ellipsis;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
  }
`;
export const Price = styled.p`
  font-size: 16px;
  color: #30640a;
  font-weight: 500;
`;

export const BuyBtn = styled.button`
  width: 45%;
  padding: 8px 10px;
  border: 1px solid #a0a0a0;
  color: #222;
  background-color: transparent;
  font-family: "Noto Sans KR";
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #30640a;
    color: #fcfbfa;
    border: none;
  }
  & > span {
    padding-left: 10px;
  }
  ${mq.mobile} {
    width: 100%;
  }
  ${mq.mobileL} {
    width: 100%;
  }
  ${mq.tablet} {
    width: 100%;
  }
`;

export const ReviewSlide = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/landing/white-paper-texture-background.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mq.mobile} {
    padding: 0 18px;
  }
  ${mq.mobileL} {
    padding: 0 18px;
  }
`;

export const SwiperText = styled.div`
  font-size: 40px;
  color: #222222;
  font-family: "NewYork";
`;

export const SwiperWrapper = styled.div`
  padding-left: 15%;
  ${mq.mobile} {
    padding-left: 0;
  }
  ${mq.mobileL} {
    padding-left: 0;
  }
`;
export const SwiperContents = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;

export const SwiperImg = styled.img`
  margin-right: 30px;
  object-fit: cover;
  ${mq.mobile} {
    display: none;
  }
  ${mq.mobileL} {
    display: none;
  }
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
  font-size: 18px;
  line-height: 1.6;
  font-weight: 300;
  word-break: keep-all;
  color: #222222;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  font-family: "Noto Sans KR";
  ${mq.mobile} {
    font-size: 15px;
  }
  ${mq.mobileL} {
    font-size: 15px;
  }
  ${mq.tablet} {
    font-size: 15px;
  }
  ${mq.laptop} {
    font-size: 15px;
  }
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
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${mq.mobile} {
    width: 80%;
  }
`;

export const YoramMemeber = styled.div`
  font-size: 45px;
  color: #222222;
  font-family: "NewYork";
`;

export const BeginYoram = styled.div`
  font-size: 16px;
  color: #222222;
  margin: 15px 0 30px 0;
  line-height: 1.3;
`;

export const BeginZeroBtn = styled.button`
  padding: 8px 10px;
  background-color: transparent;
  color: #222222;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #222;
  transition: all 0.3s;
  &:hover {
    background-color: #222;
    color: #fcfbfa;
  }
  & > span {
    margin-left: 10px;
  }
`;

export const CommentInfo = styled.div``;

export const ReviewContent = styled.p``;

export const CommentPrd = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #30640a;
  margin-bottom: 5px;
  background-color: transparent;
  display: inline-block;
  padding: 5px 12px;
  border-radius: 50px;
  border: 1px solid #30640a;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #30640a;
    color: #fcfbfa;
  }
`;
export const CommentUser = styled.p`
  font-size: 15px;
  color: #707070;
`;
