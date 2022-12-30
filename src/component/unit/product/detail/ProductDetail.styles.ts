import styled from "@emotion/styled";
import { Select } from "antd";

export const Wrapper = styled.main`
  width: 1300px;
  margin: 72px auto 124px;
`;

export const CategoryWrapper = styled.div`
  font-size: 0.9rem;
  color: rgb(196, 196, 196);
  /* font-family: NotoSansKR-Medium; */
  & > span:last-child {
    color: rgb(34, 34, 34);
  }

  * > svg {
    margin: 0px 13px;
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 17px;
`;

export const DetailImg = styled.section``;

export const DetailMainImg = styled.img`
  width: 100%;
  height: 640px;
  /* height: 34.6vw; */
  cursor: pointer;
`;

export const DetailSubImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const DetailSubImg = styled.img`
  width: 100%;
  height: 169px;
  margin: 14px 14px 0 0;
  &:last-child {
    margin-right: 0;
  }
  object-fit: cover;
  cursor: pointer;
`;
// 오른쪽 박스
export const DetailPurchaseInfoWrapper = styled.div`
  width: 42%;
  margin-left: 49px;
`;

export const RightNameBox = styled.div`
  font-size: 1.9rem;
  border-bottom: 1px solid rgb(196, 196, 196);
`;

export const ProductName = styled.div`
  color: rgb(34, 34, 34);
  /* font-family: NotoSansKR-Regular; */
`;

export const ProductPrice = styled.div`
  color: rgb(48, 100, 10);
  padding: 6px 0 34px;
  /* font-family: NotoSansKR-Bold; */
`;

// 옵션박스
export const ProductOptionBox = styled.div`
  padding: 44px 0 26px;
  border-bottom: 1px solid rgb(196, 196, 196);
`;

export const ProductOptionText = styled.div`
  font-size: 1.1rem;
  color: rgb(34, 34, 34);

  /* font-family: NotoSansKR-Regular; */
`;

export const OptionBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 35px;
  font-size: 1.1rem;
  color: rgb(34, 34, 34);
  /* font-family: NotoSansKR-Medium; */
`;

export const OptionText = styled.div`
  font-size: 1.1rem;
  color: rgb(34, 34, 34);
  /* font-family: NotoSansKR-Medium; */
`;

export const SelectOption = styled(Select)`
  width: 23vw;
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
  padding: 21px 0 17px;
  /* font-family: NotoSansKR-Regular; */
  border-bottom: 1px solid rgb(196, 196, 196);
`;

export const SeletedOption = styled.div`
  font-size: 1.1rem;
  color: rgb(112, 112, 112);
  /* font-family: NotoSansKR-Regular; */
  padding: 4px 0 28px;
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
  color: rgb(139, 139, 139);
`;

export const SeletedAmount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid rgb(34, 34, 34);
  width: 8.6vw;
  height: 4vh;
  margin-right: 27px;
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
    color: rgb(112, 112, 112);
    /* font-family: NotoSansKR-Medium; */
  }
`;

//총 가격 박스
export const TotalPriceBox = styled.div`
  padding: 28px 0 60px;
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
  height: 69px;
  color: #ffffff;
  background-color: rgb(48, 100, 10);
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
    height: 69px;
    background: none;
    border: 1px solid rgb(183, 183, 183);
    margin: 15px 15px 0 0;
    cursor: pointer;
  }

  & > button:last-child {
    margin: 15px 0 0 0;
  }

  & > button > div {
    font-size: 20px;
  }
`;

export const WishListBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
  height: 69px;
  background: ${(props) => (props.isActiveInfo ? "rgb(48,100,10)" : "none")};
  color: ${(props) => (props.isActiveInfo ? "#ffffff" : "none")};
  border: 1px solid rgb(183, 183, 183);
  cursor: pointer;
`;

export const WWW = styled.button`
  width: 50%;
  height: 69px;
  border: 1px solid rgb(183, 183, 183);
  cursor: pointer;
  background: ${(props) => (props.isActiveReview ? "rgb(48,100,10)" : "none")};
  color: ${(props) => (props.isActiveReview ? "#ffffff" : "none")};
`;
