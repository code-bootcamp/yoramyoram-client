import styled from "@emotion/styled";
import { Select } from "antd";
import * as mq from "../../../../commons/styles/mediaQueries";
import { CloseOutlined } from "@ant-design/icons";
export const Wrapper = styled.main`
  max-width: 1300px;
  padding: 153px 0;
  margin: 0 auto;
  ${mq.mobile} {
    padding: 120px 18px 60px 18px;
  }
  ${mq.mobileL} {
    padding: 120px 18px 60px 18px;
  }
  ${mq.tablet} {
    padding: 153px 18px 153px 18px;
  }
  ${mq.laptop} {
    max-width: 1000px;
  }
`;

export const CategoryWrapper = styled.div`
  font-size: 16px;
  color: #c4c4c4;
  font-family: "Noto Sans KR";
  cursor: default;

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
  gap: 60px;
  ${mq.tablet} {
    gap: 40px;
  }
  ${mq.mobile} {
    gap: 40px;
    display: block;
  }
  ${mq.mobileL} {
    gap: 40px;
    display: block;
  }
`;

// 오른쪽 박스
export const DetailPurchaseInfoWrapper = styled.div`
  width: 50%;
  font-family: "Noto Sans KR";
  ${mq.mobile} {
    width: 100%;
  }
  ${mq.mobileL} {
    width: 100%;
  }
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
  padding: 30px 0;
  border-bottom: 1px solid #e8e8e8;
`;

export const SelectBox = styled.select`
  width: 80%;
  height: 50px;
  outline: none;
  font-size: 15px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid #b7b7b7;
  background-color: transparent;
`;

export const ProductOptionText = styled.p`
  font-size: 15px;

  color: #222222;
  line-height: 1.5;
  word-break: keep-all;
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
  padding: 10px 0 0;
`;

export const SeletedAmountBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
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
  font-weight: 500;
  font-family: "Noto Sans KR";
  color: #30640a;

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
  ${mq.mobile} {
    padding: 15px 0;
    font-size: 16px;
  }
  ${mq.mobileL} {
    padding: 15px 0;
    font-size: 16px;
  }
`;

export const BasketBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-top: 15px;
  & > button {
    width: 50%;
    background: none;
    border: 1px solid #b7b7b7;
    cursor: pointer;
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 18px;
    padding: 15px 0;
    ${mq.mobile} {
      padding: 11px 0;
      font-size: 16px;
    }
    ${mq.mobileL} {
      padding: 11px 0;
      font-size: 16px;
    }
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
  & > span {
    margin-right: 5px;
  }
`;

export const BtnBox = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  ${mq.mobile} {
    padding: 0 18px;
  }
  ${mq.mobileL} {
    padding: 0 18px;
  }
  ${mq.tablet} {
    padding: 0 18px;
  }
  ${mq.laptop} {
    max-width: 1000px;
  }
`;

interface IProps {
  selectInfoBtn?: boolean;
  selectReviewBtn?: boolean;
}

export const SelectBtn = styled.button<IProps>`
  width: 50%;

  padding: 23px;
  background: none;
  border: 1px solid #b7b7b7;
  cursor: pointer;
  background-color: ${(props) => (props.selectInfoBtn ? "#30640a" : "none")};
  color: ${(props) => (props.selectInfoBtn ? "#ffffff" : "none")};
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: 500;
  ${mq.mobile} {
    font-size: 16px;
    padding: 10px;
  }
  ${mq.mobileL} {
    font-size: 16px;
    padding: 10px;
  }
  ${mq.tablet} {
    font-size: 16px;
    padding: 10px;
  }
`;

export const Select2Btn = styled.button<IProps>`
  width: 50%;

  padding: 23px;
  background: none;
  border: 1px solid #b7b7b7;
  cursor: pointer;
  background-color: ${(props) => (props.selectReviewBtn ? "#30640a" : "none")};
  color: ${(props) => (props.selectReviewBtn ? "#ffffff" : "none")};

  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: 500;
  ${mq.mobile} {
    font-size: 16px;
    padding: 10px;
  }
  ${mq.mobileL} {
    font-size: 16px;
    padding: 10px;
  }
  ${mq.tablet} {
    font-size: 16px;
    padding: 10px;
  }
`;

interface IAdmin {
  admin: string;
}

export const ModifyBtnBox = styled.div<IAdmin>`
  color: #8b8b8b;
  font-size: 20px;
  display: ${(props) => (props.admin === "ADMIN" ? "" : "none")};
  * > svg {
    cursor: pointer;
  }
`;

export const NameBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DeleteButton = styled(CloseOutlined)``;
