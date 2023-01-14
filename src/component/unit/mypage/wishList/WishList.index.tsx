import * as S from "./WishList.styles";

import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import { FETCH_MY_WISHLIST } from "../../../commons/hooks/queries/useFetchmyWishlist";
import { PriceReg } from "../../../../commons/library/util";
import { MouseEvent } from "react";
import { useRouter } from "next/router";

export default function WishList() {
  const router = useRouter();
  const { data, fetchMore } =
    useQuery<Pick<IQuery, "fetchmyWishlist">>(FETCH_MY_WISHLIST);
  console.log(data?.fetchmyWishlist);

  const onClickMoveToDetail = (event: MouseEvent<HTMLButtonElement>) => {
    void router.push(`/products/${event.currentTarget.id}`);
  };

  return (
    <S.PurchaseHistoryBox title="위시리스트">
      <S.HistoryText>위시리스트</S.HistoryText>
      {data?.fetchmyWishlist?.map((el, idx) => (
        <S.PurchasedItem key={el.productwishlist_id}>
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
            </S.PurchasedItemInfoText>
          </S.PurchasedItemInfo>
          <S.RepurchaseDiv>
            <S.RepurchaseBtn
              id={el?.product?.product_id}
              onClick={onClickMoveToDetail}
            >
              구매
            </S.RepurchaseBtn>
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
