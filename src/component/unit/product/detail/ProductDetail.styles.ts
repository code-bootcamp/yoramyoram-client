import styled from "@emotion/styled";
import { Select } from "antd";

export const Wrapper = styled.main`
  max-width: 1300px;
  padding: 153px 0;
  margin: 0 auto;
`;

export const CategoryWrapper = styled.div`
  font-size: 0.9rem;
  color: #c4c4c4;
  font-family: "Noto Sans KR";

  & > span {
    padding: 0 13px 0 0;
  }
  & > span:last-child {
    color: #222222;
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 16px;
`;

// 오른쪽 박스
export const DetailPurchaseInfoWrapper = styled.div`
  max-width: 580px;
  width: 100%;
  font-family: "Noto Sans KR";
`;

export const RightNameBox = styled.div`
  border-bottom: 1px solid #e8e8e8;
`;

export const ProductName = styled.h5`
  color: #222222;
  font-size: 20px;
  font-weight: 400;
`;

export const ProductPrice = styled.p`
  color: #30640a;
  padding: 15px 0 30px 0;
  font-size: 20px;
  font-weight: 400;
`;

// 옵션박스
export const ProductOptionBox = styled.div`
  padding: 44px 0 27px;
  border-bottom: 1px solid #e8e8e8;
`;

export const ProductOptionText = styled.p`
  font-size: 15px;

  color: #222222;
`;

export const OptionBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 35px;
  font-size: 18px;
  color: #222222;
`;

export const OptionText = styled.p`
  font-size: 15px;
  color: #222222;
  font-weight: 500;
`;

export const SelectOption = styled(Select)`
  width: 80%;
  :where(.css-dev-only-do-not-override-9ntgx0).ant-select-single:not(
      .ant-select-customize-input
    )
    .ant-select-selector {
    height: 50px !important;
  }
  :where(.css-dev-only-do-not-override-9ntgx0).ant-select-single
    .ant-select-selector
    .ant-select-selection-placeholder {
    line-height: 50px !important;
  }
  :where(
      .css-dev-only-do-not-override-9ntgx0
    ).ant-select-single.ant-select-show-arrow
    .ant-select-selection-item {
    line-height: 50px !important;
  }
`;

// 수량박스
export const BuyAmount = styled.div`
  padding: 21px 0 17px;
  font-family: "Noto Sans KR";
  border-bottom: 1px solid #e8e8e8;
`;

export const SeletedOption = styled.p`
  font-size: 15px;
  color: #707070;
  padding: 4px 0 28px;
`;

export const SeletedAmountBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SeletedAmount1 = styled.div`
  display: flex;
  align-items: center;
  color: #8b8b8b;
`;

export const SeletedAmount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #222222;
  width: 175px;
  height: 38px;
  margin-right: 27px;
  font-family: "Noto Sans KR";
  font-size: 16px;
  & > button {
    background: none;
    border: none;
  }
`;

export const TotalPrice = styled.div`
  font-size: 22px;
  font-weight: 700;
  font-family: "Noto Sans KR";

  & > span {
    font-size: 16px;
    color: #707070;
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
`;

// 구매,장바구니,위시리스트
export const NowBuyBtn = styled.button`
  width: 100%;
  padding: 20px 0;
  color: #ffffff;
  background-color: #30640a;
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: 500;
  font-family: "Noto Sans KR";
`;

export const BasketBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  & > button {
    width: 283px;
    padding: 19px 0;
    background: none;
    border: 1px solid #b7b7b7;
    margin: 15px 15px 0 0;
    cursor: pointer;
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 16px;
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

export const BtnBox = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const SelectBtn = styled.button`
  width: 50%;
  /* padding: 1.8% 0; */
  padding: 23px;
  background: none;
  border: 1px solid #b7b7b7;
  cursor: pointer;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: 500;
`;
