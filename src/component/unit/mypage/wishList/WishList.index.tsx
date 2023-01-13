import * as S from "./WishList.styles";
import { RightOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import { FETCH_MY_WISHLIST } from "../../../commons/hooks/queries/useFetchmyWishlist";
import { PriceReg } from "../../../../commons/library/util";

import { color } from "@mui/system";

export default function WishList() {
  const { data, fetchMore } =
    useQuery<Pick<IQuery, "fetchmyWishlist">>(FETCH_MY_WISHLIST);
  console.log(data?.fetchmyWishlist);

  return (
    <S.PurchaseHistoryBox title="위시리스트">
      <S.HistoryText>위시리스트</S.HistoryText>

      {data?.fetchmyWishlist?.map((el, idx) => (
        <S.PurchasedItem key={idx}>
          <S.PurchasedItemInfo>
            <S.ProductImg
              src={`https://storage.googleapis.com/${el.product.productImages[0]?.url}`}
            />
            <S.PurchasedItemInfoText>
              <S.ItemName>{el.product.name}</S.ItemName>
              <S.ItemPriceBox>
                <span>{PriceReg(String(el.product.price))} 원</span>
                <span></span>
              </S.ItemPriceBox>
              <S.RepurchaseBtnMob>구매</S.RepurchaseBtnMob>
              <S.RepurchaseBtnMob></S.RepurchaseBtnMob>
            </S.PurchasedItemInfoText>
          </S.PurchasedItemInfo>
          <S.RepurchaseDiv>
            <S.RepurchaseBtn>구매</S.RepurchaseBtn>
            <S.RepurchaseBtn>삭제</S.RepurchaseBtn>
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
