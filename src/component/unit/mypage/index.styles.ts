import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 247px 0 170px;
`;

export const innerWrapper = styled.div`
  margin: 0 auto;
  max-width: 1300px;
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
`;
export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
`;

/// ///
export const MypageImg = styled.img`
  width: 100px;
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 49px;
  justify-content: center;
  font-family: "Noto Sans KR";
`;

export const WelcomeText = styled.div`
  font-size: 22px;
  color: #222222;
  padding-bottom: 10px;
  & > span {
    font-weight: 600;
  }
`;

export const RatingText = styled.div`
  & > div:first-child {
    margin-bottom: 6px;
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
`;

export const RightPointText = styled.div`
  font-family: "Poppins";
  padding-bottom: 10px;
`;

export const AccumulatePoint = styled.span`
  font-family: "Noto Sans KR";
  font-size: 25px;
  font-weight: 500;
  margin-right: 5px;
`;

export const ContentsBox = styled.div`
  padding-top: 76px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MyShopingSelectBox = styled.div`
  width: 203px;
  background-color: #30640a;
  height: fit-content;
  padding: 20px;
`;

export const SelectBoxText = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #edebe7;
  padding-bottom: 20px;
  font-family: "Noto Sans KR";
`;
export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
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
`;
