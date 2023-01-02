import styled from "@emotion/styled";
import { Select } from "antd";

export const Wrapper = styled.main`
  width: 1300px;
  margin: 8% auto 6.5%;
`;

export const CategoryWrapper = styled.div`
  font-size: 0.9rem;
  color: #c4c4c4;
  /* font-family: NotoSansKR-Medium; */

  & > span {
    padding: 0 1% 0 0;
  }
  & > span:last-child {
    color: #222222;
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1.3%;
`;

export const DetailImg = styled.section``;

export const DetailMainImg = styled.img`
  width: 100%;
  /* height: 640px; */
  height: 33.3vw;
  // px로 잡으면 고정, 안주면 사이즈 안맞음
  cursor: pointer;
`;

export const DetailSubImgWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const DetailSubImg = styled.img`
  width: 100%;
  /* height: 169px; */
  height: 17vh;
  margin: 2% 2% 0 0;
  &:last-child {
    margin-right: 0;
  }
  object-fit: cover;
  cursor: pointer;
`;
// 오른쪽 박스
export const DetailPurchaseInfoWrapper = styled.div`
  width: 44%;
`;

export const RightNameBox = styled.div`
  font-size: 1.9rem;
  border-bottom: 1px solid #c4c4c4;
`;

export const ProductName = styled.div`
  color: #222222;
  /* font-family: NotoSansKR-Regular; */
`;

export const ProductPrice = styled.div`
  color: #30640a;
  /* padding: 6px 0 34px; */
  padding: 2% 0 7%;
  /* font-family: NotoSansKR-Bold; */
`;

// 옵션박스
export const ProductOptionBox = styled.div`
  /* padding: 44px 0 26px; */
  padding: 7.7% 0 4.7%;
  border-bottom: 1px solid #c4c4c4;
`;

export const ProductOptionText = styled.div`
  font-size: 1.1rem;
  color: #222222;

  /* font-family: NotoSansKR-Regular; */
`;

export const OptionBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* padding-top: 35px; */
  padding-top: 6.2%;
  font-size: 1.1rem;
  color: #222222;
  /* font-family: NotoSansKR-Medium; */
`;

export const OptionText = styled.div`
  font-size: 1.1rem;
  color: #222222;
  /* font-family: NotoSansKR-Medium; */
`;

export const SelectOption = styled(Select)`
  width: 77.2%;
  :where(.css-dev-only-do-not-override-acm2ia).ant-select-single:not(
      .ant-select-customize-input
    )
    .ant-select-selector {
    height: 6vh;
    color: transparent;
    text-shadow: 0 0 0 #2196f3;
  }

  :where(
      .css-dev-only-do-not-override-acm2ia
    ).ant-select-single.ant-select-show-arrow
    .ant-select-selection-item,
  :where(
      .css-dev-only-do-not-override-acm2ia
    ).ant-select-single.ant-select-show-arrow
    .ant-select-selection-placeholder {
    display: flex;
    color: black;
    font-size: 1.1rem;
    padding: 13px 16px 0 0;
    /* font-family: NotoSansKR-Medium; */
  }
`;

// 수량박스
export const BuyAmount = styled.div`
  /* padding: 21px 0 17px; */
  padding: 3.8% 0 3%;
  /* font-family: NotoSansKR-Regular; */
  border-bottom: 1px solid #c4c4c4;
`;

export const SeletedOption = styled.div`
  font-size: 1.1rem;
  color: #707070;
  /* font-family: NotoSansKR-Regular; */
  /* padding: 4px 0 28px; */
  padding: 1.5% 0 5%;
`;

export const SeletedAmountBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
// 리펙토링하자
export const Qqq = styled.div`
  display: flex;
  align-items: center;
  color: #8b8b8b;
`;

export const SeletedAmount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #222222;
  width: 8.6vw;
  height: 4vh;
  /* margin-right: 27px; */
  margin-right: 15%;
  & > button {
    background: none;
    border: none;
    font-size: 1rem;
    /* font-family: NotoSansKR-Light; */
  }

  & > div {
    font-size: 1.2rem;
    /* font-family: NotoSansKR-Medium; */
  }
`;

export const TotalPrice = styled.div`
  font-size: 1.3rem;
  /* font-family: NotoSansKR-Bold; */

  & > span {
    font-size: 1rem;
    color: #707070;
    /* font-family: NotoSansKR-Medium; */
  }
`;

//총 가격 박스
export const TotalPriceBox = styled.div`
  /* padding: 28px 0 60px; */
  padding: 5% 0 10.6%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalText = styled.div`
  font-size: 1.2rem;

  /* font-family: NotoSansKR-Medium; */
`;

// 구매,장바구니,위시리스트
export const NowBuyBtn = styled.button`
  width: 100%;
  /* height: 69px; */
  padding: 3.6% 0;
  color: #ffffff;
  background-color: #30640a;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  /* font-family: NotoSansKR-Medium; */
`;

export const BasketBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  & > button {
    width: 49%;
    padding: 3.3% 0;
    background: none;
    border: 1px solid #b7b7b7;
    margin: 2.7% 2.7% 0 0;
    cursor: pointer;
  }

  & > button:last-child {
    margin: 2.7% 0 0 0;
  }

  & > button > div {
    font-size: 1.2rem;
  }
`;

export const WishListBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* gap: 10px; */
  gap: 4%;
`;
//
export const BtnBox = styled.div`
  width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const SelectBtn = styled.button`
  width: 50%;
  padding: 1.8% 0;
  background: ${(props) => (props.isActiveInfo ? "#30640A" : "none")};
  color: ${(props) => (props.isActiveInfo ? "#ffffff" : "none")};
  border: 1px solid #b7b7b7;
  cursor: pointer;
`;

export const WWW = styled.button`
  width: 50%;
  padding: 1.8% 0;
  border: 1px solid #b7b7b7;
  cursor: pointer;
  background: ${(props) => (props.isActiveReview ? "#30640A" : "none")};
  color: ${(props) => (props.isActiveReview ? "#ffffff" : "none")};
`;
