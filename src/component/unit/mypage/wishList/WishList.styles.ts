import styled from "@emotion/styled";
import { LeftOutlined, RightOutlined, SearchOutlined } from "@ant-design/icons";

export const PurchaseHistoryBox = styled.div`
  width: 86%;
  margin-left: 5.4%;
`;
export const HistoryText = styled.div`
  width: 100%;
  padding-bottom: 2.6%;
  border-bottom: 1px solid #aaaaaa;
  font-size: 1.6rem;
  /* font-family: NotoSansKR-Medium */ ;
`;

export const PurchasedItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.9% 0;
  border-bottom: 1px solid #aaaaaa;
`;

export const PurchasedItemInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProductImg = styled.img`
  width: 28%;
`;

export const PurchasedItemInfoText = styled.div`
  margin: 4.5% 0 0 8.5%;
`;

export const ItemName = styled.div`
  font-size: 1.3rem;
  padding-bottom: 5%;
`;

export const ItemPriceBox = styled.div`
  font-size: 1rem;
  color: #969696;

  & > span:first-child {
    font-size: 1.1rem;
    color: #222222;
    border-right: 1px solid #707070;
    /* padding-right: 20px; */
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
  width: 50%;
`;

export const RepurchaseBtn = styled.button`
  display: block;
  width: 18%;
  padding: 1.5%;
  background: none;
  border: 1px solid #b7b7b7;
  font-size: 1.1rem;
  color: #222222;
  /* font-family: NotoSansKR-Medium */
  cursor: pointer;
`;

export const ListPagenation = styled.div`
  text-align: center;
  padding-top: 5%;
`;
export const Page = styled.span`
  margin: 0 1.5%;
  cursor: pointer;
`;

export const PageNationLeftArrow = styled(LeftOutlined)`
  cursor: pointer;
`;

export const PageNationRightArrow = styled(RightOutlined)`
  cursor: pointer;
`;
