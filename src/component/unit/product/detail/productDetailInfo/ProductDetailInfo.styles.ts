import styled from "@emotion/styled";
import * as mq from "../../../../../commons/styles/mediaQueries";
//
export const Wrapper = styled.div`
  max-width: 700px;
  margin: 86px auto;
  ${mq.mobile} {
    padding: 0 18px;
    margin: 30px auto;
  }
  ${mq.mobileL} {
    padding: 0 18px;
    margin: 30px auto;
  }
  ${mq.tablet} {
    padding: 0 18px;
    margin: 30px auto;
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
export const ProductInfoBox = styled.div`
  max-width: 576px;
  word-break: keep-all;
  text-align: center;
  margin: 45px auto 0;
  font-family: "Noto Sans KR";
`;

export const ProductInfo = styled.div``;

export const CautionText = styled.div`
  max-width: 444px;
  margin: 45px auto 0;
  word-break: keep-all;
  & > div {
    padding-bottom: 45px;
  }
  & > div:first-child {
    padding-bottom: 0;
  }
`;
