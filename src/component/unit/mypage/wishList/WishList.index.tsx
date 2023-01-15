import * as S from "./WishList.styles";

import { useQuery } from "@apollo/client";
import {
  IProductWishlist,
  IQuery,
  IQueryFetchmyWishlistArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_MY_WISHLIST } from "../../../commons/hooks/queries/useFetchmyWishlist";
import { PriceReg } from "../../../../commons/library/util";
import { MouseEvent } from "react";
import { useRouter } from "next/router";
import InfiniteScrollPage from "../../../commons/infinite-scroll/02/InfiniteScroll.container";

export default function WishList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchmyWishlist">,
    IQueryFetchmyWishlistArgs
  >(FETCH_MY_WISHLIST, {
    variables: {
      page: 1,
    },
  });

  console.log(data?.fetchmyWishlist);

  const onClickMoveToDetail = (event: MouseEvent<HTMLButtonElement>) => {
    void router.push(`/products/${event.currentTarget.id}`);
  };

  return (
    <S.PurchaseHistoryBox title="위시리스트">
      <S.HistoryText>위시리스트</S.HistoryText>
      <InfiniteScrollPage
        fetchMore={fetchMore}
        data={data}
        loder={<h4>Loading</h4>}
      >
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
      </InfiniteScrollPage>
    </S.PurchaseHistoryBox>
  );
}
