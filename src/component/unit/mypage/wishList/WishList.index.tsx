import * as S from "./WishList.styles";
import { RightOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function WishList() {
  const dummyData = new Array(6).fill(0);

  return (
    <S.PurchaseHistoryBox title="위시리스트">
      <S.HistoryText>위시리스트</S.HistoryText>
      {dummyData.map((el, idx) => (
        <S.PurchasedItem key={idx}>
          <S.PurchasedItemInfo>
            <S.ProductImg src="/productDetail/purchase.png" />
            <S.PurchasedItemInfoText>
              <S.ItemName>구르미 텀블러</S.ItemName>
              <S.ItemPriceBox>
                <span>6,510원</span> <span>옵션: 화이트</span>
              </S.ItemPriceBox>
              <S.RepurchaseBtnMob>구매</S.RepurchaseBtnMob>
            </S.PurchasedItemInfoText>
          </S.PurchasedItemInfo>
          <S.RepurchaseDiv>
            <S.RepurchaseBtn>구매</S.RepurchaseBtn>
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
