import styled from "@emotion/styled";
//
export const Wrapper = styled.div`
  width: 716px;
  margin: 86px auto 174px;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 640px;
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
