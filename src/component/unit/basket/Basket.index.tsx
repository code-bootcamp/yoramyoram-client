import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";

import { optionName, PriceReg } from "../../../commons/library/util";
import {
  IMutation,
  IMutationDeleteProductCartArgs,
  IQuery,
  IQueryFetchProductCartArgs,
} from "../../../commons/types/generated/types";
import { useMoveToPage } from "../../commons/custom/useMoveToPage";

import { DELETE_PRODUCT_CART } from "../../commons/hooks/mutation/useDeleteProductsCart";
import {
  FETCH_PRODUCTS_CART,
  FETCH_PRODUCTS_CART_COUNT,
  FETCH_PRODUCTS_CART_TOTAL_AMOUNT,
} from "../../commons/hooks/queries/useFetchProductCart";
import InfiniteScrollPage from "../../commons/infinite-scroll/01/InfiniteScroll.container";
import * as S from "./Basket.styles";

export default function Basket() {
  const { onClickMoveToPage } = useMoveToPage();
  const [isGetOption, setIsGetOption] = useState<boolean>(false);
  const [isGetOptionTwo, setIsGetOptionTwo] = useState<boolean>(false);

  useEffect(() => {
    if (isGetOption !== false) {
      setIsGetOption(true);
    }
    if (isGetOptionTwo !== false) {
      setIsGetOptionTwo(true);
    }
  }, []);

  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchProductCart">,
    IQueryFetchProductCartArgs
  >(FETCH_PRODUCTS_CART, {
    variables: {
      page: 1,
    },
  });
  // console.log(data?.fetchProductCart[0].product.etc1Name);
  const [deleteProductCart] = useMutation<
    Pick<IMutation, "deleteProductCart">,
    IMutationDeleteProductCartArgs
  >(DELETE_PRODUCT_CART);

  const { data: dataProductsCartCount } = useQuery<
    Pick<IQuery, "fetchProductCartCount">
  >(FETCH_PRODUCTS_CART_COUNT);

  const { data: dataProductsCartTotalAmount } = useQuery<
    Pick<IQuery, "fetchProductCartTotalAmount">
  >(FETCH_PRODUCTS_CART_TOTAL_AMOUNT);

  const router = useRouter();

  const onClickMoveShopPage = () => {
    router.push("./products");
  };

  const result = data?.fetchProductCart.map((el) => {
    return Number(el.quantity) * Number(el.product.price);
  });

  const sum = result?.reduce((pv, av) => {
    return pv + av;
  }, 0);

  const onClickDeleteCart = async (ev: MouseEvent<HTMLButtonElement>) => {
    await deleteProductCart({
      variables: {
        productCartId: ev.currentTarget.id,
      },
      //FIXME: 2페이지에서 삭제하면 Refetch가 안됨
      refetchQueries: [
        {
          query: FETCH_PRODUCTS_CART,
          variables: {
            page: 1,
          },
        },
        {
          query: FETCH_PRODUCTS_CART_COUNT,
        },
        {
          query: FETCH_PRODUCTS_CART_TOTAL_AMOUNT,
        },
      ],
    });
  };

  return (
    <div style={{ backgroundColor: "#FCFBFA" }}>
      <S.Wrapper>
        <S.Title>Shopping Bag</S.Title>
        <S.FlexBoxWrap>
          <S.Left>
            <S.SubTitle>
              장바구니 상품 ({dataProductsCartCount?.fetchProductCartCount})
            </S.SubTitle>
            <InfiniteScrollPage
              fetchMore={fetchMore}
              data={data}
              // loader={<h4>Loading...</h4>}
            >
              <S.Table>
                <colgroup>
                  <col width="42%"></col>
                  <col width="10%"></col>
                  <col width="18%"></col>
                  <col width="18%"></col>
                  <col width="12%"></col>
                </colgroup>
                <S.Thead>
                  <S.Tr>
                    <S.Th>상품정보</S.Th>
                    <S.Th>수량</S.Th>
                    <S.Th>가격</S.Th>
                    <S.Th>총 가격</S.Th>
                    <S.Th>선택</S.Th>
                  </S.Tr>
                </S.Thead>

                {data?.fetchProductCart?.map((el, idx) => (
                  <S.Tr id={el.id} key={el.id}>
                    <S.PrdTd>
                      <S.ImgWrap>
                        <img
                          src={`https://storage.googleapis.com/${el.product.productImages[0]?.url}`}
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = "/noImage.png";
                          }}
                        />
                      </S.ImgWrap>
                      <S.PrdDetail>
                        <S.Name>{el.product.name}</S.Name>

                        <S.Option>
                          {`${optionName(el.product.etc1Name ?? "")}`}
                          {el.etc1Name !== "," && el.etc1Value
                            ? el.etc1Value
                            : ""}
                        </S.Option>
                        <S.Option>
                          {`${optionName(el.product.etc2Name ?? "")}`}
                          {el.etc2Value !== "," && el.etc2Value
                            ? el.etc2Value
                            : ""}
                        </S.Option>
                      </S.PrdDetail>
                    </S.PrdTd>
                    <S.Td>{el.quantity}</S.Td>
                    <S.Td>{PriceReg(String(el.product.price))}원</S.Td>
                    <S.Td>
                      {PriceReg(
                        String(Number(el.quantity) * Number(el.product.price))
                      )}
                      원
                    </S.Td>
                    <S.Td>
                      <S.Button id={el.id} onClick={onClickDeleteCart}>
                        삭제 ✕
                      </S.Button>
                    </S.Td>
                  </S.Tr>
                ))}
              </S.Table>
            </InfiniteScrollPage>
            {data?.fetchProductCart?.map((el, idx) => (
              <S.MobileList id={el.id} key={idx}>
                <S.PrdImg>
                  <img
                    src={`https://storage.googleapis.com/${el.product.productImages[0]?.url}`}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src = "/noImage.png";
                    }}
                  />
                </S.PrdImg>
                <S.PrdInfoWrap>
                  <S.PrdInfo>
                    <S.PrdName>{el.product.name}</S.PrdName>
                    <S.PrdOption>
                      {" "}
                      {optionName(el.product.etc1Name ?? "")}
                      {el.etc1Value}
                    </S.PrdOption>
                    <S.PrdOption>
                      {optionName(el.product.etc2Name ?? "")}
                      {el.etc2Value}
                    </S.PrdOption>
                    <S.Quantity>수량: {el.quantity}</S.Quantity>
                    <S.Price>가격: {el.product.price} 원</S.Price>
                    <S.Price>
                      총 가격:{" "}
                      {PriceReg(
                        String(Number(el.quantity) * Number(el.product.price))
                      )}{" "}
                      원
                    </S.Price>
                  </S.PrdInfo>
                  <S.Delete id={el.id} onClick={onClickDeleteCart}>
                    ✕
                  </S.Delete>
                </S.PrdInfoWrap>
              </S.MobileList>
            ))}

            <S.GoShop onClick={onClickMoveShopPage}>쇼핑 계속하기</S.GoShop>
          </S.Left>
          <S.Right>
            <S.RightTitle>주문금액</S.RightTitle>
            <S.PriceWrap>
              <S.PriceBox>
                <S.BoxTitle>총 결제 금액</S.BoxTitle>
                <S.SumPrice>
                  {PriceReg(
                    String(
                      dataProductsCartTotalAmount?.fetchProductCartTotalAmount
                    )
                  )}
                  <span>원</span>
                </S.SumPrice>
              </S.PriceBox>
              <S.PointBox>
                <S.PointTitle>적립예정 포인트</S.PointTitle>
                <S.Point>
                  {PriceReg(
                    String(
                      Number(
                        dataProductsCartTotalAmount?.fetchProductCartTotalAmount
                      ) * 0.1
                    )
                  )}
                  p
                </S.Point>
              </S.PointBox>
            </S.PriceWrap>
            <S.PayButton onClick={onClickMoveToPage("/payment")}>
              주문하기
            </S.PayButton>
            <S.MobileBtnWrap>
              <S.GoShopMob onClick={onClickMoveShopPage}>
                쇼핑 계속하기
              </S.GoShopMob>
              <S.PayButtonMob onClick={onClickMoveToPage("/payment")}>
                주문하기
              </S.PayButtonMob>
            </S.MobileBtnWrap>
          </S.Right>
        </S.FlexBoxWrap>
      </S.Wrapper>
    </div>
  );
}
