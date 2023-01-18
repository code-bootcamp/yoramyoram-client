import * as S from "./WishList.styles";

import { useMutation, useQuery } from "@apollo/client";
import { FETCH_PRODUCT } from "../../../commons/hooks/queries/useFetchProduct";
import {
  IMutation,
  IMutationAddWishlistArgs,
  IProductWishlist,
  IQuery,
  IQueryFetchmyWishlistArgs,
  IQueryFetchProductArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_MY_WISHLIST } from "../../../commons/hooks/queries/useFetchmyWishlist";
import { PriceReg } from "../../../../commons/library/util";
import { MouseEvent } from "react";
import { useRouter } from "next/router";
import InfiniteScrollPage from "../../../commons/infinite-scroll/02/InfiniteScroll.container";
import { ADD_WISHLIST } from "../../../commons/hooks/mutation/useAddWishlist";

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

  const [addWishlist] = useMutation<
    Pick<IMutation, "addWishlist">,
    IMutationAddWishlistArgs
  >(ADD_WISHLIST);

  const { data: _data } = useQuery<
    Pick<IQuery, "fetchProduct">,
    IQueryFetchProductArgs
  >(FETCH_PRODUCT, {
    variables: {
      productId: String(router.query.productId),
    },
  });
  // console.log(data?.fetchmyWishlist);

  const onClickMoveToDetail = (event: MouseEvent<HTMLButtonElement>) => {
    void router.push(`/products/${event.currentTarget.id}`);
  };

  const onClickAddWishlist = async (idx: number) => {
    await addWishlist({
      variables: {
        createProductWishInput: {
          productId: String(data?.fetchmyWishlist[idx].product.product_id),
        },
      },
      refetchQueries: [
        {
          query: FETCH_PRODUCT,
          variables: {
            productId: String(data?.fetchmyWishlist[idx].product.product_id),
          },
        },
        {
          query: FETCH_MY_WISHLIST,
          variables: {
            page: 1,
          },
        },
      ],
    });
  };

  return (
    <S.PurchaseHistoryBox title="위시리스트">
      <S.HistoryText>Wishlist</S.HistoryText>
      <InfiniteScrollPage fetchMore={fetchMore} data={data}>
        <>
          {data?.fetchmyWishlist?.map((el, idx) => (
            <S.PurchasedItem key={el.productwishlist_id}>
              <S.PurchasedItemInfo>
                <S.ProductImg
                  src={`https://storage.googleapis.com/${el.product.productImages[0]?.url}`}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "/noImage.png";
                  }}
                />
                <S.PurchasedItemInfoText>
                  <S.ItemName>{el.product.name}</S.ItemName>
                  <S.ItemPriceBox>
                    <span>{PriceReg(String(el.product.price))} 원</span>
                    <span></span>
                  </S.ItemPriceBox>
                  <S.RepurchaseDivMob>
                    <S.RepurchaseBtnMob
                      id={el?.product?.product_id}
                      onClick={onClickMoveToDetail}
                    >
                      구매
                    </S.RepurchaseBtnMob>
                    <S.RepurchaseBtnMob
                      id={el?.product?.product_id}
                      onClick={(e) => {
                        onClickAddWishlist(idx);
                      }}
                    >
                      삭제
                    </S.RepurchaseBtnMob>
                  </S.RepurchaseDivMob>
                </S.PurchasedItemInfoText>
              </S.PurchasedItemInfo>
              <S.RepurchaseDiv>
                <S.RepurchaseBtn
                  id={el?.product?.product_id}
                  onClick={onClickMoveToDetail}
                >
                  구매
                </S.RepurchaseBtn>
                <S.RepurchaseBtn
                  id={el?.product?.product_id}
                  onClick={(e) => {
                    onClickAddWishlist(idx);
                  }}
                >
                  삭제
                </S.RepurchaseBtn>
              </S.RepurchaseDiv>
            </S.PurchasedItem>
          ))}
        </>
      </InfiniteScrollPage>
    </S.PurchaseHistoryBox>
  );
}
