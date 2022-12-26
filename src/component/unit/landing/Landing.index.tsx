import React, { useEffect, useState } from "react";
import { FullPage, Slide } from "react-full-page";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import AOS from "aos";
import "aos/dist/aos.css";
import * as S from "./Landing.styles";

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

export default function Landing() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <S.Wrapper>
      <FullPage controlsProps={controlsProps} {...slideDuration}>
        <S.Scroll>
          <S.Mouse></S.Mouse>
          <S.Stxt>SCROLL</S.Stxt>
        </S.Scroll>
        <S.SlideFirst>
          <S.Video autoPlay loop muted src="/landing/ocean.mp4"></S.Video>
        </S.SlideFirst>
        <Slide>
          <div>
            <img src="/landing/recycle.png" alt="" />
            <div>qweqwe</div>
          </div>
        </Slide>
        <Slide>
          <div>asdasd</div>
        </Slide>
        <Slide>
          <div>asdasd</div>
        </Slide>
        <Slide>
          <div>asdasd</div>
        </Slide>
      </FullPage>
    </S.Wrapper>
  );
}
