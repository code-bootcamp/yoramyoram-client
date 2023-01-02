import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 13.5% 0 9.3%;
`;

export const innerWrapper = styled.div`
  margin: 0 auto;

  max-width: 1300px;
`;

export const MypageTitle = styled.div`
  font-size: 2.2rem;
  color: #30640a;
  border-bottom: 3px solid #30640a;
  padding-bottom: 3.3%;
  /* font-family: "NewYork-Regular"; */
`;

export const MypageBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2%;
  border-bottom: 1px solid #30640a;
`;
export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MypageImg = styled.img`
  width: 18.5%;
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 9%;
  justify-content: center;
`;

export const WelcomeText = styled.div`
  font-size: 1.6rem;
  color: #222222;
  /* font-family: NotoSansKR-Regular; */
  padding-bottom: 3.6%;
`;

export const RatingText = styled.div`
  /* font-family: NotoSansKR-Medium; */
  & > div:first-child {
    margin-bottom: 2%;
  }
`;

export const PurposePoint = styled.span`
  /* font-family: NotoSansKR-Medium; */
`;

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
  /* font-family: Poppins-Light; */
  font-size: 1rem;
  padding-bottom: 10%;
`;

export const AccumulatePoint = styled.span`
  /* font-family: NotoSansKR-Medium; */
  font-size: 1.7rem;
`;

export const ContentsBox = styled.div`
  /* padding: 76px 0 0 0; */
  padding-top: 6%;
  display: flex;
  flex-direction: row;
`;

export const MyShopingSelectBox = styled.div`
  width: 17.6%;
  background-color: #30640a;
  height: fit-content;
  padding: 1.6%;
`;

export const SelectBoxText = styled.div`
  font-size: 1.2rem;
  color: #edebe7;
  /* font-family: NotoSansKR-Medium */
  margin-bottom: 12.5%;
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
  font-size: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 3.1%;
`;
