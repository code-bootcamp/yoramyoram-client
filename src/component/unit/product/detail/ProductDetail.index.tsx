import * as S from "./ProductDetail.styles";
import { FETCH_PRODUCT } from "../../../commons/hooks/queries/useFetchProduct";
import {
  HeartFilled,
  HeartOutlined,
  MinusOutlined,
  PlusOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { CloseOutlined } from "@ant-design/icons";
import { MouseEvent, useEffect, useState, ChangeEvent } from "react";
import SwiperImg from "./SwiperImg";
import ProductReview from "./productReview/ProductReview.index";
import ProductDetailInfo from "./productDetailInfo/ProductDetailInfo.index";
import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationAddWishlistArgs,
  IMutationCreateProductCartArgs,
  IMutationDeleteProductArgs,
  IQuery,
  IQueryFetchCommentsCountArgs,
  IQueryFetchProductArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { PriceReg } from "../../../../commons/library/util";
import { FETCH_LOGIN_USER } from "../../../commons/hooks/queries/useFetchLoginUser";
import { FormOutlined } from "@ant-design/icons";
import { ADD_WISHLIST } from "../../../commons/hooks/mutation/useAddWishlist";
import { CREATE_PRODUCT_CART } from "../../../commons/hooks/mutation/useCreateProductCart";
import { Modal } from "antd";
import { useMoveToPage } from "../../../commons/custom/useMoveToPage";
import { useRecoilState } from "recoil";
import { isSelectedOption } from "../../../../commons/stores";
import { DELETE_PRODUCT } from "../../../commons/hooks/mutation/useDeleteProduct";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_COUNT,
} from "../../../commons/hooks/queries/useFetchProducts";
import {
  FETCH_PRODUCTS_CART,
  FETCH_PRODUCTS_CART_COUNT,
  FETCH_PRODUCTS_CART_TOTAL_AMOUNT,
} from "../../../commons/hooks/queries/useFetchProductCart";
import { FETCH_MY_WISHLIST } from "../../../commons/hooks/queries/useFetchmyWishlist";
import { FETCH_COMMENTS_COUNT } from "./productReview/ProductReview.queries";

//
export default function ProductDetail() {
  const [isSelected, setIsSelected] = useState("");
  const [isSelectedTwo, setIsSelectedTwo] = useState("");
  const [getOption, setGetOption] = useState("");
  const [getOptionTwo, setGetOptionTwo] = useState("");

  useEffect(() => {
    if (data === undefined) return;
    setGetOption(String(data?.fetchProduct?.etc1Name));
    setGetOptionTwo(String(data?.fetchProduct?.etc2Name));

    if (getOption === "selectOption1") setIsGetOption(false);
    if (getOptionTwo === "selectOption2") setIsGetOptionTwo(false);
    // console.log(isGetOption);
    // console.log(isGetOptionTwo);
    // console.log(getOptionTwo);
    // console.log(data?.fetchProduct?.etc1Name);
    // console.log(data?.fetchProduct?.etc2Name);
  });
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setIsSelected(e?.target.value);
  };
  const handleSelectTwo = (e: ChangeEvent<HTMLSelectElement>) => {
    setIsSelectedTwo(e.target.value);
  };
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [admin, setAdmin] = useState<string>("");
  const { data: user } = useQuery(FETCH_LOGIN_USER); // role이 관리자일때만 버튼보이게 ㄱㄱ
  useEffect(() => {
    setAdmin(user?.fetchLoginUser?.role);
  }, [user]);
  const { data } = useQuery<
    Pick<IQuery, "fetchProduct">,
    IQueryFetchProductArgs
  >(FETCH_PRODUCT, {
    variables: {
      productId: String(router.query.productId),
    },
  });
  const [addWishlist] = useMutation<
    Pick<IMutation, "addWishlist">,
    IMutationAddWishlistArgs
  >(ADD_WISHLIST);

  const [createProductCart] = useMutation<
    Pick<IMutation, "createProductCart">,
    IMutationCreateProductCartArgs
  >(CREATE_PRODUCT_CART);

  const [deleteProduct] = useMutation<
    Pick<IMutation, "deleteProduct">,
    IMutationDeleteProductArgs
  >(DELETE_PRODUCT);

  const { data: dataCommentsCount } = useQuery<
    Pick<IQuery, "fetchCommentsCount">,
    IQueryFetchCommentsCountArgs
  >(FETCH_COMMENTS_COUNT, {
    variables: {
      productId: String(router.query.productId),
    },
  });

  const onClickCart = async () => {
    if (!user) return Modal.warning({ content: "로그인해주세요!" });

    try {
      if (isGetOption === true && isGetOptionTwo === true) {
        if (isSelected?.length !== 0 && isSelectedTwo?.length !== 0) {
          await createProductCart({
            variables: {
              productId: String(router.query.productId),
              etc1Value: isSelected,
              etc2Value: isSelectedTwo,
              quantity: count,
            },
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
          return Modal.success({ content: "장바구니에 상품을 담았습니다!" });
        } else {
          return Modal.error({ content: "옵션을 선택해주세요." });
        }
      } else if (isGetOption === true) {
        if (isSelected?.length !== 0) {
          await createProductCart({
            variables: {
              productId: String(router.query.productId),
              etc1Value: isSelected,
              etc2Value: isSelectedTwo,
              quantity: count,
            },
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
          return Modal.success({ content: "장바구니에 상품을 담았습니다!" });
        } else {
          return Modal.error({ content: "옵션을 선택해주세요." });
        }
      } else if (isGetOption === false) {
        await createProductCart({
          variables: {
            productId: String(router.query.productId),
            etc1Value: isSelected,
            etc2Value: isSelectedTwo,
            quantity: count,
          },
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
      }
      return Modal.success({ content: "장바구니에 상품을 담았습니다!" });
    } catch (error) {
      Modal.error({ content: "장바구니에 상품을 담지 못했습니다." });
    }
  };

  const onClickSuccess = () => {
    Modal.success({
      content: "게시물이 삭제되었습니다!",
    });
  };

  const onClickNowBuy = async () => {
    if (!user) return Modal.warning({ content: "로그인 해주세요!" });

    try {
      if (isGetOption === true && isGetOptionTwo === true) {
        if (isSelected?.length !== 0 && isSelectedTwo?.length !== 0) {
          await createProductCart({
            variables: {
              productId: String(router.query.productId),
              etc1Value: isSelected,
              etc2Value: isSelectedTwo,
              quantity: count,
            },
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
          void router.push("/payment");
        } else {
          return Modal.error({ content: "옵션을 선택해주세요." });
        }
      } else if (isGetOption === true) {
        if (isSelected?.length !== 0) {
          await createProductCart({
            variables: {
              productId: String(router.query.productId),
              etc1Value: isSelected,
              etc2Value: isSelectedTwo,
              quantity: count,
            },
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
          void router.push("/payment");
        } else {
          return Modal.error({ content: "옵션을 선택해주세요." });
        }
      } else if (isGetOption === false) {
        await createProductCart({
          variables: {
            productId: String(router.query.productId),
            etc1Value: isSelected,
            etc2Value: isSelectedTwo,
            quantity: count,
          },
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
      }
      void router.push("/payment");
    } catch (error) {
      Modal.error({ content: "장바구니에 상품을 담지 못했습니다." });
    }
  };
  const onClickDelete = async (ev: MouseEvent<HTMLElement>) => {
    try {
      await deleteProduct({
        variables: {
          productId: ev.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_PRODUCTS,
            variables: {
              page: 1,
              cateId: "",
            },
          },
          {
            query: FETCH_PRODUCTS_COUNT,
            variables: {
              cateId: "",
            },
          },
          {
            query: FETCH_PRODUCTS_CART,
            variables: {
              page: 1,
            },
          },
          {
            query: FETCH_PRODUCTS_CART_COUNT,
          },
        ],
      });
      onClickSuccess();
      router.push("/products");
    } catch (error) {
      Modal.error({ content: "상품이 삭제되지 않았습니다!" });
    }
  };
  const onClickAddWishlist = async () => {
    if (!user) return Modal.warning({ content: "로그인해주세요!" });

    await addWishlist({
      variables: {
        createProductWishInput: {
          productId: String(router.query.productId),
        },
      },
      refetchQueries: [
        {
          query: FETCH_PRODUCT,
          variables: {
            productId: router.query.productId,
          },
        },
        {
          query: FETCH_MY_WISHLIST,
        },
      ],
    });
  };

  const [count, setCount] = useState(1);
  const [detailSelectBtn, setDetailSelectBtn] = useState<boolean>(true);
  const [selectInfoBtn, setSelectInfoBtn] = useState<boolean>(true);
  const [selectReviewBtn, setSelectReviewBtn] = useState<boolean>(false);
  const [isGetOption, setIsGetOption] = useState<boolean>(true);
  const [isGetOptionTwo, setIsGetOptionTwo] = useState<boolean>(true);
  const productPrice = data?.fetchProduct.price;
  const [price, setPrice] = useState(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (data === undefined) return;
    setPrice(data?.fetchProduct?.price);
    if (!data?.fetchProduct?.productWishlist[0]) return;
    else if (data?.fetchProduct?.productWishlist) {
      setIsActive(data?.fetchProduct?.productWishlist[0].isDib);
    }
  }, [data]);

  const onClickInfoBtn = () => {
    setDetailSelectBtn(true);
    setSelectInfoBtn(true);
    setSelectReviewBtn(false);
  };

  const onClickReviewBtn = () => {
    setDetailSelectBtn(false);
    setSelectReviewBtn(true);
    setSelectInfoBtn(false);
  };

  const onClickPlus = () => {
    setCount((prev) => prev + 1);
    if (productPrice !== undefined) {
      setPrice((prev) => prev + productPrice);
    }
  };

  const onClickMinus = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
    if (productPrice !== undefined) {
      setPrice((prev) =>
        prev > productPrice ? prev - productPrice : productPrice
      );
    }
  };

  const etcValue = data?.fetchProduct.etc1Value;
  const etcValueList = etcValue?.split(",");

  const etcValueTwo = data?.fetchProduct.etc2Value;
  const etcValueListTwo = etcValueTwo?.split(",");
  return (
    <>
      <S.Wrapper>
        <S.CategoryWrapper>
          <span>Home</span> <RightOutlined />
          <span>Shop</span> <RightOutlined />
          <span>{data?.fetchProduct.productCategory.category}</span>
        </S.CategoryWrapper>
        <S.DetailWrapper>
          <SwiperImg />
          <S.DetailPurchaseInfoWrapper>
            <S.RightNameBox>
              <S.NameBtnBox>
                <S.ProductName>{data?.fetchProduct.name}</S.ProductName>

                <S.ModifyBtnBox admin={admin}>
                  <FormOutlined
                    onClick={onClickMoveToPage(
                      `/products/${router.query.productId}/edit`
                    )}
                  />
                  <S.DeleteButton
                    id={data?.fetchProduct.product_id}
                    style={{ paddingLeft: "27px" }}
                    onClick={onClickDelete}
                  />
                </S.ModifyBtnBox>
              </S.NameBtnBox>
              <S.ProductPrice>
                {PriceReg(String(data?.fetchProduct.price))}원
              </S.ProductPrice>
            </S.RightNameBox>
            <S.ProductOptionBox>
              <S.ProductOptionText>
                {data?.fetchProduct.description}
              </S.ProductOptionText>
              {isGetOption ? (
                <S.OptionBox>
                  <S.OptionText>
                    {data?.fetchProduct.etc1Name === "color1"
                      ? "컬러"
                      : "사이즈"}
                  </S.OptionText>

                  <S.SelectBox onChange={handleSelect} value={isSelected}>
                    <option selected hidden>
                      옵션을 선택하세요.
                    </option>
                    {etcValueList?.map((el) => (
                      <option value={el}>{el}</option>
                    ))}
                  </S.SelectBox>
                </S.OptionBox>
              ) : (
                ""
              )}
              {isGetOptionTwo ? (
                <S.OptionBox>
                  <S.OptionText>
                    {data?.fetchProduct.etc2Name === "color2"
                      ? "컬러"
                      : "사이즈"}
                  </S.OptionText>

                  <S.SelectBox onChange={handleSelectTwo} value={isSelectedTwo}>
                    <option selected hidden>
                      옵션을 선택하세요.
                    </option>
                    {etcValueListTwo?.map((el) => (
                      <option value={el}>{el}</option>
                    ))}
                  </S.SelectBox>
                </S.OptionBox>
              ) : (
                ""
              )}
            </S.ProductOptionBox>

            <S.BuyAmount>
              <S.OptionText>{data?.fetchProduct.name}</S.OptionText>
              {isSelected ? (
                <S.SeletedOption>- {isSelected}</S.SeletedOption>
              ) : (
                ""
              )}
              {isSelectedTwo ? (
                <S.SeletedOption>- {isSelectedTwo}</S.SeletedOption>
              ) : (
                ""
              )}
              <S.SeletedAmountBox>
                <S.SeletedAmount1>
                  <S.SeletedAmount>
                    <button
                      onClick={onClickMinus}
                      style={{ cursor: "pointer" }}
                    >
                      <MinusOutlined />
                    </button>
                    <div>{count}</div>
                    <button onClick={onClickPlus}>
                      <PlusOutlined style={{ cursor: "pointer" }} />
                    </button>
                  </S.SeletedAmount>
                </S.SeletedAmount1>
                <S.TotalPrice>{PriceReg(String(price))}원</S.TotalPrice>
              </S.SeletedAmountBox>
            </S.BuyAmount>
            <S.TotalPriceBox>
              <S.TotalText>TOTAL</S.TotalText>
              <S.TotalPrice>
                {PriceReg(String(price))}원 <span>({count}개)</span>
              </S.TotalPrice>
            </S.TotalPriceBox>
            <div>
              <S.NowBuyBtn onClick={onClickNowBuy}>바로구매</S.NowBuyBtn>
              <S.BasketBtnBox>
                <button onClick={onClickCart}>장바구니</button>
                <button onClick={onClickAddWishlist}>
                  <S.WishListBtn>
                    {isActive ? (
                      <HeartFilled
                        style={{
                          fontSize: "26px",
                          color: isActive ? " #30640a" : "#ffffff",
                        }}
                      />
                    ) : (
                      <HeartOutlined
                        style={{
                          fontSize: "26px",
                          color: isActive ? "" : "#30640a",
                        }}
                      />
                    )}

                    <div>{data?.fetchProduct.wishListCount}</div>
                  </S.WishListBtn>
                </button>
              </S.BasketBtnBox>
            </div>
          </S.DetailPurchaseInfoWrapper>
        </S.DetailWrapper>
      </S.Wrapper>
      <S.BtnBox>
        <S.SelectBtn selectInfoBtn={selectInfoBtn} onClick={onClickInfoBtn}>
          상세정보
        </S.SelectBtn>
        <S.Select2Btn
          selectReviewBtn={selectReviewBtn}
          value="구매평"
          onClick={onClickReviewBtn}
        >
          {/* 구매평{`(${data?.fetchProduct?.commentCount})`} */}
          구매평{`(${dataCommentsCount?.fetchCommentsCount})`}
        </S.Select2Btn>
      </S.BtnBox>
      {detailSelectBtn ? (
        <ProductDetailInfo />
      ) : (
        <ProductReview data={data} user={user} />
      )}
    </>
  );
}
