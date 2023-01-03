import styled from "@emotion/styled";
import { LeftOutlined, RightOutlined, SearchOutlined } from "@ant-design/icons";

export const PurchaseHistoryBox = styled.div`
  max-width: 1029px;
  width: calc(100% - 203px);
`;
export const HistoryText = styled.div`
  width: 100%;
  padding-bottom: 26px;
  border-bottom: 1px solid #aaaaaa;
  font-size: 26px;
  font-family: "Noto Sans KR";
`;

export const PurchasedItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #aaaaaa;
`;

export const PurchasedItemInfo = styled.div`
  width: 285px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductImg = styled.img`
  width: 90px;
`;

export const PurchasedItemInfoText = styled.div`
  font-family: "Noto Sans KR";
`;

export const ItemName = styled.div`
  font-size: 20px;
  padding-bottom: 9px;
`;

export const ItemPriceBox = styled.div`
  font-size: 18px;
  color: #969696;

  & > span:first-child {
    font-size: 1.1rem;
    color: #222222;
    border-right: 1px solid #707070;
    padding-right: 12px;
  }

  & > span:last-child {
    padding-left: 12px;
  }
`;

export const RepurchaseDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: end;
`;

export const RepurchaseBtn = styled.button`
  display: block;
  width: 93px;
  padding: 7px;
  background: none;
  border: 1px solid #b7b7b7;
  font-size: 18px;
  color: #222222;
  /* font-family: NotoSansKR-Medium */
  cursor: pointer;
`;

export const ListPagenation = styled.div`
  text-align: center;
  padding-top: 50px;
`;
export const Page = styled.span`
  margin: 0 14px;
  cursor: pointer;
`;

export const PageNationLeftArrow = styled(LeftOutlined)`
  cursor: pointer;
`;

export const PageNationRightArrow = styled(RightOutlined)`
  cursor: pointer;
`;
