import styled from "@emotion/styled";
import * as mq from "../../../../../commons/styles/mediaQueries";
//
export const Wrapper = styled.div`
  max-width: 700px;
  margin: 80px auto;
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
  max-width: 1000px;
  word-break: keep-all;
  text-align: center;
  font-family: "Noto Sans KR";
  & > img {
    width: 100%;
    &:first-of-type {
      margin-top: 30px;
    }
  }
`;

export const ProductInfo = styled.div`
  line-height: 1.5;
  font-size: 17px;
`;
