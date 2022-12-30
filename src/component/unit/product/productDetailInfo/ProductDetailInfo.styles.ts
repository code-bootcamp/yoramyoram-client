import styled from "@emotion/styled";
//
export const Wrapper = styled.div`
  width: 716px;
  margin: 86px auto 0;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 81.3vh;
  object-fit: cover;
`;
export const ProductInfoBox = styled.div`
  width: 31vw;
  word-break: keep-all;
  text-align: center;
  margin: 45px auto 0;
  /* font-family: NotoSansKR-Regular */
`;

export const ProductInfo = styled.div``;

export const CautionText = styled.div`
  width: 24vw;
  margin: 45px auto 0;
  word-break: keep-all;
  & > div {
    padding-bottom: 45px;
  }
  & > div:first-child {
    padding-bottom: 0;
  }
`;
