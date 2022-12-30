import styled from "@emotion/styled";
import { LeftOutlined, RightOutlined, SearchOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100%;
`;

export const innerWrapper = styled.div`
  margin: 257px auto 0;
  width: 1300px;
`;

export const MypageTitle = styled.div`
  font-size: 2.2rem;
  color: rgb(48, 100, 21);
  border-bottom: 3px solid rgb(48, 100, 21);
  padding-bottom: 42px;
  /* font-family: "NewYork-Regular"; */
`;

export const MypageBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 26px;
  border-bottom: 1px solid rgb(48, 100, 21);
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
  padding-left: 48px;
  justify-content: center;
`;

export const WelcomeText = styled.div`
  font-size: 22px;
  color: rgb(34, 34, 34);
  /* font-family: NotoSansKR-Regular; */
  padding-bottom: 10px;
`;

export const RatingText = styled.div`
  /* font-family: NotoSansKR-Medium; */
`;

export const PurposePoint = styled.span`
  /* font-family: NotoSansKR-Medium; */
`;

export const Rating = styled.span`
  color: rgb(48, 100, 21);
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
  padding-bottom: 9px;
`;

export const AccumulatePoint = styled.span`
  /* font-family: NotoSansKR-Medium; */
  font-size: 1.7rem;
`;

export const ContentsBox = styled.div`
  padding: 76px 0 0 0;
  display: flex;
  flex-direction: row;
`;

export const MyShopingSelectBox = styled.div`
  width: 17.6%;
  background-color: rgb(48, 100, 21);
  height: fit-content;
  padding: 20px;
`;

export const SelectBoxText = styled.div`
  font-size: 1.2rem;
  color: rgb(242, 242, 242);
  /* font-family: NotoSansKR-Medium */
  margin-bottom: 20px;
`;
export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SelectBtn = styled.button`
  display: block;
  background: none;
  border: none;
  color: rgb(242, 242, 242);
  font-size: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 5px;
`;

export const PurchaseHistoryBox = styled.div`
  width: 86%;
  margin-left: 68px;
`;
export const HistoryText = styled.div`
  width: 100%;
  padding-bottom: 25.5px;
  border-bottom: 1px solid rgb(170, 170, 170);
  font-size: 1.6rem;
  /* font-family: NotoSansKR-Medium */ ;
`;

export const PurchasedItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 19px 0 19px;
  border-bottom: 1px solid rgb(170, 170, 170);
`;

export const PurchasedItemInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProductImg = styled.img`
  width: 90px;
`;

export const PurchasedItemInfoText = styled.div`
  padding: 12px 0 0 27px;
`;

export const ItemName = styled.div`
  font-size: 1.3rem;
  padding-bottom: 6px;
`;

export const ItemPriceBox = styled.div`
  font-size: 1rem;
  color: rgb(150, 150, 150);

  & > span:first-child {
    font-size: 1.1rem;
    color: rgb(34, 34, 34);
    border-right: 1px solid rgb(112, 112, 112);
    padding-right: 20px;
  }

  & > span:last-child {
    padding-left: 20px;
  }
`;

export const RepurchaseDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RepurchaseBtn = styled.button`
  display: block;
  width: 92px;
  height: 40px;
  background: none;
  border: 1px solid rgb(183, 183, 183);
  font-size: 1.1rem;
  color: rgb(34, 34, 34);
  /* font-family: NotoSansKR-Medium */
  cursor: pointer;
`;

export const PageNationLeftArrow = styled(LeftOutlined)`
  cursor: pointer;
`;

export const PageNationRightArrow = styled(RightOutlined)`
  cursor: pointer;
`;
export const ListPagenation = styled.div`
  text-align: center;
  gap: 28px;
  padding-top: 51px;
`;
export const Page = styled.span`
  margin: 0px 12px;
  cursor: pointer;
`;
