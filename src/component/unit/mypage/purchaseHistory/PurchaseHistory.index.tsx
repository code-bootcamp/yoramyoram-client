import * as S from "./PurchaseHistory.styles";
import { RightOutlined } from "@ant-design/icons";

export default function PurchaseHistory() {
  const qqq = [1, 2, 3, 4, 5, 6];

  return (
    <S.PurchaseHistoryBox>
      <S.HistoryText>구매내역</S.HistoryText>
      {qqq.map((el, idx) => (
        <S.PurchasedItem key={idx}>
          <S.PurchasedItemInfo>
            <S.ProductImg src="/productDetail/purchase.png" />
            <S.PurchasedItemInfoText>
              <S.ItemName>구르미 텀블러</S.ItemName>
              <S.ItemPriceBox>
                <span>6,510원</span> <span>2022-12-26</span>
              </S.ItemPriceBox>
            </S.PurchasedItemInfoText>
          </S.PurchasedItemInfo>
          <S.RepurchaseDiv>
            <S.RepurchaseBtn>재구매</S.RepurchaseBtn>
          </S.RepurchaseDiv>
        </S.PurchasedItem>
      ))}
      <S.ListPagenation>
        <S.PageNationLeftArrow />
        <S.Page>1</S.Page>
        <S.Page>2</S.Page>
        <S.Page>3</S.Page>
        <S.Page>4</S.Page>
        <S.Page>5</S.Page>
        <S.PageNationRightArrow />
      </S.ListPagenation>
    </S.PurchaseHistoryBox>
  );
}
