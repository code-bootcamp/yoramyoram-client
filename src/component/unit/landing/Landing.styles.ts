import { DownOutlined } from "@ant-design/icons";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Slide } from "react-full-page";

export const Wrapper = styled.div`
  overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

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
`;

export const SlideFirst = styled(Slide)`
  position: relative;
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
