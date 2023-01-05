import styled from "@emotion/styled";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import * as mq from "../../../../commons/styles/mediaQueries";

export const PurchaseHistoryBox = styled.div`
  width: 1070px;
  max-width: calc(100% - 203px);
  ${mq.mobile} {
    width: 100%;
    max-width: 100%;
    margin-top: 30px;
  }
  ${mq.mobileL} {
    width: 100%;
    max-width: 100%;
    margin-top: 30px;
  }
`;
export const HistoryText = styled.div`
  width: 100%;
  padding-bottom: 26px;
  border-bottom: 1px solid #aaaaaa;
  font-size: 26px;
  font-family: "Noto Sans KR";
  ${mq.mobile} {
    font-size: 18px;
  }
  ${mq.mobileL} {
    font-size: 18px;
  }
`;

export const PurchasedItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #aaaaaa;
`;

export const PurchasedItemInfo = styled.div`
  display: flex;
  gap: 20px;
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
  ${mq.mobile} {
    font-size: 16px;
  }
  ${mq.mobileL} {
    font-size: 16px;
  }
`;

export const ItemPriceBox = styled.div`
  color: #969696;

  & > span:first-child {
    font-size: 18px;
    color: #222222;
    border-right: 1px solid #707070;
    padding-right: 12px;
    ${mq.mobile} {
      font-size: 15px;
    }
    ${mq.mobileL} {
      font-size: 15px;
    }
  }

  & > span:last-child {
    padding-left: 12px;
    ${mq.mobile} {
      font-size: 15px;
    }
    ${mq.mobileL} {
      font-size: 15px;
    }
  }
`;

export const RepurchaseDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: end;
  ${mq.mobile} {
    display: none;
  }
  ${mq.mobileL} {
    display: none;
  }
`;

export const RepurchaseBtn = styled.button`
  display: block;
  width: 93px;
  padding: 7px;
  background: none;
  border: 1px solid #b7b7b7;
  font-size: 18px;
  color: #222222;
  font-family: "Noto Sans KR";
  cursor: pointer;
`;

export const RepurchaseBtnMob = styled.button`
  display: none;
  width: 80px;
  padding: 5px;
  background: none;
  border: 1px solid #b7b7b7;
  font-size: 14px;
  color: #222222;
  margin-top: 15px;
  cursor: pointer;
  ${mq.mobile} {
    display: block;
  }
  ${mq.mobileL} {
    display: block;
  }
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
