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
import { useEffect, useState } from "react";
import SwiperImg from "./SwiperImg";
import ProductReview from "./productReview/ProductReview.index";
import ProductDetailInfo from "./productDetailInfo/ProductDetailInfo.index";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchProductArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { PriceReg } from "../../../../commons/library/util";
import { map } from "jquery";
import { FETCH_LOGIN_USER } from "../../../commons/hooks/queries/useFetchLoginUser";
import { FormOutlined } from "@ant-design/icons";
//
export default function ProductDetail() {
  const [isSelected, setIsSelected] = useState("");

  const handleSelect = (e: any) => {
    setIsSelected(e.target.value);
  };
  const router = useRouter();
  const [admin, setAdmin] = useState<string>("");
  const { data: user } = useQuery(FETCH_LOGIN_USER); // role이 관리자일때만 버튼보이게 ㄱㄱ
  useEffect(() => {
    setAdmin(user?.fetchLoginUser?.role);
  }, []);
  const { data } = useQuery<
    Pick<IQuery, "fetchProduct">,
    IQueryFetchProductArgs
  >(FETCH_PRODUCT, {
    variables: {
      productId: String(router.query.productId),
    },
  });
  console.log(router.query.productId);
  console.log(data);

  const [count, setCount] = useState(1);
  const [isWishList, setIsWishList] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [detailSelectBtn, setDetailSelectBtn] = useState<boolean>(true);
  const [selectInfoBtn, setSelectInfoBtn] = useState<boolean>(true);
  const [selectReviewBtn, setSelectReviewBtn] = useState<boolean>(false);
  const productPrice = data?.fetchProduct.price;
  const [price, setPrice] = useState(0);
  useEffect(() => {
    if (data === undefined) return;
    setPrice(data?.fetchProduct?.price);
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

  const onClickWishList = () => {
    setIsWishList((prev) => !prev);
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

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const etcValue = data?.fetchProduct.etc1Value;
  const etcValueList = etcValue?.split(",");
  return (
    <>
      <S.Wrapper>
        <S.CategoryWrapper>
          <span>Home</span> <RightOutlined />
          <span>Shop</span> <RightOutlined />
          <span>주방</span>
        </S.CategoryWrapper>
        <S.DetailWrapper>
          <SwiperImg />
          <S.DetailPurchaseInfoWrapper>
            <S.RightNameBox>
              <S.NameBtnBox>
                <S.ProductName>{data?.fetchProduct.name}</S.ProductName>

                <S.ModifyBtnBox admin={admin}>
                  <FormOutlined />
                  <CloseOutlined style={{ paddingLeft: "27px" }} />
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
              <S.OptionBox>
                <S.OptionText>{data?.fetchProduct.etc1Name}</S.OptionText>

                <S.SelectBox onChange={handleSelect} value={isSelected}>
                  <option selected hidden>
                    옵션을 선택하세요.
                  </option>
                  {etcValueList?.map((el) => (
                    <option value={el}>{el}</option>
                  ))}
                </S.SelectBox>
              </S.OptionBox>
            </S.ProductOptionBox>

            <S.BuyAmount>
              <S.OptionText>{data?.fetchProduct.name}</S.OptionText>
              <S.SeletedOption>- {isSelected}</S.SeletedOption>
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
              <S.NowBuyBtn>바로구매</S.NowBuyBtn>
              <S.BasketBtnBox>
                <button>장바구니</button>
                <button onClick={onClickWishList}>
                  {isWishList ? (
                    <S.WishListBtn>
                      <HeartFilled
                        style={{ fontSize: "26px", color: " #30640a" }}
                      />
                      <div>16</div>
                    </S.WishListBtn>
                  ) : (
                    <S.WishListBtn>
                      <HeartOutlined
                        style={{ fontSize: "26px", color: " #30640a" }}
                      />
                      <div>16</div>
                    </S.WishListBtn>
                  )}
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
          구매평(41)
        </S.Select2Btn>
      </S.BtnBox>
      {detailSelectBtn ? <ProductDetailInfo /> : <ProductReview />}
    </>
  );
}
