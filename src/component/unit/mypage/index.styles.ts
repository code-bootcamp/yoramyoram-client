import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import * as mq from "../../../commons/styles/mediaQueries";

export const Wrapper = styled.div`
  padding: 170px 0 170px;
  ${mq.mobile} {
    padding: 120px 18px;
  }
  ${mq.mobileL} {
    padding: 120px 18px;
  }
  ${mq.tablet} {
    padding: 120px 18px;
  }
`;

export const innerWrapper = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  ${mq.laptop} {
    max-width: 1000px;
  }
`;

export const MypageTitle = styled.div`
  font-size: 35px;
  color: #30640a;
  border-bottom: 3px solid #30640a;
  padding-bottom: 43px;
  font-family: "NewYork";
`;

export const MypageBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 26px;
  border-bottom: 1px solid #30640a;
  margin-bottom: 30px;
  ${mq.mobile} {
    display: block;
    padding: 20px;
  }
  ${mq.mobileL} {
    display: block;
    padding: 20px;
  }
`;
export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UserImgBox = styled.div`
  width: 20%;
  border: 1px solid #30640a;
  border-radius: 50%;
  padding: 10px;
  ${mq.mobile} {
    width: 25%;
  }
  ${mq.mobileL} {
    width: 25%;
  }
`;
export const MypageImg = styled.img`
  width: 100%;
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 49px;

  justify-content: center;
  font-family: "Noto Sans KR";
  ${mq.mobile} {
    padding-left: 20px;
  }
  ${mq.mobileL} {
    padding-left: 20px;
  }
`;

export const WelcomeText = styled.div`
  font-size: 22px;
  color: #222222;
  padding-bottom: 10px;
  & > span {
    font-weight: 600;
  }
  ${mq.mobile} {
    font-size: 18px;
  }
  ${mq.mobileL} {
    font-size: 18px;
  }
`;

export const RatingText = styled.div`
  & > p {
    margin-bottom: 6px;
    line-height: 1.3;
    word-break: keep-all;
  }

  ${mq.mobile} {
    font-size: 15px;
    & > p:nth-child(2) {
      display: none;
    }
  }
`;

export const PurposePoint = styled.span``;

export const Rating = styled.span`
  color: #30640a;
`;

export const RightTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > p {
    display: none;
  }
`;

export const MobileDiv = styled.div`
  ${mq.mobile} {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
  }
  ${mq.mobileL} {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
  }
`;

export const RightPointText = styled.div`
  font-family: "Poppins";
  padding-bottom: 10px;
  ${mq.mobile} {
    padding-bottom: 0;
  }
  ${mq.mobileL} {
    padding-bottom: 0;
  }
`;

export const AccumulatePoint = styled.span`
  font-family: "Noto Sans KR";
  font-size: 25px;
  font-weight: 500;
  margin-right: 5px;
  ${mq.mobile} {
    font-size: 18px;
  }
  ${mq.mobileL} {
    font-size: 18px;
  }
`;

export const ContentsBox = styled.div`
  padding-top: 76px;
  /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px; */
  ${mq.mobile} {
    display: block;
    padding-top: 0px;
  }
  ${mq.mobileL} {
    display: block;
    padding-top: 0px;
  }
`;

export const MyShopingSelectBox = styled.div`
  width: 203px;
  background-color: #30640a;
  height: fit-content;
  padding: 20px;
  position: sticky;
  top: 100px;
  ${mq.mobile} {
    width: 100%;
    padding: 10px;
    position: inherit;
  }
  ${mq.mobileL} {
    width: 100%;
    padding: 10px;
    position: inherit;
  }
`;

export const SelectBoxText = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #edebe7;
  padding-bottom: 20px;
  font-family: "Noto Sans KR";
  ${mq.mobile} {
    display: none;
  }
  ${mq.mobileL} {
    display: none;
  }
`;
export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  ${mq.mobile} {
    flex-direction: row;
  }
  ${mq.mobileL} {
    flex-direction: row;
  }
`;
export const SelectBtn = styled.button`
  display: block;
  background: none;
  border: none;
  color: #edebe7;
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 5px;
  font-family: "Noto Sans KR";
  ${mq.mobile} {
    justify-content: center;
    border-right: 1px solid #fcfbfa;
    font-size: 16px;
    &:last-child {
      border-right: none;
    }
  }
  ${mq.mobileL} {
    justify-content: center;
    border-right: 1px solid #fcfbfa;
    font-size: 16px;
    &:last-child {
      border-right: none;
    }
  }
  & > span {
    ${mq.mobile} {
      display: none;
    }
    ${mq.mobileL} {
      display: none;
    }
  }
`;
